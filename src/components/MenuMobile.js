import LogoHospital from '../hospital-svgrepo-com.svg';
import React, { useState } from 'react';
function MenuMobile(props){
    const [selectedMenuItem, setSelectedMenuItem] = useState('calendar');


    const handleMenuItemClick = (item) => {

        setSelectedMenuItem(item);
        props.onMenuItemClick(item);
        closeMenu();
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

    return(
        <>
            <div className="container headerMobile">
                <div className="col-md-12">
                     <div className={`hamburger`} onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" icon-name="bar-chart-2" data-lucide="bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                    </div>
                </div>
            </div>
            <div className={`floatMenu ${isMenuOpen ? 'active' : ''}`}>
            <div className="logo">
                    <img src={LogoHospital} alt="logo Fake Hospital" />
                    <h1>Fake Hospital</h1>
                </div>
                <nav>
                    <ul>
                        <li className={selectedMenuItem === 'dashboard' ? 'active' : ''} onClick={() => handleMenuItemClick('dashboard')}><a href="#0"><span>Dashboard</span></a></li>
                        <li className={selectedMenuItem === 'calendar' ? 'active' : ''} onClick={() => handleMenuItemClick('calendar')}><a  href="#0" ><span>Calendar</span></a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default MenuMobile;