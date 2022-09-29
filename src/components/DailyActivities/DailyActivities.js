import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Calculate from '../Calculate/Calculate';
import './DailyActivities.css';

const DailyActivities = () => {

    const [activities, setActivities] = useState([]);
    // const [calculate, setCalculate] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, []);

    return (
        <div className='activity-container'>

            <div>
                <h2>Select Today's Activities</h2>
                <div className='activity-select-container'>
                    {
                        activities.map(activity => <Activity
                            key={activity.id}
                            activity={activity}
                        ></Activity>)
                    }
                </div>

            </div>

            <div className='activity-calculate-container'>
                <Calculate></Calculate>
            </div>
        </div>
    );
};

export default DailyActivities;