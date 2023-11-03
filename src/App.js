// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import SideMenu from './components/sideMenu';
import Calendar from './components/calendar';
import BoxTop from './components/boxTop'

function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useState('calendar');

  const handleMenuItemClick = (item) => {
    setSelectedMenuItem(item);
  };

  return (
    <>
    <div className="fullContainer">
      <SideMenu onMenuItemClick={handleMenuItemClick} />
      <div className="dashboard">
        <div className="breacrumb">Application / <span>Calendar</span></div>
        <div className="borderHrBlue" aria-hidden="true"></div>
        <div className="row">
          <div className="col-md-12 title">
            <h2>Calendar</h2>
          </div>
        </div>
        <div className="grid grid-cols-12">
          {selectedMenuItem === 'calendar' && <BoxTop />}
          {selectedMenuItem === 'calendar' && <Calendar />}
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
