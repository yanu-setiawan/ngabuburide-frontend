/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import search from "../../assets/zoom.svg";
import side1 from "../../assets/side1.png";
import side2 from "../../assets/side2.png";
import side3 from "../../assets/side3.png";
import side4 from "../../assets/side4.png";
import banner from "../../assets/Background/AD BANNER.png";
import arrow from "../../assets/down-arrow.svg";
import bgBlog1 from "../../assets/Background/blog1.png";
import bgBlog2 from "../../assets/Background/blog2.png";
import bgBlog3 from "../../assets/Background/blog3.png";
import bgBlog4 from "../../assets/Background/blog4.png";
import bgBlog5 from "../../assets/Background/blog5.png";
import clock from "../../assets/Background/clock (1).svg";
import tag from "../../assets/Background/tag.svg";
import line from "../../assets/Medsos/Rectangle.svg";

function Blog() {
  useEffect(() => {
    document.title = "RAZYR - Blog";
  }, []);
  return (
    <>
      <Header />
      <main>
        <section className="relative mb-20">
          <div className=" hero-login w-full h-[15.6rem] opacity-20 flex justify-center items-center "></div>
          <div className=" absolute flex justify-center items-center text-center flex-col top-16 w-full ">
            <h1 className=" text-[3.5rem] text-blackSec">Our Blog</h1>
            <p className=" text-[1rem] text-blackSec">
              Read and enjoy content from us
            </p>
          </div>
        </section>
        <section className=" px-[15%] lg:pl-20 gap-[6.25rem] lg:pr-[8.8rem] flex flex-col lg:flex-row w-full">
          <section className=" flex flex-col w-full  lg:w-[16.25rem]">
            <section className=" flex">
              <div className=" w-full flex h-10 justify-between p-5 border-2  items-center border-greyBord">
                <div className="">Search...</div>
                <div>
                  <img src={search} alt="" width="12px" height="12px" />
                </div>
              </div>
            </section>
            <section className=" flex flex-col mt-10 gap-5 w-full  lg:w-[16.25rem]">
              <div className="text-2xl justify-center lg:justify-start flex w-full items-center font-bold">
                <h1>Categories</h1>
              </div>
              <div className=" flex justify-between">
                <div>
                  <p>Furniture</p>
                </div>
                <div>
                  <p>3</p>
                </div>
              </div>
              <div className=" flex justify-between">
                <div>
                  <p>Interior</p>
                </div>
                <div>
                  <p>9</p>
                </div>
              </div>
              <div className=" flex justify-between">
                <div>
                  <p>Real Estate</p>
                </div>
                <div>
                  <p>7</p>
                </div>
              </div>
              <div className=" flex justify-between">
                <div>
                  <p>Construction</p>
                </div>
                <div>
                  <p>2</p>
                </div>
              </div>
              <div className=" flex justify-between">
                <div>
                  <p>Bussines</p>
                </div>
                <div>
                  <p>8</p>
                </div>
              </div>
              <div className=" flex justify-between">
                <div>
                  <p>Industrial</p>
                </div>
                <div>
                  <p>5</p>
                </div>
              </div>
            </section>
            <section className=" flex  flex-col mt-12 gap-10">
              <div className="text-2xl justify-center lg:justify-start flex w-full items-center font-bold">
                <h1>Recent News</h1>
              </div>
              <div className=" flex flex-col">
                <div className=" flex gap-5">
                  <div className=" w-[4.375rem] h-[4.375rem]">
                    <img src={side1} alt="" />
                  </div>
                  <div className=" flex flex-col gap-2">
                    <div className=" text-sm font-bold">
                      <p>How To Put Movies On Iphone</p>
                    </div>
                    <div className=" text-[10px] text-[#3E3E3E] mb-8">
                      <p>24 Apr 2019, 45 mins ago</p>
                    </div>
                  </div>
                </div>
                <span className=" w-full h-[1px] bg-greyFont my-6 lg:mb-7 lg:my-0"></span>
                <div className=" flex gap-5">
                  <div className=" w-[4.375rem] h-[4.375rem]">
                    <img src={side4} alt="" />
                  </div>
                  <div className=" flex flex-col gap-2">
                    <div className=" text-sm font-bold">
                      <p>How To Put Movies On Iphone</p>
                    </div>
                    <div className=" text-[10px] text-[#3E3E3E] mb-8">
                      <p>24 Apr 2019, 45 mins ago</p>
                    </div>
                  </div>
                </div>
                <span className="w-full h-[1px] bg-greyFont my-6 lg:mb-7 lg:my-0"></span>
                <div className=" flex gap-5">
                  <div className=" w-[4.375rem] h-[4.375rem]">
                    <img src={side2} alt="" />
                  </div>
                  <div className=" flex flex-col gap-2">
                    <div className=" text-sm font-bold">
                      <p>Windows Registry Cleaner </p>
                    </div>
                    <div className=" text-[10px] text-[#3E3E3E] mb-8">
                      <p>24 Apr 2019, 45 mins ago</p>
                    </div>
                  </div>
                </div>
                <span className="w-full h-[1px] bg-greyFont my-6 lg:mb-7 lg:my-0"></span>
                <div className=" flex gap-5">
                  <div className=" w-[4.375rem] h-[4.375rem]">
                    <img src={side3} alt="" />
                  </div>
                  <div className=" flex flex-col gap-2">
                    <div className=" text-sm font-bold">
                      <p>How To Put Movies On Iphone</p>
                    </div>
                    <div className=" text-[10px] text-[#3E3E3E] mb-8">
                      <p>24 Apr 2019, 45 mins ago</p>
                    </div>
                  </div>
                </div>
                <span className="w-full h-[1px] bg-greyFont my-6 lg:mb-7 lg:my-0"></span>
              </div>
            </section>
            <section>
              <div className="text-2xl justify-center lg:justify-start flex w-full items-center font-bold mb-[2rem]">
                <h1>Archives</h1>
              </div>
              <div className=" flex mb-12">
                <div className=" w-full flex h-12 justify-between p-5 border-2  items-center border-greyBord">
                  <div className="">Select Month</div>
                  <div>
                    <img src={arrow} alt="" width="12px" height="12px" />
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="text-2xl justify-center lg:justify-start flex w-full items-center font-bold mb-[2rem]">
                <h1>Tags</h1>
              </div>
              <div className=" flex flex-wrap gap-2 justify-center">
                <div className=" w-max text-xs cursor-pointer px-3 py-2 border-2 text-black hover:text-white bg-white  rounded-lg border-greyBord hover:bg-blackSec">
                  Furniture
                </div>
                <div className=" w-max text-xs cursor-pointer px-3 py-2 border-2 text-black hover:text-white bg-white  rounded-lg border-greyBord hover:bg-blackSec">
                  New Trend
                </div>
                <div className=" w-max text-xs cursor-pointer px-3 py-2 border-2 text-black hover:text-white bg-white  rounded-lg border-greyBord hover:bg-blackSec">
                  Life Style
                </div>
                <div className=" w-max text-xs cursor-pointer px-3 py-2 border-2 text-black hover:text-white bg-white  rounded-lg border-greyBord hover:bg-blackSec">
                  Zuka
                </div>
                <div className=" w-max text-xs cursor-pointer px-3 py-2 border-2 text-black hover:text-white bg-white  rounded-lg border-greyBord hover:bg-blackSec">
                  Real Estate
                </div>
                <div className=" w-max text-xs cursor-pointer px-3 py-2 border-2 text-black hover:text-white bg-white  rounded-lg border-greyBord hover:bg-blackSec">
                  Online Store
                </div>
              </div>
            </section>
            <section className=" mt-16 hidden lg:flex justify-center lg:justify-start">
              <img src={banner} alt="" />
            </section>
          </section>
          <section className="flex flex-col w-full">
            <section className=" flex flex-col gap-6">
              <div className=" flex">
                <img src={bgBlog1} alt="" />
              </div>
              <div className=" flex flex-col gap-6">
                <h1 className=" text-[2rem]">How to open interior shop?</h1>
                <div className=" flex gap-5">
                  <div className=" flex gap-[0.35rem] items-center">
                    <img src={clock} alt="" width="14px" height="14px" />
                    <p className=" text-[10px] text-[#3E3E3E]">
                      24 Apr 2019, 45 mins ago, by Admin
                    </p>
                  </div>
                  <div className=" flex gap-[0.35rem] items-center">
                    <img src={tag} alt="" width="14px" height="14px" />
                    <p className=" text-[10px] text-[#3E3E3E]">
                      Kids, Interior, Photos
                    </p>
                  </div>
                </div>
                <div className=" text-sm text-[#4D4D4D] leading-7">
                  <p>
                    Maecenas eget congue augue. Sed mollis tempor velit, et
                    tempor justo cursus vel. Phasellus lacinia placerat lacus,
                    vulputate volutpat tellus fringilla eu. Phasellus rhoncus
                    varius tortor, non ultricies felis condimentum eget unc
                    ornare suscipit nulla sagittis faucibu
                  </p>
                </div>
              </div>
              <div className=" flex gap-5 w-full items-center mb-14">
                <div className=" font-bold w-max">
                  <p>Read More</p>
                </div>
                <span className=" w-[11.813rem] md:w-[26.813rem] lg:w-[20.8rem] xl:w-[46.813rem] h-[1px] bg-greyFont"></span>
              </div>
            </section>

            <section className=" flex flex-col gap-6">
              <div className=" flex">
                <img src={bgBlog2} alt="" />
              </div>
              <div className=" flex flex-col gap-6">
                <h1 className=" text-[2rem]">Scandinavian Style 2019</h1>
                <div className=" flex gap-5">
                  <div className=" flex gap-[0.35rem] items-center">
                    <img src={clock} alt="" width="14px" height="14px" />
                    <p className=" text-[10px] text-[#3E3E3E]">
                      24 Apr 2019, 45 mins ago, by Admin
                    </p>
                  </div>
                  <div className=" flex gap-[0.35rem] items-center">
                    <img src={tag} alt="" width="14px" height="14px" />
                    <p className=" text-[10px] text-[#3E3E3E]">
                      Kids, Interior, Photos
                    </p>
                  </div>
                </div>
                <div className=" text-sm text-[#4D4D4D] leading-7">
                  <p>
                    Maecenas eget congue augue. Sed mollis tempor velit, et
                    tempor justo cursus vel. Phasellus lacinia placerat lacus,
                    vulputate volutpat tellus fringilla eu. Phasellus rhoncus
                    varius tortor, non ultricies felis condimentum eget unc
                    ornare suscipit nulla sagittis faucibu
                  </p>
                </div>
              </div>
              <div className=" flex gap-5 w-full items-center mb-14">
                <div className=" font-bold w-max">
                  <p>Read More</p>
                </div>
                <span className=" w-[11.813rem] md:w-[26.813rem] lg:w-[20.8rem] xl:w-[46.813rem] h-[1px] bg-greyFont"></span>
              </div>
            </section>
            <section className=" flex flex-col gap-6">
              <div className=" flex">
                <img src={bgBlog3} alt="" />
              </div>
              <div className=" flex flex-col gap-6">
                <h1 className=" text-[2rem]">
                  Beautiful Workspace for Designer
                </h1>
                <div className=" flex gap-5">
                  <div className=" flex gap-[0.35rem] items-center">
                    <img src={clock} alt="" width="14px" height="14px" />
                    <p className=" text-[10px] text-[#3E3E3E]">
                      24 Apr 2019, 45 mins ago, by Admin
                    </p>
                  </div>
                  <div className=" flex gap-[0.35rem] items-center">
                    <img src={tag} alt="" width="14px" height="14px" />
                    <p className=" text-[10px] text-[#3E3E3E]">
                      Kids, Interior, Photos
                    </p>
                  </div>
                </div>
                <div className=" text-sm text-[#4D4D4D] leading-7">
                  <p>
                    Maecenas eget congue augue. Sed mollis tempor velit, et
                    tempor justo cursus vel. Phasellus lacinia placerat lacus,
                    vulputate volutpat tellus fringilla eu. Phasellus rhoncus
                    varius tortor, non ultricies felis condimentum eget unc
                    ornare suscipit nulla sagittis faucibu
                  </p>
                </div>
              </div>
              <div className=" flex gap-5 w-full items-center mb-14">
                <div className=" font-bold w-max">
                  <p>Read More</p>
                </div>
                <span className=" w-[11.813rem] md:w-[26.813rem] lg:w-[20.8rem] xl:w-[46.813rem] h-[1px] bg-greyFont"></span>
              </div>
            </section>
            <section className=" flex flex-col gap-6">
              <div className=" flex">
                <img src={bgBlog4} alt="" />
              </div>
              <div className=" flex flex-col gap-6">
                <h1 className=" text-[2rem]">26 Photos of Conner Kid</h1>
                <div className=" flex gap-5">
                  <div className=" flex gap-[0.35rem] items-center">
                    <img src={clock} alt="" width="14px" height="14px" />
                    <p className=" text-[10px] text-[#3E3E3E]">
                      24 Apr 2019, 45 mins ago, by Admin
                    </p>
                  </div>
                  <div className=" flex gap-[0.35rem] items-center">
                    <img src={tag} alt="" width="14px" height="14px" />
                    <p className=" text-[10px] text-[#3E3E3E]">
                      Kids, Interior, Photos
                    </p>
                  </div>
                </div>
                <div className=" text-sm text-[#4D4D4D] leading-7">
                  <p>
                    Maecenas eget congue augue. Sed mollis tempor velit, et
                    tempor justo cursus vel. Phasellus lacinia placerat lacus,
                    vulputate volutpat tellus fringilla eu. Phasellus rhoncus
                    varius tortor, non ultricies felis condimentum eget unc
                    ornare suscipit nulla sagittis faucibu
                  </p>
                </div>
              </div>
              <div className=" flex gap-5 w-full items-center mb-14">
                <div className=" font-bold w-max">
                  <p>Read More</p>
                </div>
                <span className=" w-[11.813rem] md:w-[26.813rem] lg:w-[20.8rem] xl:w-[46.813rem] h-[1px] bg-greyFont"></span>
              </div>
            </section>
            <section className=" flex flex-col gap-6">
              <div className=" flex">
                <img src={bgBlog5} alt="" />
              </div>
              <div className=" flex flex-col gap-6">
                <h1 className=" text-[2rem]">Beautiful Corner</h1>
                <div className=" flex gap-5">
                  <div className=" flex gap-[0.35rem] items-center">
                    <img src={clock} alt="" width="14px" height="14px" />
                    <p className=" text-[10px] text-[#3E3E3E]">
                      24 Apr 2019, 45 mins ago, by Admin
                    </p>
                  </div>
                  <div className=" flex gap-[0.35rem] items-center">
                    <img src={tag} alt="" width="14px" height="14px" />
                    <p className=" text-[10px] text-[#3E3E3E]">
                      Kids, Interior, Photos
                    </p>
                  </div>
                </div>
                <div className=" text-sm text-[#4D4D4D] leading-7">
                  <p>
                    Maecenas eget congue augue. Sed mollis tempor velit, et
                    tempor justo cursus vel. Phasellus lacinia placerat lacus,
                    vulputate volutpat tellus fringilla eu. Phasellus rhoncus
                    varius tortor, non ultricies felis condimentum eget unc
                    ornare suscipit nulla sagittis faucibu
                  </p>
                </div>
              </div>
              <div className=" flex gap-5 w-full items-center mb-28">
                <div className=" font-bold w-max">
                  <p>Read More</p>
                </div>
                <span className=" w-[11.813rem] md:w-[26.813rem] lg:w-[20.8rem] xl:w-[46.813rem] h-[1px] bg-greyFont"></span>
              </div>
            </section>
            <section className=" flex gap-3 mb-24">
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
      </main>
      <Footer />
    </>
  );
}

export default Blog;
