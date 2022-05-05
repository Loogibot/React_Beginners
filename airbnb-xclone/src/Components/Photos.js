import React from 'react';
import photogroup  from '../Components/Images/photo-group.png'

export default function Photos() {
    return (
        <main>
            <img className="photo-group" src={photogroup} alt="group"></img>
        </main>
    )
}