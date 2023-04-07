import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import arrow from "../../assets/icon-arrow-right.svg";
import chair from "../../assets/chair.png";

function Cart() {
  return (
    <>
      <Header />
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
              <div className="flex justify-between gap-14 text-xs lg:text-base md:gap-20 mb-10 ">
                <h2 className="mr-auto">PRODUCTS</h2>
                <h2 className="pl-4 md:pl-0">PRICE</h2>
                <h2>QUANTITY</h2>
                <h2 className="mr-10">TOTAL</h2>
              </div>
              <div className="flex flex-col gap-8 mb-10">
                <div className="flex gap-2 md:gap-8 lg:gap-12 text-xs lg:text-base flex-row items-center ustify-between">
                  <div className="flex items-center lg:gap-4 md:w-fit">
                    <p>x</p>
                    <div className="">
                      <img src={chair} alt="chair" />
                    </div>
                    <p className="w-28 md:w-52">Fabric Mid Century Chair</p>
                  </div>
                  <div className="w-32">
                    <p>Rp.10.000.000</p>
                  </div>
                  <div className="mr-4 lg:mr-0">
                    <div className="flex gap-4">
                      <p>-</p>
                      <p>02</p>
                      <p>+</p>
                    </div>
                  </div>
                  <div className="w-32">
                    <p>Rp.100.000.000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-[#F9F9F9] flex flex-col gap-10 px-6 py-6">
              <div>
                <p>Cart Total</p>
              </div>
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>Rp.125.000.000</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping</p>
                <div>
                  <div className="flex gap-4">
                    <input type="radio" name="method" />
                    <p>Flat Rate : Rp.10000</p>
                  </div>
                  <div className="flex gap-4">
                    <input type="radio" name="method" />
                    <p>Free Shipping</p>
                  </div>
                  <div className="flex gap-4">
                    <input type="radio" name="method" />
                    <p>Local Pickup</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between border-t-2 pt-4">
                <p>Total Price</p>
                <p>Rp.100.00.00</p>
              </div>
            </div>
            <div className="w-full h-16 bg-[#262626] text-white grid place-items-center">
              <p>Procced To Check Out</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Cart;
