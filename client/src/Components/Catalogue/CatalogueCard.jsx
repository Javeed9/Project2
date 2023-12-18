import React from 'react';

function CatalogueCard({ name, imageSrc }) {
  return (
    <div className=' box-border p-4 bg-slate-300 transform transition duration-300 ease-in-out hover:scale-110 hover:border-2 hover:border-orange-700 '>
      <img className='h-80 w-80 object-cover' src={imageSrc} alt="catalougeImage" />
      <div className='h-2'></div>
      <h2 className='text-center font-bold'>{name}</h2>
    </div>
  );
}

export default CatalogueCard;
