import React, { useEffect, useContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AllTickets from "./components/AllTickets";
import OneTicket from "./components/OneTicket";
import Empty from "./components/Empty";
import { TicketsContext } from "./context/TicketsContext";
import axios from "axios";
import "./style/App.css";

function App() {
  const { setTickets } = useContext(TicketsContext);

  useEffect(() => {
    async function set() {
      const request = await axios.get(
        "https://raw.githubusercontent.com/Tapify/public-code-test/master/web-ui-test/tickets.json"
      );
      setTickets(request.data);
    }
    set();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <span className="logo">Tickets</span>
        </div>
        <div className="main-container">
          <AllTickets />
          <Route exact path="/" component={Empty} />
          <Route path="/:ticket_id" component={OneTicket} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
