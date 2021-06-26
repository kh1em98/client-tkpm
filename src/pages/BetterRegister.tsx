import React from 'react';
import { OnboardingLayout } from '../components/layouts/OnboardingLayout';
import LeftSide from '../components/LeftSideLandingPage';
import SignUpForm from './betterRegister/SignUpForm';
import useForwardAuth from '../hooks/useForwardAuth';

const BetterRegister = () => {
  useForwardAuth();
  return (
    <OnboardingLayout>
      <LeftSide />
      <SignUpForm />
    </OnboardingLayout>
  );
};

export default BetterRegister;
