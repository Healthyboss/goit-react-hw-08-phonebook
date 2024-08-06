import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./AuthPage";
import ContactPage from "./ContactPage";
import PrivateRoute from "./PrivateRoute";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";

const App = () => {
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
                <ContactPage />
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