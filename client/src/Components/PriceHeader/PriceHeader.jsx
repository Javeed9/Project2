import React, { useState, useEffect } from "react";
import useAuth from "../../Shared/Hooks/Auth";
import ChangePrice from "./ChangePrice";
import "./styles.css";

function PriceHeader() {
  const [prices, setPrices] = useState({ gold: 0, silver: 0 });
  const { isAdmin } = useAuth();
  const [isChangePricesVisible, setIsChangePriceVisible] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_BACKEND_ROUTE + "prices"
        );
        const data = await response.json();
        setPrices(data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="w-full mx-auto bg-orange-400 text-black py-1 md:text-lg">
        <p className="price">
          Today: Gold 22k - 1g = Rs.{prices.gold} | Silver - 1g = Rs.
          {prices.silver}
        </p>
        {isAdmin && (
          <button
            onClick={() => {
              setIsChangePriceVisible((prev) => !prev);
            }}
          >
            Change Price
          </button>
        )}
      </div>
      {isChangePricesVisible && (
        <ChangePrice
          setPrevPrices={setPrices}
          prevPrices={prices}
          setIsChangePriceVisible={setIsChangePriceVisible}
        />
      )}
    </>
  );
}

export default PriceHeader;
