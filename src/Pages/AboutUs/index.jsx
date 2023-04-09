import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import arrow from "../../assets/icon-arrow-right.svg";
import imgAbout from "../../assets/aboutus.png";
import img1 from "../../assets/profile1.jpg";
import img2 from "../../assets/profile2.jpg";
import img3 from "../../assets/profile3.jpg";
import img4 from "../../assets/profile4.jpg";
import testimoni from "../../assets/testimoni.png";

function AboutUs() {
  return (
    <>
      <Header />
      <main>
        <section className="relative">
          <div className="absolute flex gap-4 px-20 pt-10">
            <p>About</p>
            <img src={arrow} alt="icon-arrow" />
          </div>
          <div className=" hero-login w-full h-[15.6rem] opacity-20 flex justify-center items-center "></div>
          <div className=" absolute flex justify-center items-center text-center flex-col top-16 w-full ">
            <h1 className=" text-[3.5rem] text-blackSec">About Us</h1>
          </div>
        </section>
        <section className="px-4 md:px-20 py-14 lg:px-32 lg:py-20">
          <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row">
            <div className="lg:w-[60%] flex flex-col gap-10">
              <h1 className="font-bold text-2xl">RAZ- Modern Furniture</h1>
              <p>
                Quisque at justo sagittis, semper lacus a, iaculis tellus. Fusce
                tempor, leo vel iaculis aliquet, dui turpis maximus tellus,
                commodo congue Nam fermentum, augue eget pulvinar ullamcorper,
                dui purus ornare nibh, eu congue ligula felis nec diam liquam
                mollis nibh eu
              </p>
              <div className="flex flex-col gap-8 my-8">
                <div className="flex gap-8 items-center">
                  <div className="w-3 h-3 bg-[#1A1A1A] rounded-full"></div>
                  <p>Fusce risus ligula, semper et ultricies vitae</p>
                </div>
                <div className="flex gap-8 items-center">
                  <div className="w-3 h-3 bg-[#1A1A1A] rounded-full"></div>
                  <p>Vivamus eget ante id velit varius lacinia</p>
                </div>
              </div>
              <div>
                <p>
                  Fusce risus ligula, semper et ultricies vitae, bibendum non
                  nisl. Nunc in libero quis felis congue molestie eu et velit.
                  Praesent gravida magna eget interdum iaculis. Aliquam erat
                  volutpat. Integer placerat ipsum quis malesuada vehicula.
                  Vestibulum
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[28.75rem] h-[28.75rem]">
              <img
                src={imgAbout}
                alt="img-about"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
        <section className="px-4 md:px-20 py-14 lg:px-32 lg:py-20">
          <h1 className="text-center text-5xl">Why Should Choose Us?</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-32 mt-20">
            <div>
              <p className="text-center font-bold text-sm mb-6">
                Unique Design
              </p>
              <p className="text-xs text-center">
                Fusce risus ligula, semper et ultricies vitae, bibendum non
                nisl. Nunc in libero quis felis congue
              </p>
            </div>
            <div>
              <p className="text-center font-bold text-sm mb-6">
                Good Wararanty Policy
              </p>
              <p className="text-xs text-center">
                Fusce risus ligula, semper et ultricies vitae, bibendum non
                nisl. Nunc in libero quis felis congue
              </p>
            </div>
            <div>
              <p className="text-center font-bold text-sm mb-6">
                Handcrafted Quality
              </p>
              <p className="text-xs text-center">
                Fusce risus ligula, semper et ultricies vitae, bibendum non
                nisl. Nunc in libero quis felis congue
              </p>
            </div>
            <div>
              <p className="text-center font-bold text-sm mb-6">
                Dedicated Support
              </p>
              <p className="text-xs text-center">
                Fusce risus ligula, semper et ultricies vitae, bibendum non
                nisl. Nunc in libero quis felis congue
              </p>
            </div>
            <div>
              <p className="text-center font-bold text-sm mb-6">
                Amazing Features
              </p>
              <p className="text-xs text-center">
                Fusce risus ligula, semper et ultricies vitae, bibendum non
                nisl. Nunc in libero quis felis congue
              </p>
            </div>
            <div>
              <p className="text-center font-bold text-sm mb-6">
                Easy Customized
              </p>
              <p className="text-xs text-center">
                Fusce risus ligula, semper et ultricies vitae, bibendum non
                nisl. Nunc in libero quis felis congue
              </p>
            </div>
          </div>
        </section>
        <section className="px-4 md:px-20 py-14 lg:px-32 lg:py-20">
          <h1 className="text-center font-bold text-5xl mb-20">
            Meet Our Team
          </h1>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col gap-5">
              <div className="w-64 h-80 md:w-64 md:h-80 lg:w-[20.5rem] lg:h-[26rem] transition duration-150 hover:scale-[1.1] hover:ease-in-out">
                <img
                  src={img3}
                  alt="people"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-base">Afif Buchori</p>
                <p className="text-xs text-[#919191]">Fullstuck Developer</p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-64 h-80 md:w-64 md:h-80 lg:w-[20.5rem] lg:h-[26rem] transition duration-150 hover:scale-[1.1] hover:ease-in-out">
                <img
                  src={img1}
                  alt="people"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-base">Zikri Aulia</p>
                <p className="text-xs text-[#919191]">Fronted Developer</p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-64 h-80 md:w-64 md:h-80 lg:w-[20.5rem] lg:h-[26rem] transition duration-150 hover:scale-[1.1] hover:ease-in-out">
                <img
                  src={img4}
                  alt="people"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-base">Yanu Setiawan</p>
                <p className="text-xs text-[#919191]">Fronted Developer</p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-64 h-80 md:w-64 md:h-80 lg:w-[20.5rem] lg:h-[26rem] transition duration-150 hover:scale-[1.1] hover:ease-in-out">
                <img
                  src={img2}
                  alt="people"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-base">Abdul Rosyid</p>
                <p className="text-xs text-[#919191]">Backend Developer</p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-64 h-80 md:w-64 md:h-80 lg:w-[20.5rem] lg:h-[26rem] transition duration-150 hover:scale-[1.1] hover:ease-in-out">
                <img
                  src={img1}
                  alt="people"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-base">Redha Definto</p>
                <p className="text-xs text-[#919191]">Backend Developer</p>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 md:px-20 py-14 lg:px-32 lg:py-20 bg-[#F9F9F9]">
          <div className="flex flex-col items-center gap-10">
            <p className="text-3xl text-center">
              “Gave 5 stars for excellent customer service. I had a couple of
              questions which they replied quickly to answer. If I could give
              multiple reasons for my rating it would also be for the design
              quality and customization to go along with the great service. The
              theme is excellent, keep up the great work."
            </p>
            <div className="w-14 h-14 rounded-full">
              <img
                src={testimoni}
                alt="testimoni"
                className="w-full h-full object-cover"
              />
            </div>
            <p>Trevor Rivera - Calinofrnia</p>
            <div className="flex gap-4">
              <div className="w-3 h-3 rounded-full bg-[#1A1A1A]"></div>
              <div className="w-3 h-3 rounded-full bg-[#D8D8D8]"></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default AboutUs;
