import { createContext, useReducer } from "react";

export const RestosContext = createContext()

export const restosReducer = (state, action) =>{
    switch(action.type){
        case 'SET_RESTOS':
            return{
                restos:action.payload
            }
        default:
            return state
    }
}
export const RestosContextProvider = ({ children })=>{
    const [state, dispatch] = useReducer(restosReducer, {
        restos:[]
    })

    return(
        <RestosContext.Provider value={{...state, dispatch}}>
            {children}
        </RestosContext.Provider>
    )
}