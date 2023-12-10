
import React from "react";

import { CgBorderStyleDotted } from "react-icons/cg";

import "./index.css"



// Assuming NewMeet.js




const NewMeet = ({ newItem }) => {
    return (
        <li className="new-meet-item">
            <div className="calender">
                <div className="calender-details">
                    <div className="calender-item">
                        <p className="month">{newItem.when.toLocaleString('en-US', { month: 'long' }).substring(0, 3)}</p>
                    </div>
                    <div className="day-date-container">
                        <h2 className="date">{newItem.when.getDate()}</h2>
                        <CgBorderStyleDotted className="dots" />
                        <h2 className="day">{newItem.when.toLocaleString('en-US', { weekday: 'long' }).substring(0, 3)}</h2>
                    </div>
                </div>
            </div>
            <div className="event-details-container">
                <div>
                    <h1 className="event-name-heading">Event Name</h1>
                    <p className="event-details-para">Date: <span className="event-details-span">{newItem.when.toString()}</span></p>
                    <p className="event-details-para">Who: <span className="event-details-span" id="who">{newItem.who}</span></p>
                    <p className="event-details-para">Agenda: <span className="event-details-span">{newItem.agenda}</span></p>
                </div>
            </div>
        </li >
    );
};

export default NewMeet;
