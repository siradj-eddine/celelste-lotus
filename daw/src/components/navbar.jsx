import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';
import {useCart} from '../Context/cartContext'
import {  FaUser, FaSignInAlt, FaBars, FaTimes } from 'react-icons/fa';
import ShopCategories from '../pages/shop-categories';
import logo from '../photo/homePhoto/Artboard 3.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
const {cart} = useCart();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo"><img src={logo} alt="logo" /></div>


      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>


      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about-us" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/shop" onClick={toggleMenu}><ShopCategories /></Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        <div className="navbar-icons">
          {/* <li><Link to="" onClick={toggleMenu}>wishlist <span>(0)</span></Link></li> */}
          <li>
            <Link to="/cart" onClick={toggleMenu}>
              Cart
              {cart.length > 0 && (
              <span className="cart-notification">
                {cart.length}
              </span>
               )}
            </Link>
          </li>
          {/* <li><Link to="" onClick={toggleMenu}><span className='search-icon'><FaSearch /></span></Link></li> */}
          <li><Link to="" onClick={toggleMenu}><span className='login-icon'><FaUser /></span></Link></li>
          <li><Link to="/login" onClick={toggleMenu}><span className='login-icon'><FaSignInAlt /></span></Link></li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;