import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {default as menuImg1} from '../images/menu/menu_img1.jpg'
import '../App.css'

function CardComp() {
  return (
    <Card className='card' style={{ width: '18rem'}}>
      <Card.Img variant="top" src={menuImg1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <p>
        <select className='m-2 bg-light w-25 h-10 rounded'>
            {
                Array.from(Array(6), (e,i)=>{
                    return(
                        <option key={i+1} value={i+1}>{i+1}</option>
                    )
                })
            }
        </select>
        
        <select className='m-2 h-10 w-50 rounded'>
            <option value="half">
                Half
            </option>
            <option value="full">
                Full
            </option>
        </select>
        </p>

        <p style={{fontSize:"1.25rem", fontWeight:"500"}}>
            Price :
        </p>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComp;