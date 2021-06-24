import { Box, Text, Heading, Image, Button } from '@chakra-ui/react'
import React, { FC } from 'react'
import { StarIcon } from '@chakra-ui/icons';

interface RoomProps {
  id?: number;
  price: string;
  image: string;
  name: string;
  description?: string;
  reviewCount?: number;
  rating?: number;
}

const Room: FC<RoomProps> = ({
  price,
  image,
  name,
  description = "Viet Nam's most international city",
  reviewCount = Math.floor(Math.random() * 100),
  rating = Math.floor(Math.random() * 5)
}: RoomProps) => {
  return (
    <Box
      flexGrow={1}
      shadow="0px 2px 4px rgba(28, 5, 77, 0.1), 0px 12px 32px rgba(0, 0, 0, 0.05)"
      borderRadius="12px"
      minWidth="300px"
      height="auto"
      overflow="hidden"
      mr="4em"
      _last={{ mr: "0" }}
    >
      <Image src={image} />

      <Box padding="1em 1.5em">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between">
          <Box>
            <Heading
              lineHeight="1.5em"
              fontSize="1.125em"
              fontWeight="semibold"
              color="#6E7491">
              {name},
              <Text display="inline-block" ml="0.35em" color="#605DEC">
                ShangHai
              </Text>
            </Heading>
            <Text mt="0.25em" color="#7C8DB0" fontWeight="normal">
              {description}
            </Text>
          </Box>

          <Text color="#434658" fontWeight="medium" fontSize="1.125em">
            ${price}
          </Text>
        </Box>
        <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon key={i} color={i < rating ? '#605DEC' : 'gray.300'} />
            ))}
          <Box as="span" ml="2" color="#7C8DB0" fontSize="sm">
            {reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Room
