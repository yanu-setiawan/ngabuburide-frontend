import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function CommingSoon() {
  return (
    <>
      <Header />
      <main>
        <section className="px-4 py-20 md:px-10 md:py-24 lg:px-24 lg:py-36 bg-blackSec text-white">
          <div>
            <h1 className="font-bold text-5xl lg:text-7xl">
              We’re Building <br /> Something New
            </h1>
            <div className="flex gap-10 mt-16">
              <div className="flex flex-col items-center gap-4">
                <p className="text-5xl">09</p>
                <p>Days</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <p className="text-5xl">18</p>
                <p>Hours</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <p className="text-5xl">37</p>
                <p>Mins</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <p className="text-5xl">56</p>
                <p>Secs</p>
              </div>
            </div>
            <div className=" border-b-2 md:w-[34rem] relative mt-10">
              <input
                type="email"
                className="bg-blackSec text-white outline-none w-full"
                placeholder="Your Email"
              />
              <label htmlFor="" className="absolute right-0">
                Subscribe
              </label>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default CommingSoon;
