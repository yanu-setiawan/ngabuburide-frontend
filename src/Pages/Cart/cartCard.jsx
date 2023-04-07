import React from "react";
import chair from "../../assets/chair.png";

function cartCard() {
  return (
    <>
      <div className="flex flex-col gap-8 mb-10">
        <div className="flex gap-2 md:gap-8 lg:gap-12 text-xs lg:text-base flex-row items-center ustify-between">
          <div className="flex items-center lg:gap-4 md:w-fit">
            <p>x</p>
            <div className="md:w-[4.313rem] md:h-[5.188rem]">
              <img
                src={chair}
                alt="chair"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="w-28 md:w-52">Fabric Mid Century Chair</p>
          </div>
          <div className="w-32">
            <p>Rp.10.000.000</p>
          </div>
          <div className="mr-4 lg:mr-0">
            <div className="flex gap-4">
              <p>-</p>
              <p>02</p>
              <p>+</p>
            </div>
          </div>
          <div className="w-32">
            <p>Rp.100.000.000</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default cartCard;
