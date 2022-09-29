import React from 'react';
import './Break.css';

const Break = () => {
    return (
        <div>
            <div>
                <h3>Add A Break</h3>
                <div className='add-a-break'>
                    <button className='ten-seconds'>
                        10s
                    </button>
                    <button className='ten-seconds'>
                        20s
                    </button>
                    <button className='ten-seconds'>
                        30s
                    </button>
                    <button className='ten-seconds'>
                        40s
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Break;