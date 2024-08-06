import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchContacts } from '../slices/contactsSlice';
import AuthPage from './AuthPage';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import PrivateRoute from './PrivateRoute';
import Navigation from './Navigation';
import UserMenu from './UserMenu';

const App = () => {

const dispatch = useDispatch();
const [filter, setFilter] = useState("");
const [contacts, setContacts] = useState([]);

const handleFilterChange = (event) => {
  setFilter(event.target.value);
};

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/register" element={<AuthPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/contacts" element={<PrivateRoute />}>
          <Route
            path="/contacts"
            element={
              <>
                <Filter />
                <ContactForm />
                <ContactList />
                <UserMenu />
              </>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;