import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Calculate from '../Calculate/Calculate';
import './DailyActivities.css';

const DailyActivities = () => {

    const [activities, setActivities] = useState([]);
    const [calculation, setCalculation] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, []);

    const handleAddToCart = (activity) => {
        const newCalculation = [...calculation, activity];
        setCalculation(newCalculation);
    }

    return (
        <div className='activity-container'>

            <div>
                <h2 className='headerTwo'>Select Today's Activities</h2>
                <div className='activity-select-container'>
                    {
                        activities.map(activity => <Activity
                            key={activity.id}
                            activity={activity}
                            handleAddToCart={handleAddToCart}
                        ></Activity>)
                    }
                </div>
            </div>

            <div className='activity-calculate-container'>

                <Calculate calculation={calculation}></Calculate>
            </div>
        </div>
    );
};

export default DailyActivities;