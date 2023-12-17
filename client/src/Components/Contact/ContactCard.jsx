import React from 'react'

function ContactCard({imgSrc,name,number}) {
  return (
    <div className='m-5'>
        <img className='mx-auto rounded-full' height={300} width={300} src={imgSrc} alt="photo" />
        <p className='text-lg font-bold text-center'>Mr.{name}</p>
        <p className='text-md font-bold text-center'>Phone Number: {number}</p>
    </div>
  )
}

export default ContactCard