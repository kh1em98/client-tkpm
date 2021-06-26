import { Heading, Box, Image, Text, Grid } from '@chakra-ui/react';
import React from 'react';
import AuthenticatedLayout from '../components/layouts/AuthenticatedLayout';
import RoomComponent from '../components/Room';
import shanghai from '../images/shanghai.png';
import sydney from '../images/sydney.png';
import kyoto from '../images/kyoto.png';
import world from '../images/world.svg';
import RatingPreview from './home/RatingPreview';
import useIsAuth from '../hooks/useIsAuth';
import { useAppSelector, useAppDispatch } from '../redux/store';
import { useEffect } from 'react';
import {
  getRoomList,
  roomSelector,
  selectRoom,
} from '../redux/slices/roomSlice';
import { Room } from '../models/Room';
import { useHistory } from 'react-router-dom';

export default function Home() {
  useIsAuth();
  const dispatch = useAppDispatch();
  const history = useHistory();

  const roomState = useAppSelector((state) => state.room);

  const selectRoomHandler = (id: number) => {
    dispatch(selectRoom(id));
    history.push('/contract');
  };

  useEffect(() => {
    if (roomState.roomList.length === 0) {
      dispatch(getRoomList());
    }
  }, []);

  return (
    <AuthenticatedLayout>
      <Image src={world} />

      <Box mt="1em">
        <Heading
          lineHeight="2em"
          fontSize="1.5em"
          fontWeight="bold"
          color="#6E7491">
          Find your next adventure with these
          <Text display="inline-block" ml="0.35em" color="#605DEC">
            booking deals
          </Text>
        </Heading>

        {roomState.isFetching ? (
          <h2>Loading....</h2>
        ) : (
          <Grid
            templateColumns="repeat(3, 1fr)"
            mt="1.5em"
            width="100%"
            gap="1.5em">
            {roomState.roomList.map((room: Room) => {
              return (
                <RoomComponent
                  id={room.id}
                  name={room.name}
                  price={room.price}
                  description={room.description}
                  image={room.image}
                  rating={room.rate}
                  status={room.status}
                  onSelectRoom={selectRoomHandler}
                />
              );
            })}
          </Grid>
        )}
      </Box>

      <RatingPreview />
    </AuthenticatedLayout>
  );
}
