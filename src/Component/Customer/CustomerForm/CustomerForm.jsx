import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";

const CustomerForm = () => {
  const [customer, setCustomer] = useState({});
  const [readOnly, setReadOnly] = useState(false);
  const navigate = useNavigate();
  // useParams allows access to route parameters.
  const { customerName } = useParams();
  console.log(customerName);
  useEffect(() => {
    if (customerName) {
      fetch("http://localhost:4000/api/customer")
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          let result = res.find((c) => c.name === customerName);
          if (result) {
            setCustomer(result);
            setReadOnly(true);
          }
        });
    }
  }, []);

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
  function handleUpdate() {
    fetch("http://localhost:4000/api/customer", {
      method: "PUT",
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
    console.log(customer);
  }
  return (
    <div>
      <Navbar/>
      <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          readOnly={readOnly}
          value={customer.name}
          onInput={(e) => {
            let obj = { ...customer };
            obj.name = e.target.value;
            setCustomer(obj);
          }}
          type="text"
          className="form-control"
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Website
        </label>
        <input
          value={customer.website}
          onInput={(e) => {
            setCustomer({ ...customer, website: e.target.value });
          }}
          type="text"
          className="form-control"
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Turnover
        </label>
        <input
          value={customer.turnover}
          onInput={(e) => {
            let obj = { ...customer };
            obj.turnover = e.target.value;
            setCustomer(obj);
          }}
          type="number"
          className="form-control"
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          No Of Employees
        </label>
        <input
          value={customer.employees}
          onInput={(e) => {
            let obj = { ...customer };
            obj.employees = e.target.value;
            setCustomer(obj);
          }}
          type="number"
          className="form-control"
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          CEO
        </label>
        <input
          value={customer.ceo}
          onInput={(e) => {
            let obj = { ...customer };
            obj.ceo = e.target.value;
            setCustomer(obj);
          }}
          type="text"
          className="form-control"
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Established In
        </label>
        <input
          value={customer.year}
          onInput={(e) => {
            let obj = { ...customer };
            obj.year = e.target.value;
            setCustomer(obj);
          }}
          type="number"
          className="form-control"
        ></input>
        
      </div>
      <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Status
          </label>
          <select 
            onChange={
              (e)=>{
                let obj = { ...customer };
                obj.status = e.target.value;
                setCustomer(obj);
              }
            }
          className="form-select">
            <option selected>Open this select menu</option>
            <option value="New">New</option>
            <option value="Accepted">Accepted</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

      {!customerName ? (
        <button
          onClick={handleSubmit}
          className="btn btn-primary float-end"
          type="button"
        >
          Create New Customer
        </button>
      ) : (
        <button
          onClick={handleUpdate}
          className="btn btn-primary float-end"
          type="button"
        >
          Update New Customer
        </button>
      )}
    </div>
    </div>
  );
};

export default CustomerForm;