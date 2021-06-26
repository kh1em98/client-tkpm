import { Box, Grid, Heading, Image, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AuthenticatedLayout from '../components/layouts/AuthenticatedLayout';
import RoomComponent from '../components/Room';
import useIsAuth from '../hooks/useIsAuth';
import world from '../images/world.svg';
import { Role } from '../models/Account';
import { Room } from '../models/Room';
import { getRoomList, selectRoom } from '../redux/slices/roomSlice';
import { useAppDispatch, useAppSelector } from '../redux/store';
import CreateRoom from './admin/CreateRoom';
import RatingPreview from './home/RatingPreview';

export default function Home() {
  useIsAuth();
  const dispatch = useAppDispatch();
  const history = useHistory();

  const roomState = useAppSelector((state) => state.room);
  const userState = useAppSelector((state) => state.user);

  if (userState.role === Role.ADMIN) {
    history.push('/admin/rooms');
  }

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
      {userState.role === Role.ADMIN ? (
        <CreateRoom />
      ) : (
        <>
          {' '}
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
        </>
      )}
    </AuthenticatedLayout>
  );
}
