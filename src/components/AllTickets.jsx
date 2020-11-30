import React, { useEffect, useContext } from "react";
import { TicketsContext } from "../context/TicketsContext";
import { NavLink } from "react-router-dom";
import Search from "./Search";

const AllTickets = () => {
  const { tickets, setDisplayTicket } = useContext(TicketsContext);
  const handleClick = (id) => {
    setDisplayTicket(id);
  };

  return (
    <div>
      <Search />
      <div className="all-tickets">
        <div className="all-tickets__header">
          <span className="header-owner">OWNER</span>
          <span className="header-report">REPORTED</span>
          <span className="header-asset">ASSET</span>
          <span className="header-status">STATUS</span>
        </div>
        <ul className="all-tickets__list">
          {tickets.map((element) => {
            return (
              <NavLink to={"/" + element.ticketId} key={element.ticketId}>
                <li
                  id={element.ticketId}
                  className="ticket"
                  onClick={() => handleClick(element.ticketId)}
                >
                  <img
                    src={element.owner.avatar}
                    className="ticket__owner"
                    alt="owner"
                  />
                  <span className="ticket__date">{element.reportedTime}</span>
                  <span className="ticket__name">
                    {" " + element.asset.name}
                  </span>
                  <span className={"ticket__status " + element.status}>
                    {element.status === "assigned"
                      ? " ASD"
                      : element.status === "completed"
                      ? " COM"
                      : " UNA"}
                  </span>
                </li>
              </NavLink>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AllTickets;
