import React from "react";
import { Link } from "react-router-dom";

function CatalogueCard({ name, imageSrc }) {
  return (
    <Link to={`category/${name}`} className="max-w-64 flex mx-3 my-4">
      <div className="">
        <img
          className="w-72 h-72 border border-solid border-gray-300 shadow-lg"
          style={{
            boxShadow: "15px 15px 60px #bebebe, -15px -15px 50px #ffffff",
            borderRadius: "25%",
          }}
          src={imageSrc}
          alt="catalougeImage"
        />
        <h2 className="text-center text-lg mt-3 font-bold">{name}</h2>
      </div>
    </Link>
  );
}

export default CatalogueCard;
