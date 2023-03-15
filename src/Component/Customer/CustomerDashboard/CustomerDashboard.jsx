import React from "react";

const CustomerDashboard = (prop) => {
  return (
    <div className="container">
      <div className="row">
        <div class="col-lg-3 col-md-4 ">
          <div class="card bg-secondary text-white text-center mb-4">
            <div class="card-body">
              <h2 className="card-title">Total</h2>
              <h5 className="card-text">{prop.counts.total}</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 ">
          <div class="card bg-success text-white text-center mb-4">
            <div class="card-body">
            <h2 className="card-title">New</h2>
              <h5 className="card-text">{prop.counts.new}</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 ">
          <div class="card bg-primary  text-white text-center mb-4">
            <div class="card-body">
            <h2 className="card-title">Accepted</h2>
              <h5 className="card-text">{prop.counts.accepted}</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 ">
          <div class="card bg-danger  text-white text-center mb-4">
            <div class="card-body">
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
