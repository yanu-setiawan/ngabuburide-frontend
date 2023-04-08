/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useNavigate } from "react-router-dom";
// import product from "../../assets/product.png";

function Card(props) {
  const navigate = useNavigate();
  const imgUrl =
    "https://res.cloudinary.com/dhikerrnk/image/upload/v1680940221/";
  // console.log(props.img);
  return (
    <>
      <div
        onClick={() => navigate(`/product/${props.id}`)}
        className="cursor-pointer"
      >
        <div className="w-48 h-64 lg:w-[18.3rem] lg:h-[25rem]">
          <img src={imgUrl + props.img} className="w-full h-full" />
        </div>
        <div className="w-52">
          <p>{props.prodName}</p>
          <p>{props.category}</p>
        </div>
        <div>
          <p className="font-bold">Rp. {props.price.toLocaleString("id-ID")}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
