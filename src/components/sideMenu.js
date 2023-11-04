import LogoHospital from '../hospital-svgrepo-com.svg'
import React, { useState } from 'react';
function SideMenu(props) {
    const [selectedMenuItem, setSelectedMenuItem] = useState('calendar');

    const handleMenuItemClick = (item) => {

        setSelectedMenuItem(item);
        props.onMenuItemClick(item);
    };
    return(
        <div className="sideMenu">
            <div className="logo">
                <img src={LogoHospital} alt="logo Fake Hospital" />
                <h1>Fake Hospital</h1>
            </div>
            <div className="borderHr" aria-hidden="true"></div>
            <nav>
                <ul>
                    <li className={selectedMenuItem === 'dashboard' ? 'active' : ''} onClick={() => handleMenuItemClick('dashboard')}><a href="#0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" icon-name="home" data-lucide="home"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg><span>Dashboard</span></a></li>
                    <li className={selectedMenuItem === 'calendar' ? 'active' : ''} onClick={() => handleMenuItemClick('calendar')}><a  href="#0" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" icon-name="calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg><span>Calendar</span></a></li>
                </ul>
            </nav>
        </div>
    );
    
}

export default SideMenu;