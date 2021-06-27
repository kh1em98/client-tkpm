import { Box, Grid, Heading, Image, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AuthenticatedLayout from '../components/layouts/AuthenticatedLayout';
import RoomComponent from '../components/Room';
import world from '../images/world.svg';
import { Role } from '../models/Account';
import { Room } from '../models/Room';
import { getRoomList, selectRoom } from '../redux/slices/roomSlice';
import { useAppDispatch, useAppSelector } from '../redux/store';
import CreateRoom from './admin/CreateRoom';
import RatingPreview from './home/RatingPreview';

export default function Home() {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const roomState = useAppSelector((state) => state.room);
  const userState = useAppSelector((state) => state.user);

  const selectRoomHandler = (id: number) => {
    dispatch(selectRoom(id));
    history.push('/contract');
  };

  useEffect(() => {
    if (!userState.isFetching) {
      if (userState.role === Role.ADMIN) {
        history.push('/admin/rooms');
      } else if (userState.role === Role.USER && userState.accountId) {
        dispatch(getRoomList());
      } else {
        history.push('/sign-in');
      }
    }
  }, [userState.role, userState.isFetching, userState.accountId]);

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

        {roomState.isFetching || userState.isFetching ? (
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
                  roomId={room.roomId}
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
