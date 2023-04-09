import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../redux/slices/cart";
// import chair from "../../assets/chair.png";

function CartCard(props) {
  const cartState = useSelector((state) => state.cart);
  const cardCart = cartState.shoppingCart;
  const dispatch = useDispatch();

  const handleDecremen = () => {
    if (props.qty === 1) return;
    const data = { idx: props.idx, price: props.price };
    dispatch(cartAction.decremenQty(data));
  };
  const handleIncremen = () => {
    const data = { idx: props.idx, price: props.price };
    dispatch(cartAction.incremenQty(data));
  };

  console.log(props.idx);
  const imgUrl =
    "https://res.cloudinary.com/dhikerrnk/image/upload/v1680940221/";
  return (
    <>
      <div className="flex flex-col gap-8 mb-10">
        <div className="flex gap-2 md:gap-8 lg:gap-12 text-xs lg:text-base flex-row items-center ustify-between">
          <div className="flex items-center lg:gap-4 md:w-fit">
            <p>x</p>
            <div className="md:w-[4.313rem] md:h-[5.188rem]">
              <img
                src={imgUrl + props.img}
                alt="images-product"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="w-28 md:w-52">Fabric Mid Century Chair</p>
          </div>
          <div className="w-32">
            <p>Rp. {props.price.toLocaleString("id-ID")}</p>
          </div>
          <div className="mr-4 lg:mr-0">
            <div className="flex flex-col-reverse md:flex-row gap-4">
              <p
                onClick={handleDecremen}
                className="cursor-pointer font-black select-none btn btn-ghost"
              >
                -
              </p>
              <p className="min-w-[24px] flex justify-center items-center text-center">
                {props.qty}
              </p>
              <p
                onClick={handleIncremen}
                className="cursor-pointer font-black select-none btn btn-ghost"
              >
                +
              </p>
            </div>
          </div>
          <div className="w-32">
            <p>Rp. {props.subtotal.toLocaleString("id-ID")}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartCard;
