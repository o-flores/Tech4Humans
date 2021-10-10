import React from 'react';
import logo from '../../assets/logo.png';
import './style.css';

function Header() {
  return (
    <header>
      <img id="logo" src={logo} alt="Tech4Humans Logo" />
    </header>
  );
}
export default Header;
