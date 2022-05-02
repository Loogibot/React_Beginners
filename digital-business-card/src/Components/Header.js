import React from 'react';
import headShot from './Images/head-shot-luigi.png'

export default function Header() {
    return (
        <nav>
            <img className="headshot" src={headShot} alt="headshot"/>
            <h1 className="first-last-name">Luigi Mota</h1>


        </nav>

    )
};