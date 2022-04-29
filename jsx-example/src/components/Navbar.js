import React from 'react';
import reactSmallIcon from './images/react_small_icon.png'

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={reactSmallIcon} />
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}