import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Filter from "../Filter";

const Home = () => {
  const [state, setState] = useState({ customers: [] });
  const [loading, setLoading] = useState({ loading: true });
  const [filter, setFilter] = useState({ filter: "ascending" });

  const fetchData = () => {
    axios.get("/api/users").then(res => {
      const customers = res.data;
      setState({ customers });
    });
  };

  useEffect(() => {
    setTimeout(() => setLoading({ loading: false }), 500);
    fetchData();
  }, []);

  const handleDelete = id => {
    axios.delete(`/delete/${id}`);
    fetchData();
  };

  const handleFilter = e => {
    setFilter({ filter: e.target.value });
  };

  // Sort data by names

  if (filter.filter === "ascending") {
    state.customers.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (filter.filter === "descending") {
    state.customers.sort((a, b) => b.name.localeCompare(a.name));
  }

  return (
    <div className="container">
      {loading.loading ? (
        <div className="text-center m-5">
          <h1 className="m-3">Loading</h1>
          <p
            className="spinner-border"
            style={{ width: "3rem", height: "3rem" }}
          />
        </div>
      ) : (
        <div>
          <Filter handleFilter={handleFilter} />
          {state.customers.length === 0 ? (
            <h1 className="text-center text-dark">No Current Users</h1>
          ) : (
            state.customers.map(customer => (
              <ul
                className="card"
                key={customer.id}
                style={{ listStyle: "none" }}
              >
                <div className="card-body">
                  <i
                    onClick={handleDelete.bind(null, customer.id)}
                    className="fas fa-trash-alt"
                    style={{
                      float: "right",
                      padding: "0 5px",
                      cursor: "pointer"
                    }}
                  />
                  <Link to={`edit/${customer.id}`}>
                    <i
                      className="fas fa-user-edit"
                      style={{
                        float: "right",
                        padding: "0 5px",
                        cursor: "pointer"
                      }}
                    />
                  </Link>
                  <li>Name: {customer.name}</li>
                  <li>Email: {customer.email}</li>
                </div>
              </ul>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
