import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
const SignIn = () => {
  const [credential, setCredential] = useState({});
  const [invalidCredential, setInvalidCredential] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log(credential);
    setInvalidCredential(false);
    fetch("http://localhost:4000/api/user/signin", {
      method: "POST",
      body: JSON.stringify(credential),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        if (res.status === 400) {
          setInvalidCredential(true);
        } else if (res.status === 200) {
          console.log("200");
          localStorage.setItem("loggedIn", "true");
          navigate("/");
        }
      })
      .catch((err) => {
        // server errors
        console.log(err);
      });
  };
  return (
    <div className="signincontainer">
      <div className="left">
        <img
          src="https://img.freepik.com/premium-vector/crm-icons-customer-relationship-management-vector-infographics-template_116137-3703.jpg"
          alt=""
        />
      </div>
      <div className="right">
        <h3 className="mb-3 ">Please login.</h3>
        <hr className="header"></hr>
        {invalidCredential && (
          <div class="alert alert-danger" role="alert">
            Invalid Credentials.
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Enter Your Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            onInput={(e) => {
              setCredential({ ...credential, email: e.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Enter Your Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            onInput={(e) => {
              setCredential({ ...credential, password: e.target.value });
            }}
          />
        </div>
        <input
          onClick={handleSubmit}
          className="btn btn-primary float-end"
          type="button"
          value="Sign In"
        ></input>
      </div>
    </div>
  );
};

export default SignIn;
