import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import delivery from "../../assets/delivery-2.svg";
import pay from "../../assets/wallet-90.svg";
import bill from "../../assets/bill.svg";

function Faq() {
  useEffect(() => {
    document.title = "RAZYR - FAQ";
  }, []);
  return (
    <>
      <Header />
      <main className="">
        <section className="relative">
          <div className=" hero-login w-full h-[15.6rem] opacity-20 flex justify-center items-center "></div>
          <div className=" absolute flex justify-center items-center text-center flex-col top-16 w-full ">
            <h1 className=" text-[3.5rem] text-blackSec">FAQ</h1>
            <p className=" text-[1rem] text-blackSec">
              Frequently Asked Questions
            </p>
          </div>
        </section>
        <section className=" mt-20 mx-[2.5rem] md:mx-[5rem] lg:mx-[8.7rem]">
          <section className=" flex flex-col gap-[1.6rem] justify-center text items-center mb-20">
            <div>
              <div className=" border rounded-full border-[#979797] h-[4.6rem] w-[4.6rem] p-1 flex items-center justify-center cursor-pointer ">
                <img src={delivery} alt="fb" />
              </div>
            </div>
            <div className=" flex gap-[4.3rem] justify-center items-center">
              <div className=" hidden w-[4.6rem] h-[0.13rem] bg-[#979797] lg:flex justify-center items-center"></div>
              <div className=" w-max text-[2rem] text-blackSec flex justify-center items-center">
                <p>Shopping Questions</p>
              </div>
              <div className=" hidden w-[4.6rem] h-[0.13rem] bg-[#979797] lg:flex justify-center items-center"></div>
            </div>
          </section>
          <section className=" grid grid-cols-1  lg:grid-cols-2  gap-y-24 gap-[5rem] xl:gap-x-40  place-content-center">
            <section className=" flex flex-col gap-7 text-center lg:text-start">
              <div className=" text-2xl leading-7">
                <h1>Do you ship worldwide?</h1>
              </div>
              <div>
                <p className="  leading-7">
                  This is the third article of a three-part series. I’m
                  illustrating the marketing challenges of PrescottWeddings.com,
                  a small business. If you don’t remember anything else about
                  marketing, remember this: Frequency is king.
                </p>
              </div>
            </section>
            <section className=" flex flex-col gap-7 text-center lg:text-start">
              <div className=" text-2xl leading-7">
                <h1>How can I use a coupon code?</h1>
              </div>
              <div>
                <p className="  leading-7">
                  This is the third article of a three-part series. I’m
                  illustrating the marketing challenges of PrescottWeddings.com,
                  a small business. If you don’t remember anything else about
                  marketing, remember this: Frequency is king.
                </p>
              </div>
            </section>
            <section className=" flex flex-col gap-7 text-center lg:text-start">
              <div className=" text-2xl leading-7">
                <h1>Do you offer gift-vouchers?</h1>
              </div>
              <div>
                <p className="  leading-7">
                  This is the third article of a three-part series. I’m
                  illustrating the marketing challenges of PrescottWeddings.com,
                  a small business. If you don’t remember anything else about
                  marketing, remember this: Frequency is king.
                </p>
              </div>
            </section>
            <section className=" flex flex-col gap-7 text-center lg:text-start">
              <div className=" text-2xl leading-7">
                <h1>How can I request a refund?</h1>
              </div>
              <div>
                <p className="  leading-7">
                  This is the third article of a three-part series. I’m
                  illustrating the marketing challenges of PrescottWeddings.com,
                  a small business. If you don’t remember anything else about
                  marketing, remember this: Frequency is king.
                </p>
              </div>
            </section>
          </section>
        </section>
        <section className=" mt-[7rem] mx-[2.5rem] md:mx-[5rem] lg:mx-[8.7rem]">
          <section className=" flex flex-col gap-[1.6rem] justify-center text items-center mb-20">
            <div>
              <div className=" border rounded-full border-[#979797] h-[4.6rem] w-[4.6rem] p-1 flex items-center justify-center cursor-pointer ">
                <img src={pay} alt="fb" />
              </div>
            </div>
            <div className=" flex gap-[4.3rem] justify-center items-center">
              <div className=" hidden w-[4.6rem] h-[0.13rem] bg-[#979797] lg:flex justify-center items-center"></div>
              <div className=" w-max text-[2rem] text-blackSec flex justify-center items-center">
                <p>Payment Questions</p>
              </div>
              <div className=" hidden w-[4.6rem] h-[0.13rem] bg-[#979797] lg:flex justify-center items-center"></div>
            </div>
          </section>
          <section className=" grid grid-cols-1  lg:grid-cols-2  gap-y-24 gap-[5rem] xl:gap-x-40  place-content-center">
            <section className=" flex flex-col gap-7 text-center lg:text-start">
              <div className=" text-2xl leading-7">
                <h1>Do you ship worldwide?</h1>
              </div>
              <div>
                <p className="  leading-7">
                  This is the third article of a three-part series. I’m
                  illustrating the marketing challenges of PrescottWeddings.com,
                  a small business. If you don’t remember anything else about
                  marketing, remember this: Frequency is king.
                </p>
              </div>
            </section>
            <section className=" flex flex-col gap-7 text-center lg:text-start">
              <div className=" text-2xl leading-7">
                <h1>How can I use a coupon code?</h1>
              </div>
              <div>
                <p className="  leading-7">
                  This is the third article of a three-part series. I’m
                  illustrating the marketing challenges of PrescottWeddings.com,
                  a small business. If you don’t remember anything else about
                  marketing, remember this: Frequency is king.
                </p>
              </div>
            </section>
            <section className=" flex flex-col gap-7 text-center lg:text-start">
              <div className=" text-2xl leading-7">
                <h1>Do you offer gift-vouchers?</h1>
              </div>
              <div>
                <p className="  leading-7">
                  This is the third article of a three-part series. I’m
                  illustrating the marketing challenges of PrescottWeddings.com,
                  a small business. If you don’t remember anything else about
                  marketing, remember this: Frequency is king.
                </p>
              </div>
            </section>
            <section className=" flex flex-col gap-7 text-center lg:text-start">
              <div className=" text-2xl leading-7">
                <h1>How can I request a refund?</h1>
              </div>
              <div>
                <p className="  leading-7">
                  This is the third article of a three-part series. I’m
                  illustrating the marketing challenges of PrescottWeddings.com,
                  a small business. If you don’t remember anything else about
                  marketing, remember this: Frequency is king.
                </p>
              </div>
            </section>
          </section>
        </section>
        <section className=" my-[6.5rem] mx-[2.5rem] md:mx-[5rem] lg:mx-[8.7rem]">
          <section className=" flex flex-col gap-[1.6rem] justify-center text items-center mb-20">
            <div>
              <div className=" border rounded-full border-[#979797] h-[4.6rem] w-[4.6rem] p-1 flex items-center justify-center cursor-pointer ">
                <img src={bill} alt="fb" />
              </div>
            </div>
            <div className=" flex gap-[4.3rem] justify-center items-center">
              <div className=" hidden w-[4.6rem] h-[0.13rem] bg-[#979797] lg:flex justify-center items-center"></div>
              <div className=" w-max text-[2rem] text-blackSec flex justify-center items-center">
                <p>Miscellaneous Questions</p>
              </div>
              <div className=" hidden w-[4.6rem] h-[0.13rem] bg-[#979797] lg:flex justify-center items-center"></div>
            </div>
          </section>
          <section className=" grid grid-cols-1  lg:grid-cols-2  gap-y-24 gap-[5rem] xl:gap-x-40  place-content-center">
            <section className=" flex flex-col gap-7 text-center lg:text-start">
              <div className=" text-2xl leading-7">
                <h1>Do you ship worldwide?</h1>
              </div>
              <div>
                <p className="  leading-7">
                  This is the third article of a three-part series. I’m
                  illustrating the marketing challenges of PrescottWeddings.com,
                  a small business. If you don’t remember anything else about
                  marketing, remember this: Frequency is king.
                </p>
              </div>
            </section>
            <section className=" flex flex-col gap-7 text-center lg:text-start">
              <div className=" text-2xl leading-7">
                <h1>How can I use a coupon code?</h1>
              </div>
              <div>
                <p className="  leading-7">
                  This is the third article of a three-part series. I’m
                  illustrating the marketing challenges of PrescottWeddings.com,
                  a small business. If you don’t remember anything else about
                  marketing, remember this: Frequency is king.
                </p>
              </div>
            </section>
            <section className=" flex flex-col gap-7 text-center lg:text-start">
              <div className=" text-2xl leading-7">
                <h1>Do you offer gift-vouchers?</h1>
              </div>
              <div>
                <p className="  leading-7">
                  This is the third article of a three-part series. I’m
                  illustrating the marketing challenges of PrescottWeddings.com,
                  a small business. If you don’t remember anything else about
                  marketing, remember this: Frequency is king.
                </p>
              </div>
            </section>
            <section className=" flex flex-col gap-7 text-center lg:text-start">
              <div className=" text-2xl leading-7">
                <h1>How can I request a refund?</h1>
              </div>
              <div>
                <p className="  leading-7">
                  This is the third article of a three-part series. I’m
                  illustrating the marketing challenges of PrescottWeddings.com,
                  a small business. If you don’t remember anything else about
                  marketing, remember this: Frequency is king.
                </p>
              </div>
            </section>
          </section>
        </section>
        <section className=" gap-[2rem] mb-[7.5rem] mx-[2.5rem] md:mx-[5rem] lg:mx-[8.7rem] flex flex-col justify-center items-center text-center ">
          <div className=" text-[2rem] lg:text-4xl text-blackSec">
            <p>You Still Need Help?</p>
          </div>
          <div>
            <button className=" btn w-[10rem] lg:w-56 h-[3.8rem] bg-blackSec text-white">
              Contact Us
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Faq;
