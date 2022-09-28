import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBattery } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import logo from '../../images/daily-activity.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <FontAwesomeIcon className='icon' icon={faBattery} />
            <div className='website-name'>
                <h2>DAILY-ACTIVITY</h2>
            </div>
        </div>
    );
};

export default Header;