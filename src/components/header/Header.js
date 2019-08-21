import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/utils';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser, selectShowCart} from '../../redux/selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

const Header = ({ currentUser, showCart, toggleCart }) => {
  console.log(currentUser,showCart);
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
        
          <CartIcon />
        
      </div>
      { showCart ? <CartDropdown/> : null }
    </div>
  );
};

//this state is the rootReducer
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  showCart: selectShowCart
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
