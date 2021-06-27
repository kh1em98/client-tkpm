import { Spinner } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { OnboardingLayout } from '../components/layouts/OnboardingLayout';
import LeftSide from '../components/LeftSideLandingPage';
import { useAppSelector } from '../redux/store';
import SignUpForm from './betterRegister/SignUpForm';

const BetterRegister = () => {
  const { isFetching, id } = useAppSelector((state) => state.user);
  const history = useHistory();

  useEffect(() => {
    if (!isFetching) {
      if (id) {
        history.push('/');
      }
    }
  }, [isFetching, id]);

  return isFetching ? (
    <Spinner />
  ) : (
    <OnboardingLayout>
      <LeftSide />
      <SignUpForm />
    </OnboardingLayout>
  );
};

export default BetterRegister;
