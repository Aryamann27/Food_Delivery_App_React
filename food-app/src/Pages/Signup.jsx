import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput
}
from 'mdb-react-ui-kit';
import {default as Logo} from '../images/food-express-logo.png';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useSignup } from '../hooks/useSignup';

function SignupPage() {

    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState("");
    const [name, setName] = useState(" ");
    const [location, setLocation] = useState(" ")

    const {signup, error, isLoading} = useSignup();
    
    const handleSignup = async(e)=>{
        e.preventDefault()

        await signup(name, location, email, password);
        console.log(name, email, password, location);
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
          <Button disabled={isLoading}
           onClick={handleSignup} type='submit' variant="primary" style={{padding:"0.75rem 2rem 0.75rem 2rem", fontSize:"1.5rem"}}>Sign up</Button>
          </div>

          {error && <div className="error">{error}</div>}

          <div style={{marginTop:"2rem", marginLeft:"15.5rem", fontSize:"1.25rem"}}>
            Already registered? <Link to='/login'>Login</Link>
          </div>
        </MDBCol>

      </MDBRow>

    </MDBContainer></form>
  );
}

export default SignupPage;