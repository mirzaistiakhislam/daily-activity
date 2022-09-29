import React, { useState } from 'react';
import { addToLocalStorage } from '../../utilities/localstorage';
import Break from '../Break/Break';
import './Calculate.css';

const Calculate = (props) => {

    const [breakTime, setBreakTime] = useState(0);

    const handleBreakTime = (time) => {
        // console.log(time);
        addToLocalStorage(time);
    }

    return (
        <div className='calculate'>
            <div>
                <h3>Add A Break</h3>
                <div className='add-a-break'>
                    <button onClick={() => { setBreakTime(10); handleBreakTime(10) }} className='ten-seconds'>
                        10s
                    </button>
                    <button onClick={() => { setBreakTime(20); handleBreakTime(20) }} className='ten-seconds'>
                        20s
                    </button>
                    <button onClick={() => { setBreakTime(30); handleBreakTime(30) }} className='ten-seconds'>
                        30s
                    </button>
                    <button onClick={() => { setBreakTime(40); handleBreakTime(40) }} className='ten-seconds'>
                        40s
                    </button>

                </div>
            </div>

            <div>
                <h3>Exercise Details</h3>
                <div className='exercise-time'>
                    <p><b>Exercise time: { }</b> <span>0</span>seconds</p>
                </div> <br />
                <div className='break-time'>
                    <p><b>Break time: {breakTime}</b> <span>0</span>seconds</p>
                </div>
            </div>

            <div>
                <button className='activity-btn'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Calculate;