/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
import React from "react";
import Facebook from "../../assets/Medsos/facebook.svg";
import Twitter from "../../assets/Medsos/twitter.svg";
import Youtube from "../../assets/Medsos/youtube.svg";
import Dribble from "../../assets/Medsos/dribbble.svg";
import Mail from "../../assets/Medsos/letter.svg";
import Clock from "../../assets/Medsos/clock.svg";
import PhoneCall from "../../assets/Medsos/phone-call.svg";

function Footer() {
  return (
    <footer className="bg-blackSec">
      <section className=" w-full p-6 md:p-[5rem] flex gap-14 xl:gap-[9.3rem] flex-col lg:flex-row  justify-around">
        <div className="">
          <p className=" font-bold text-white text-[3.75rem] mb-[1rem]">
            RAZYR
          </p>
          <p className="text-[1.125rem]  text-greyFont mb-[2rem] ">
            Worldwide furniture store since <br />
            2023. We sell over 1000+ branded <br />
            products on our website.
          </p>
          <div className="flex gap-[1.5rem]">
            <div className=" border rounded-full border-white h-[2.813rem] w-[2.813rem] p-1 flex items-center justify-center cursor-pointer ">
              <img src={Facebook} alt="fb" />
            </div>
            <div className=" border rounded-full border-white h-[2.813rem] w-[2.813rem] p-1 flex items-center justify-center cursor-pointer">
              <img src={Twitter} alt="fb" />
            </div>
            <div className=" border rounded-full border-white h-[2.813rem] w-[2.813rem] p-1 flex items-center justify-center  cursor-pointer">
              <img src={Youtube} alt="fb" />
            </div>
            <div className=" border rounded-full border-white h-[2.813rem] w-[2.813rem] p-1 flex items-center justify-center cursor-pointer">
              <img src={Dribble} alt="fb" />
            </div>
          </div>
        </div>
        <div className="mid-content flex gap-8 md:gap-[5rem] xl:gap-[9.313rem] pt-3 ">
          <div className="content-detail flex-col gap-3">
            <h2 className="font-bold text-white text-lg pb-9">COMPANY</h2>
            <ol className="flex flex-col  text-greyFont font-normal text-sm gap-8 w-max">
              <li className=" cursor-pointer hover:text-yellow">ABOUT US</li>
              <li className=" cursor-pointer hover:text-yellow">HELP CENTER</li>
              <li className=" cursor-pointer hover:text-yellow">LICENSES</li>
              <li className=" cursor-pointer hover:text-yellow">MARKET API</li>
              <li className=" cursor-pointer hover:text-yellow">SITE MAP</li>
            </ol>
          </div>
          <div className="content-detail">
            <h2 className="font-bold text-white text-lg pb-9">USERFUL</h2>
            <ol className="flex flex-col  text-greyFont font-normal text-sm gap-8 w-max">
              <li className=" cursor-pointer hover:text-yellow">
                INSPIRATIONS
              </li>
              <li className=" cursor-pointer hover:text-yellow">
                THE COLLECTIONS
              </li>
              <li className=" cursor-pointer hover:text-yellow">SIZE GUIDE</li>
              <li className=" cursor-pointer hover:text-yellow">LOOKBOOK</li>
              <li className=" cursor-pointer hover:text-yellow">
                INSTAGRAM SHOP
              </li>
            </ol>
          </div>
        </div>
        <section>
          <div className="content-detail pt-3">
            <h2 className="font-bold text-white text-lg pb-9 ">CONTACT US</h2>
            <ol className="flex flex-col  text-greyFont font-normal text-sm gap-8 w-max">
              <div className="flex  items-center gap-5">
                <div className="border rounded-full border-white h-[2.813rem] w-[2.813rem] p-1 flex items-center justify-center cursor-pointer">
                  <img src={Mail} alt="" />
                </div>
                <li className=" cursor-pointer hover:text-yellow">
                  info@team.ngabuburide.com
                </li>
              </div>
              <div className="flex  items-center gap-5">
                <div className="border rounded-full border-white h-[2.813rem] w-[2.813rem] p-1 flex items-center justify-center cursor-pointer">
                  <img src={PhoneCall} alt="" />
                </div>
                <li className=" cursor-pointer hover:text-yellow">
                  +44.954.954.86
                </li>
              </div>
              <div className="flex  items-center gap-5">
                <div className="border rounded-full border-white h-[2.813rem] w-[2.813rem] p-1 flex items-center justify-center cursor-pointer">
                  <img src={Clock} alt="" />
                </div>
                <li className=" cursor-pointer hover:text-yellow">
                  9:00am - 19:00pm <br /> Monday - Sunday
                </li>
              </div>
            </ol>
          </div>
        </section>
      </section>
      <p className=" text-greyFont font-Lato font-normal text-xs lg:text-[14px] w-full flex  items-center justify-center leading-loose p-3 pt-0">
        © 2019 RAZ Store All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
