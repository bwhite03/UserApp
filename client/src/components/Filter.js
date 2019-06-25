import React from "react";

const Filter = props => {
  return (
    <form>
      <div className="form-group mt-2">
        <label>Sort by name</label>
        <select className="form-control mb-4" onChange={props.handleFilter}>
          <option value="ascending">Ascending a-z</option>
          <option value="descending">Descending z-a</option>
        </select>
      </div>
    </form>
  );
};

export default Filter;
