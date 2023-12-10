
import Navbar from "../Navbar"
import NewMeet from "../NewMeet"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import "./index.css"

const myMeetings = [{ id: 1, when: new Date(), who: "akhil@gamil.com", agenda: "developer testing" }, { id: 2, when: new Date(), who: "akhil@gamil.com", agenda: "developer testing" }, { id: 3, when: new Date(), who: "akhil@gamil.com", agenda: "developer testing" }, { id: 4, when: new Date(), who: "akhil@gamil.com", agenda: "developer testing" }]

const Meetings = () => {
    const [meetings, setMeetings] = useState([...myMeetings])
    const navigate = useNavigate();

    // useEffect with an empty dependency array, similar to componentDidMount
    // useEffect(() => {
    //     // This code will run once when the component mounts
    //     // You can fetch data, perform initial setup, etc.

    //     // For example, if you have an asynchronous operation (e.g., fetching data), you can do something like this:
    //     const fetchData = async () => {
    //         try {
    //             // Perform your asynchronous operation here
    //             // For example, fetching data from an API
    //             const response = await fetch('your-api-endpoint');
    //             const data = await response.json();

    //             // Update state with the fetched data

    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     // Call the fetchData function
    //     fetchData();

    //     // Cleanup function (optional)
    //     return () => {
    //         // This function will run when the component unmounts
    //         // You can perform cleanup tasks here if necessary
    //     };
    // }, []); // Empty dependency array means this effect will run once when the component mounts

    const newMeetButton = () => {
        navigate("/new-metting")
    }

    return (
        <>
            <Navbar />
            <div className="meetings-main-container">
                <div className="new-button-container">
                    <button onClick={newMeetButton} className="new-metting-button" type="button">New Metting</button>
                </div>

                <ul className="mettings-cards-container">
                    {meetings.map((eachItem) => (
                        <NewMeet key={eachItem.id} newItem={eachItem} />
                    ))}
                </ul>

            </div>
        </>
    )


}


export default Meetings