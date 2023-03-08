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
      .then((res) => {setCustomers(res);console.log(res)});
  }, []);
    return (
      <div className="container">
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
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary float-end" type="button" onClick={()=>navigate("form")}>
      Add New Customer
    </button>
    </div>
  );
};

export default CustomerList;
