import {
  Box,
  Grid,
  Heading,
  Image,
  Text,
  useAccordionDescendantsContext,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Router, useHistory } from 'react-router-dom';
import AuthenticatedLayout from '../../components/layouts/AuthenticatedLayout';
import RoomComponent from '../../components/Room';
import world from '../images/world.svg';
import { Role } from '../../models/Account';
import { Room } from '../../models/Room';
import { getRoomList, selectRoom } from '../../redux/slices/roomSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import CreateRoom from './CreateRoom';
import RatingPreview from '../home/RatingPreview';

export default function Rooms() {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const roomState = useAppSelector((state) => state.room);
  const userState = useAppSelector((state) => state.user);

  useEffect(() => {
    if (!userState.isFetching) {
      if (userState.role === Role.ADMIN) {
        dispatch(getRoomList());
      } else {
        history.push('/sign-in');
      }
    }
  }, [userState.role, userState.isFetching]);

  return (
    <AuthenticatedLayout>
      <Box mt="1em">
        <Heading
          lineHeight="2em"
          fontSize="1.5em"
          fontWeight="bold"
          color="#6E7491">
          List
          <Text display="inline-block" ml="0.35em" color="#605DEC">
            rooms
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
                  onSelectRoom={() => {}}
                />
              );
            })}
          </Grid>
        )}
      </Box>
    </AuthenticatedLayout>
  );
}
