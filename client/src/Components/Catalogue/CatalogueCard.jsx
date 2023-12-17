import React from 'react'

function CatalogueCard({name, imageSrc}) {
  return (
    <div className='p-5 bg-slate-300'>
        <img className='h-80 w-80' src={imageSrc} alt="catalougeImage" />
        <h2 className='text-center font-bold mt-2'>{name}</h2>
    </div>
  )
}

export default CatalogueCard