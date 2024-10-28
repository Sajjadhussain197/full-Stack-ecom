import React, { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'


const Shipping = () => {
    const [shippingDetails, setShippingDetails]=useState({
        address:"",
        city:"",
        state:"",
        country:"",
        pincode:""
    })
    const navigate=useNavigate()


    const changeHandler=(e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        setShippingDetails({...shippingDetails, [e.target.name]:e.target.value})
    }
  return (
    <div className='shipping'>
        <button className='back-button' onClick={()=>navigate('/cart')}>
            <BiArrowBack/>
        </button>
        <form>
        <h1>Shipping Address</h1>
            <input required type="text" name="address" value={shippingDetails.address} placeholder='Address' onChange={changeHandler} />
            <input required type="text" name="city" value={shippingDetails.city} placeholder='City' onChange={changeHandler} />
            <input required type="text" name="state" value={shippingDetails.state} placeholder='State' onChange={changeHandler} />
          <select required name="country" id="country" value={shippingDetails.country} onChange={changeHandler}>
            <option value="pakistan">ُPakistan</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
          </select>
            <input required type="number" name="pincode" value={shippingDetails.pincode} placeholder='Pincode' onChange={changeHandler} />
            <button type='submit'>Pay Now</button>
        </form>
      
    </div>
  )
}

export default Shipping
