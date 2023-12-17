import React, { useState, useEffect } from 'react';
import './styles.css'

function PriceHeader() {
  const [price, setPrice] = useState({ gold: 0, silver: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_BACKEND_ROUTE + 'prices');
        const data = await response.json();
        setPrice(data[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
      <div className='w-full mx-auto bg-orange-400 text-black py-1 md:text-lg'>
        <p className='price'>
          Today: Gold 22k - 1g = Rs.{price.gold} | Silver - 1g = Rs.{price.silver}
        </p>
      </div>
  );
}

export default PriceHeader;
