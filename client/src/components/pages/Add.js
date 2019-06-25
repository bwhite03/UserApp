import React, { useState } from "react";
import axios from "axios";

const Add = props => {
  const [name, setName] = useState({ name: "" });
  const [email, setEmail] = useState({ email: "" });
  const [validate, setValidate] = useState({ validate: false });

  const handleSubmit = e => {
    e.preventDefault();

    // Validate forms
    if (name.name === "" || email.email === "") {
      setValidate({ validate: true });
    } else {
      const user = {
        name: name,
        email: email
      };

      axios.post("/post", { user });
      props.history.push("/");
    }
  };

  return (
    <div className="container">
      <h1 className="text-dark">Add User</h1>
      <form className="card" action="/post" method="post">
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              onChange={e => setName(e.target.value)}
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="Enter Name"
            />
            {validate.validate && (
              <h6 className="text-danger">Please fill out forms</h6>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={e => setEmail(e.target.value)}
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="Enter Email"
            />
            {validate.validate && (
              <h6 className="text-danger">Please fill out forms</h6>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-secondary btn-block "
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
