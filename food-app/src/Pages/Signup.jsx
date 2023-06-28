import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import {default as Logo} from '../images/food-express-logo.png';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function SignupPage() {

    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState("");
    const [name, setName] = useState(" ");
    const [location, setLocation] = useState(" ");
    
    const handleSignup = async(e)=>{
        e.preventDefault()

        const response = await fetch('http://127.0.0.1:5000/api/auth/signup', {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({name, location, email, password})
        })

        const json = await response.json();

        if(response.ok){
          localStorage.setItem('user', JSON.stringify(json));
          alert('Signed up successfully');
        }
        if(!response.ok){
          alert('Signup failed!');
        }
    }

  return (
    <form onSubmit={handleSignup}>
    <MDBContainer fluid className="p-3 my-5">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src={Logo} class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

        <div style={{marginLeft:"10rem"}}>
        <MDBInput wrapperClass='mb-4 w-75' label='Name' id='formControlLg' type='name' size="lg"
        onChange={(e)=>setName(e.target.value)}
        value={name}/>

        <MDBInput wrapperClass='mb-4 w-75' label='Location' id='formControlLg' type='text' size="lg"
        onChange={(e)=>setLocation(e.target.value)}
        value={location}/>

        <MDBInput wrapperClass='mb-4 w-75' label='Email' id='formControlLg' type='email' size="lg"
        onChange={(e)=>setEmail(e.target.value)}
        value={email}/>

        <MDBInput wrapperClass='mb-4 w-75' label='Password' id='formControlLg' type='password' size="lg"
        onChange={(e)=>setPassword(e.target.value)}
        value={password}/>
        </div>

          <div style={{marginLeft:"18rem"}}>
          <Button onClick={handleSignup} type='submit' variant="primary" style={{padding:"0.75rem 2rem 0.75rem 2rem", fontSize:"1.5rem"}}>Sign up</Button>
          </div>

          <div style={{marginTop:"2rem", marginLeft:"15.5rem", fontSize:"1.25rem"}}>
            Already registered? <Link to='/login'>Login</Link>
          </div>
        </MDBCol>

      </MDBRow>

    </MDBContainer></form>
  );
}

export default SignupPage;