import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { TicketsContext } from "../context/TicketsContext";

const AllTickets = () => {
  // const { tickets, setTickets } = useContext(TicketsContext);
  const [list, setList] = useState([]);

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

  return (
    <div className="all-tickets">
      <div className="">
        <span>OWNER</span>
        <span>REPORTED</span>
        <span>ASSET</span>
        <span>STATUS</span>
      </div>
      <ul>
        {list.map((element) => {
          return (
            <li key={element.ticketId} className="ticket">
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
