import React, { useEffect } from 'react';
import { OnboardingLayout } from '../components/layouts/OnboardingLayout';
import LeftSide from '../components/LeftSideLandingPage';
import SignInForm from './betterLogin/SignInForm';
import { useAppSelector } from '../redux/store';
import { Spinner } from '@chakra-ui/react';
import { useHistory } from 'react-router';

const BetterLogin = () => {
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
      <SignInForm />
    </OnboardingLayout>
  );
};

export default BetterLogin;
