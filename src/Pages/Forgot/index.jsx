/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { authForgot, changePwdByOtp } from "../../utils/https/auth";
import ModalMsg from "../../components/ModalMsg";

function Forgot() {
  const controller = useMemo(() => new AbortController(), []);
  const navigate = useNavigate();
  const [inputEmail, setEmail] = useState("");
  const [inputOtp, setOtp] = useState("");
  const [inputPassword, setPassword] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangeOtp = (event) => {
    setOtp(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleResetPwd = async (event) => {
    event.preventDefault();
    console.log(inputEmail);
    try {
      const result = await authForgot(inputEmail, controller);
      // console.log(result);
      if (result.status === 200) {
        setShowInput(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangePwd = async (event) => {
    event.preventDefault();
    console.log(inputEmail, inputOtp, inputPassword, controller);
    try {
      const result = await changePwdByOtp(
        inputEmail,
        inputOtp,
        inputPassword,
        controller
      );
      console.log(result);
      if (result.status === 200) {
        setShowModal(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSuccess = () => {
    navigate("/login");
  };

  useEffect(() => {
    document.title = "RAZYR - Forgot";
  }, []);
  return (
    <>
      <Header />
      <ModalMsg
        isOpen={showModal}
        onclose={handleSuccess}
        msg="Change Password Successfully"
      />
      <section className=" flex flex-col">
        <section className="relative">
          <div className=" hero-login w-full h-[15.6rem] opacity-20 flex justify-center items-center "></div>
          <div className=" absolute flex justify-center items-center text-center flex-col top-16 w-full ">
            <h1 className=" text-[3.5rem] text-blackSec">My Account</h1>
            <p className=" text-[1rem] text-blackSec">
              Register and log in with your account to be able to shop at will
            </p>
          </div>
        </section>
        <section className=" mt-20 flex flex-col gap-20 lg:gap-32 lg:flex-row justify-center">
          <div className="isForm flex flex-col pb-[10rem] ">
            <div className=" flex flex-col w-full justify-center items-center">
              <h1 className=" text-[1.5rem] md:text-[2rem] flex w-[75%] lg:w-[30rem] xl:w-[35rem] ">
                Forgot your password?
              </h1>
              <p className=" text-[12px] md:text-sm lg:text-base w-[75%] lg:w-[30rem] xl:w-[35rem] ">
                Don’t worry! Just fill in your email and we’ll send you a link
              </p>
            </div>
            <form className="transition-all w-full justify-center flex flex-col gap-3">
              <label htmlFor="email" className="flex justify-center mt-11">
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={inputEmail}
                  onChange={onChangeEmail}
                  disabled={showInput}
                  className=" w-[75%] lg:w-[30rem] xl:w-[35rem] lg:h-[4.39rem] text-blackSec placeholder:text-greySec h-[4.4rem] border border-[#CECECE] placeholder:p-5 p-5"
                  placeholder="Your Email Address*"
                />
              </label>

              <label
                htmlFor="code-otp"
                className={`${
                  !showInput && "scale-0 absolute"
                } flex justify-center mt-11 transition-all`}
              >
                <input
                  type="text"
                  id="code-otp"
                  name="otp"
                  value={inputOtp}
                  onChange={onChangeOtp}
                  className=" w-[75%] lg:w-[30rem] xl:w-[35rem] lg:h-[4.39rem] text-blackSec placeholder:text-greySec h-[4.4rem] border border-[#CECECE] placeholder:p-5 p-5"
                  placeholder="Your OTP Code*"
                />
              </label>
              <label
                htmlFor="new-password"
                className={`${
                  !showInput && "scale-0 absolute"
                } flex justify-center mt-11 transition-all`}
              >
                <input
                  type="password"
                  id="new-password"
                  name="newPassword"
                  value={inputPassword}
                  onChange={onChangePassword}
                  className=" w-[75%] lg:w-[30rem] xl:w-[35rem] lg:h-[4.39rem] text-blackSec placeholder:text-greySec h-[4.4rem] border border-[#CECECE] placeholder:p-5 p-5"
                  placeholder="Your New Password*"
                />
              </label>

              <div className="flex gap-10 transition-all w-[75%] lg:w-[30rem] xl:w-[35rem] mx-auto mt-3">
                <button
                  type="button"
                  onClick={handleResetPwd}
                  className="btn transition-all bg-blackSec w-[12.3rem] h-14 text-white"
                >
                  {showInput ? "RESEND OTP" : "RESET PASSWORD"}
                </button>
                <button
                  type="button"
                  onClick={handleChangePwd}
                  className={`btn ${
                    !showInput && "scale-0"
                  } transition-all ml-auto bg-blackSec w-[12.3rem] h-14 text-white`}
                >
                  SAVE CHANGE
                </button>
              </div>
            </form>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Forgot;
