import React from 'react';
import picture from '../Components/Images/image 12.png'
import star from '../Components/Images/Star.png'

export default function Card() {
    return (
        <div className='card'>
            <img src={picture} alt='pic' className='card-picture'></img>
            <div className='card-info'>
                <img src={star} alt='star' className='card-star'></img>
                <h6>5.0</h6>
            </div>
        </div>
    )
}