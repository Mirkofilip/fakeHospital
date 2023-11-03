import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default class Calendar extends React.Component {
    render() {
      return (
        <div className="col-span-12 xl:col-span-8 2xl:col-span-9 box">
        <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          weekends={false}
          events={[
            { title: 'patient 1', date: '2023-11-07' },
            { title: 'patient 2', date: '2023-11-17' },
            { title: 'patient 3', date: '2023-11-23' }
          ]}
        />
        </div>
      )
    }
  }