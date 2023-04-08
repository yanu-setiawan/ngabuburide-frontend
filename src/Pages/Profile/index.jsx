/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import EditProfile from "../../components/Profile/ProfileComp";
import MyProduct from "../../components/Profile/MyProdComp";
import SellingOrder from "../../components/Profile/Selling Order";
import MyOrder from "../../components/Profile/MyOrder";
function Profile() {
  return (
    <>
      <Header />
      <section className=" flex flex-col pb-[10rem]">
        <section className="relative">
          <div className=" hero-login w-full h-[15.6rem] opacity-20 flex justify-center items-center "></div>
          <div className=" absolute flex justify-center items-center text-center flex-col top-16 w-full ">
            <h1 className=" text-[3.5rem] text-blackSec">Profile</h1>
            <p className=" text-[1rem] text-blackSec">
              See your notifications for the latest updates
            </p>
          </div>
        </section>
        <section className=" mt-20 flex flex-col mx-[5%] md-[4%] lg:mx-[10%]">
          <section className=" flex gap-[0.91rem] md:gap-[3.1rem] xl:gap-20">
            <div className="w-max border-b-2 border-greyBord md:p-3">
              <p className="text-base md:text-[1.4rem] lg:text-[2rem] w-max cursor-pointer  ">
                Profile
              </p>
            </div>
            <div className="flex w-max lg:gap-3  md:p-3">
              <p className=" text-base md:text-[1.4rem] lg:text-[2rem] w-max cursor-pointer">
                My Product
              </p>
              <div className=" flex justify-center items-center cursor-pointer ">
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </div>
            </div>
            <div className=" w-max  md:p-3">
              <p className=" text-base md:text-[1.4rem] lg:text-[2rem] w-max cursor-pointer">
                Selling Product
              </p>
            </div>
            <div className="flex w-max md:p-3">
              <p className="text-base md:text-[1.4rem] lg:text-[2rem] w-max cursor-pointer">
                My Order
              </p>
              <div className=" flex justify-center items-center  lg:gap-3 cursor-pointer">
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </div>
            </div>
          </section>
          {/* <EditProfile /> */}
          {/* <MyProduct /> */}
          {/* <SellingOrder /> */}
          {/* <MyOrder /> */}
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Profile;
