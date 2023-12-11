import React, { useState } from "react";
import Navbar from "../Navbar";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "./index.css";

const AddNewMeet = () => {
    const [addNewMeet, setAddNewMeet] = useState({
        when: new Date(),
        startTime: "12:00",
        endTime: "12:30",
        who: "",
        agenda: ""
    });

    const handleDateChange = (date) => {
        setAddNewMeet({ ...addNewMeet, when: date });
    };

    const handleStartTimeChange = (startTime) => {
        setAddNewMeet({ ...addNewMeet, startTime });
    };

    const handleEndTimeChange = (endTime) => {
        setAddNewMeet({ ...addNewMeet, endTime });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddNewMeet({ ...addNewMeet, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to the server
        console.log("Form submitted:", addNewMeet);
        // Reset the form or redirect if needed
    };

    return (
        <>
            <Navbar />
            <div>
                <form onSubmit={handleSubmit}>
                    <h1 className="Meeting-heading">Add Title</h1>
                    <hr className="Meeting-underline"/>
                    <div>
                        <label className="meeting-label"><FaRegCalendarAlt className="icon-size"/></label>
                        <DatePicker className="date-picker" selected={addNewMeet.when} onChange={handleDateChange} />
                    </div>
                    <div>
                        <label className="meeting-label"><MdAccessTimeFilled className="icon-size"/></label>
                        <TimePicker className="date-picker" value={addNewMeet.startTime} onChange={handleStartTimeChange} />
                    </div>
                    <div>
                        <label className="meeting-label meeting-side-heading">End Time:</label>
                        <TimePicker className="date-picker" value={addNewMeet.endTime} onChange={handleEndTimeChange} />
                    </div>

                    <div>
                        <label className="meeting-label meeting-side-heading">Add Guests:</label>
                        <input className="date-picker"
                            type="text"
                            name="who"
                            value={addNewMeet.who}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="meeting-label meeting-side-heading">Agenda:</label>
                        <input className="date-picker meeting-text-area-element"
                            type="text"
                            name="agenda"
                            value={addNewMeet.agenda}
                            onChange={handleInputChange}
                            
                        />
                    </div>
                    <div>
                        <button className="new-metting-button" type="submit">Create</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddNewMeet;
