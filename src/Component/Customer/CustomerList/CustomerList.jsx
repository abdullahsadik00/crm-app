import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import CustomerDashboard from "../CustomerDashboard/CustomerDashboard";
import "./CustomerList.css";
const CustomerList = () => {
  // Storing data in state
  // console.log("rendering");
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [counts, setCounts] = useState({});
  const [pages, setPages] = useState([]);

  const navigate = useNavigate();

  // Call the api.
  useEffect(() => {
    load(1);
  }, []);

  function load(pageNo) {
    fetch(process.env.REACT_APP_APIURL + "customer/page/" + pageNo)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setCustomers(res.records);
        setFilteredCustomers(res.records);

        let newCounts = res.records.filter((c) => c.status === "New").length;
        let acceptedCounts = res.records.filter(
          (c) => c.status === "Accepted"
        ).length;
        let rejectedCounts = res.records.filter(
          (c) => c.status === "Rejected"
        ).length;
        let countObj = {
          new: newCounts,
          accepted: acceptedCounts,
          rejected: rejectedCounts,
          total: res.records.length,
        };
        setCounts(countObj);

        let totalPages = Math.floor(res.totalCount / 100);
        let arrayOfPages = new Array(totalPages).fill(0);
        // console.log(arrayOfPages);
        setPages(arrayOfPages);
      });
  }

  function handleDelete(name) {
    fetch(process.env.REACT_APP_APIURL + "customer/" + name, {
      method: "DELETE",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setCustomers(res);
        setFilteredCustomers(res);
      });
  }

  function handleEdit(name) {
    // console.log(name);
    navigate("/form/" + name);
  }
  function handleSearch(key) {
    if (!key || key.length === 0) {
      setFilteredCustomers(customers);
    } else {
      const result = customers.filter((c) => c.name.includes(key));
      setFilteredCustomers([...result]);
      // console.log(filteredCustomers);
    }
  }
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
          <div className="alert alert-primary mt-3" role="alert">
            No Customers are available in system.
          </div>
        )}
        {filteredCustomers.length > 0 && (
          <table className="table table-responsive">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Website</th>
                <th scope="col">Turnover</th>
                <th scope="col">Status</th>
                <th scope="col">Number Of Emp</th>
                <th scope="col">CEO</th>
                <th scope="col">Established Year</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* rendering data in table rows. */}
              {filteredCustomers.map((c, i) => (
                <tr key={i}>
                  <td>{c.name}</td>
                  <td>{c.website}</td>
                  <td>{c.turnover}</td>
                  <td>
                    <button
                      className={
                        c.status === "New"
                          ? "st_blue"
                          : c.status === "Accepted"
                          ? "st_green"
                          : "st_red"
                      }
                    >
                      {c.status}
                    </button>
                  </td>
                  <td>{c.employees}</td>
                  <td>{c.ceo}</td>
                  <td>{c.year}</td>
                  <td>
                    <button
                      onClick={() => handleEdit(c.name)}
                      className="btn btn-warning margin-right"
                    >
                      Edit
                    </button>

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
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <Link className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </Link>
            </li>
            {pages.map((p, i) => (
              <li className="page-item" key={i}>
                <button
                  className="page-link btn-group-toggle"
                  data-toggle="buttons"
                  onClick={() => {
                    load(i + 1);
                  }}
                >
                  {i + 1}
                </button>
              </li>
            ))}{" "}
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
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
