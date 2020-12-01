import React, { useEffect, useState, useContext } from "react";
import { matchPath } from "react-router-dom";
import { TicketsContext } from "../context/TicketsContext";

const OneTicket = (props) => {
  const { tickets, setTickets, displayTicket, setDisplayTicket } = useContext(
    TicketsContext
  );
  const [displayNow, setDisplayNow] = useState(null);
  const id = Number(props.match.params["ticket_id"]);

  useEffect(() => {
    if (displayTicket !== id) {
      setDisplayTicket(id);
    }
    setDisplayNow(tickets.find((element) => element.ticketId === id));
  });

  return displayNow ? (
    <div className="one-ticket">
      <div className="one-ticket__header">
        <span>
          TICKET NO. <span className="white">{displayNow.number}</span>
        </span>
        <span>LAST UPDATE {displayNow.lastUpdatedTime}</span>
      </div>
      <div className="one-ticket__container">
        <p className="container-name white">Owner</p>
        <div className="owner-content">
          <img
            src={displayNow.owner.avatar}
            alt="avatar"
            style={{ width: "60px", height: "60px", borderRadius: "50%" }}
          />
          <div>
            <span>
              {displayNow.owner.firstName} {displayNow.owner.lastName}
            </span>
            <span>{displayNow.owner.specialities}</span>
          </div>
        </div>
      </div>
      <div className="one-ticket__container">
        <p className="container-name white">Details</p>
        <div>
          <div>
            <span>Reported</span>
            <span>{displayNow.reportedTime}</span>
          </div>
          <div>
            <span>Status</span>
            <span>{displayNow.status}</span>
          </div>
          <div>
            <span>Discription</span>
            <span>{displayNow.description}</span>
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
