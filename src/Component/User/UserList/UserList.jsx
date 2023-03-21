import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import "./UserList.css";
const UserList = () => {
  // state is storage which when changes, 
    // refreshes component.
    const [users, setUsers]=useState([]);
    const navigate = useNavigate()
    useEffect(()=>{
        // call api to get data.
        fetch(process.env.REACT_APP_APIURL+"user")
            .then(
                // convert data to json format.
                res => res.json()
            ).then((parsedResult)=>{
                // update state with data.
                setUsers(parsedResult);
            })
    },[]);

    function handleActivateClick(username){
      fetch(process.env.REACT_APP_APIURL+"user/activate/"+username, {
        method:"PUT"
      }).then(res=> res.json())
          .then(parsedResponse => setUsers(parsedResponse));
    }

    function handleDeActivateClick(username){
      fetch(process.env.REACT_APP_APIURL+"user/deactivate/"+username, {
        method:"PUT"
      }).then(res=> res.json())
          .then(parsedResponse => setUsers(parsedResponse));
    }


  return (
    <div>
      <Navbar />
      <div className="container">
        <button onClick={navigate("/userForm")} className="btn btn-success">
          New User
        </button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Username</th>
              <th scope="col" className="activeStatus">
                IsActive
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,index) => (
              <tr key={index}>
                <td >{user.name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td className="activeStatus">
                  {!user.isActive && (
                    <button
                      onClick={() => {
                        handleActivateClick(user.username);
                      }}
                      className="btn btn-primary"
                    >
                      Activate
                    </button>
                  )}
                  {user.isActive && (
                    <button
                      onClick={() => {
                        handleDeActivateClick(user.username);
                      }}
                      className="btn btn-danger"
                    >
                      De-Activate
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
