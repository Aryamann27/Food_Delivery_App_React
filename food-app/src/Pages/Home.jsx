import React from "react";
import CardComp from "../components/Card";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AlertComp from "../components/Alert";
import { useAuthContext } from "../hooks/useAuthContext";
import HomeCard from "../components/Home_Card";

const Home = ()=>{
    
  const {user} = useAuthContext()

    return(
        <div>
            <div className="home-background" style={{display:"flex", justifyContent:"center"}}>
            </div>

            <div style={{display:"flex", justifyContent:"center"}}>
              <HomeCard />
            </div>
        
        <div style={{marginTop:"5rem", paddingLeft:"1rem", paddingRight:"25rem", marginBottom:"5rem"}}>
          <h1>About Us</h1>
          <p>
          Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.
          </p>
        </div>
        </div>
    )
}
export default Home;