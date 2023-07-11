import Card from 'react-bootstrap/Card';
import {default as deliveryImg} from '../images/deliveryImg.png';
import {default as diningImg} from '../images/diningImg.png';
import { Link } from 'react-router-dom';
function HomeCard() {
  return (
    <div style={{display:"flex"}} className='home-card-container'>
    <Link to='/delivery' style={{textDecoration:"none"}}> 
    <Card className='home-card' style={{ width: '24rem', height:"19rem" }}>
      <Card.Img variant="top" style={{height:"204px"}} src={deliveryImg} />
      <Card.Body>
        <Card.Title>Delivery</Card.Title>
        <Card.Text>
          Stay home and order at your doorstep
        </Card.Text>
      </Card.Body>
    </Card></Link>

    <Link to='/dining' style={{textDecoration:"none"}}>
    <Card className='home-card' style={{ width: '24rem', height:"19rem" }}>
      <Card.Img variant="top" src={diningImg} />
      <Card.Body>
        <Card.Title>Dining</Card.Title>
        <Card.Text>View the city's favourate dining venues
        </Card.Text>
      </Card.Body>
    </Card></Link>
    </div>
  );
}

export default HomeCard;