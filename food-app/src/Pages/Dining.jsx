import React, { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useRestosContext } from "../hooks/useRestosContext";
import AlertComp from "../components/Alert_Dining";
import Card_Dining from "../components/Card_Dining";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/esm/Button";

const Dining = () =>{
    
    const {user} = useAuthContext();
    const {restos, dispatch} = useRestosContext();
    const [selectedCategory, setSelectedCategory] = useState('Family Resto');

    useEffect(()=>{
        const fetchRestos = async()=>{
            const response = await fetch('http://127.0.0.1:5000/api/dining/',{
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            const json = await response.json()

            if(response.ok){
                dispatch({type:'SET_RESTOS', payload:json});
            }
        }
        fetchRestos()
    }, []);

    const handleCategoryFilter = (category)=>{
        setSelectedCategory(category);
    };

    const filteredRestos = restos && restos.filter((resto)=>resto.category===selectedCategory);

    return(

        <div>
            {!user &&(
            <div className="login-alert" style={{marginTop:"1rem", marginLeft:"15rem", paddingRight:"15rem"}}><AlertComp /></div>)}

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
        
        
        <div style={{marginTop:"3rem", display:"flex", justifyContent:"center"}}>
            <Button onClick={() => handleCategoryFilter('Family Resto')} variant="light">Family Restuarants</Button>
            <Button onClick={() => handleCategoryFilter('Restobar')} style={{marginLeft:"1.5rem"}} variant="light">Restobars</Button>
            <Button onClick={() => handleCategoryFilter('Cafe')} style={{marginLeft:"1.5rem"}} variant="light">Cafes</Button>
            </div>

            <div style={{display:"flex", marginTop:"2.5rem", marginBottom:"5rem", justifyContent:"center", flexWrap:"wrap"}}>
            {filteredRestos && filteredRestos.map((resto)=>(
                <Card_Dining key={resto._id} resto={resto} />
            ))}
          </div>

        </div>
    )
}

export default Dining;