import React from "react";

const CustomerDashboard = (prop) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-4 ">
          <div className="card bg-secondary text-white text-center mb-4">
            <div className="card-body">
              <h2 className="card-title">Total</h2>
              <h5 className="card-text">{prop.counts.total}</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 ">
          <div className="card bg-success text-white text-center mb-4">
            <div className="card-body">
            <h2 className="card-title">New</h2>
              <h5 className="card-text">{prop.counts.new}</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 ">
          <div className="card bg-primary  text-white text-center mb-4">
            <div className="card-body">
            <h2 className="card-title">Accepted</h2>
              <h5 className="card-text">{prop.counts.accepted}</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 ">
          <div className="card bg-danger  text-white text-center mb-4">
            <div className="card-body">
            <h2 className="card-title">Rejected</h2>
              <h5 className="card-text">{prop.counts.rejected}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
