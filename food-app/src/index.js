import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContextProvider } from './context/AuthContext';
import { ItemsContextProvider } from './context/ItemsContext';
import { StoreProvider } from './components/Store';
import { RestosContextProvider } from './context/restosContext';
import { ReservationProvider } from './context/Reservation';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReservationProvider>
    <StoreProvider>
    <AuthContextProvider>
    <ItemsContextProvider>
    <RestosContextProvider>
    <App />
    </RestosContextProvider>
    </ItemsContextProvider>
    </AuthContextProvider>
    </StoreProvider>
    </ReservationProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
