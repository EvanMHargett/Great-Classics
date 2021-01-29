import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className="header">
        <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
          <NavLink to='' className="pure-menu-heading">Great Classics</NavLink>
          <ProfileButton user={sessionUser} />
          <ul className="pure-menu-list">
            <NavLink to="/books">Books</NavLink>
            <NavLink to={`/users/${sessionUser.id}/bookshelves`}>My Bookshelves</NavLink>
          </ul>
        </div>
      </div>
    );
  } else {
    sessionLinks = (
      <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
        <NavLink to='' className="pure-menu-heading">Great Classics</NavLink>
        <ul className="pure-menu-heading">  
          <NavLink to="/login" className='navlink'>Log In</NavLink>
          <NavLink to="/signup" className='navlink'>Sign Up</NavLink>
          <NavLink to="/books" className='navlink'>Books</NavLink>
        </ul>
      </div>
    );
  }

  return (
    <ul>
      <li>
        <NavLink exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;