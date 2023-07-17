import { RestosContext } from "../context/restosContext";
import { useContext } from "react";

export const useRestosContext = ()=>{
    const context = useContext(RestosContext)

    if(!context){
        throw Error('useRestosContext must be inside RestosContextProvider');
    }
    return context;
}