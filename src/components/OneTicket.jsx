import React, { useEffect, useState, useContext } from "react";
import { TicketsContext } from "../context/TicketsContext";

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
    setTicketDisplayedNow(tickets.find((element) => element.ticketId === id));
  });

  return ticketDisplayedNow ? (
    <div className="one-ticket">
      <div className="one-ticket__header">
        <span>
          TICKET NO. <span className="white">{ticketDisplayedNow.number}</span>
        </span>
        <span>LAST UPDATE {ticketDisplayedNow.lastUpdatedTime}</span>
      </div>
      <div className="one-ticket__container">
        <p className="container-name white">Owner</p>
        <div className="owner-content">
          <img
            src={ticketDisplayedNow.owner.avatar}
            alt="avatar"
            style={{ width: "60px", height: "60px", borderRadius: "50%" }}
          />
          <div>
            <span>
              {ticketDisplayedNow.owner.firstName}{" "}
              {ticketDisplayedNow.owner.lastName}
            </span>
            <span>{ticketDisplayedNow.owner.specialities}</span>
          </div>
        </div>
      </div>
      <div className="one-ticket__container">
        <p className="container-name white">Details</p>
        <div>
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
      <div className="one-ticket__container">
        <p className="container-name white">Asset</p>
      </div>
    </div>
  ) : (
    ""
  );
};

export default OneTicket;
