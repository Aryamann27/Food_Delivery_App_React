import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext() // creates a new context k.a AuthContext, this will be used to share the authentication state and dispatch function across different components.

/*
This block defines the authReducer function, which is a reducer function used in the useReducer hook. The reducer function takes the current state and an action as parameters and returns a new state based on the action type. In this case:
If the action type is 'LOGIN', it sets the user property of the state to the value provided in action.payload.
If the action type is 'LOGOUT', it sets the user property to null.
If the action type is not recognized, it returns the current state unchanged.
*/export const authReducer = (state, action) => {
    switch(action.type){
        case 'LOGIN':
            return {user: action.payload}
        
        case 'LOGOUT':
            return {user:null}
        
        default:
            return state
    }
}

/*
This block defines the AuthContextProvider component. It receives the children prop as its parameter.
Inside the component, the useReducer hook is used to initialize the state and dispatch function. The authReducer function is passed as the reducer, and the initial state is an object with user set to null.
The useEffect hook is used to check if there is a user stored in the local storage. If a user is found, it dispatches a 'LOGIN' action with the user data.
The console.log statement outputs the current state of authentication.
Finally, the component returns the AuthContext.Provider component, which wraps the children prop. The value provided to the provider includes the current state (...state) and the dispatch function, making them accessible to the components consuming the AuthContext.
*/export const AuthContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'))

        if(user){
            dispatch({type:'LOGIN', payload:user});
        }
    }, [])

    console.log('Authentication state : ',state);

    return(
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}