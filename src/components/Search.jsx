import React, { useState } from "react";

const Search = ({ addSearch }) => {
  const [search, setSearch] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    addSearch(search);
    // setSearch("");
  };
  const changeHandler = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={changeHandler} value={search} />
      </form>
    </div>
  );
};

export default Search;
