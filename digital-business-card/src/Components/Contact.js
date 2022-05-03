import React from 'react';


export default function Contact() {
    return (
        <nav className="contact">
            <h1 className="first-last-name">Luigi Mota</h1>
            <h5 className="job-title">Frontend Developer</h5>
            <h5 className="job-title">Mobile Developer</h5>
            <h6 className="web-site">luigimota.com</h6>

            <button className="email-button"> <i class="material-icons" >mail</i> Email</button>
            <button className="linkedin-button"> <i class="material-icons" >link</i> LinkedIn</button>

        </nav>
    )
};