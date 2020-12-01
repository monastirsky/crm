import React, { useEffect, useState, useContext } from "react";
import { TicketsContext } from "../context/TicketsContext";
import Search from "./Search";
import TicketElement from "./TicketElement";
import "../style/AllTickets.css";

const AllTickets = () => {
  const { tickets } = useContext(TicketsContext);
  const [search, setSearch] = useState("");

  const displayNow = tickets.filter((element) => {
    const name = element.owner.firstName + " " + element.owner.lastName;
    return name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  });

  return (
    <div>
      <Search addSearch={setSearch} />
      <div className="all-tickets">
        <div className="all-tickets__header">
          <span className="header-owner">OWNER</span>
          <span className="header-report">REPORTED</span>
          <span className="header-asset">ASSET</span>
          <span className="header-status">STATUS</span>
        </div>
        {displayNow.map((element) => {
          return <TicketElement ticket={element} key={element.ticketId} />;
        })}
      </div>
    </div>
  );
};

export default AllTickets;
