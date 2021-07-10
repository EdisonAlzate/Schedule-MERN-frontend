import React from 'react'
import { Navbar } from '../userExperience/Navbar'

import {Calendar,momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
const localizer = momentLocalizer(moment)

const events=[{
  title:'I Starting in my new job',
  start:moment().toDate(),
  end:moment().add(2,'hours').toDate(),
  bgcolor:'#fafa',
  notes:'reto'
}]



export const ScreenSchedule = () => {

    const eventStyleGetter=(event, start, end, isSelected)=>{
      console.log(event, start, end, isSelected)
      const style={
        backgroundColor:'green',
        borderRadius:'0px',
        opacity:0.8,
        display:'block',
        color:'white'
      }

      return{
        style
      }
    }

    return (
        <div className="schedule-screen">
        
          <Navbar/> 

          <Calendar
             localizer={localizer}
             events={events}
             startAccesor="start"
             endAccessor="end" 
             eventPropGetter={eventStyleGetter}  
          />
        </div>
    )
}
