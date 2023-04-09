/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import ImgProduct2 from "../../../assets/product2.png";
import CheckStock from "../../../assets/check-circle-08.svg";

function MyProduct() {
  useEffect(() => {
    document.title = "RAZYR - My Products";
  });
  return (
    <>
      <section className=" flex flex-col w-full mt-[6.3rem] gap-10">
        <section className="flex h-[4.4rem] w-full border-y border-greyBord">
          <div className=" w-[45%] flex text-xs md:text-lg  items-center font-medium">
            <p>Products</p>
          </div>
          <div className=" w-[20%] flex text-xs md:text-lg items-center justify-center lg:justify-normal font-medium">
            <p>Stock Status</p>
          </div>
          <div className=" w-[35%] flex text-xs md:text-lg justify-center md:justify-normal md:pl-4 lg:pl-0 items-center  font-medium">
            <p>Price</p>
          </div>
        </section>
        <section className=" flex flex-col gap-10">
          <section className=" flex w-full">
            <div className=" flex  w-[45%] flex-col ">
              <div className=" flex gap-[0.5rem] md:gap-10">
                <div className=" h-20 w-20 md:w-[8.8rem] md:h-[8.8rem]  lg:h-[10.8rem] lg:w-[10.7rem]">
                  <img className=" w-full h-full" src={ImgProduct2} alt="" />
                </div>
                <div className=" text-xs md:text-sm flex justify-center items-center">
                  <p>Dining Side Chair in Beige</p>
                </div>
              </div>
            </div>
            <div className=" w-[20%] flex justify-center lg:justify-normal">
              <div className="flex gap-[0.39rem]">
                <div className="  flex items-center ">
                  <img
                    className=" w-[0.94rem] h-[0.94rem] flex items-center"
                    src={CheckStock}
                    alt=""
                  />
                </div>
                <div className=" text-xs flex items-center  font-medium text-[#262626]">
                  10 Stock
                </div>
              </div>
            </div>
            <div className=" w-[35%] flex justify-center lg:justify-normal md:pl-4 lg:pl-0 items-center">
              <div className=" flex flex-col md:flex-row items-center  justify-between w-full">
                <div className=" font-bold text-xs md:text-lg flex items-center">
                  <p>IDR.2.000.000</p>
                </div>
                <div>
                  <button className="btn bg-redBtn flex w-full lg:w-[7rem] xl:w-[12.5rem] h-[3.75rem] gap-3 border-none justify-center items-center hover:bg-red-500">
                    <p className="text-white font-bold">Delete</p>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}

export default MyProduct;
