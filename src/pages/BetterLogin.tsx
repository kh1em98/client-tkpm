import React from 'react';
import { OnboardingLayout } from '../components/layouts/OnboardingLayout';
import LeftSide from '../components/LeftSideLandingPage';
import useForwardAuth from '../hooks/useForwardAuth';
import RightSide from './betterLogin/RightSide';

const BetterLogin = () => {
  useForwardAuth();
  return (
    <OnboardingLayout>
      <LeftSide />
      <RightSide />
    </OnboardingLayout>
  );
};

export default BetterLogin;
