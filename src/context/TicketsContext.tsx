import React, { createContext, useState } from "react";

export const TicketsContext = createContext(null);

export interface Tickets {
  _id: string;
  number: string;
  owner: {
    userId: number;
    firstName: string;
    lastName: string;
    avatar: string;
    specialities: string;
  };
  status: string;
  description: string;
  asset: {
    assetId: number;
    name: string;
    geoCode: string;
    kmFrom: string;
    kmTo: string;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const TicketsContextProvider: React.FC = (props) => {
  const [tickets, setTickets] = useState<Tickets[]>([]);
  const [displayTicketId, setDisplayTicketId] = useState<string>("");

  // const parsTickets = (tickets: Tickets[]) => {
  //   setTickets(tickets);
  // };

  return (
    <TicketsContext.Provider
      value={{ tickets, setTickets, displayTicketId, setDisplayTicketId }}
    >
      {props.children}
    </TicketsContext.Provider>
  );
};

export default TicketsContextProvider;
