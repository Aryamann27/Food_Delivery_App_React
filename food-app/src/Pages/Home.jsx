import React from "react";
import CardComp from "../components/Card";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Home = ()=>{
    return(
        <div>
            <div className="home-background" style={{display:"flex", justifyContent:"center"}}>
            </div>
            
            <div style={{display:"flex", justifyContent:"center", marginTop:"2rem"}}>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>   
            </div>

            <div className="card-container">
            <CardComp />
            <CardComp />
            <CardComp />
            <CardComp />
            <CardComp />
            <CardComp />
            </div>
        </div>
    )
}
export default Home;