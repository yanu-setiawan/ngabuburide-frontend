import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Faq() {
  return (
    <>
      <Header />
      <main>
        <section className="relative">
          <div className=" hero-login w-full h-[15.6rem] opacity-20 flex justify-center items-center "></div>
          <div className=" absolute flex justify-center items-center text-center flex-col top-16 w-full ">
            <h1 className=" text-[3.5rem] text-blackSec">FAQ</h1>
            <p className=" text-[1rem] text-blackSec">
              Frequently Asked Questions
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Faq;
