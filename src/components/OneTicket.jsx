import React, { useEffect, useState, useContext, useMemo } from "react";
import { TicketsContext } from "../context/TicketsContext";
import style from "../style/one-ticket.module.css";

const OneTicket = (props) => {
  const { tickets, displayTicketId, setDisplayTicketId } = useContext(
    TicketsContext
  );
  const [ticketDisplayedNow, setTicketDisplayedNow] = useState(null);
  const id = Number(props.match.params["ticket_id"]);

  useEffect(() => {
    if (displayTicketId !== id) {
      setDisplayTicketId(id);
    }
  });
  useMemo(() => {
    setTicketDisplayedNow(tickets.find((element) => element.ticketId === id));
  }, [id, tickets]);

  return ticketDisplayedNow ? (
    <div className={style.wrapper}>
      <div className={style.header}>
        <span>
          TICKET NO. <span>{ticketDisplayedNow.number}</span>
        </span>
        <span>LAST UPDATE {ticketDisplayedNow.lastUpdatedTime}</span>
      </div>
      <div className={style.container}>
        <p className={style.containerName}>Owner</p>
        <div className={style.owner}>
          <img
            className={style.avatar}
            src={ticketDisplayedNow.owner.avatar}
            alt="avatar"
          />
          <div className={style.userInfoContainer}>
            <span className={style.userName}>
              {ticketDisplayedNow.owner.firstName}{" "}
              {ticketDisplayedNow.owner.lastName}
            </span>
            <span className={style.userSpecialities}>
              {ticketDisplayedNow.owner.specialities}
            </span>
          </div>
        </div>
      </div>
      <div className={style.container}>
        <p className={style.containerName}>Details</p>
        <div className={style}>
          <div>
            <span>Reported</span>
            <span>{ticketDisplayedNow.reportedTime}</span>
          </div>
          <div>
            <span>Status</span>
            <span>{ticketDisplayedNow.status}</span>
          </div>
          <div>
            <span>Discription</span>
            <span>{ticketDisplayedNow.description}</span>
          </div>
        </div>
      </div>
      <div className={style.container}>
        <p className={style.containerName}>Asset</p>
      </div>
    </div>
  ) : (
    ""
  );
};

export default OneTicket;
