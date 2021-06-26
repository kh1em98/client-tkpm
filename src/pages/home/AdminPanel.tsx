import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import RoomForm from './RoomForm';
import UploadImage from './UploadImage';

const AdminPanel = () => {
  return (
    <Box>
      <Heading
        lineHeight="2em"
        fontSize="1.5em"
        fontWeight="bold"
        color="#6E7491">
        As an admin, you can add more rooms to
        <Text display="inline-block" ml="0.35em" color="#605DEC">
          Booking
        </Text>
      </Heading>

      <RoomForm />
    </Box>
  );
};

export default AdminPanel;

// import { Box, Heading, Text, Grid } from '@chakra-ui/react';
// import React, { FC } from 'react';
// import { Room } from '../../models/Room';

// interface AdminPanelProps {
//   roomList: Room[];
// }

// const AdminPanel: FC<AdminPanelProps> = ({ roomList }) => {
//   return (
//     <Box>
//       <Heading
//         lineHeight="2em"
//         fontSize="1.5em"
//         fontWeight="bold"
//         color="#6E7491">
//         Find your next adventure with these
//         <Text display="inline-block" ml="0.35em" color="#605DEC">
//           booking deals
//         </Text>
//       </Heading>

//       {roomState.isFetching ? (
//         <h2>Loading....</h2>
//       ) : (
//         <Grid
//           templateColumns="repeat(3, 1fr)"
//           mt="1.5em"
//           width="100%"
//           gap="1.5em">
//           {roomState.roomList.map((room: Room) => {
//             return (
//               <RoomComponent
//                 id={room.id}
//                 name={room.name}
//                 price={room.price}
//                 description={room.description}
//                 image={room.image}
//                 rating={room.rate}
//                 status={room.status}
//                 onSelectRoom={selectRoomHandler}
//               />
//             );
//           })}
//         </Grid>
//       )}
//     </Box>
//   );
// };

// export default AdminPanel;
