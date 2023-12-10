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
                    <div>
                        <label><FaRegCalendarAlt /></label>
                        <DatePicker selected={addNewMeet.when} onChange={handleDateChange} />
                    </div>
                    <div>
                        <label><MdAccessTimeFilled/></label>
                        <TimePicker value={addNewMeet.startTime} onChange={handleStartTimeChange} />
                    </div>
                    <div>
                        <label>End Time:</label>
                        <TimePicker value={addNewMeet.endTime} onChange={handleEndTimeChange} />
                    </div>

                    <div>
                        <label>Who:</label>
                        <input
                            type="text"
                            name="who"
                            value={addNewMeet.who}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Agenda:</label>
                        <input
                            type="text"
                            name="agenda"
                            value={addNewMeet.agenda}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Add Meeting</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddNewMeet;
