import AllTickets from "./AllTickets";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { TicketsContext } from "../context/TicketsContext";

const Wrapper = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <span className="logo">Tickets</span>
      </div>

      <AllTickets />
    </div>
  );
};

export default Wrapper;
