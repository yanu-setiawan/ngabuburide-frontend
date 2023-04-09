/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import pp1 from "../../assets/profile/pp1.png";
import pp2 from "../../assets/profile/pp2.png";
import pp3 from "../../assets/profile/pp3.png";
import path from "../../assets/Medsos/Path (1).svg";
function Chat() {
  useEffect(() => {
    document.title = "RAZYR - Chat";
  }, []);
  return (
    <>
      <Header />
      <section className=" flex flex-col pb-[10rem]">
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
          <section className=" w-full border border-greyBord flex  ">
            <section className=" hidden lg:flex flex-col w-[40%] h-[50rem] border-r border-greyBord">
              <div className=" h-[8.8rem] p-10 bg-blackSec flex gap-5">
                <div className="flex relative">
                  <div>
                    <img src={pp1} alt="" />
                  </div>
                  <div className=" flex absolute top-auto justify-end w-[1.17rem] h-[1.17rem] bg-[#22CD29] rounded-full translate-x-[2.4rem] translate-y-11"></div>
                </div>
                <div className="flex flex-col gap-2 ">
                  <p className=" font-bold text-white text-2xl">Syifa Guysss</p>
                  <p className=" text-base text-greyFont">Online</p>
                </div>
              </div>
              <div className=" h-[8.8rem] p-6 xl:p-10 flex gap-5  border-b border-greyBord justify-between">
                <div className="flex gap-5">
                  <div className="flex relative">
                    <div>
                      <img src={pp2} alt="" />
                    </div>
                    <div className=" flex absolute top-auto justify-end w-[1.17rem] h-[1.17rem] bg-[#22CD29] rounded-full translate-x-[2.4rem] translate-y-11"></div>
                  </div>
                  <div className="flex flex-col gap-2 ">
                    <p className=" font-bold  text-2xl">Syifa Guysss</p>
                    <p className=" text-base text-greySec">
                      Lorem ipsum dolor ...
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="flex justify-center items-center">
                    <img
                      src={path}
                      alt=""
                      className="flex justify-center items-center"
                    />
                  </div>
                </div>
              </div>
              <div className=" h-[8.8rem] p-6 xl:p-10 flex gap-5  border-b border-greyBord justify-between">
                <div className="flex gap-5">
                  <div className="flex relative">
                    <div>
                      <img src={pp3} alt="" />
                    </div>
                    <div className=" flex absolute top-auto justify-end w-[1.17rem] h-[1.17rem] bg-[#22CD29] rounded-full translate-x-[2.4rem] translate-y-11"></div>
                  </div>
                  <div className="flex flex-col gap-2 ">
                    <p className=" font-bold  text-2xl">Syifa Guysss</p>
                    <p className=" text-base text-greySec">
                      Lorem ipsum dolor ...
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="flex justify-center items-center">
                    <img
                      src={path}
                      alt=""
                      className="flex justify-center items-center"
                    />
                  </div>
                </div>
              </div>
              <div className=" h-[8.8rem] p-6 xl:p-10 flex gap-5  border-b border-greyBord justify-between">
                <div className="flex gap-5">
                  <div className="flex relative">
                    <div>
                      <img src={pp1} alt="" />
                    </div>
                    <div className=" flex absolute top-auto justify-end w-[1.17rem] h-[1.17rem] bg-[#22CD29] rounded-full translate-x-[2.4rem] translate-y-11"></div>
                  </div>
                  <div className="flex flex-col gap-2 ">
                    <p className=" font-bold  text-2xl">Syifa Guysss</p>
                    <p className=" text-base text-greySec">
                      Lorem ipsum dolor ...
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="flex justify-center items-center">
                    <img
                      src={path}
                      alt=""
                      className="flex justify-center items-center"
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className=" flex w-full lg:w-[60%] h-[50rem] flex-col">
              <div className=" h-[8.8rem] p-10 flex gap-5 w-full bg-blackSec">
                <div className="flex gap-3">
                  <div className="flex relative">
                    <div>
                      <img src={pp2} alt="" />
                    </div>
                    <div className=" flex absolute top-auto justify-end w-[1.17rem] h-[1.17rem] bg-[#22CD29] rounded-full translate-x-[2.4rem] translate-y-11"></div>
                  </div>
                  <div className="flex flex-col gap-2 ">
                    <p className=" font-bold text-white text-2xl">Aisyahhh</p>
                    <p className=" text-base text-greyFont">Online</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center border-t border-x border-greyBord mt-auto p-5">
                <div className="flex justify-center items-center">
                  <form className=" w-full justify-center items-center flex">
                    <label htmlFor="" className="flex justify-center">
                      <input
                        type="text"
                        className=" w-full outline-0 lg:h-[4.39rem] text-blackSec placeholder:text-greySec h-[4.4rem]  placeholder:p-5 p-5"
                        placeholder="Write Your Message...."
                      />
                    </label>
                  </form>
                </div>
                <div className="flex  flex-col">
                  <button className="btn  bg-blackSec w-[8rem] lg:w-[12.3rem] rounded-sm h-14 text-white">
                    Send
                  </button>
                </div>
              </div>
            </section>
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Chat;
