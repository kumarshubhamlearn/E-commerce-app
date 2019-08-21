import React, { Component } from 'react';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/utils';

import './SignUp.scss';

class SignUp extends Component {
  state = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { userName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName: userName });

      this.setState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { userName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='userName'
            value={userName}
            onChange={this.handleChange}
            label='username'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='confirm password'
            required
          />
          <CustomButton 
            type='submit'
            onClick={this.handleSubmit}
          >
            SIGN UP
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
