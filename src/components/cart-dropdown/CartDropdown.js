import React from 'react'
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';

import CustomButton from '../custom-button/CustomButton';
import './CartDropdown.scss';
import CartItem from '../cart-item/CartItem';
import {selectCartItems} from '../../redux/selectors';

const CartDropdown = ({cartItems, history}) => {
  const render = cartItems.map(item => {
    return (
      <CartItem key={item.id} item={item} />
    )
  })
  const emptyMessage = (<span className='empty-message'>Your cart is empty</span>)
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? render : emptyMessage}
      </div>
      <Link to='/checkout' className='button'>
        <CustomButton /*onClick={() => history.push('/checkout')}*/ >
          Checkout
        </CustomButton>
      </Link>
    </div>
  )
}

//using selctors so that the component does not rerenders because of the state changes that are not related to this component
const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
})

//withRouter gives access to history
export default withRouter(connect(mapStateToProps)(CartDropdown));
