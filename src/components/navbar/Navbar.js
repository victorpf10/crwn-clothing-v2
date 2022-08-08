import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import "./Navbar.scss";
import { ReactComponent as AppLogo } from './crown.svg';


const Navbar = () => {
  return (
    <>
        <div className='navbar-div'>
          <NavLink className='logo-container' to="/">
            <AppLogo />
          </NavLink>
          <div className='navbar-container'>
            <NavLink className='tab-link' to="/shop">Shop</NavLink>
            <NavLink className='tab-link' to="/signin">Sign In</NavLink>
          </div>
        </div>
        <Outlet />
    </>
  )
}

export default Navbar