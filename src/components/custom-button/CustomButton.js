import React from 'react'

import './CustomButton.scss';

const CustomButton = ({children, isGoogleSignIn, isInverted, ...otherProps}) => {
  return (
    <div className={`${isInverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
      {children}
    </div>
  )
}

export default CustomButton;
