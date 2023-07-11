import React, { useEffect, useState } from "react";
import AlertComp from "../components/Alert";
import { useAuthContext } from "../hooks/useAuthContext";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useItemsContext } from "../hooks/useItemsContext";
import CardComp from "../components/Card";

const Delivery = () =>{
    
    const {user} = useAuthContext();
    const {items, dispatch} = useItemsContext();
    const [selectedCategory, setSelectedCategory] = useState('Main Course');

    useEffect(()=>{
        const fetchItems = async()=>{
            const response = await fetch('http://127.0.0.1:5000/api/menu',{
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            const json = await response.json()

            if(response.ok){
                dispatch({type:'SET_ITEMS', payload:json});
            }
        }
        fetchItems()
    }, [])

    const handleCategoryFilter = (category)=>{
        setSelectedCategory(category);
    };

    const filteredItems = items && items.filter((item)=>item.category===selectedCategory);


    
    
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
            <Button onClick={() => handleCategoryFilter('Main Course')} variant="light">Main Course</Button>
            <Button onClick={() => handleCategoryFilter('Snacks')} style={{marginLeft:"1.5rem"}} variant="light">Snacks</Button>
            <Button onClick={() => handleCategoryFilter('Dessert')} style={{marginLeft:"1.5rem"}} variant="light">Desserts</Button>
            <Button onClick={() => handleCategoryFilter('Beverage')} style={{marginLeft:"1.5rem"}} variant="light">Cold Beverages</Button>
          </div>

          <div style={{display:"flex", marginTop:"2.5rem", marginBottom:"5rem", justifyContent:"center", flexWrap:"wrap"}}>
            {filteredItems && filteredItems.map((item)=>(
                <CardComp key={item._id} item={item} />
            ))}
          </div>
        </div>
    )
}

export default Delivery;