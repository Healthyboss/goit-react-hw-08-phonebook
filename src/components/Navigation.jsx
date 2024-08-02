import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from './UserMenu';

const Navigation = () => {
    const { user } = useSelector((state) => state.auth);
  
    return (
      <nav>
        <Link to="/contacts">Contacts</Link>
        {user ? (
          <UserMenu />
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    );
  };
  
  export default Navigation;