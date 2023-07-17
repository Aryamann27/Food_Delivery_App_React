import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useAuthContext } from '../hooks/useAuthContext';
import { useState, useEffect, useContext} from 'react';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { Reservation } from '../context/Reservation';
import { useNavigate } from 'react-router-dom';

function Card_Dining({resto}) {
    
    const {user} = useAuthContext();
    const [isDisabled, setIsDisabled] = useState(true);
    const navigate = useNavigate();

    const {state, dispatch} = useContext(Reservation);
    const {reserved} = state;


    useEffect(()=>{
        if(user){
          setIsDisabled(false);
        }
    }, [user])

    const handleMakeReservation = ()=>{
      const existingHotel = reserved.hotels.find((x)=> x._id===resto._id);

      if(!existingHotel)
      {
        dispatch({type: 'MAKE_RESERVATION', payload:resto});
        navigate('/reservations');
        
      }
      else{
        alert('You have already made a reservation here.');
      }
    }


  return (
    <Card className='card card-font' style={{ width: '20rem' }}>
        
      <Card.Img style={{height:"250px", width:"100%"}} variant="top" src={resto.imgUrl} />

      <Card.Body>

        <div style={{display:"flex", justifyContent:"space-between"}}>
        <Card.Title className='card-title' style={{fontSize:"1.5rem"}}>{resto.name}
        </Card.Title>
        
        <span style={{backgroundColor:"green", padding:"0rem 0.25rem 0rem 0.25rem", borderRadius:"0.5rem", color:"white"}}>   
        {resto.rating}<span style={{color:"white", padding:"0.5rem 0rem 0rem 0.5rem"}} className="fa fa-star checked"></span>
        </span>
        </div>

        <Card.Text style={{marginTop:"0.5rem"}}>
        <span style={{fontSize:"1rem", fontWeight:"500", marginTop:"1rem", color:"grey"}}>
            Approx : {resto.approxPrice}
        </span>
        <br />
        <span style={{fontSize:"1rem", fontWeight:"400", marginTop:"1rem", color:"grey"}}>
        {resto.category}
        </span>
        </Card.Text>

        <Button disabled={isDisabled} onClick={handleMakeReservation} variant="primary">Make Reservation</Button>
       
      </Card.Body>
    </Card>
  );
}

export default Card_Dining;