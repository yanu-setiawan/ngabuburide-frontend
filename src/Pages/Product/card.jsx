/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useNavigate } from "react-router-dom";
import noImg from "../../assets/placehoder-product.png";
// import product from "../../assets/product.png";

function Card(props) {
  const navigate = useNavigate();
  const imgUrl =
    "https://res.cloudinary.com/dhikerrnk/image/upload/v1680940221/";
  console.log(props.id, imgUrl + props.img);
  return (
    <>
      <div
        onClick={() => navigate(`/details/${props.id}`)}
        className="cursor-pointer"
      >
        <div className="md:w-48 md:h-64 lg:w-[18.3rem] lg:h-[25rem]">
          <img
            src={props.img !== "" ? imgUrl + props.img : noImg}
            className="w-full h-full object-cover"
          />
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
