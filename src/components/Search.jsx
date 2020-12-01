import React, { useState } from "react";
import style from "../style/search.module.css";

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
    <div className={style.container}>
      <form onSubmit={submitHandler}>
        <input
          className={style.inpute}
          type="text"
          onChange={changeHandler}
          value={search}
        />
      </form>
    </div>
  );
};

export default Search;
