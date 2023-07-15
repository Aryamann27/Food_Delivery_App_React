import React, { useContext } from "react";
import { Store } from "../components/Store";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import MessageBox from '../components/MessageBox';
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

export default function Cart_Page() {
  const { state, dispatch: cxtDispatch } = useContext(Store);
  const { cart: { cartItems }, } = state;

  const updateCartHandler = (item, quantity) => {
    const updatedItem = { ...item, quantity };
    cxtDispatch({ type: 'ADD_TO_CART', payload: updatedItem });
  };

  const removeItemHandler = (item)=>{
    cxtDispatch({ type: 'REMOVE_FROM_CART', payload: item });
  }

  const handleCheckOut = () =>{

  }

  return (
    <div>
      <header style={{textAlign:"center", marginTop:"1.5rem", marginBottom:"1.5rem"}}>
      <h1>MY CART</h1>
      <span>________________________________________________</span>
      </header>
      <Row style={{marginBottom:"8rem", textAlign:"center", width:"50%", marginLeft:"31rem"}}>
        <Col md={8} style={{}}>
          {cartItems.length === 0 ? (
            <MessageBox>
              Cart is empty. <Link to="/delivery">Order something</Link>
            </MessageBox>
          ) : (
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroup.Item key={item._id} style={{ border: "none" }}>
                  <div style={{ display: "flex" }}>

                    <img src={item.imgUrl} alt={item.name} style={{ height: "75px", width: "75px", borderRadius: "37.5px" }} />{' '}

                    <div style={{ marginLeft: "2rem", marginTop: "1.25rem", display:"flex" }}>

                      <Button onClick={()=> updateCartHandler(item, item.quantity -1)} style={{ fontWeight: "bolder", marginRight: "0.5rem", fontSize: "1.5rem" }} variant='light' disabled={item.quantity === 1}>-</Button>{' '}

                      <span style={{ fontSize: "1.2rem", fontWeight: "500", marginRight:"0.5rem", marginTop:"1rem" }}>{item.quantity}</span>

                      <Button onClick={()=> updateCartHandler(item, item.quantity +1)} style={{ fontWeight: "bolder", fontSize: "1.5rem" }} variant='light'>+</Button>
                    </div>

                    <div style={{ marginTop: "2.2rem", marginLeft: "2rem", marginRight: "1.5rem", fontSize: "1.2rem", fontWeight: "bolder" }}>₹{item.price}/-</div>

                    <div style={{ marginTop: "1rem", marginLeft: "3rem" }}>
                      <button onClick={()=> removeItemHandler(item)} style={{ color: "black", fontWeight: "bolder", borderRadius: "1rem", padding: "0.5rem 1rem 0.5rem 1rem", backgroundColor: "#F5F5F5", border: "none" }}>remove</button>
                    </div>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}></Col>

      <div style={{marginLeft:"5rem", marginTop:"3rem"}}>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title style={{fontSize:"1.5rem"}}>BILL</Card.Title>
        <Card.Text>
          <p style={{fontSize:"1.2rem"}}>
          Subtotal ({cartItems.reduce((a,c)=> a +  c.quantity,0)}{' '}items) : ₹ {cartItems.reduce((a,c)=> a + c.price*c.quantity, 0)}
          <p style={{fontSize:"0.8rem"}}>
            <i>
            (all prices are inclusive of GST)</i>
          </p>
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <Button style={{width:"15rem", marginLeft:"8rem"}} variant="primary" onClick={handleCheckOut}>Proceed to Checkout</Button>
      </Row>
    </div>
  );
}
