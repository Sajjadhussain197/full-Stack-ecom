import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const [gender,setGender] = useState('');
    const [date,setDate] = useState('');
  return (
    <div className='login'>
        <main>
            <h1 className='heading'>Login</h1>
            <div>
                <label htmlFor="gender">Gender</label>
                <select name="gender" id="gender" value={gender} onChange={(e)=>setGender(e.target.value)}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <div>
                <label htmlFor="date">Date of Birth</label>
                <input type="date" name="date" id="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
            </div>
            <div>
                <p>Already Signed in once                </p>
                <button>
                    <FcGoogle/>
                    <span>Sign in with Google</span>
                </button>
            </div>
        </main>
      
    </div>
  )
}

export default Login
