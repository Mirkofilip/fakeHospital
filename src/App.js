import React, { useState } from 'react';
import './App.css';
import SideMenu from './components/sideMenu';
import Calendar from './components/calendar';
import BoxTop from './components/boxTop';
import BoxChartPie from './components/boxChartPie';
import BoxChartLine from './components/boxChartLine';
import HeaderCalendar from './components/headerCalendar';
import HeaderDashboard from './components/headerDashboard';
import Card from './components/card';
import MenuMobile from './components/MenuMobile';

function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useState('calendar');

  const handleMenuItemClick = (item) => {
    setSelectedMenuItem(item);
  };

  return (
    <>
    <MenuMobile onMenuItemClick={handleMenuItemClick} />
    <div className="fullContainer">
      <SideMenu onMenuItemClick={handleMenuItemClick} />
      <div className="dashboard">
        <div className="container-fluid">
          {selectedMenuItem === 'calendar' && <HeaderCalendar />}
          {selectedMenuItem === 'dashboard' && <HeaderDashboard />}
          {selectedMenuItem === 'dashboard' && <Card />}

          <div className="row">
            {selectedMenuItem === 'calendar' && <BoxTop />}
            {selectedMenuItem === 'calendar' && <Calendar />}
            {selectedMenuItem === 'dashboard' && <BoxChartPie />}
            {selectedMenuItem === 'dashboard' && <BoxChartLine />}
          </div>
        </div> {/* container*/}
      </div>
    </div>
    </>
  );
}

export default App;
