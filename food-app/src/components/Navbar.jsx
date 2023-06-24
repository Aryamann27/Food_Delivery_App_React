import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NAVbar() {
  return (
    <Navbar expand="lg" bg='primary'>
      <Container fluid>
        <Link to='/'>
        <Navbar.Brand className='fst-italic' style={{color:"white", fontSize:"2rem"}}>Food-Express</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to='/' style={{color:"white"}} className='nav-link'>Home</Link>
            <Link to='/' style={{color:"white"}} className='nav-link'>Home</Link>     
          </Nav>
            <Link to='/login'><Button variant="outline-light">Login</Button></Link>
            <Link to='/signup' style={{marginLeft:"1rem"}}><Button variant="outline-light">Signup</Button></Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NAVbar;