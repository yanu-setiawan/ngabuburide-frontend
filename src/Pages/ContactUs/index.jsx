import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Map from "../../assets/MAP.png";

function ContactUs() {
  return (
    <>
      <Header />
      <main className="">
        <section className="relative ">
          <div className=" hero-login w-full h-[15.6rem] opacity-20 flex justify-center items-center "></div>

          <div className=" absolute flex justify-center items-center text-center flex-col top-16 w-full ">
            <h1 className=" text-[3.5rem] text-blackSec">Contact Us</h1>
          </div>
        </section>
        <section className=" w-full flex flex-col lg:flex-row  lg:mx-0">
          <section className=" hidden lg:flex flex-1 lg:w-[50%]">
            <img src={Map} alt="" className=" w-full h-full" />
          </section>
          <section className=" flex w-full lg:w-[50%] flex-col  justify-center p-[8%]">
            <form
              action=""
              className=" w-full items-center gap-14 flex flex-col "
            >
              <label
                htmlFor=""
                className=" flex pb-5 border-b-2 border-black w-full"
              >
                <input
                  type="text"
                  placeholder="Your Name*"
                  className=" outline-none placeholder:text-black"
                />
              </label>
              <label
                htmlFor=""
                className=" flex pb-5 border-b-2 border-black w-full"
              >
                <input
                  type="text"
                  placeholder="Your Email*"
                  className=" outline-none placeholder:text-black"
                />
              </label>
              <label
                htmlFor=""
                className=" flex pb-5 border-b-2 border-black w-full"
              >
                <input
                  type="text"
                  placeholder="Your Website"
                  className=" outline-none placeholder:text-black"
                />
              </label>
              <label
                htmlFor=""
                className=" flex pb-5 border-b-2 border-black w-full"
              >
                <input
                  type="text"
                  placeholder="Bussines Plan"
                  className=" outline-none placeholder:text-black"
                />
              </label>
              <label
                htmlFor=""
                className=" flex pb-[7rem] border-b-2 border-black w-full"
              >
                <input
                  type="text"
                  placeholder="Message"
                  className=" outline-none placeholder:text-black"
                />
              </label>
            </form>
            <div className=" w-full flex justify-center items-center mt-20">
              <button className=" btn w-full flex h-20 bg-blackSec text-white font-bold">
                Send Message
              </button>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ContactUs;
