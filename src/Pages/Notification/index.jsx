/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Notifications() {
  return (
    <>
      <Header />
      <section className=" flex flex-col pb-10">
        <section className="relative">
          <div className=" hero-login w-full h-[15.6rem] opacity-20 flex justify-center items-center "></div>
          <div className=" absolute flex justify-center items-center text-center flex-col top-16 w-full ">
            <h1 className=" text-[3.5rem] text-blackSec">Notification</h1>
            <p className=" text-[1rem] text-blackSec">
              See your notifications for the latest updates
            </p>
          </div>
        </section>
        <section className=" mt-20 flex flex-col justify-center w-full px-[10%]">
          <section className=" w-full border border-[#D1D1D1]">
            <div className=" flex  px-[3.8rem] py-10 justify-between">
              <div>
                <h1 className="text-lg md:text-2xl font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h1>
                <p className=" text-sm text-greyFont">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                  dapibus non elementum arcu tortor...
                </p>
              </div>
              <div className=" w-max">
                <div className=" w-6 h-6 rounded-full bg-[#D94141]"></div>
              </div>
            </div>
            <div className="flex flex-col  px-[3.8rem] py-10  border-t border-b border-[#D1D1D1] ">
              <h1 className=" text-lg md:text-2xl ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h1>
              <p className=" text-sm text-greyFont">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                dapibus non elementum arcu tortor...
              </p>
            </div>
            <div className="flex flex-col  px-[3.8rem] py-10">
              <h1 className=" text-lg md:text-2xl ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h1>
              <p className=" text-sm text-greyFont">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                dapibus non elementum arcu tortor...
              </p>
            </div>
          </section>
          <section className=" flex gap-3 mt-10 mb-24">
            <div className=" w-12 h-12 bg-blackSec text-white flex justify-center items-center text-center border border-[#D1D1D1]">
              01
            </div>
            <div className=" w-12 h-12  text-blackSec flex justify-center items-center text-center border border-[#D1D1D1]">
              02
            </div>
            <div className=" w-12 h-12  text-blackSec flex justify-center items-center text-center border border-[#D1D1D1]">
              03
            </div>
            <div className=" w-12 h-12  text-blackSec flex justify-center items-center text-center border border-[#D1D1D1]">
              04
            </div>
            <div className=" w-12 h-12  text-blackSec flex justify-center items-center text-center border border-[#D1D1D1]">
              05
            </div>
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Notifications;
