import React, { useEffect, useState, useContext } from "react";
import { TicketsContext } from "../context/TicketsContext";
import Search from "./Search";
import TicketElement from "./TicketElement";
import "../style/AllTickets.css";

const AllTickets = () => {
  const { tickets, displayTicket, setDisplayTicket } = useContext(
    TicketsContext
  );
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
        <ul className="all-tickets__list">
          {displayNow.map((element) => {
            return (
              <TicketElement ticket={element} key={element.ticketId} />

              // <NavLink to={"/" + element.ticketId} key={element.ticketId}>
              //   <li
              //     id={element.ticketId}
              //     className="ticket"
              //     onClick={() => handleClick(element.ticketId)}
              //   >
              //     <img
              //       src={element.owner.avatar}
              //       className="ticket__owner"
              //       alt="owner"
              //     />
              //     <span className="ticket__date">{element.reportedTime}</span>
              //     <span className="ticket__name">
              //       {" " + element.asset.name}
              //     </span>
              //     <span className={"ticket__status " + element.status}>
              //       {element.status === "assigned"
              //         ? " ASD"
              //         : element.status === "completed"
              //         ? " COM"
              //         : " UNA"}
              //     </span>
              //   </li>
              // </NavLink>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AllTickets;
