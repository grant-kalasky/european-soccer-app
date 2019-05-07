import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="ui secondary pointing menu">
    <Link className="item" to='/'>
      Home
    </Link>
    <Link className="item" to='/teams'>
      Teams
    </Link>
    <Link className="item" to='/players'>
      Players
    </Link>
  </div>
);

export default Header;