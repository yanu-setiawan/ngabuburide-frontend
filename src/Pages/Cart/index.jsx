import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import arrow from "../../assets/icon-arrow-right.svg";
import CartCard from "./cartCard";
// import Loader from "../../components/Loader";
import { useSelector } from "react-redux";
import ModalMsg from "../../components/ModalMsg";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cartState = useSelector((state) => state.cart);
  // const userId = useSelector((state) => state.user.data.id);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [msgModal, setMsgModal] = useState("");
  // const [isLoading, setLoading] = useState(false);
  const [shippingMed, setShipping] = useState(0);

  const handleCheckout = () => {
    if (shippingMed === 0) {
      setMsgModal("Shipping Method Not Set");
      setShowModal(true);
      return;
    }
    navigate("/checkout");
    // console.log(cartState);
    // const dataShoppingCart = cartState.shoppingCart.map((item) => {
    //   const { img, prodName, subtotal, price, ...newItem } = item;
    //   // if (img || prodName) console.log("");
    //   return newItem;
    // });
    // const data = {
    //   user_id: userId,
    //   promo_id: 1,
    //   notes: "",
    //   status_id: 1,
    //   product: dataShoppingCart,
    // };
    // setDataCheckout(data);
    // setIsCheckout(true);
  };

  useEffect(() => {
    document.title = "RAZYR - Cart";
  }, []);
  // console.log(cartState.shoppingCart);
  // console.log(shippingMed);

  const onCart = cartState.shoppingCart;
  let subtotalOnCart = 0;
  onCart.forEach((prod) => (subtotalOnCart += prod.subtotal));
  let shippingPrice = shippingMed === 1 ? 100000 : 0;
  const grandTotal = subtotalOnCart + shippingPrice;
  return (
    <>
      <Header />
      {/* {isLoading ? (
        <Loader />
      ) : ( */}
      <main>
        <section className="relative">
          <div className="absolute flex gap-4 px-20 pt-10">
            <p>Cart</p>
            <img src={arrow} alt="icon-arrow" />
          </div>
          <div className=" hero-login w-full h-[15.6rem] opacity-20 flex justify-center items-center "></div>
          <div className=" absolute flex justify-center items-center text-center flex-col top-16 w-full ">
            <h1 className=" text-[3.5rem] text-blackSec">Your Cart</h1>
            <p className=" text-[1rem] text-blackSec">
              Buy everything in your cart now!
            </p>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row px-4 py-10 lg:p-20 gap-4">
          <div className="flex flex-[2] justify-between px-4 py-4">
            <div className="w-full">
              <div className="flex justify-between gap-10 text-xs lg:text-base md:gap-20 mb-10 ">
                <h2 className="mr-auto md:mr-48">PRODUCTS</h2>
                <h2 className="pl-4 md:pl-0">PRICE</h2>
                <h2>QUANTITY</h2>
                <h2 className="mr-10">TOTAL</h2>
              </div>
              {cartState.shoppingCart.length === 0 ? (
                <p className="text-4xl font-bold text-center">
                  No Products on Your Cart
                </p>
              ) : (
                cartState.shoppingCart.map((prod, idx) => (
                  <CartCard
                    key={prod.prod_id}
                    id={prod.prod_id}
                    idx={idx}
                    img={prod.img}
                    price={prod.price}
                    prodName={prod.prodName}
                    qty={prod.qty}
                    subtotal={prod.subtotal}
                  />
                ))
              )}
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-[#F9F9F9] flex flex-col gap-10 px-6 py-6">
              <div>
                <p>Cart Total</p>
              </div>
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>Rp. {subtotalOnCart.toLocaleString("id-ID")}</p>
              </div>
              <div className="w-full flex justify-between">
                <p>Shipping</p>
                <div>
                  <div className="flex gap-4">
                    <input
                      type="radio"
                      name="method"
                      id="flat"
                      onChange={() => setShipping(1)}
                    />
                    <label htmlFor="flat">Flat Rate : Rp.100.000</label>
                  </div>
                  <div className="flex gap-4">
                    <input
                      type="radio"
                      name="method"
                      id="free"
                      onChange={() => setShipping(2)}
                    />
                    <label htmlFor="free">Free Shipping</label>
                  </div>
                  <div className="flex gap-4">
                    <input
                      type="radio"
                      name="method"
                      id="local"
                      onChange={() => setShipping(3)}
                    />
                    <label htmlFor="local">Local Pickup</label>
                  </div>
                </div>
              </div>
              <div className="flex justify-between border-t-2 pt-4">
                <p>Total Price</p>
                <p>Rp. {grandTotal.toLocaleString("id-ID")}</p>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              disabled={cartState.shoppingCart.length === 0}
              className="btn w-full h-16 bg-[#262626] text-white grid place-items-center"
            >
              Procced To Check Out
            </button>
          </div>
        </section>
      </main>
      {/* )} */}
      <ModalMsg
        isOpen={showModal}
        msg={msgModal}
        onclose={() => setShowModal(false)}
      />
      <Footer />
    </>
  );
}

export default Cart;
