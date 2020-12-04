import { useEffect, useContext, useMemo } from "react";
import { TicketsContext, Tickets } from "../context/TicketsContext";
import style from "../style/one-ticket.module.css";
import { prepareDate, crateStatusBlock } from "../functions";
// import { useParams } from "react-router-dom";

const OneTicket = (props: any) => {
  const { tickets, displayTicketId, setDisplayTicketId } = useContext(
    TicketsContext
  );

  const id = props.match.params["ticket_id"];
  // const {ticket_id: id} = useParams();

  const ticketDisplayedNow = useMemo(() => {
    return tickets.find((element: Tickets) => element._id === id);
  }, [id, tickets]);

  useEffect(() => {
    setDisplayTicketId(id);
  }, [displayTicketId, id, setDisplayTicketId]);

  return ticketDisplayedNow ? (
    <div className={style.wrapper}>
      <div className={style.header}>
        <span>
          TICKET NO. <span>{ticketDisplayedNow.number}</span>
        </span>
        <span>LAST UPDATE {prepareDate(ticketDisplayedNow.createdAt)}</span>
      </div>
      <div className={style.container}>
        <p className={style.containerName}>Owner</p>
        <div className={style.owner}>
          <img
            className={style.avatar}
            src={ticketDisplayedNow.owner.avatar}
            alt="avatar"
          />
          <div className={style.userInfoContainer}>
            <span className={style.userName}>
              {ticketDisplayedNow.owner.firstName}{" "}
              {ticketDisplayedNow.owner.lastName}
            </span>
            <span className={style.userSpecialities}>
              {ticketDisplayedNow.owner.specialities}
            </span>
          </div>
        </div>
      </div>
      <div className={style.container}>
        <p className={style.containerName}>Details</p>
        <div className={style.details}>
          <div className={style.containerElement}>
            <span className={style.nameOfDescription}>Reported</span>
            <span>{prepareDate(ticketDisplayedNow.createdAt)}</span>
          </div>
          <div className={style.containerElement}>
            <span className={style.nameOfDescription}>Status</span>
            <span>{crateStatusBlock(ticketDisplayedNow.status)}</span>
          </div>
          <div className={style.containerElement}>
            <span className={style.nameOfDescription}>Description</span>
            <span>{ticketDisplayedNow.description}</span>
          </div>
        </div>
      </div>
      <div className={style.container}>
        <p className={style.containerName}>Asset</p>
        <div className={style.details}>
          <div className={style.containerElement}>
            <span className={style.nameOfDescription}>Name</span>
            <span>{ticketDisplayedNow.asset.name}</span>
          </div>
          <div className={style.containerElement}>
            <span className={style.nameOfDescription}>GeoCode</span>
            <span>{ticketDisplayedNow.asset.geoCode}</span>
          </div>
          <div className={style.containerElement}>
            <span className={style.nameOfDescription}>Location</span>
            <div className={style.locationContainer}>
              <span className={style.location}>
                {ticketDisplayedNow.asset.kmFrom}
              </span>
              <span className={style.location}>
                {ticketDisplayedNow.asset.kmTo}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div />
  );
};

export default OneTicket;
