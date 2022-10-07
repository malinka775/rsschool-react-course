import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <nav className="nav" data-testid="header">
            <NavLink to="/" className="nav__item">
              Home
            </NavLink>
            <NavLink to="/about" className="nav__item">
              About us
            </NavLink>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
