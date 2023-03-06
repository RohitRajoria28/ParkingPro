import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './ParkingSpace.css'
const ParkingSpace = () => {
    const location=useLocation()
    const [addVehicalFlag,setAddVehicalFlag]=useState<boolean>(false)
    const [time,setTime]=useState()
    const [AvailableSpace,setAvailableSpace]=useState<number>(0);
    const [RegistrationNumber,SetRegistrationNumber]=useState();
    const [vehicalData,setVehicalData]= useState<string[] | any>([]);;
    const [smallData,setSmallData]=useState<{}>({});
 
    var spaceRequired=location.state.NumberOfSpace
     
    var currSpace: number= 1 ;
    var  parking: any[]=[1,2,3,4,5,6,7,8,9,10];
    useEffect(()=>{

    },[setAddVehicalFlag])
   
    const handleAddVehicalClick=()=>{
        setAddVehicalFlag(true); 
    }

    const handleNewVehicalData=()=>{
        setAddVehicalFlag(false); 
        if(AvailableSpace!==parking.length){
            const newValues = [...vehicalData]; // Create a copy of the array
            if (newValues.length >= 10) {
              newValues.shift(); // Remove the first item if the array is full
            }
            newValues.push(RegistrationNumber); // Add new value to the end of the array
            setVehicalData(newValues);
            setAvailableSpace(AvailableSpace+1)
            console.log(newValues);
        }else{
            alert('Parking Space is full')
        } 
    }
    const handleTime=(e: React.ChangeEvent<HTMLInputElement>)=>{
        setTime((e.target as any).value)
         
    }
    const handleRegistrationNumber=(e: React.ChangeEvent<HTMLInputElement>)=>{
        SetRegistrationNumber((e.target as any).value)
    }
  return (
    <div className='main'>
        <h2 className='heading' >Parking Management System 📍</h2>
        <hr />
        <div className='heading-space'>
            <div className='heading-space-label' >Available Space :  {10-AvailableSpace}</div>
            <div className='heading-space-label' >ParkingSpace Required:{spaceRequired}</div>
        </div>
        <div className='parking-drawing-space-main'>
            <div test-id='parking-drawing-space-1'  className='parking-drawing-spacenumber1  parking-item' >
               { 
                vehicalData.length===0 ? <div test-id='parking-drawing-spacenumber-1'>1 </div> : (
                
                 <div className='parked-car-box'>
                    <p className='parking-box-number' >{ vehicalData[0]}</p>
                    <Link to={'/Checkout'} state={{vehicalData:vehicalData[0],Time: time}}>
                    <button className='parking-space-button'>Tap To checkout</button>
                    </Link> 
                 </div>
                 )    
               }
            </div>
            <div test-id='parking-drawing-space-2' className='parking-drawing-spacenumber2  parking-item'>
             {  vehicalData.length<=1 ? <div test-id='parking-drawing-spacenumber-2' >2</div> : (
                 <div className='parked-car-box'>
                    <p className='parking-box-number' >{ vehicalData[1]}</p>
                    <Link to={'/Checkout'} state={{vehicalData:vehicalData[1],Time: time}}>
                    <button className='parking-space-button'>Tap To checkout</button>
                    </Link>
                    
                 </div>
                 )}
            </div>
            <div test-id='parking-drawing-space-3' className='parking-drawing-spacenumber3  parking-item'>
            {
                 vehicalData.length<=2 ? <div test-id='parking-drawing-spacenumber-3' >3</div> : (
                 <div className='parked-car-box'>
                    <p className='parking-box-number' >{ vehicalData[2]}</p>
                    <Link to={'/Checkout'} state={{vehicalData:vehicalData[2],Time: time}}>
                    <button className='parking-space-button'>Tap To checkout</button>
                    </Link>
                    
                 </div>
                 )    
               } 
            </div>
            <div test-id='parking-drawing-space-4' className='parking-drawing-spacenumber4  parking-item'>
            {
                 vehicalData.length<=3 ? <div test-id='parking-drawing-spacenumber-4' >4</div> : (
                 <div className='parked-car-box'>
                    <p className='parking-box-number' >{ vehicalData[3]}</p>
                    <Link to={'/Checkout'} state={{vehicalData:vehicalData[3],Time: time}}>
                    <button className='parking-space-button'>Tap To checkout</button>
                    </Link>
                    
                 </div>
                 )    
               }
            </div>
            <div test-id='parking-drawing-space-5' className='parking-drawing-spacenumber5  parking-item'>
                {
                 vehicalData.length<=4 ? <div test-id='parking-drawing-spacenumber-5' >5</div> : (
                 <div className='parked-car-box'>
                    <p className='parking-box-number' >{ vehicalData[4]}</p>
                    <Link to={'/Checkout'} state={{vehicalData:vehicalData[4],Time: time}}>
                    <button className='parking-space-button'>Tap To checkout</button>
                    </Link>
                    
                 </div>
                 )    
               }
            </div>
            <div test-id='parking-drawing-space-6' className='parking-drawing-spacenumber6  parking-item'>{
                 vehicalData.length<=5 ? <div test-id='parking-drawing-spacenumber-6' >6</div> : (
                 <div className='parked-car-box'>
                    <p className='parking-box-number' >{ vehicalData[5]}</p>
                    <Link to={'/Checkout'} state={{vehicalData:vehicalData[6],Time: time}}>
                    <button className='parking-space-button'>Tap To checkout</button>
                    </Link>
                    
                 </div>
                 )    
               }
            </div>
            <div test-id='parking-drawing-space-7' className='parking-drawing-spacenumber7  parking-item'>
            {
                 vehicalData.length<=6 ? <div test-id='parking-drawing-spacenumber-7' >7</div> : (
                 <div className='parked-car-box'>
                    <p className='parking-box-number' >{ vehicalData[6]}</p>
                    <Link to={'/Checkout'} state={{vehicalData:vehicalData[7],Time: time}}>
                    <button className='parking-space-button'>Tap To checkout</button>
                    </Link>
                    
                 </div>
                 )    
               }
            </div>
            <div test-id='parking-drawing-space-8' className='parking-drawing-spacenumber8  parking-item'>
            {
                 vehicalData.length<=7 ? <div test-id='parking-drawing-spacenumber-8' >8</div> : (
                 <div className='parked-car-box'>
                    <p className='parking-box-number' >{ vehicalData[7]}</p>
                    <Link to={'/Checkout'} state={{vehicalData:vehicalData[7],Time: time}}>
                    <button className='parking-space-button'>Tap To checkout</button>
                    </Link>
                    
                 </div>
                 )    
               }
            </div>
            <div test-id='parking-drawing-space-9' className='parking-drawing-spacenumber9  parking-item'>
            {
                 vehicalData.length<=8 ? <div test-id='parking-drawing-spacenumber-9' >9</div> : (
                 <div className='parked-car-box'>
                    <p className='parking-box-number' >{ vehicalData[8]}</p>
                    <Link to={'/Checkout'} state={{vehicalData:vehicalData[8],Time: time}}>
                    <button className='parking-space-button'>Tap To checkout</button>
                    </Link>
                    
                 </div>
                 )    
               }
            </div>
            <div test-id='parking-drawing-space-10' className='parking-drawing-spacenumber10  parking-item'>
            {
                 vehicalData.length<=9 ? <div test-id='parking-drawing-spacenumber-10' >10</div> : (
                 <div className='parked-car-box'>
                    <p className='parking-box-number' >{ vehicalData[9]}</p>
                    <Link to={'/Checkout'} state={{vehicalData:vehicalData[9],Time: time}}>
                    <button className='parking-space-button'>Tap To checkout</button>
                    </Link>
                    
                 </div>
                 )    
               }
            </div>
        </div>
        <div>
            { !addVehicalFlag && 
                <button className='Add-vehical-button' onClick={handleAddVehicalClick}>Enter A new Parking </button>
            }
        </div>
        {addVehicalFlag && 
        <div className='car-info'>
            <label htmlFor="">Parking Time</label>
            <input test-id='parking-drawingregistration-input' type="time" className='parking-drawingTime-input' onChange={handleTime} placeholder='Enter parking Time' />
            <label htmlFor=""> Car Registration Number</label>
            <input test-id='parking-drawingregistration-input' type="text" placeholder='Enter your Registration Number' onChange={handleRegistrationNumber} className='parking-drawingregistration-input' />
            <br />
            <button test-id='parking-drawing-addcarbutton' className='parking-drawing-add carbutton Add-vehical-button' onClick={handleNewVehicalData} type='submit'>SUBMIT</button>
        </div>}
    </div>
    
  )
}

export default ParkingSpace