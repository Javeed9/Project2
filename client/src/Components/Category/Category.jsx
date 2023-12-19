import React from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";

function Category() {
    const {category} = useParams();
    const baseurl = import.meta.env.VITE_BACKEND_ROUTE + 'catalog'
    const jwtToken = localStorage.getItem('jwt');
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `jwt ${jwtToken}`,
  };
  return (
    <>
    <div className='bg-gray-600 text-white text-3xl p-4'>Category: {category}</div>
    <div>
      <form onSubmit={ (event) => {
        event.preventDefault()
        axios.post(baseurl, { headers })
      }}>
        <input type="file" name="name" id="" />
        <button type='submit'>Submit</button>
      </form>
    </div>
    </>
  )
}


export default Category