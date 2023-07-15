import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css'
import {default as Veg} from '../images/veg_icon.png'
import {default as NonVeg} from '../images/nonVeg_icon.png'
import { useState, useEffect, useContext } from 'react';
import { Store } from './Store';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

function CardComp({item}) {

  const [isVeg, setIsVeg] = useState(true);
  const navigate = useNavigate();

  const {user} = useAuthContext();
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (item.deitCat === "Non-Veg") {
      setIsVeg(false);
    }
  }, [item.deitCat]);

  useEffect(()=>{
    if(user){
      setIsDisabled(false);
    }
  }, [user])

  const {state, dispatch:cxtDispatch} = useContext(Store);
  const {cart} = state;
  const handleAddToCart = () =>{
    const existingItem = cart.cartItems.find((x)=>x._id===item._id);
    const quantity = existingItem ? existingItem.quantity + 1 : 1;
    cxtDispatch({type:'ADD_TO_CART', payload:{...item, quantity}});
    navigate('/cart');
  };

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

        <p style={{fontSize:"1.25rem", fontWeight:"500"}}>
            Price : Rs.{item.price}
        </p>
        <Button disabled={isDisabled} variant="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardComp;