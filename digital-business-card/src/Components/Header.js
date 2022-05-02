import React from 'react';
import headShot from './Images/head-shot-luigi.png'

export default function Header() {
    return (
        <nav className="header">
            <img className="headshot" src={headShot} alt="headshot"/>
            <h1 className="first-last-name">Luigi Mota</h1>
            <h3 className="job-title">Frontend Developer</h3>
            <h5 className="web-site">luigimota.com</h5>


        </nav>

    )
};