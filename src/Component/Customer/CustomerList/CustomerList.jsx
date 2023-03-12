import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import "./CustomerList.css";
const CustomerList = () => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  // Check if user is logged in.
  const isLoggedIn = localStorage.getItem("loggedIn");
  if (!isLoggedIn || isLoggedIn != "true") {
    navigate("signin");
  }
  useEffect(() => {
    fetch("http://localhost:4000/api/customer")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setCustomers(res);
        console.log(res);
      });
  }, []);
  const handleEdit = (name) => {
    console.log(`form/${name}`);
    navigate(`form/${name}`);
  };
  const handleDelete = (name) => {
    console.log(`form/${name}`);
    fetch(`http://localhost:4000/api/customer/${name}`, {
      method: "DELETE",
      body: JSON.stringify(customers),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setCustomers(res);
      });
    console.log(customers);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <button
          className="btn btn-primary "
          type="button"
          onClick={() => navigate("form")}
        >
          Add New Customer
        </button>
        {customers.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Website</th>
                <th scope="col">Turnover</th>
                <th scope="col">NumberOfEmployees</th>
                <th scope="col">CEO</th>
                <th scope="col">Established Year</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {customers.map((el, i) => (
                <tr key={i}>
                  <td>{el.name}</td>
                  <td>{el.website}</td>
                  <td>{el.turnover}</td>
                  <td>{el.employees}</td>
                  <td>{el.ceo}</td>
                  <td>{el.year}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleEdit(el.name)}
                    >
                      {" "}
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(el.name)}
                    >
                      {" "}
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="alert alert-primary mt-3" role="alert">
            No Customers are available im system.
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerList;
