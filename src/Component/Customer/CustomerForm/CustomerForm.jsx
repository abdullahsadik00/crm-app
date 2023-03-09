import React, {  useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CustomerForm = () => {
  const [customer, setCustomer] = useState({});
  const navigate = useNavigate()
  // useParams allows access to route parameters.
  const { customerName } = useParams();
  if (customerName) {
    fetch("http://localhost:4000/api/customer")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let result = res.find((c) => c.name === customerName);
        if (result) {
          setCustomer(result);
        }
      });
  }

  function handleSubmit() {
    console.log(customer);
    fetch("http://localhost:4000/api/customer", {
      method: "POST",
      body: JSON.stringify(customer),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      });
  }
  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          type="text"
          value={customer.name}
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
          value={customer.website}

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
          value={customer.turnover}

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
          value={customer.employees}

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
          value={customer.ceo}

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
          value={customer.established}

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
        onClick={handleSubmit}
      >
        Create New Customer
      </button>
    </div>
  );
};

export default CustomerForm;
