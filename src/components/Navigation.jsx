import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from './UserMenu';
import styles from "./Navigation.module.css";

const Navigation = () => {
    const { user } = useSelector((state) => state.auth);
  
    return (
      <nav className={styles.navigation}>
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