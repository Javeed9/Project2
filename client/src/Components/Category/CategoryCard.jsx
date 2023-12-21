import React from 'react';

function CategoryCard({ photo, index }) {
    if (!photo || !photo.img) return null
  return (
    <div className='box-border p-4 bg-slate-300 transform transition duration-300 ease-in-out hover:scale-110 hover:border-2 hover:border-orange-700 '>
          <img className='h-80 w-80 object-cover' src={`data:${photo.img.contentType};base64,${photo.img.data}`} alt={`categoryImage ${index}`} />
          <p>{photo.description}</p>
      </div>
  );
}

export default CategoryCard;
