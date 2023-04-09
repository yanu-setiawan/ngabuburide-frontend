import React, { useEffect } from "react";
import chair from "../../../assets/chair.png";

function MyOrder() {
  useEffect(() => {
    document.title = "RAZYR - My Order";
  });
  return (
    <>
      <section className=" flex w-full flex-col">
        <section className=" w-full flex mt-28">
          <div className="flex  justify-between px-4 py-4 w-full">
            <div className="w-full">
              <div className="flex justify-between gap-[1rem] text-[11px] text-[#8D8D8D] lg:text-base md:gap-20 mb-10 ">
                <div className=" flex w-[46%]">
                  <h2 className="mr-auto">PRODUCTS</h2>
                </div>
                <div className=" flex justify-around gap-8 md:gap-[4.5rem] lg:gap-[5.5rem] w-[54%]">
                  <h2 className="pl-4 md:pl-0">PRICE</h2>
                  <h2>QUANTITY</h2>
                  <h2 className=" w-max">STATUS ORDER</h2>
                  <h2 className="mr-10">TOTAL</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" flex w-full gap-10 flex-col">
          <div className=" flex w-full">
            <div className=" flex flex-col md:flex-row gap-0 md:gap-12 w-[46%] pl-4">
              <div className=" w-[4.313rem] h-[5.188rem] ">
                <img src={chair} alt="" />
              </div>
              <div className="  text-[10px] md:text-base text-black flex items-center w-[6.2rem] xl:w-max">
                <p>Fabric Mid Century Chair</p>
              </div>
            </div>
            <div className=" flex gap-[1rem] md:gap-[3rem] lg:gap-20 xl:gap-28 justify-center items-center w-[54%]">
              <div className=" text-[10px] md:text-base  text-black flex items-center">
                <p>Rp.1.000.000</p>
              </div>
              <div className="  text-[10px] md:text-base text-black flex items-center">
                <p>02</p>
              </div>
              <div className=" text-[10px] md:text-base text-black  flex items-center">
                <p>Proccesed</p>
              </div>
              <div className="   text-[10px] md:text-base text-black  flex items-center">
                <p>Rp.12.000000</p>
              </div>
            </div>
          </div>
          <div className=" flex w-full">
            <div className=" flex flex-col md:flex-row gap-0 md:gap-12 w-[46%] pl-4">
              <div className=" w-[4.313rem] h-[5.188rem] ">
                <img src={chair} alt="" />
              </div>
              <div className="  text-[10px] md:text-base text-black flex items-center w-[6.2rem] xl:w-max">
                <p>Fabric Mid Century Chair</p>
              </div>
            </div>
            <div className=" flex gap-[1rem] md:gap-[3rem] lg:gap-20 xl:gap-28 justify-center items-center w-[54%]">
              <div className=" text-[10px] md:text-base  text-black flex items-center">
                <p>Rp.1.000.000</p>
              </div>
              <div className="  text-[10px] md:text-base text-black flex items-center">
                <p>02</p>
              </div>
              <div className=" text-[10px] md:text-base text-black  flex items-center">
                <p>Proccesed</p>
              </div>
              <div className="   text-[10px] md:text-base text-black  flex items-center">
                <p>Rp.12.000000</p>
              </div>
            </div>
          </div>
          <div className=" flex w-full">
            <div className=" flex flex-col md:flex-row gap-0 md:gap-12 w-[46%] pl-4">
              <div className=" w-[4.313rem] h-[5.188rem] ">
                <img src={chair} alt="" />
              </div>
              <div className="  text-[10px] md:text-base text-black flex items-center w-[6.2rem] xl:w-max">
                <p>Fabric Mid Century Chair</p>
              </div>
            </div>
            <div className=" flex gap-[1rem] md:gap-[3rem] lg:gap-20 xl:gap-28 justify-center items-center w-[54%]">
              <div className=" text-[10px] md:text-base  text-black flex items-center">
                <p>Rp.1.000.000</p>
              </div>
              <div className="  text-[10px] md:text-base text-black flex items-center">
                <p>02</p>
              </div>
              <div className=" text-[10px] md:text-base text-black  flex items-center">
                <p>Proccesed</p>
              </div>
              <div className="   text-[10px] md:text-base text-black  flex items-center">
                <p>Rp.12.000000</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default MyOrder;
