import React, { useState, useEffect } from "react";
import axios from "axios";

const Edit = props => {
  const [name, setName] = useState({ name: "" });
  const [email, setEmail] = useState({ email: "" });
  const [validate, setValidate] = useState({ validate: false });

  useEffect(() => {
    const id = props.match.params.id;
    axios.get(`/api/user/${id}`).then(res => {
      const customers = res.data[0];
      setName({ name: customers.name });
      setEmail({ email: customers.email });
    });
  }, [props]);

  const handleSubmit = e => {
    e.preventDefault();
    const id = props.match.params.id;
    // Validate form
    if (name === "" || email === "") {
      setValidate({ validate: true });
    } else {
      const user = {
        name: name.name,
        email: email.email
      };
      console.log(user);
      axios.post(`/api/update/${id}`, { user });
      props.history.push("/");
    }
  };

  return (
    <div className="container">
      <h1 className="text-dark">Edit User</h1>
      <form className="card" action="/post" method="post">
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              onChange={e => setName({ name: e.target.value })}
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              defaultValue={name.name}
            />
            {validate.validate && (
              <h6 className="text-danger">Please fill out forms</h6>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={e => setEmail({ email: e.target.value })}
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              defaultValue={email.email}
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
            Update User
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
