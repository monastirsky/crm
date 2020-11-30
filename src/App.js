import React, { useEffect, useContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AllTickets from "./components/AllTickets";
import OneTicket from "./components/OneTicket";
import { TicketsContext } from "./context/TicketsContext";
import axios from "axios";

function App() {
  const { setTickets } = useContext(TicketsContext);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/Tapify/public-code-test/master/web-ui-test/tickets.json"
      )
      .then((result) => {
        setTickets(result.data);
      });
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <span className="logo">Tickets</span>
        </div>
        <div className="main-container">
          <AllTickets />
          <Route path="/:ticket_id" component={OneTicket} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
