import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchContacts } from '../slices/contactsSlice';
import AuthPage from './AuthPage';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import PrivateRoute from './components/PrivateRoute';
import Navigation from './components/Navigation';
import UserMenu from './components/UserMenu';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/register" element={<AuthPage />} />
        <Route path="/login" element={<AuthPage />} />
        <PrivateRoute path="/contacts">
          <Filter />
          <ContactForm />
          <ContactList />
          <UserMenu />
        </PrivateRoute>
      </Routes>
    </div>
  );
};

export default App;