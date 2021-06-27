import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Room, RoomStatus } from '../../models/Room';
import { roomService, contractService } from '../../services/index';
import { Contract, ContractCreateInput } from '../../models/Contract';
import { IRoomForm } from '../../pages/admin/RoomForm';

interface RoomState {
  roomSelected: Room | null | undefined;
  isFetching: boolean;
  roomList: Array<Room>;
  errorMessage: string;
}

const initialState = {
  isFetching: false,
  roomList: [],
  roomSelected: null,
  errorMessage: '',
} as RoomState;

export const getRoomList = createAsyncThunk(
  'room/get_room_list',
  async (body, thunkAPI) => {
    const roomList = await roomService.getRoomList();
    return roomList;
  },
);

export const createContract = createAsyncThunk(
  'contract/create',
  async (body: ContractCreateInput, thunkAPI) => {
    const contract = await contractService.createContract(body);
    return contract;
  },
);

export const createRoom = createAsyncThunk(
  'room/create',
  async (body: IRoomForm, thunkAPI) => {
    const room = await roomService.createRoom(body);
    return room;
  },
);

const { reducer, actions } = createSlice({
  name: 'room',
  initialState,
  reducers: {
    selectRoom: (state, action) => {
      if (state?.roomSelected?.roomId === action.payload) {
        return;
      }

      state.roomSelected = state.roomList.find(
        (room: Room) => room.roomId === action.payload,
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRoomList.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(getRoomList.fulfilled, (state, action) => {
        state.roomList = action.payload;
        state.isFetching = false;
      })
      .addCase(getRoomList.rejected, (state, action) => {
        state.isFetching = false;
        state.errorMessage = action.error.message!;
      })
      .addCase(createContract.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(createContract.fulfilled, (state, action) => {
        state.roomList = state.roomList.map((room: Room) => {
          if (room.roomId === state.roomSelected!.roomId) {
            room.status = RoomStatus.BOOKED;
          }
          return room;
        });

        state.isFetching = false;
      })
      .addCase(createRoom.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(createRoom.fulfilled, (state, action) => {
        state.isFetching = false;
        // state.roomList.push(action.payload);
      });
  },
});

export const { selectRoom } = actions;

export const roomSelector = (state) => state.room;

export default reducer;
