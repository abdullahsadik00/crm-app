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
import TicketList from "./Component/Ticket/TicketList/TicketList";
import TicketForm from "./Component/Ticket/TicketForm/TicketForm";


import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <Router>
      <Routes>
        <Route path='/' element={
        <SecuredRoutes>
          <CustomerList />
        </SecuredRoutes>
        }>
        </Route>

        <Route path='/tickets' element={
        <SecuredRoutes>
          <TicketList />
        </SecuredRoutes>
        }>
        </Route>

        <Route path='/ticketform' element={
          <SecuredRoutes>
            <TicketForm />
          </SecuredRoutes>
        }>
        </Route>

        <Route path='/ticketform/:desc' element={
          <SecuredRoutes>
            <TicketForm />
          </SecuredRoutes>}>
        </Route>

        <Route path='/user' element={
        <SecuredRoutes value="10">
          <UserList />
        </SecuredRoutes>
        }>
        </Route>
        <Route path='/userForm' element={
        <SecuredRoutes>
          <UserForm />
        </SecuredRoutes>
        }>
        </Route>
        <Route path='/signup' element={<SignUp />}>
        </Route>
        <Route path='/signin' element={<SignIn />}>
        </Route>
        <Route path='form' element={
         <SecuredRoutes>
            <CustomerForm />
        </SecuredRoutes>
      }>
        </Route>
        <Route path='form/:customerName' element={<CustomerForm />}>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
