import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TicketsContext } from "../context/TicketsContext";
import style from "../style/ticket-element.module.css";

const TicketElement = ({ ticket }) => {
  const { displayTicketId, setDisplayTicketId } = useContext(TicketsContext);

  const handleClick = (id) => {
    setDisplayTicketId(displayTicketId === id ? null : id);
  };

  return (
    <Link
      to={displayTicketId === ticket.ticketId ? "/" : "/" + ticket.ticketId}
    >
      <div
        id={ticket.ticketId}
        className={` ${style.ticket} ${
          displayTicketId === ticket.ticketId ? style.active : ""
        }`}
        onClick={() => handleClick(ticket.ticketId)}
      >
        <div className={style.container}>
          <img src={ticket.owner.avatar} className={style.owner} alt="owner" />
          <span className={style.date}>
            {ticket.reportedTime.slice(0, 10) +
              " " +
              ticket.reportedTime.slice(11, 16)}
          </span>
          <span className={style.asset}>{" " + ticket.asset.name}</span>
        </div>
        <div
          className={`${style.status} ${
            ticket.status === "assigned"
              ? style.assigned
              : ticket.status === "completed"
              ? style.completed
              : style.unassigned
          }`}
        >
          <span>
            {ticket.status === "assigned"
              ? " ASD"
              : ticket.status === "completed"
              ? " COM"
              : " UNA"}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default TicketElement;
