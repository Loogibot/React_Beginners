import React from 'react';
import picture from '../Components/Images/image 12.png'
import star from '../Components/Images/Star.png'

const rating = "5.0"
const count = "(6)"

export default function Card() {
    return (


        <div className='card'>
                <img src={picture} alt='pic' className='card-photo'></img>
            <div className='card-info'>
                <div className='card-score'>
                    <img src={star} alt='star' className='card-star'></img>
                    <span className='card-rating'>{rating}</span> 
                    <span className='card-count'> {count} • USA</span>
                </div>

                <p className='card-detail'>Life lessons with Katie Zaferes</p>
                <div className='card-bottom-line'>
                    <span className='card-price'>From $136</span><span className='card-person'> / person</span>
                </div>
            </div>
        </div>
    )
}