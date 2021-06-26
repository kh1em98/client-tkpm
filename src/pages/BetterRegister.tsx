import React from 'react';
import { OnboardingLayout } from '../components/layouts/OnboardingLayout';
import LeftSide from '../components/LeftSideLandingPage';
import RightSide from './betterRegister/RightSide';
import useForwardAuth from '../hooks/useForwardAuth';

const BetterRegister = () => {
  useForwardAuth();
  return (
    <OnboardingLayout>
      <LeftSide />
      <RightSide />
    </OnboardingLayout>
  );
};

export default BetterRegister;
