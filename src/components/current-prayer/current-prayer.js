import React from "react";
import "./current-prayer.css";

// This is for the current prayer shown at the top of the screen - this should change based on the time and country. 
// At the moment, prayer name, time and image are dummy values

const CurrentPrayer = ({data}) => {
    return (
        <div className="prayer">

            <div className="top">
                <div>
                <p className="prayer-name">Isha'a</p>
                <p className="prayer-time">21:31</p>
            </div>
            <img alt="prayer" className="prayer-icon" src="icons/moon.png"></img>
            </div>
        </div>
    );
};

export default CurrentPrayer;