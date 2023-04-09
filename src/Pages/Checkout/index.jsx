import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import arrow from "../../assets/icon-arrow-right.svg";

function Checkout() {
  useEffect(() => {
    document.title = "RAZYR - Checkout";
  }, []);
  return (
    <>
      <Header />
      <main>
        <section className="relative">
          <div className="absolute flex gap-4 px-20 pt-10">
            <p>Checkout</p>
            <img src={arrow} alt="icon-arrow" />
          </div>
          <div className=" hero-login w-full h-[15.6rem] opacity-20 flex justify-center items-center "></div>
          <div className=" absolute flex justify-center items-center text-center flex-col top-16 w-full ">
            <h1 className=" text-[3.5rem] text-blackSec">Check Out</h1>
            <p className=" text-[1rem] text-blackSec">
              Pay and get your ordered items
            </p>
          </div>
        </section>
        <section className="grid place-items-center">
          <div className="isForm flex flex-col pb-[10rem] ">
            <h1 className=" text-[2rem] flex justify-center lg:justify-start">
              Self Information
            </h1>
            <form className=" w-full justify-center flex flex-col gap-3">
              <label htmlFor="name" className="flex justify-center mt-11">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className=" w-[75%] lg:w-[30rem] xl:w-[35rem] lg:h-[4.39rem] text-blackSec placeholder:text-greySec h-[4.4rem] border border-[#CECECE] placeholder:p-5 p-5"
                  placeholder="Your Name *"
                />
              </label>
              <label htmlFor="address" className="flex justify-center">
                <input
                  type="text"
                  id="address"
                  name="address"
                  className=" w-[75%] lg:w-[30rem] xl:w-[35rem] lg:h-[4.39rem] text-blackSec placeholder:text-greySec h-[4.4rem] border border-[#CECECE] placeholder:p-5 p-5"
                  placeholder="Address*"
                />
              </label>
              <div className="relative">
                <label htmlFor="phone" className="flex justify-center">
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    className=" w-[75%] lg:w-[30rem] xl:w-[35rem] lg:h-[4.39rem] text-blackSec placeholder:text-greySec h-[4.4rem] border border-[#CECECE] pl-32 p-5"
                    placeholder="Phone Number*"
                  />
                </label>
                <div className="absolute  top-1 left-8 lg:left-0 border-r-2 lg:pr-4">
                  <select
                    id="region"
                    name="region"
                    class="h-16 w-fit border-0 bg-transparent pl-4 pr-7 lg:pl-0 lg:pr-2 outline-none "
                  >
                    <option>+62</option>
                    <option>+63</option>
                    <option>+64</option>
                    <option>+65</option>
                  </select>
                </div>
              </div>

              <div className="flex w-[75%] lg:w-[30rem] xl:w-[35rem] mx-auto flex-col mt-3">
                <button
                  type="submit"
                  className="btn bg-blackSec w-32 h-14 text-white"
                >
                  Check Out
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Checkout;
