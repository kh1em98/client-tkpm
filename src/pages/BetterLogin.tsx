import React from 'react'
import { OnboardingLayout } from '../components/layouts/OnboardingLayout'
import LeftSide from '../components/LeftSideLandingPage';
import RightSide from './betterLogin/RightSide'

const BetterLogin = () => {
  return (
    <OnboardingLayout>
      <LeftSide />
      <RightSide />
    </OnboardingLayout>
  )
}

export default BetterLogin
