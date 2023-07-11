import { useState } from "react";
import { useAuthContext } from "./useAuthContext"
import { json } from "react-router-dom";

export const useLogin=()=>{
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {dispatch} = useAuthContext();

    const login = async(email, password)=>{
        setIsLoading(true)
        setError(null)

        const response = await fetch('http://127.0.0.1:5000/api/auth/login', {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            });

            const data = await response.json()

            if(response.ok)
            {
              localStorage.setItem('user',JSON.stringify(data));
                //handle successful login
                setIsLoading(false)

                dispatch({type:'LOGIN', payload:json});
            }else{
                setIsLoading(false);
                setError(json.error);
                alert('Error while logging in!')
            }
    }
    return { login, isLoading, error }

}