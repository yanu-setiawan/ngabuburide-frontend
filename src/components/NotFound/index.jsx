import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function NotFound() {
  useEffect(() => {
    document.title = "RAZYR - Not Found";
  }, []);
  return (
    <>
      <Header />
      <main>
        <section className="px-4 py-20 md:px-10 md:py-24 lg:px-24 lg:py-36">
          <div className="flex gap-10">
            <div className="flex-[2] flex flex-col gap-10 md:gap-4 lg:gap-10">
              <p className="font-bold text-7xl">404</p>
              <p className="font-bold text-4xl">Page cannot be found!</p>
              <p>
                Donec nunc nunc, gravida vitae diam vel, varius interdum erat.
                Quisque a nunc vel diam auctor commodo. Curabitur blandit
                ultrices exurabitur ut magna dignissim, dignissi
              </p>
              <div className="flex items-center gap-4">
                <div className="w-32 border-b-2 border-blackSec"></div>
                <Link to={"/"} className="font-bold">
                  <p>BACK TO HOMEPAGE</p>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex lg:flex-1 md:w-60 md:h-60 lg:w-[22.813rem] lg:h-[22.813rem] bg-[#D8D8D8] rounded-full"></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default NotFound;
