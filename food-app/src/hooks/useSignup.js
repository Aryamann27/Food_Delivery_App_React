import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () =>{
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {dispatch} = useAuthContext();

    const signup = async(name, location,email, password)=>{
        setIsLoading(true);
        setError(null);

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

          dispatch({type:'LOGIN', payload:json});

          setIsLoading(false);
        }
        if(!response.ok){
            setIsLoading(false);
            setError(json.error);
        }
    }
    return { signup, isLoading, error}
}