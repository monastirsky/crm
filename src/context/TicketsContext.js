import React, { createContext, useState } from "react";

export const TicketsContext = createContext();

const TicketsContextProvider = (props) => {
  const [tickets, setTickets] = useState([]);
  const [displayTicketId, setDisplayTicketId] = useState(null);
  return (
    <TicketsContext.Provider
      value={{ tickets, setTickets, displayTicketId, setDisplayTicketId }}
    >
      {props.children}
    </TicketsContext.Provider>
  );
};

export default TicketsContextProvider;
