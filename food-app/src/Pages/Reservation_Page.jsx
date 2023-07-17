import React, { useState, useEffect, useContext } from "react";
import { Reservation } from "../context/Reservation";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import MessageBox from '../components/MessageBox';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import {default as dateTime} from '../images/date_time_icon.png'

export default function Reservation_Page() {

  const {state, dispatch} = useContext(Reservation);
  const {reserved: { hotels },} = state;
  const [reservationData, setReservationData] = useState({ date: "", time: "" });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCancelReservation = (resto)=>{
    dispatch({type:'CANCEL_RESERVATION', payload:resto});
  }

  const handleInputChange = (event) => {
    setReservationData({ ...reservationData, [event.target.name]: event.target.value });
  };
  
  const handleReservation = (resto) => {
    
    const updatedHotels = {...resto, ...reservationData};

    dispatch({ type: 'MAKE_RESERVATION', payload: updatedHotels });
    setShow(false);
  };


  return (
    <div style={{marginBottom:"15rem"}}>
       <header style={{textAlign:"center", marginTop:"1.5rem", marginBottom:"1.5rem"}}>
      <h1>Reservations</h1>
      <span>________________________________________________</span>
      </header>
      
      {
        hotels.length===0?(
          <div style={{textAlign:"center", marginLeft:"20rem", marginRight:"20rem"}}>
          <MessageBox>
            You haven't made any reservations recently.
          </MessageBox>
          </div>
        ):(
      <div style={{marginLeft:"15rem", marginRight:"15rem"}}>
      <Table>
      <thead >
        <tr>
          <th style={{border:"none"}}></th>
          <th style={{border:"none"}}></th>
          <th style={{border:"none", fontSize:"1.5rem"}}>Hotel Name</th>
          <th style={{border:"none", fontSize:"1.5rem"}}>Date and Time</th>
        </tr>
      </thead>
      <tbody>
      {
        hotels.map((resto)=>(
        <tr key={resto._id}>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Reservation Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <input
                type="date"
                name="date"
                value={reservationData.date}
                onChange={handleInputChange}
                required
                />
                {' '}
                <input
                type="time"
                name="time"
                value={reservationData.time}
                onChange={handleInputChange}
                required
                />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="light" onClick={handleClose}>
                Close
                </Button>
                <Button variant="primary" onClick={() => handleReservation(resto)} >
                Reserve
                </Button>
                </Modal.Footer>
              </Modal>

        <td style={{border:"none"}}>
          <button onClick={handleShow} style={{border:"none", backgroundColor:"white"}}>
          <img src={dateTime} style={{width:"40px", height:"40px", marginTop:"1.1rem"}} />
          </button>
        </td>

        <td style={{border:"none"}}>
        <img src={resto.imgUrl} alt={resto.name} style={{ height: "75px", width: "75px", borderRadius: "37.5px" }} />
        </td>

        <div style={{marginTop:"1rem"}}>
        <td style={{marginTop:"1rem", fontSize:"1.2rem", border:"none"}}>{resto.name}</td>
        </div>
        
    
        <td style={{border:"none"}}>
          <div style={{marginTop:"1.5rem"}}>
            <p>
            Date : {resto.date}</p>
            <p>
              Time : {resto.time}
            </p>
          </div>
        </td>
        

        <td style={{border:"none"}}>
          <Button style={{marginTop:"1.1rem"}} variant="danger" onClick={()=>handleCancelReservation(resto)}>
            Cancel
          </Button>
        </td>
      </tr>
      ))
        }
        
      </tbody>
    </Table>
    </div>)
      }
    </div>
      
    
  );
}
