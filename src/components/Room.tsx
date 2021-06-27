import { Box, Text, Heading, Image, Button, Badge } from '@chakra-ui/react';
import React, { FC } from 'react';
import { StarIcon } from '@chakra-ui/icons';
import { RoomStatus } from '../models/Room';
import { formatToVnd } from '../utils/helper';

interface RoomProps {
  roomId?: string;
  price: number;
  image: string;
  name: string;
  description?: string;
  reviewCount?: number;
  rating: number;
  status?: RoomStatus;
  onSelectRoom: Function;
}

const Room: FC<RoomProps> = ({
  roomId,
  price,
  image,
  name,
  description = "Viet Nam's most international city",
  reviewCount = Math.floor(Math.random() * 100),
  rating,
  status,
  onSelectRoom,
}: RoomProps) => {
  return (
    <Box
      shadow="0px 2px 4px rgba(28, 5, 77, 0.1), 0px 12px 32px rgba(0, 0, 0, 0.05)"
      _hover={{
        shadow:
          '0px 4px 8px rgba(28, 5, 77, 0.1), 0px 18px 32px rgba(0, 0, 0, 0.05)',
      }}
      maxW="448px"
      minWidth="448px"
      height="auto"
      cursor="pointer"
      borderRadius="12px"
      overflow="hidden"
      mb="2em"
      onClick={() => onSelectRoom(roomId)}>
      <Image src={image} objectFit="cover" width="448px" height="432px" />

      <Box padding="1em 1.5em" paddingBottom="1.5em">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box maxW="210px">
            <Heading
              lineHeight="1.5em"
              fontSize="1.125em"
              fontWeight="semibold"
              color="#6E7491">
              {name}{' '}
              {/* <Text as="span" color="#605DEC">
                ShangHai
              </Text> */}
              <Badge
                ml="1"
                fontSize="0.8em"
                colorScheme={
                  status === RoomStatus.AVAILABLE ? 'green' : 'yellow'
                }>
                {status === RoomStatus.AVAILABLE ? 'Available' : 'Booked'}
              </Badge>
            </Heading>
            <Text mt="0.25em" color="#7C8DB0" fontWeight="normal">
              {description}
            </Text>
          </Box>

          <Text color="#434658" fontWeight="medium" fontSize="1.125em">
            {formatToVnd(price)}
          </Text>
        </Box>
        <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                mr="0.25em"
                color={i < rating ? '#605DEC' : 'gray.300'}
              />
            ))}
          <Box as="span" ml="2" color="#7C8DB0" fontSize="sm">
            {reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Room;
