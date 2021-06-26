import { Heading, Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import AuthenticatedLayout from '../components/layouts/AuthenticatedLayout';
import Room from '../components/Room';
import shanghai from '../images/shanghai.png';
import sydney from '../images/sydney.png';
import kyoto from '../images/kyoto.png';
import world from '../images/world.svg';
import RatingPreview from './home/RatingPreview';
import useIsAuth from '../hooks/useIsAuth';

export default function Home() {
  useIsAuth();

  const formatToVnd = (price: number) => {
    return price.toLocaleString('it-IT', {
      style: 'currency',
      currency: 'VND',
    });
  };

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

        <Box mt="1.5em" display="flex" width="100%">
          <Room image={shanghai} name="The Bunds" price={formatToVnd(350000)} />
          <Room image={sydney} name="Sydney Opera House" price="599" />
          <Room image={kyoto} name="Kōdaiji Temple" price="699" />
        </Box>
      </Box>

      <RatingPreview />
    </AuthenticatedLayout>
  );
}
