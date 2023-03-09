import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomerList = () => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
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
  const handleEdit =(name)=>{
    console.log(`form/${name}`)
    navigate(`form/${name}`)
  }
  return (
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
            </tr>
          </thead>
          <tbody>
            {customers.map((el) => (
              <tr>
                <td>{el.name}</td>
                <td>{el.website}</td>
                <td>{el.turnover}</td>
                <td>{el.employees}</td>
                <td>{el.ceo}</td>
                <td>{el.year}</td>
                <td><button onClick={()=>handleEdit(el.name)}> Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div class="alert alert-primary mt-3" role="alert">
          No Customers are available im system.
        </div>
      )}
    </div>
  );
};

export default CustomerList;
