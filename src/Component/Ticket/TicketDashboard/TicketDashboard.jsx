import React from "react";

const TicketDashboard = (props) => {
  // console.log(props);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 ">
            <div className="card bg-secondary text-white text-center mb-4">
              <div className="card-body">
                <h2 className="card-title">Total</h2>
                <h5 className="card-text">{props.dashbaordCounts.total}</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 ">
            <div className="card bg-info text-white text-center mb-4">
              <div className="card-body">
                <h2 className="card-title">New</h2>
                <h5 className="card-text">{props.dashbaordCounts.new}</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 ">
            <div className="card bg-warning text-white text-center mb-4">
              <div className="card-body">
                <h2 className="card-title">Assigned</h2>
                <h5 className="card-text">{props.dashbaordCounts.assigned}</h5>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            
          <div className="col-lg-4 col-md-4 ">
            <div className="card bg-success text-white text-center mb-4">
              <div className="card-body">
                <h2 className="card-title">Resolved</h2>
                <h5 className="card-text">{props.dashbaordCounts.resolved}</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 ">
            <div className="card bg-primary text-white text-center mb-4">
              <div className="card-body">
                <h2 className="card-title">In Progress</h2>
                <h5 className="card-text">{props.dashbaordCounts.progress}</h5>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketDashboard;
