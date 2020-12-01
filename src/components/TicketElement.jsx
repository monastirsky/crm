import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { TicketsContext } from "../context/TicketsContext";

const TicketElement = ({ ticket }) => {
  const { displayTicket, setDisplayTicket } = useContext(TicketsContext);

  const handleClick = (id) => {
    setDisplayTicket(displayTicket === id ? null : id);
  };

  return (
    <NavLink
      to={displayTicket === ticket.ticketId ? "/" : "/" + ticket.ticketId}
    >
      <div
        id={ticket.ticketId}
        className="ticket"
        onClick={() => handleClick(ticket.ticketId)}
      >
        <img src={ticket.owner.avatar} className="ticket__owner" alt="owner" />
        <span className="ticket__date">{ticket.reportedTime}</span>
        <span className="ticket__name">{" " + ticket.asset.name}</span>
        <span className={"ticket__status " + ticket.status}>
          {ticket.status === "assigned"
            ? " ASD"
            : ticket.status === "completed"
            ? " COM"
            : " UNA"}
        </span>
      </div>
    </NavLink>
  );
};

export default TicketElement;
