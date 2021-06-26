import React from 'react';
import { OnboardingLayout } from '../components/layouts/OnboardingLayout';
import LeftSide from '../components/LeftSideLandingPage';
import useForwardAuth from '../hooks/useForwardAuth';
import SignInForm from './betterLogin/SignInForm';

const BetterLogin = () => {
  useForwardAuth();
  return (
    <OnboardingLayout>
      <LeftSide />
      <SignInForm />
    </OnboardingLayout>
  );
};

export default BetterLogin;
