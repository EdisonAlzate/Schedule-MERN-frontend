
import moment from 'moment';
import { types } from '../types/types';

const initialState={
    events:[{
        
  title:'I Starting in my new job',
  start:moment().toDate(),
  end:moment().add(2,'hours').toDate(),
  bgcolor:'#fafa',
  notes:'reto',
  user:{
    _id:'123',
    name:'Edison'
  }
    }

    ],
    activeEvent:null
}

export const calendarReducer=(state=initialState,action)=>{
    switch (action.type) {
         case types.eventSetActive:
             return{
                ...state,
                activeEvent:action.payload

             }

         case types.eventAddNew:
             return{
                 ...state,
                 events:[
                     ...state.events,
                     action.payload
                 ]
             }
       
    
        default:
            return state
    }
}