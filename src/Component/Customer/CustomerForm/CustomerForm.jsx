import React, { useState } from "react";

const CustomerForm = () => {
  const [customer, setCustomer] = useState({});
  const handleSubmit = () => {
    console.log(customer);
  };
  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => {
            customer.name = e.currentTarget.value;
            setCustomer(customer);
          }}
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Website
        </label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => {
            customer.website = e.currentTarget.value;
            setCustomer(customer);
          }}
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Turnover
        </label>
        <input
          type="number"
          className="form-control"
          onChange={(e) => {
            customer.turnover = e.currentTarget.value;
            setCustomer(customer);
          }}
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          No Of Employees
        </label>
        <input
          type="number"
          className="form-control"
          onChange={(e) => {
            customer.employees = e.currentTarget.value;
            setCustomer(customer);
          }}
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          CEO
        </label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => {
            customer.ceo = e.currentTarget.value;
            setCustomer(customer);
          }}
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Established In
        </label>
        <input
          type="number"
          className="form-control"
          onChange={(e) => {
            customer.established = e.currentTarget.value;
            setCustomer(customer);
          }}
        ></input>
      </div>
      <button
        className="btn btn-primary float-end"
        type="button"
        onClick={ handleSubmit}
      >
        Create New Customer
      </button>
    </div>
  );
};

export default CustomerForm;
