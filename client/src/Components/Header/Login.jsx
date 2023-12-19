import React, { useState } from 'react'
import axios from "axios";
// import { useHistory } from 'react-router-dom'
import useAuth from '../../Shared/Hooks/Auth'

function Login( {setIsLoginVisible} ) {
  const baseurl = import.meta.env.VITE_BACKEND_ROUTE + 'login'
  const [ username, setUsername ] = useState("")
  const [ password, setPassword ] = useState("")
//   const history = useHistory()
  const { isAdmin, setIsAdmin } = useAuth()
  console.log(isAdmin);
  return (
    <>
        <div onClick={ () => setIsLoginVisible( prev => !prev)} className='h-screen w-screen bg-black bg-opacity-50 absolute top-0 left-0'></div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4'>
        <form
        onSubmit={ (event) => {
            event.preventDefault()
            axios.post(baseurl, {
                username:username,
                password:password
            })
            .then ( res => res.data.token)
            .then ( res => {
                localStorage.setItem('jwt', res );
                setIsAdmin()
                console.log(isAdmin);
                setIsLoginVisible(false)
                // history.go(0)
            })
        }}
        >
            <label htmlFor="">
                Username
                <input
                onChange = { (event) => {
                    setUsername(event.target.value)
                }}
                type="text" value={username}/>
            </label>
            <br />
            <label htmlFor="">
                Password
                <input
                onChange = { (event) => {
                    setPassword(event.target.value)
                }}
                type="password" value={password}/>
            </label>
            <button type='submit'>Login</button>
        </form>
        </div>
  </>
  )
}

export default Login