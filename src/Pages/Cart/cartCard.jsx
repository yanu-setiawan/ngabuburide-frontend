import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../../redux/slices/cart";
// import chair from "../../assets/chair.png";

function ModalValidation({ isOpen, msg, onYes, onclose }) {
  return (
    <>
      {isOpen && (
        <div
          onClick={onclose}
          className="fixed top-0 left-0 w-screen h-screen bg-black/80 flex justify-center items-center z-50"
        >
          <div className="w-4/5 md:w-1/3 py-10 px-6 flex flex-col bg-white">
            <p className="text-3xl text-center font-bold mb-10">{msg}</p>
            <div className="w-full flex gap-5">
              <button
                onClick={onYes}
                className="btn btn-outline btn-success flex-1"
              >
                Yes
              </button>
              <button
                onClick={onclose}
                className="btn btn-outline btn-error flex-1"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function CartCard(props) {
  const dispatch = useDispatch();

  const [isValidate, setValidate] = useState(false);

  const handleDecremen = () => {
    if (props.qty === 1) {
      setValidate(true);
      return;
    }
    const data = { idx: props.idx, price: props.price };
    dispatch(cartAction.decremenQty(data));
  };
  const handleIncremen = () => {
    const data = { idx: props.idx, price: props.price };
    dispatch(cartAction.incremenQty(data));
  };
  const deleteOnCart = () => {
    dispatch(cartAction.deleteItem(props.id));
  };

  // console.log(props.idx);
  const imgUrl =
    "https://res.cloudinary.com/dhikerrnk/image/upload/v1680940221/";
  return (
    <>
      <ModalValidation
        isOpen={isValidate}
        onYes={deleteOnCart}
        onclose={() => setValidate(false)}
        msg={`Are you sure want to delete ${props.prodName}`}
      />
      <div className="flex flex-col gap-8 mb-10">
        <div className="flex gap-2 md:gap-2 lg:gap-12 text-xs lg:text-base flex-row items-center justify-between">
          <div className="relative flex flex-wrap md:flex-nowrap justify-center items-center gap-4 lg:gap-4 md:w-fit">
            <button
              onClick={() => setValidate(true)}
              className="absolute hover:scale-150 transition-all hover:text-red-600 -left-5 lg:-left-8"
            >
              <i className="bi bi-x-circle text-sm lg:text-lg"></i>
            </button>
            <div className="w-20 h-16 mr-7 md:mr-0 md:w-[4.313rem] md:h-[5.188rem]">
              <img
                src={imgUrl + props.img}
                alt="images-product"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="w-16 md:w-44 text-sm md:text-lg">{props.prodName}</p>
          </div>
          <div className="w-32 ml-4">
            <p className="text-sm md:text-lg">
              Rp. {props.price.toLocaleString("id-ID")}
            </p>
          </div>
          <div className="">
            <div className="flex md:flex-row text-sm md:text-lg">
              <p
                onClick={handleDecremen}
                className="cursor-pointer font-black select-none btn btn-ghost"
              >
                -
              </p>
              <p className=" md:w-10 flex justify-center items-center text-center text-sm md:text-lg">
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
          <div className="w-32 ml-4">
            <p className="text-sm md:text-lg">
              Rp. {props.subtotal.toLocaleString("id-ID")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartCard;
