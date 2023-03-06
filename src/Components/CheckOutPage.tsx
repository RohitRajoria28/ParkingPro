import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './CheckOut.css'
const CheckOutPage = () => {
    let location = useLocation();
    var finalTime=location.state.Time;
    var vehicalData=location.state.vehicalData;
    console.log(finalTime);
    console.log(vehicalData);
    var jsonData = {
        "users": [
            {
                "car-registration": vehicalData, 
                "charge": '$30',
            },  
        ]
      }
var charge=30;
    function handleClick() {
        fetch('https://httpstat.us/200', {   
          method: 'POST', 
          mode: 'cors', 
          body: JSON.stringify(jsonData)  
        })
      }
     
  return (
    <div className='main-box' >
        
         <h1 className='main-heading'>We Hope You Had A Safe And Hassle free parking Experience 🚗  </h1>
         
         <div className='Show-box' >
            <hr />
            <h3 className='Registration-veh' > Registration : <h4 className='main-text'>{vehicalData}</h4>   </h3>
            <hr />
            <h3 test-id='deregister-time-spent' className='Registration-veh' > Parking Time : <h4 className='main-text'>{finalTime}</h4>   </h3>
            <hr />
            <h3 test-id='deregister-charge' className='Registration-veh' > Parking charge :  <h4 className='main-text'>{charge} $</h4>   </h3>
            <hr />
            <button test-id='deregister-paymentbutton' onClick={handleClick}>Payment Taken</button>
            <Link to={'/' } >
                <button test-id='deregister-back-button'>Home</button>
            </Link>
        </div>
        
    </div>
  )
}

export default CheckOutPage