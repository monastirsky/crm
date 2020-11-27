import React, { createContext, useState } from "react";

export const TicketsContext = createContext();

const TicketsContextProvider = (props) => {
  const [tickets, setTickets] = useState([]);
  return (
    <TicketsContext.Provider value={{ tickets, setTickets }}>
      {props.children}
    </TicketsContext.Provider>
  );
};

export default TicketsContextProvider;
