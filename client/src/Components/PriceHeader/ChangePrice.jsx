import React, { useState } from 'react'
import axios from "axios";

function ChangePrice( {setPrevPrices, prevPrices, setIsChangePriceVisible} ) {
//   const history = useHistory()
  const baseurl = import.meta.env.VITE_BACKEND_ROUTE + 'prices'
  const [prices, setPrices] = useState({gold: prevPrices.gold, silver: prevPrices.silver})
  const jwtToken = localStorage.getItem('jwt');
  const headers = {
      'Content-Type': 'application/json',
      Authorization: `jwt ${jwtToken}`,
  };

  const handleInputChange = (field, event) => {
    setPrices((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  return (
    <>
        <div onClick={ () => setIsChangePriceVisible( prev => !prev)} className='h-screen w-screen bg-black bg-opacity-50 absolute top-0 left-0'></div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-orange-300 z-50'>
        <form
        onSubmit={ (event) => {
            event.preventDefault()
            axios.post(baseurl, {
                gold : prices.gold,
                silver : prices.silver
            }, { headers })
            setIsChangePriceVisible(false)
            setPrevPrices(prices)
        }}
        >
            <label htmlFor="">
                Gold Price
                <input
                onChange = { (event) => { handleInputChange('gold', event) }}
                type="text" value={prices.gold}/>
            </label>
            <br />
            <label htmlFor="">
                Silver Price
                <input
                onChange = { (event) => { handleInputChange('silver', event) }}

                type="text" value={prices.silver}/>
            </label>
            <button type='submit'>Change Price</button>
        </form>
        </div>
  </>
  )
}

export default ChangePrice