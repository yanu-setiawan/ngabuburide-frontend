/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Register() {
  const navigate = useNavigate();
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
          <aside className=" flex gap-20 justify-center lg:flex-col lg:justify-normal p-2">
            <Link to="/login">
              <p className=" text-[1.30rem] md:text-[2rem] text-greyFont p-3 text-center">
                Login Account
              </p>
            </Link>
            <p className="text-[1.30rem] md:text-[2rem] text-blackSec border-b-2 border-[#C2C2C2] p-3 text-center">
              Register Account
            </p>
          </aside>
          <div className="isForm flex flex-col pb-[10rem] ">
            <h1 className=" text-[2rem] flex justify-center lg:justify-start">
              Create Account
            </h1>
            <form className=" w-full justify-center flex flex-col gap-3">
              <label htmlFor="" className="flex justify-center mt-11">
                <input
                  type="text"
                  className=" w-[75%] lg:w-[30rem] xl:w-[35rem] lg:h-[4.39rem] text-blackSec placeholder:text-greySec h-[4.4rem] border border-[#CECECE] placeholder:p-5 p-5"
                  placeholder="Email Address*"
                />
              </label>
              <label htmlFor="" className="flex justify-center">
                <input
                  type="text"
                  className=" w-[75%] lg:w-[30rem] xl:w-[35rem] lg:h-[4.39rem] text-blackSec placeholder:text-greySec h-[4.4rem] border border-[#CECECE] placeholder:p-5 p-5"
                  placeholder="Password*"
                />
              </label>

              <div className="flex gap-6 w-[75%] lg:w-[30rem] xl:w-[35rem] mx-auto my-[1rem]">
                <div className="flex items-center mr-4 mb-3">
                  <input
                    id="radio1"
                    type="radio"
                    name="role"
                    className="hidden"
                  />
                  <label
                    for="radio1"
                    className="flex items-center cursor-pointer"
                  >
                    <span class="w-4 h-4 inline-block mr-1 border border-grey"></span>
                    I'm Customer
                  </label>
                </div>

                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="radio2"
                    type="radio"
                    name="role"
                    className="hidden"
                  />
                  <label
                    for="radio2"
                    className="flex items-center cursor-pointer"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                    I'm Seller
                  </label>
                </div>
              </div>

              <div className="flex w-[75%] lg:w-[30rem] xl:w-[35rem] mx-auto">
                <button className="btn  bg-blackSec w-32 h-14 text-white">
                  Register
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

export default Register;
