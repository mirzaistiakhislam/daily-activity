import React from 'react';
import './Activity.css';

const Activity = (props) => {
    console.log(props);
    const { picture, name, time } = props.activity;
    return (
        <div className='activity'>
            <img src={picture} alt="" />
            <div className='activity-info'>
                <h2>Name: {name}</h2>
                <p>Time required: <b>{time}s</b></p>
            </div>
            <button className='btn-list'>Add to list</button>
        </div>
    );
};

export default Activity;