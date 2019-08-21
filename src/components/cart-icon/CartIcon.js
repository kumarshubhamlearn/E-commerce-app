import React from 'react'
import {connect} from 'react-redux';
import {toggleCart} from '../../redux/actions/cartAction'
import {selectCartItemsCount} from '../../redux/selectors';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './CartIcon.scss';

const CartIcon = ({cartItemsCount, toggleCart}) => {
  return (
    <div className='cart-icon' onClick={() =>toggleCart()}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{cartItemsCount}</span>
    </div>
  )
}

const mapStateToProps = state => ({
  cartItemsCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
