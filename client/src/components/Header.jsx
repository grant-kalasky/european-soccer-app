import React from 'react';
import { Link } from 'react-router-dom';
// TODO: Style Header Component
import '../styles/Header.css';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/teams'>Teams</Link></li>
        <li><Link to='/players'>Players</Link></li>
      </ul>
    </nav>
</header>
);

export default Header;