/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import EditProfile from "../../components/Profile/ProfileComp";
import MyProduct from "../../components/Profile/MyProdComp";
import { useSelector } from "react-redux";

function Profile() {
  const stateUser = useSelector((state) => state.user);

  const [showContent, setShowContent] = useState(1);

  useEffect(() => {
    document.title = "RAZYR - Profile";
  }, []);

  console.log(stateUser.data.role);

  return (
    <>
      <Header />
      <section className=" flex flex-col pb-[10rem]">
        <section className="relative">
          <div className=" hero-login w-full h-[15.6rem] opacity-20 flex justify-center items-center "></div>
          <div className=" absolute flex justify-center items-center text-center flex-col top-16 w-full ">
            <h1 className=" text-[3.5rem] text-blackSec">Profile</h1>
            <p className=" text-[1rem] text-blackSec">
              See your notifications for the latest updates
            </p>
          </div>
        </section>
        <section className=" mt-20 flex flex-col mx-[5%] md-[4%] lg:mx-[10%]">
          <section className=" flex gap-[0.91rem] md:gap-[3.1rem] xl:gap-20">
            <div
              onClick={() => setShowContent(1)}
              className={`w-max ${
                showContent === 1 && "border-b-2 border-greyBord"
              } md:p-3`}
            >
              <p className="text-base md:text-[1.4rem] lg:text-[2rem] w-max cursor-pointer  ">
                Profile
              </p>
            </div>
            {stateUser.data.role === 2 && (
              <>
                <div
                  onClick={() => setShowContent(2)}
                  className={`flex w-max ${
                    showContent === 2 && "border-b-2 border-greyBord"
                  } lg:gap-3 md:p-3`}
                >
                  <p className=" text-base md:text-[1.4rem] lg:text-[2rem] w-max cursor-pointer">
                    My Product
                    <i className="bi bi-caret-down"></i>
                  </p>
                </div>
                <div
                  className={`w-max ${
                    showContent === 3 && "border-b-2 border-greyBord"
                  } md:p-3`}
                >
                  <p className="text-base md:text-[1.4rem] lg:text-[2rem] w-max cursor-pointer">
                    Selling Product
                  </p>
                </div>
              </>
            )}

            <div
              className={`flex w-max ${
                showContent === 3 && "border-b-2 border-greyBord"
              } md:p-3`}
            >
              <p className="text-base md:text-[1.4rem] lg:text-[2rem] w-max cursor-pointer">
                My Order
                <i className="bi bi-caret-down"></i>
              </p>
            </div>
          </section>
          {showContent === 1 && <EditProfile />}
          {showContent === 2 && <MyProduct />}
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Profile;
