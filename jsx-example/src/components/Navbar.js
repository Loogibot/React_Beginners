import React from "react";
import reactLogo from "./images/react-logo.png"


export default function Navbar() {
    return (
        <div>
            <img 
                src={reactLogo}
                alt="React Logo"
                className="nav-icon"

            />
            <h1>This is the Navbar</h1>

        </div>
    )
}