"use client"
import React, { useContext, useState } from 'react'
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';

const loginForm = ({close}) => {
    const {url,setToken} = useContext(StoreContext);
    const[logIn,setLogIn] = useState(false);
    const[hide,setHide] = useState(false);
    const show = () =>{
        setHide(prevState => !prevState);
    }
    const[signUpData,setSignUpData] = useState({
        name:"",
        email:"",
        password:"",
    })
    const[logInData,setLogInData] = useState({
        email:"",
        password:"",
    })
    const onChangeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setSignUpData(signUpData=>({...signUpData,[name]:value}))
    }
    const onLogin = async (event) => {
        event.preventDefault()
        let newUrl = url;
        if (logIn === false) {
            newUrl += "/api/user/login"
        }
        else{
            newUrl += "/api/user/register"
        }

        const response = await axios.post(newUrl,signUpData);
        if (response.data.success) {
          setToken(response.data.token);
         localStorage.setItem("token",response.data.token);
         close();
        }
        else{
            alert(response.data.message);
        }
    }

  return (
    <div className='w-full h-full z-50 bg-[rgba(0,0,0,40%)] fixed top-0 left-0 flex justify-center items-center '>
        <form className=" flex flex-col bg-white p-7 max-w-[700px] gap-3 rounded-lg" onSubmit={onLogin}>
            <div className="flex justify-between font-bold text-xl pb-3">
            {logIn?<h1>Sign up</h1>:<h1>Login</h1>} <h1 className='cursor-pointer' onClick={close}>X</h1></div>
            { logIn?
            <input type="text" name='name'  onChange={onChangeHandler} value={signUpData.name} placeholder='Name' className='outline-none border-[1px] border-zinc-400  text-[18px] p-2 rounded-md ' required />:<></>}
            <input type="email" name='email' onChange={onChangeHandler} placeholder='Email address'  className='outline-none border-[1px] border-zinc-400  text-[18px] p-2 rounded-md ' required/>
            <div className="border-[1px] border-zinc-400  text-[18px] p-2 rounded-md flex justify-between">
            <input type={hide?"text":"password"} name="password" onChange={onChangeHandler} placeholder='Password'  className='outline-none  ' required/>{hide?<i class="ri-eye-line cursor-pointer" onClick={show}></i>:<i class="ri-eye-off-line cursor-pointer" onClick={show}> </i>}</div>
            <button type='submit' className='bg-blue-600 py-2 rounded-md text-white'>{logIn?"Create Account":"Login"}</button>
            <div className=" flex gap-2">
            <input type="checkbox" name='privacy' id='privacy' className='cursor-pointer'  required/>
            <label for="privacy"  className='text-[14px] w-80 text-zinc-500'>  By continuing, i agree of the terms of us & privacy policy</label></div>
            {logIn?
            <p className='text-zinc-600 text-[15px] pt-3'>Already have an Account? <span className='text-blue-600 cursor-pointer' onClick={(e) => setLogIn(false)}>Click Here</span> </p>:<p className='text-zinc-600 text-[15px] pt-3'>Create  An Account <span className='text-blue-600 cursor-pointer' onClick={(e) => setLogIn(true)}>Click Here</span> </p>}
        </form>


    </div>
  )
}

export default loginForm
