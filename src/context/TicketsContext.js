import React, { createContext, useState } from "react";

export const TicketsContext = createContext();

const TicketsContextProvider = (props) => {
  const [tickets, setTickets] = useState([]);
  const [displayTicket, setDisplayTicket] = useState(null);
  return (
    <TicketsContext.Provider
      value={{ tickets, setTickets, displayTicket, setDisplayTicket }}
    >
      {props.children}
    </TicketsContext.Provider>
  );
};

export default TicketsContextProvider;
