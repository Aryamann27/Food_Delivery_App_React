import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';
import { useContext } from 'react';
import { Store } from './Store';


function NAVbar() {

  const navigate = useNavigate();
  const {state} = useContext(Store);
  const {cart} = state;

  const {logout} = useLogout()
  const {user} = useAuthContext()

  const handleClick = () =>{
      logout()
      alert('You have been logged out!');
      navigate('/home')
  }

  return (
    <Navbar expand="lg" bg='primary'>
      <Container fluid>
        <Link to='/'>
        <Navbar.Brand className='fst-italic comp-name' style={{color:"white", fontSize:"2rem"}}>Food-Express</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <div style={{marginTop:"0.25rem", display:"flex"}}>
            <Link to='/delivery' style={{color:"white", fontSize:"1.2rem", marginLeft:"1.4rem"}} className='nav-link'>DELIVERY</Link>
            <Link to='/dining' style={{color:"white", fontSize:"1.2rem", marginLeft:"1.5rem"}} className='nav-link'>DINING OUT</Link>
            </div>
          </Nav>

          

            {user && (
              <div style={{marginTop:"0.25rem", display:"flex"}}>
                <Link to='/cart'>
                  <span style={{marginLeft:"1rem", color:"white", marginRight:"1.5rem"}} variant="outline-light">
                    <FontAwesomeIcon style={{fontSize:"1.7rem", marginTop:"0.25rem"}} icon={faShoppingCart} /><Badge bg="light" text='dark'>
                      {
                        cart.cartItems.reduce((a,c)=> a + c.quantity, 0)
                      }
                    </Badge>
                  </span>
                  </Link>

                <Button onClick={handleClick}  style={{marginLeft:"1rem"}} variant="outline-light">Logout</Button>
              </div>
            )}

            {!user && (
            <div>
            <Link to='/login'><Button variant="outline-light" style={{fontSize:"1.2rem"}}>Login</Button></Link>
            <Link to='/signup' style={{marginLeft:"1rem"}}><Button variant="outline-light" style={{fontSize:"1.2rem"}}>Signup</Button></Link></div>
            )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NAVbar;