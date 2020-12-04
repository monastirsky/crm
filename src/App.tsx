import React, { useEffect, useContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AllTickets from "./components/AllTickets";
import OneTicket from "./components/OneTicket";
import Empty from "./components/Empty";
import { TicketsContext } from "./context/TicketsContext";
import axios from "axios";
import style from "./style/app.module.css";

function App() {
  const { setTickets } = useContext(TicketsContext);

  useEffect(() => {
    async function setContext() {
      try {
        const request = await axios.get("http://localhost:3005/ticket");
        setTickets(request.data);
      } catch (err) {
        alert(err);
      }
    }
    setContext();
  }, [setTickets]);

  return (
    <BrowserRouter>
      <div className={style.app}>
        <div className={style.header}>
          <span>Tickets</span>
        </div>
        <div className={style.mainContainer}>
          <AllTickets />
          <Route exact path="/" component={Empty} />
          <Route path="/:ticket_id" component={OneTicket} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
