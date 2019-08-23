import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_6MmX11WOCB7TLNjgyIQsEQN400FaACm2cQ';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };
  return (
    <div className='stripe-button'>
      <StripeCheckout token={onToken} stripeKey={publishableKey} />
    </div>
  );
};

export default StripeButton;
