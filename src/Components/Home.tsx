import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css'
export const Home = () => {
    const navigate=useNavigate();
    const [NumberOfSpace,setNumberOfSpace]=useState<number|null>();
    const[finalInput,SetFinalInput]=useState<number|null>();
    const handleSubmit=async (e:  React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
         SetFinalInput(NumberOfSpace);
         navigate('/ParkingSpace',{state:{NumberOfSpace}});
    }
    const updateName=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setNumberOfSpace((e.target as any).value);
         
    }
  return (
    <div className='container'>
        <h1 className='heading-park'>Welcome to Park Pro 🚗</h1>
        <div className=' '>
            
            <form action="" onSubmit={ handleSubmit} >
                <label className='parkig-label' htmlFor="">Enter Number of Parking Spaces</label>
                <input test-id='Parking-create-text-input' type="number" className='Parking-create-text-input'   onChange={ updateName} />
                <button test-id='Parking-create-submitbutton'  type='submit'className='Parking-create-submitbutton' >Submit</button>
            </form>
        </div>
    </div>
  )
}
