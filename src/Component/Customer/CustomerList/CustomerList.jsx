import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import CustomerDashboard from "../CustomerDashboard/CustomerDashboard";
import "./CustomerList.css";
const CustomerList = () => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [counts, setCounts] = useState({});
  const [pages, setPages] = useState([]);

  useEffect(() => {
    load(1);
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
  const handleSearch = (search) => {
    if (search.length === 0 || !search) {
      setFilteredCustomers(customers);
    } else {
      const result = customers.filter((el) =>
        el.name.includes(search.toUpperCase())
      );
      setFilteredCustomers([...result]);
      console.log(filteredCustomers);
    }
  };
  const load = (i) => {
    fetch(`http://localhost:4000/api/customer/page/${i}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setCustomers(res.records);
        setFilteredCustomers(res.records);

        let newCounts = res.records.filter((c) => c.status == "New").length;
        let acceptedCounts = res.records.filter(
          (c) => c.status == "Accepted"
        ).length;
        let rejectedCounts = res.records.filter(
          (c) => c.status == "Rejected"
        ).length;
        let countObj = {
          new: newCounts,
          accepted: acceptedCounts,
          rejected: rejectedCounts,
          total: res.totalCount,
        };
        setCounts(countObj);
        let totalPages = Math.floor(res.totalCount / 100);
        let arrayOfPages = new Array(totalPages).fill(0);
        setPages(arrayOfPages);
      });
  };
  return (
    <div>
      <Navbar />
      <CustomerDashboard counts={counts} />
      <div className="container">
        <div className="table-header">
          <button onClick={() => navigate("form")} className="btn btn-success">
            New Customer
          </button>
          <div className="search-box-wrapper">
            <input
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
              className="search-box"
              type="search"
            />
            &nbsp;&nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
        </div>
        {filteredCustomers.length === 0 && (
          <div class="alert alert-primary mt-3" role="alert">
            No Customers are available in system.
          </div>
        )}
        {filteredCustomers.length > 0 && (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Website</th>
                <th scope="col">Turnover</th>
                <th>Status</th>
                <th scope="col">NumberOfEmployees</th>
                <th scope="col">CEO</th>
                <th scope="col">Established Year</th>
              </tr>
            </thead>
            <tbody>
              {/* rendering data in table rows. */}
              {filteredCustomers.map((c) => (
                <tr key={c.id}>
                  <td>{c.name}</td>
                  <td>{c.website}</td>
                  <td>{c.turnover}</td>
                  <td
                    className={
                      c.status == "New"
                        ? "st_blue"
                        : c.status == "Accepted"
                        ? "st_green"
                        : "st_red"
                    }
                  >
                    {c.status}
                  </td>
                  <td>{c.employees}</td>
                  <td>{c.ceo}</td>
                  <td>{c.year}</td>
                  <td>
                    <button
                      onClick={() => handleEdit(c.name)}
                      className="btn btn-warning"
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(c.name)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            {pages.map((p, i) => (
              <li class="page-item" key={i}>
                <button
                  class="page-link btn-group-toggle" data-toggle="buttons"
                  onClick={() => {
                    load(i + 1);
                  }}
                >
                  {i + 1}
                </button>
              </li>
            ))}{" "}
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>{" "}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default CustomerList;
