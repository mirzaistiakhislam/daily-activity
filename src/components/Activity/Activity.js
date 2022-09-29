import React from 'react';
import './Activity.css';

const Activity = ({ activity, handleAddToCart }) => {
    // console.log(props);
    // console.log();

    const { picture, name, time } = activity;
    return (
        <div className='activity'>
            <img src={picture} alt="" />
            <div className='activity-info'>
                <h2>{name}</h2>
                <p>Time required: <b>{time}s</b></p>
            </div>
            <button onClick={() => handleAddToCart(activity)} className='btn-list'><b>Add to list</b></button>
        </div>
    );
};

export default Activity;