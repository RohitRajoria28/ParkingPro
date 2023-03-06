import React from 'react';
import { BrowserRouter as Router,Routes,Route,Navigate } from "react-router-dom"
import { Home } from './Components/Home';
import './App.css';
import ParkingSpace from './Components/ParkingSpace';
import CheckOutPage from './Components/CheckOutPage';

function App() {
  return (
    <Router>
      <Routes>
         <Route path='/' element={<Home />} />
          <Route path='/ParkingSpace' element={ <ParkingSpace/>} />
          <Route path='/Checkout' element={ <CheckOutPage/>} />
          <Route path='/Payment' element={ <CheckOutPage/>} />
          
          
      </Routes>
    </Router>
  );
}

export default App;
