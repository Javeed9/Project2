import React from 'react'
import { GrPhone } from "react-icons/gr";

function ContactCard({imgSrc,name,number}) {
  return (
    <div className='m-5'>
        <img className='mx-auto rounded-full hover:border-4 hover:scale-105 hover:border-orange-700  ' height={300} width={300} src={imgSrc} alt="photo" />
        <p className='text-lg font-bold text-center mt-2'>Mr.{name}</p>
        <p className='text-md font-bold flex justify-center'><GrPhone className='my-auto mx-1'/> {number}</p>
    </div>
  )
}

export default ContactCard