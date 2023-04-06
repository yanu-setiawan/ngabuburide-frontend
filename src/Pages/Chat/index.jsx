/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Chat() {
  return (
    <>
      <Header />
      <section className=" flex flex-col pb-10">
        <section className="relative">
          <div className=" hero-login w-full h-[15.6rem] opacity-20 flex justify-center items-center "></div>
          <div className=" absolute flex justify-center items-center text-center flex-col top-16 w-full ">
            <h1 className=" text-[3.5rem] text-blackSec">Chat</h1>
            <p className=" text-[1rem] text-blackSec">
              See your notifications for the latest updates
            </p>
          </div>
        </section>
        <section className=" mt-20 flex flex-col justify-center w-full px-[10%]">
          <section className=" w-full border border-greyBord">
            <section className=" flex flex-col">
              <div></div>
            </section>
            <section></section>
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Chat;
