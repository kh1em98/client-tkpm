import { StarIcon } from '@chakra-ui/icons';
import { Avatar, Box, Heading, Text } from '@chakra-ui/react';
import React, { FC } from 'react'
import user2 from '../../images/user2.png';

interface RatingProps {
  image?: string;
  name?: string;
  room?: string;
  time?: string;
  review?: string;
}

const Rating: FC<RatingProps> = ({
  image = user2,
  name = "Khiem Nguyen",
  room = "Honolulu, Hawaii",
  time = "August 2000",
  review = "What a great experience using Tripma! I booked all of my flights for my gap year through Tripma and never had any issues. When I had to cancel a flight because of an emergency"
}) => {
  return (
    <Box display="flex" minWidth="440px" flexGrow={1}>
      <Avatar src={image} />
      <Box ml="1em">
        <Heading color="#6E7491" fontSize="1.125em" fontWeight="semibold" lineHeight="24px">{name}</Heading>

        <Text mt="0.25em" color="#9198be" fontSize="1em" fontWeight="normal" lineHeight="24px" letterSpacing="tight">
          {room} | {time}
        </Text>

        <Box d="flex" mt="0.75em" alignItems="center">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon mr="0.5em" key={i} color={i < 4 ? '#605DEC' : 'gray.300'} />
            ))}
        </Box>

        <Text mt="0.65em" color="#505080" fontSize="1.125em" lineHeight="1.5em">
          {review}
        </Text>
      </Box>
    </Box>

  )
}

export default Rating
