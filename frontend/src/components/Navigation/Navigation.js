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
          <NavLink to='' className="pure-menu-heading pure-u-1-2 main-link">Great Classics</NavLink>
          
          <ul className="pure-menu-list pure-u-1-2 ">
            <li className="pure-menu-item"><NavLink to="/books" className="pure-menu-link">Books</NavLink></li>
            <li className="pure-menu-item"><NavLink to={`/users/${sessionUser.id}/bookshelves`} className="pure-menu-link" >My Bookshelves</NavLink></li>
            <li className="pure-menu-item"><ProfileButton user={sessionUser} /></li>
          </ul>
        </div>
      </div>
    );
  } else {
    sessionLinks = (
      <div className="header">
        <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
          <NavLink to='' className="pure-menu-heading pure-u-1-2 main-link">Great Classics</NavLink>
          <ul className="pure-menu-list pure-u-1-2 "> 
            <li className="pure-menu-item"><NavLink to="/login" className='pure-menu-link'>Log In</NavLink></li>
            <li className="pure-menu-item"><NavLink to="/signup" className='pure-menu-link'>Sign Up</NavLink></li>
            <li className="pure-menu-item"><NavLink to="/books" className='pure-menu-link'>Books</NavLink></li>
          </ul>
        </div>
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