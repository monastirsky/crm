import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TicketsContext } from "../context/TicketsContext";
import style from "../style/ticket-element.module.css";
import { prepareDate, crateStatusBlock } from "../functions";

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
          <span className={style.date}>{prepareDate(ticket.reportedTime)}</span>
          <span className={style.asset}>{" " + ticket.asset.name}</span>
        </div>
        {crateStatusBlock(ticket.status)}
      </div>
    </Link>
  );
};

export default TicketElement;
