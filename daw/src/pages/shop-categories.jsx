import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/shop-categories.css';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropDown = () => {
    setIsOpen(true);
  };

  return (
    <div className="dropdown" onMouseLeave={toggleDropdown}>
      <a href="/shop" className="dropdown-toggle" onMouseEnter={closeDropDown}>
        Shop <span className="arrow">&#9660;</span>
      </a>
      {isOpen && (
        <div className="dropdown-menu">
          <Link to="/shop">
            <a href="/shop" className="dropdown-item">
              All Categories
            </a>
          </Link>
          <Link to="/shop/Shoes">
            <a href='/shop/Shoes' className="dropdown-item">
              Shoes
            </a>
          </Link>
          <Link to="/shop/Pants">
            <a href="/Pants" className="dropdown-item">
              Pants
            </a>
          </Link>
          <Link to="/shop/t-shirts">
            <a href="/t-shirts" className="dropdown-item">
              T-shirts & Hoodies
            </a>
          </Link>
          <Link to="/shop/hats">
            <a href="/Hats" className="dropdown-item">
              Hats
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;