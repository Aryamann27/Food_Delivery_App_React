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
import { Link, json } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';

function LoginPage() {
    
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState('');
    const {login, error, isLoading} = useLogin();

    const handleLogin = async()=>{
        await login(email, password);
    };

  return (
    <>
    <MDBContainer fluid className="p-3 my-5">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src={Logo} class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

        <div style={{marginLeft:"10rem", marginTop:"8rem"}}>
        <MDBInput wrapperClass='mb-4 w-75' label='Email address' id='formControlLg' type='email' size="lg"
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
        />
        <MDBInput wrapperClass='mb-4 w-75' label='Password' id='formControlLg' type='password' size="lg"
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
        />
        </div>

          <div style={{marginLeft:"18rem"}}>
          <Button disabled={isLoading}
          type='submit'
          variant="primary" 
          style={{padding:"0.75rem 2rem 0.75rem 2rem", fontSize:"1.5rem"}}
          onClick={handleLogin}
          >Login</Button>
          </div>

          {error && <div className='error'>{error}</div>}

          <div style={{marginTop:"2rem", marginLeft:"15rem", fontSize:"1.25rem"}}>
            Not yet registered? <Link to='/signup'>Sign up</Link>
          </div>
        </MDBCol>

      </MDBRow>
    </MDBContainer>
    </>
  );
}
export default LoginPage;