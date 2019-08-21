import React from 'react';

import './SignInAndSignUpPage.scss';
import SignIn from '../../components/signIn/SignIn';
import SignUp from '../../components/sign-up/SignUp'

const SignInAndSignUpPage = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn/>
      <SignUp/>
    </div>
  )
}

export default SignInAndSignUpPage
