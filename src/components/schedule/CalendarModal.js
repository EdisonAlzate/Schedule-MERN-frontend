import React, { useState } from 'react'
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment'



const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root');

const now=moment().minutes(0).seconds(0).add(1,'hours')
const nowPlus1=now.clone().add(1,'hours')


export const CalendarModal = () => {
   
const [dateStart, setDateStart] = useState(now.toDate())
const [dateEnd, setDateEnd] = useState(nowPlus1.toDate())

    const closeModal=()=>{
        
    }

    const handleStartDateChange=(e)=>{
        setDateStart(e)
    }

    const handleEndDateChange=(e)=>{
        setDateEnd(e)
    }
   
    return (
        <Modal
          isOpen={ true }
          onRequestClose={ closeModal }
          style={ customStyles }  
          
          className="modal"
          overlayClassName="modal-fondo"
          /* contentLabel="Modal example" */
          >
          <h1> New Event </h1>
          <hr />
          <form className="container">

    <div className="form-group">
        <label>Date and hour start</label>
        <DateTimePicker
           onChange={handleStartDateChange}
           value={dateStart}
           className="form-control"
        />
    </div>

    <div className="form-group">
        <label>Date and hour end</label>
        <DateTimePicker
           onChange={handleEndDateChange}
           value={dateEnd}
           minDate={dateStart}
           className="form-control"
        />
    </div>

    <hr />
    <div className="form-group">
        <label>Title and notes</label>
        <input 
            type="text" 
            className="form-control"
            placeholder="Títle of event"
            name="title"
            autoComplete="off"
        />
        <small id="emailHelp" className="form-text text-muted">A short description</small>
    </div>

    <div className="form-group">
        <textarea 
            type="text" 
            className="form-control"
            placeholder="Notes"
            rows="5"
            name="notes"
        ></textarea>
        <small id="emailHelp" className="form-text text-muted">More information</small>
    </div>

    <button
        type="submit"
        className="btn btn-outline-primary btn-block"
    >
        <i className="far fa-save"></i>
        <span> Save</span>
    </button>

</form>
          </Modal>
    )
}
