// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import SideMenu from './components/sideMenu';
import Calendar from './components/calendar';
import BoxTop from './components/boxTop';
import BoxChartPie from './components/boxChartPie';
import BoxChartLine from './components/boxChartLine';
import { motion } from 'framer-motion';
// import BoxChartDoughnut from './components/BoxChartDoughnut';

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
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="breacrumb">Application / <span>Calendar</span></div>
            <div className="borderHrBlue" aria-hidden="true"></div>
          </div>
        </div>
          <div className="row">
            <div className="col-md-12 title">
              <motion.h2 initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>Calendar</motion.h2>
            </div>
          </div>
     
        {/* <div className="grid grid-cols-12"> */}

          <div className="row">
            {selectedMenuItem === 'calendar' && <BoxTop />}
            {selectedMenuItem === 'calendar' && <Calendar />}
            {selectedMenuItem === 'dashboard' && <BoxChartPie />}
            {selectedMenuItem === 'dashboard' && <BoxChartLine />}
            {/* {selectedMenuItem === 'dashboard' && <BoxChartDoughnut />} */}
          </div>
        </div> {/* container*/}
      </div>
    </div>
    </>
  );
}

export default App;
