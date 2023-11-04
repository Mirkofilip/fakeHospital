import { motion } from 'framer-motion';

function HeaderCalendar() {
    return(
        <>
        <div className="row">
        <div className="col-md-12">
          <div className="breacrumb">Application / <span>Dashboard</span></div>
          <div className="borderHrBlue" aria-hidden="true"></div>
          <div className="fakeAccess" aria-hidden="true"></div>
        </div>
      </div>
        <div className="row">
          <div className="col-md-12 title">
            <motion.h2 initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>Dashboard</motion.h2>
          </div>
        </div>
        </>
    );
}

export default HeaderCalendar;