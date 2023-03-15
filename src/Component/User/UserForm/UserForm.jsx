import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";

const UserForm = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
 

  function handleSubmit() {
    console.log(user);
    fetch("http://localhost:4000/api/user/signup", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        navigate("/users");
      });
  }
  // function handleUpdate() {
  //   fetch("http://localhost:4000/api/user", {
  //     method: "PUT",
  //     body: JSON.stringify(user),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       navigate("/");
  //     });
  //   console.log(user);
  // }
  return (
    <div>
    <Navbar />
    <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
              value={user.name}
              onInput={(e) => {
                let obj = { ...user };
                obj.name = e.target.value;
                setUser(obj);
              }}
          type="text"
          className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email
        </label>
        <input
          value={user.email}
          onInput={(e) => {
            setUser({
              ...user,
              email: e.target.value,
            });
          }}
          type="text"
          className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Password
        </label>
        <input
          value={user.password}
          onInput={(e) => {
            let obj = { ...user };
            obj.password = e.target.value;
            setUser(obj);
          }}
          type="password"
          className="form-control"></input>
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Username
        </label>
        <input
          value={user.username}
          onInput={(e) => {
            let obj = { ...user };
            obj.username = e.target.value;
            setUser(obj);
          }}
          type="text"
          className="form-control"></input>
      </div>
      <div className="mb-3">
      <div className="form-check">
<input 
onChange={(e) => {
  console.log(e.target.checked);
  let obj = { ...user };
  obj.isActive = e.target.checked;
  setUser(obj);
}}
className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminateDisabled">
</input>
<label className="form-check-label" for="flexCheckIndeterminateDisabled">
  IsActive
</label>
</div>
      </div>
      <button
        onClick={handleSubmit}
        className="btn btn-primary float-end"
        type="button">
        Create New User
      </button>
    </div>
  </div>
  );
};

export default UserForm;
