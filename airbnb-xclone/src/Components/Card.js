import React from 'react';

import star from '../Components/Images/Star.png'

export default function Card(props) {
    return (
        <span className='card'>
                <img src={props.img} alt='pic' className='card-photo'></img>
            <div className='card-info'>
                
                <div className='card-score'>
                    <img src={star} alt='star' className='card-star'></img>
                    <span className='card-rating'>{props.rating}</span> 
                    <span className='card-count'> {props.count} • USA</span>
                </div>

                <p className='card-detail'>{props.details}</p>
                <div className='card-bottom-line'>
                    <span className='card-price'>From ${props.price}</span><span className='card-person'> / person</span>
                </div>
            </div>
        </span>
    )
}