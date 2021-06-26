import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { asyncSignOut } from '../../redux/slices/userSlice';
import { useAppDispatch } from '../../redux/store';

const AdminNavbar = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const signOutHandler = () => {
    dispatch(asyncSignOut());
    history.push('/sign-in');
  };

  return (
    <Box
      padding="1.2em 0em"
      display="flex"
      alignItems="center"
      justifyContent="space-between">
      <Heading
        fontSize="1.75em"
        color="#605DEC"
        fontWeight="bold"
        cursor="pointer">
        <Link to="/">Admin Panel</Link>
      </Heading>

      <Box display="flex" alignItems="center">
        <Text
          color="#407AEA"
          _hover={{ color: '#407AEA' }}
          cursor="pointer"
          mr="4em">
          <Link to="/admin/rooms">Rooms</Link>
        </Text>{' '}
        <Text
          color="#407AEA"
          _hover={{ color: '#407AEA' }}
          cursor="pointer"
          mr="4em">
          <Link to="/admin/create-room">Create room</Link>
        </Text>
        <Text
          color="#7C8DB0"
          _hover={{ color: '#407AEA' }}
          cursor="pointer"
          mr="4em">
          <Link to="/admin/contracts">Contracts</Link>
        </Text>
        <Button
          bg="#605DEC"
          _hover={{ bg: '#5452d1' }}
          color="FAFAFA"
          padding="0.75em 1.25em"
          onClick={signOutHandler}>
          <Text color="#FAFAFA" fontWeight="normal">
            Sign Out
          </Text>
        </Button>
      </Box>
    </Box>
  );
};

export default AdminNavbar;
