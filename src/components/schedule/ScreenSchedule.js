import React, { useEffect, useState } from 'react'
import { Navbar } from '../userExperience/Navbar'

import {Calendar,momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/uiAction';
import { eventClearActiveEvent, eventSetActive, eventStartLoading } from '../../actions/eventsAction';
import { AddNewFab } from '../userExperience/addNewFab';
import { DeleteEventFab } from '../userExperience/DeleteEventFab';
const localizer = momentLocalizer(moment)

/* const events=[{
  title:'I Starting in my new job',
  start:moment().toDate(),
  end:moment().add(2,'hours').toDate(),
  bgcolor:'#fafa',
  notes:'reto',
  user:{
    _id:'123',
    name:'Edison'
  }
}] */



export const ScreenSchedule = () => {
  const {events,activeEvent} = useSelector(state => state.calendar)
  const {uid} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [lastView, setLastView] = useState(localStorage.getItem('LastView')|| 'month')

    useEffect(() => {
      dispatch(eventStartLoading())
    }, [dispatch])

    const onDoubleClick=(e)=>{
      dispatch(uiOpenModal())
      
    }

    const onSelectEvent=(e)=>{
      dispatch(eventSetActive(e))
      
    }

    const onViewChange=(e)=>{
      setLastView(e)
      localStorage.setItem('LastView',e)
    }

    const onSelectSlot=(e)=>{
      dispatch(eventClearActiveEvent())
    }

    const eventStyleGetter=(event, start, end, isSelected)=>{
      
      

      const style={
        backgroundColor:(uid===event.user._id)?'#367CF7':'#465660',
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
             onDoubleClickEvent={onDoubleClick}
             onSelectEvent={onSelectEvent}
             eventPropGetter={eventStyleGetter} 
             onView={onViewChange} 
             onSelectSlot={onSelectSlot}
             selectable={true}
             view={lastView}
             components={{
               event:CalendarEvent
             }}
          />
          <AddNewFab/>
          {
            (activeEvent) && <DeleteEventFab/>
          }
          <CalendarModal/>
        </div>
    )
}
