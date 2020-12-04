import { ChangeEvent, useState } from "react";
import style from "../style/search.module.css";

const Search = ({ addSearch }: any) => {
  const [search, setSearch] = useState("");

  const submitHandler = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    addSearch(search);
    // setSearch("");
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
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
