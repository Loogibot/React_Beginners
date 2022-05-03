import React from 'react';
import headShot from './Images/head-shot-luigi.png'

export default function Header() {
    return (
        <nav className="header">
            <img className="headshot" src={headShot} alt="headshot"/>

        </nav>

    )
};