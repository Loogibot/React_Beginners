import React from 'react';
import airbnblogo from '../Components/Images/airbnb-logo.png';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <img className='logo' src={airbnblogo} alt='logo'></img>

        </nav>
    )
}