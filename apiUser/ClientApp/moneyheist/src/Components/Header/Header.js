import React from 'react';
import './Header.css';
import logoUrl from '../../Images/logo1.jpg'
const Header = () => (
  <div className="header">
    <img src={logoUrl} alt="Tesla" />
  </div>
)
export default Header;