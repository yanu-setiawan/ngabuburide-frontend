/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Forgot() {
  useEffect(() => {
    document.title = "RAZYR - Forgot";
  }, []);
  return (
    <>
      <Header />
      <section className=" flex flex-col">
        <section className="relative">
          <div className=" hero-login w-full h-[15.6rem] opacity-20 flex justify-center items-center "></div>
          <div className=" absolute flex justify-center items-center text-center flex-col top-16 w-full ">
            <h1 className=" text-[3.5rem] text-blackSec">My Account</h1>
            <p className=" text-[1rem] text-blackSec">
              Register and log in with your account to be able to shop at will
            </p>
          </div>
        </section>
        <section className=" mt-20 flex flex-col gap-20 lg:gap-32 lg:flex-row justify-center">
          <div className="isForm flex flex-col pb-[10rem] ">
            <div className=" flex flex-col w-full justify-center items-center">
              <h1 className=" text-[1.5rem] md:text-[2rem] flex w-[75%] lg:w-[30rem] xl:w-[35rem] ">
                Forgot your password?
              </h1>
              <p className=" text-[12px] md:text-sm lg:text-base w-[75%] lg:w-[30rem] xl:w-[35rem] ">
                Don’t worry! Just fill in your email and we’ll send you a link
              </p>
            </div>
            <form className=" w-full justify-center flex flex-col gap-3">
              <label htmlFor="" className="flex justify-center mt-11">
                <input
                  type="text"
                  className=" w-[75%] lg:w-[30rem] xl:w-[35rem] lg:h-[4.39rem] text-blackSec placeholder:text-greySec h-[4.4rem] border border-[#CECECE] placeholder:p-5 p-5"
                  placeholder="Your Email Address*"
                />
              </label>

              <div className="flex w-[75%] lg:w-[30rem] xl:w-[35rem] mx-auto flex-col mt-3">
                <button className="btn  bg-blackSec w-[12.3rem] h-14 text-white">
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Forgot;
