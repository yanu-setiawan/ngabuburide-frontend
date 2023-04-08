/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import product from "../../assets/product.png";

function Card() {
  return (
    <>
      <div>
        <div className="w-48 h-64 lg:w-[18.3rem] lg:h-[25rem]">
          <img src={product} className="w-full h-full" />
        </div>
        <div className="w-52">
          <p>Coaster 506222-CO Loveseat</p>
        </div>
        <div>
          <p className="font-bold">$765.99</p>
        </div>
      </div>
    </>
  );
}

export default Card;
