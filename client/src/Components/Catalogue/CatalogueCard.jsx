import React from 'react';

function CatalogueCard({ name, imageSrc }) {
  return (
    <div className='group p-5 bg-slate-300 transform transition duration-300 ease-in-out hover:scale-110 hover:border-2 hover:border-orange-700 '>
      <img className='h-80 w-80 object-cover group-hover:scale-110' src={imageSrc} alt="catalougeImage" />
      <h2 className='text-center font-bold mt-2'>{name}</h2>
    </div>
  );
}

export default CatalogueCard;
