import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import TicketDashboard from "../TicketDashboard/TicketDashboard";

const TicketList = () => {
 
  const [tickets, setTickets]=useState([]);
  const [counts, setCounts]=useState({});
  const [filteredTickets, setFilteredTickets]=useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
      fetch(process.env.REACT_APP_APIURL+"ticket")
          .then((res)=> res.json())
              .then((parsedRes)=>{
                  setTickets(parsedRes);
                  setFilteredTickets(parsedRes);
                  // Filter based on different statuses and update count state.
                  let obj={};
                  obj.total = parsedRes.length;
                  obj.new = parsedRes.filter(t=> t.status==="New").length;
                  obj.progress = parsedRes.filter(t=> t.status==="In Progress").length;
                  obj.assigned = parsedRes.filter(t=> t.status==="Assigned").length;
                  obj.resolved = parsedRes.filter(t=> t.status==="Resolved").length;
                  setCounts(obj);
              });
  },[]);

  function handleEditClick(desc){
    navigate("/ticketform/"+desc);
  }
  
  function handleSearch(key){
     const result= tickets.filter(t=> t.desc.includes(key));
     setFilteredTickets(result);
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <TicketDashboard dashbaordCounts={counts}/>
        <div className="table-header">
          <button
            onClick={() => navigate("/ticketform")}
            className="btn btn-success"
          >
            New Ticket
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
<div style={{overflowX:"auto"}}>
<table className="table">
          <thead>
            <tr>
              <th scope="col">Customer</th>
              <th scope="col">Description</th>
              <th scope="col">Assigned To</th>
              <th scope="col">Status</th>
              <th scope="col">Raised On</th>
              <th> Update </th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.map((t) => (
              <tr>
                <td>{t.customer}</td>
                <td>{t.desc}</td>
                <td>{t.assignedTo}</td>
                <td><button  className={
                        t.status === "New"
                          ? "st_blue"
                          : t.status === "In Progress"
                          ? "st_purple"
                          :t.status === "Assigned"
                          ? "st_yellow" :"st_green"
                      }>{t.status}</button></td>
                <td>{t.raisedOn}</td>
                <td>
                  <button
                    onClick={() => {
                      handleEditClick(t.desc);
                    }}
                    className="btn btn-warning"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
</div>
      </div>
    </div>
  );
};

export default TicketList;
