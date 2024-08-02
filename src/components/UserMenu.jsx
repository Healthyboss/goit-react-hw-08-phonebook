import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../slices/authSlice';

const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logoutUser());
      };

      return (
        <div>
          <p>{user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      );
    };
    
    export default UserMenu;