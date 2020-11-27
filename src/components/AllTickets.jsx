import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { TicketsContext } from "../context/TicketsContext";

const AllTickets = () => {
  // const { tickets, setTickets } = useContext(TicketsContext);
  const [list, setList] = useState([]);
  const [displayTicket, setDisplayTicket] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/Tapify/public-code-test/master/web-ui-test/tickets.json"
      )
      .then((result) => {
        setList(result.data);
        console.log("aaaaa");
      });
  }, []);

  const handleClick = (id) => {
    setDisplayTicket(id);
  };

  return (
    <div className="all-tickets">
      <div className="all-tickets__header">
        <span>OWNER</span>
        <span>REPORTED</span>
        <span>ASSET</span>
        <span>STATUS</span>
      </div>
      <ul className="all-tickets__list">
        {list.map((element) => {
          return (
            <li
              id={element.ticketId}
              key={element.ticketId}
              className={
                "ticket " +
                (element.ticketId === displayTicket ? "display-now" : "")
              }
              onClick={() => handleClick(element.ticketId)}
            >
              <img
                src={element.owner.avatar}
                className="ticket__owner"
                alt="owner"
              />
              <span className="ticket__date">{element.reportedTime}</span>
              <span className="ticket__name">{" " + element.asset.name}</span>
              <span className={"ticket__status " + element.status}>
                {element.status === "assigned"
                  ? " ASD"
                  : element.status === "completed"
                  ? " COM"
                  : " UNA"}
              </span>
              <span></span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AllTickets;
