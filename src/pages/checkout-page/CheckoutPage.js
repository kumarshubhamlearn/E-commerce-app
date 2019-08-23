import React from 'react'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartItems, selectCartTotal} from '../../redux/selectors';

import './CheckoutPage.scss';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeButton from '../../components/stripe-button/StripeButton';

const Checkout = ({cartItems, cartTotal}) => {
  const render = cartItems.map(cartItem => (
    <CheckoutItem cartItem={cartItem} key={cartItem.id}/>
  ))
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {render}
      <div className='total'>
        <span>TOTAL: ${cartTotal}</span>
      </div>
      <StripeButton/>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);
