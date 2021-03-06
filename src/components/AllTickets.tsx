import React, { useState, useContext } from "react";
import { TicketsContext, Tickets } from "../context/TicketsContext";
import Search from "./Search";
import TicketElement from "./TicketElement";
import style from "../style/all-tickets.module.css";

const AllTickets = () => {
  const { tickets } = useContext(TicketsContext);
  const [search, setSearch] = useState("");

  const displayNow = tickets.filter((element: Tickets) => {
    const name = element.owner.firstName + " " + element.owner.lastName;
    return name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  });
  return (
    <div>
      <Search addSearch={setSearch} />
      <div className={style.allTickets}>
        <div className={style.header}>
          <span className={style.owner}>OWNER</span>
          <span className={style.report}>REPORTED</span>
          <span className={style.asset}>ASSET</span>
          <span>STATUS</span>
        </div>
        {displayNow.map((element: Tickets) => {
          return <TicketElement ticket={element} key={element._id} />;
        })}
      </div>
    </div>
  );
};

export default AllTickets;
