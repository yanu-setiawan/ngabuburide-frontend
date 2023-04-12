import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import arrow from "../../assets/icon-arrow-right.svg";
import map from "../../assets/mapTracking.png";
import truck from "../../assets/truck.svg";
import line from "../../assets/Line 2.svg";

function Tracking() {
  const [details, setDetails] = useState(false);
  const [track, setTrack] = useState(true);
  const handleDetails = () => {
    setDetails(true);
    setTrack(false);
  };
  useEffect(() => {
    document.title = "RAZYR - Order Tracking";
  }, []);
  return (
    <>
      <Header />
      <main>
        <section className="relative">
          <div className="absolute flex gap-4 px-4 lg:px-20 pt-10">
            {track && (
              <>
                <p>Tracking</p>
                <img src={arrow} alt="icon-arrow" />
              </>
            )}
            {details && (
              <>
                <p>Tracking</p>
                <img src={arrow} alt="icon-arrow" />
                <p>Tracking Detail</p>
              </>
            )}
          </div>
          <div className=" hero-login w-full h-[15.6rem] opacity-20 flex justify-center items-center "></div>
          <div className=" absolute flex justify-center items-center text-center flex-col top-16 w-full ">
            {track && (
              <>
                <h1 className=" text-[3.5rem] text-blackSec">Order Tracking</h1>
              </>
            )}
            {details && (
              <>
                <h1 className=" text-[3.5rem] text-blackSec">
                  Tracking Detail
                </h1>
              </>
            )}
            <p className=" text-[1rem] text-blackSec">
              Track where your order arrived
            </p>
          </div>
        </section>
        <section className="flex flex-col-reverse lg:flex-row">
          <div className="flex-1 md:w-[768px] lg:w-[50%]">
            <img src={map} alt="map" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 lg:w-1/2">
            {track && (
              <div className="px-20 py-20">
                <h1 className="text-center">
                  To track your order please enter your Order ID in the box
                  below and press the "Track" button. This was given to you on
                  your receipt and in the confirmation email you should have
                  received.
                </h1>
                <form className=" w-full justify-center flex flex-col gap-3 mt-8 md:px-14">
                  <label htmlFor="orderId" className="mb-10 flex flex-col">
                    Order ID
                    <input
                      type="text"
                      id="orderId"
                      name="orderId"
                      className=" w-full lg:h-[4.39rem] text-blackSec placeholder:text-greySec h-[4.4rem] border border-[#CECECE] placeholder:p-5 p-5 mt-4 placeholder:text-xs md:placeholder:text-base"
                      placeholder="Found in your order confirmation email."
                    />
                  </label>
                  <label htmlFor="email" className="mb-10 flex flex-col">
                    Billing Email
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className=" w-full  lg:h-[4.39rem] text-blackSec placeholder:text-greySec h-[4.4rem] border border-[#CECECE] placeholder:p-5 p-5 mt-4 placeholder:text-xs md:placeholder:text-base"
                      placeholder="Email you used during checkout."
                    />
                  </label>
                  <div className="flex justify-center items-center w-full mx-auto flex-col mt-3">
                    <button
                      type="submit"
                      className="btn bg-blackSec w-40 h-14 text-white"
                      onClick={handleDetails}
                    >
                      Track Now
                    </button>
                  </div>
                </form>
              </div>
            )}
            {details && (
              <div className="px-8 md:px-20 py-20">
                <div className="flex justify-between mb-28">
                  <div>
                    <p>Order ID</p>
                    <p className="font-bold md:text-xl">ABCD-EFGH-W123</p>
                  </div>
                  <div>
                    <p>Order Item</p>
                    <p className="font-bold md:text-xl">
                      Fabric Mid Century Chair
                    </p>
                  </div>
                </div>
                <form className=" w-full justify-center flex flex-col gap-3 mt-8 md:px-14">
                  <div className="">
                    <div className="flex gap-3 items-center ">
                      <div className="grid place-items-center w-10 h-10 border rounded-full">
                        <img src={truck} alt="truck" />
                      </div>
                      <div>
                        <p>On Delivery</p>
                        <p>Kebun Jeruk, Jakarta Barat</p>
                      </div>
                    </div>
                    <div className="flex pl-5">
                      <img src={line} alt="" />
                    </div>
                    <div className="flex gap-3 items-center">
                      <div className="grid place-items-center w-10 h-10 border rounded-full">
                        <img src={truck} alt="truck" />
                      </div>
                      <div className=" text-greyFont">
                        <p>Destination</p>
                        <p>Kebun Mangga, Jakarta Selatan</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-full mx-auto flex-col mt-14">
                    <button
                      type="submit"
                      className="btn bg-blackSec w-40 h-14 text-white"
                    >
                      Check on Map
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Tracking;
