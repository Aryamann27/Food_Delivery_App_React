import React, { createContext, useReducer } from "react";

export const Reservation = createContext();

const initialState = {
    reserved:{
        hotels: localStorage.getItem('hotels') ? JSON.parse(localStorage.getItem('hotels')):[],
    },
};

function reducer(state, action){
    switch(action.type)
    {
        case 'MAKE_RESERVATION':{
            const newHotel = action.payload;
            const existingHotel = state.reserved.hotels.find((hotel)=>hotel._id===newHotel._id)
            const hotels = existingHotel ? state.reserved.hotels.map((hotel)=>hotel._id === existingHotel._id ? newHotel : hotel) : [...state.reserved.hotels, newHotel];

            localStorage.setItem('hotels', JSON.stringify(hotels));

            return {...state, reserved:{...state.reserved, hotels}};
        }
        
        case 'CANCEL_RESERVATION':{
            const hotels = state.reserved.hotels.filter((hotel)=>hotel._id!==action.payload._id);

            localStorage.setItem('hotels', JSON.stringify(hotels));
            
            return {...state, reserved: {...state.reserved, hotels}}
        }

        default:
            return state;
    }
}

export function ReservationProvider(props){
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {state, dispatch};
    return <Reservation.Provider value={value}>
        {props.children}
    </Reservation.Provider>
}