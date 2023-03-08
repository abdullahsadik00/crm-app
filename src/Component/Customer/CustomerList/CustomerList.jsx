  import React from "react";

  const CustomerList = () => {
    return (
      <div className="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Website</th>
              <th scope="col">Turnover</th>
              <th scope="col">No Of Employees</th>
              <th scope="col">CEO</th>
              <th scope="col">Established In</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  export default CustomerList;
