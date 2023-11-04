import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { motion } from 'framer-motion';

export default class Calendar extends React.Component {
    render() {
      return (
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay:0.2, duration: 0.5 }} className="col-md-8 col-sm-12 box">
        <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          weekends={true}
          events={[
            { title: 'patient 1', date: '2023-11-07' },
            { title: 'patient 2', date: '2023-11-17' },
            { title: 'patient 3', date: '2023-11-23' }
          ]}
        />
        </motion.div>
      )
    }
  }