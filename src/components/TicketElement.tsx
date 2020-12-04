import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TicketsContext } from "../context/TicketsContext";
import style from "../style/ticket-element.module.css";
import { prepareDate, crateStatusBlock } from "../functions";

const TicketElement = ({ ticket }: any) => {
  const { displayTicketId, setDisplayTicketId } = useContext(TicketsContext);

  const handleClick = (id: string) => {
    setDisplayTicketId(displayTicketId === id ? null : id);
  };

  return (
    <Link to={displayTicketId === ticket._id ? "/" : "/" + ticket._id}>
      <div
        id={ticket._id}
        className={` ${style.ticket} ${
          displayTicketId === ticket._id ? style.active : ""
        }`}
        onClick={() => handleClick(ticket._id)}
      >
        <div className={style.container}>
          <img src={ticket.owner.avatar} className={style.owner} alt="owner" />
          <span className={style.date}>{prepareDate(ticket.createdAt)}</span>
          <span className={style.asset}>{" " + ticket.asset.name}</span>
        </div>
        {crateStatusBlock(ticket.status)}
      </div>
    </Link>
  );
};

export default TicketElement;
