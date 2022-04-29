import React from "react";
import reactLogo from "../src/images/react-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img 
                src={reactLogo}
                alt="React Logo"
                className="nav-icon"

            />

            <h3 className="nav--logo_text">ReactFacts</h3>
            <h3 className="nav--title">React Course - Project 1</h3>

        </nav>    
    )
}