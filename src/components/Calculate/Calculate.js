import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
// import { ToastContainer } from 'react-toastify/dist/components';
import { addToLocalStorage, getStoredData } from '../../utilities/localstorage';
import './Calculate.css';

const Calculate = ({ calculation }) => {

    // console.log(props);
    let totalTime = 0;
    for (const activity of calculation) {
        totalTime = totalTime + activity.time;
    }

    // console.log(props);

    const [breakTime, setBreakTime] = useState(0);

    useEffect(() => {
        let storedData = localStorage.getItem('break-time');
        storedData = JSON.parse(storedData);
        setBreakTime(storedData);

    }, [])

    const handleBreakTime = (time) => {
        addToLocalStorage(time);
    }

    const showingToastWithRoast = () => {
        toast.success("Sorry Roast is Khotom", {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    return (
        <div className='calculate'>
            <div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
            <div>
                <h3 className='header-text'>Add A Break</h3>
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
                <h3 className='header-text'>Exercise Details</h3>
                <div className='exercise-time'>
                    <p><b>Exercise time: {totalTime}</b>seconds</p>
                </div> <br />
                <div className='break-time'>
                    <p><b>Break time: {breakTime}</b>seconds</p>
                </div>
            </div>

            <div>
                <button onClick={showingToastWithRoast} className='activity-btn'>Activity Completed</button><ToastContainer />
            </div>
        </div>
    );
};

export default Calculate;