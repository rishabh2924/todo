import React from 'react'

import { useNavigate, Link } from 'react-router-dom'

import { useState } from 'react'

const Login = () => {
  const [credentials, setCredentials] = useState({  email: "", password: "",  })
    let navigate=useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        const response = await fetch("http://localhost:8080/api/loginuser", {
          // credentials: 'include',
          // Origin:"http://localhost:3000/login",
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({  email: credentials.email, password: credentials.password })
    
        });
        const jresponse = await response.json()
        
        if (jresponse.sucess) {
          //save the auth toke to local storage and redirect
         
          alert("you logged in successfully")
          localStorage.setItem("userEmail",credentials.email)
          localStorage.setItem("authToken",jresponse.authToken)
          
          navigate('/mylist');
        }
        else {
          alert("Enter Valid Credentials")
        }
      }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
      }
  return (
    
      <div className='flex h-screen items-center justify-center '>

  

      <div className='' >
        <form className='w-[400px] p-10  text-white border bg-gray-800 border-green-400  rounded-xl' onSubmit={handleSubmit}>
         
          <div className="m-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control w-full rounded-md text-gray-900" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
          </div>
         
         
          {/* <div className="m-3">
            <button type="button"  name="geolocation" className=" btn btn-success">Click for current Location </button>
          </div> */}
          <div className="m-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control w-full rounded-md text-gray-900" value={credentials.password} onChange={onChange} name='password' />
          </div>
          <div className='flex justify-center  '>
          <button type="submit" className="m-3 px-3 py-1 border bg-white text-gray-950 hover:bg-slate-500 hover:text-white rounded-lg">Submit</button>
          <Link to="/signup" className="m-3 px-3 py-1 border bg-white text-gray-950 hover:bg-slate-500 hover:text-white rounded-lg">New user</Link></div>
        </form>
      </div>
      </div>
  )
}

export default Login