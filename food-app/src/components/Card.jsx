import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css'
import { useItemsContext } from '../hooks/useItemsContext';
import {default as Veg} from '../images/veg_icon.png'
import {default as NonVeg} from '../images/nonVeg_icon.png'
import { useState, useEffect } from 'react';

function CardComp({item}) {

  const {dispatch} = useItemsContext()
  const [isVeg, setIsVeg] = useState(true);

  useEffect(() => {
    if (item.deitCat === "Non-Veg") {
      setIsVeg(false);
    }
  }, [item.deitCat]);

  return (
    <Card className='card items-card' style={{ width: '20rem'}}>
      <Card.Img style={{height:"250px", width:"100%"}} variant="top" src={item.imgUrl} />
      <Card.Body>

        <div style={{display:"flex", justifyContent:"space-between"}}>
        <Card.Title>{item.name}</Card.Title>
        {
          isVeg?(<img style={{width:"25px", height:"25px"}} src={Veg} />):(<img style={{width:"25px", height:"25px"}} src={NonVeg} />)
        }
        </div>
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
        </p>

        <p style={{fontSize:"1.25rem", fontWeight:"500"}}>
            Price : Rs.{item.price}
        </p>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComp;