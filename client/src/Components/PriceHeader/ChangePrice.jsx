import React, { useState } from "react";
import axios from "axios";

function ChangePrice({ setPrevPrices, prevPrices, setIsChangePriceVisible }) {
  //   const history = useHistory()
  const baseurl = import.meta.env.VITE_BACKEND_ROUTE + "prices";
  const [prices, setPrices] = useState({
    gold: prevPrices.gold,
    silver: prevPrices.silver,
  });
  const jwtToken = localStorage.getItem("jwt");
  const headers = {
    "Content-Type": "application/json",
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
      <div
        onClick={() => setIsChangePriceVisible((prev) => !prev)}
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
      ></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-md p-6 z-50">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Change Prices</h2>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            axios.post(
              baseurl,
              {
                gold: prices.gold,
                silver: prices.silver,
              },
              { headers }
            );
            setIsChangePriceVisible(false);
            setPrevPrices(prices);
          }}
          className="flex flex-col"
        >
          <label htmlFor="" className="block text-sm font-medium text-gray-700">
            Gold Price
          </label>
          <input
            onChange={(event) => {
              handleInputChange("gold", event);
            }}
            type="text"
            value={prices.gold}
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          />
          <br />
          <label htmlFor="" className="block text-sm font-medium text-gray-700">
            Silver Price
          </label>
          <input
            onChange={(event) => {
              handleInputChange("silver", event);
            }}
            type="text"
            value={prices.silver}
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
          >
            Change Price
          </button>
        </form>
      </div>
    </>
  );
}

export default ChangePrice;
