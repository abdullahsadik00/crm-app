import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SecuredRoutes from "./Component/SecuredRoutes/SecuredRoutes";
import CustomerList from "./Component/Customer/CustomerList/CustomerList";
import SignUp from "./Component/SignUp/SignUp";
import SignIn from "./Component/SignIn/SignIn";
import CustomerForm from "./Component/Customer/CustomerForm/CustomerForm";
import UserList from "./Component/User/UserList/UserList";
import UserForm from "./Component/User/UserForm/UserForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <SecuredRoutes>
              <CustomerList />
            </SecuredRoutes>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/form"
          element={
            <SecuredRoutes>
              <CustomerForm />
            </SecuredRoutes>
          }
        />
        <Route
          path="form/:customerName"
          element={
            <SecuredRoutes>
              <CustomerForm />
            </SecuredRoutes>
          }
        />
        <Route
          path="/users"
          element={
            <SecuredRoutes>
              <UserList />
            </SecuredRoutes>
          }
        />
        <Route
          path="/userForm"
          element={
            <SecuredRoutes>
              <UserForm />
            </SecuredRoutes>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>
);