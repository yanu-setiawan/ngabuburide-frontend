/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import { authRegister } from "../../utils/https/auth";
import ModalMsg from "../../components/ModalMsg";

function Register() {
  const navigate = useNavigate();
  const controller = useMemo(() => new AbortController(), []);
  const [isLoading, setLoading] = useState(false);
  const [isErrModal, setErrModal] = useState(false);
  const [msgModal, setMsgModal] = useState("");

  const [form, setForm] = useState({
    email: "",
    password: "",
    role_id: 0,
  });

  const onChangeForm = (event) => {
    setForm((form) => {
      return { ...form, [event.target.name]: event.target.value };
    });
  };
  const handleRegister = async (event) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      form.email === "" ||
      !emailRegex.test(form.email) ||
      form.password === "" ||
      form.password.length < 4 ||
      form.role_id === 0
    ) {
      let errorMessage = "Invalid Input!";
      if (form.email === "") {
        errorMessage = "Email is required!";
      } else if (!emailRegex.test(form.email)) {
        errorMessage = "Email is invalid!";
      } else if (form.password === "") {
        errorMessage = "Password is required!";
      } else if (form.password.length < 4) {
        errorMessage = "password of at least 4 characters!";
      } else if (form.role_id === 0) {
        errorMessage = "Role is required!";
      }
      setMsgModal(errorMessage);
      setErrModal(true);
      return;
    }
    setLoading(true);
    console.log(form);
    authRegister(form.email, form.password, form.role_id, controller)
      .then((result) => {
        console.log(result);
        setLoading(false);
        navigate("/login");
      })
      .catch((err) => {
        if (err.response.status === 400) {
          setMsgModal(err.response.data.msg);
          setErrModal(true);
          setLoading(false);
          setForm((form) => {
            return { ...form, password: "" };
          });
        }
        console.log(err);
      });
  };

  useEffect(() => {
    document.title = "RAZYR - Register";
  }, []);
  return (
    <>
      <Header />
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
          <aside className=" flex gap-20 justify-center lg:flex-col lg:justify-normal p-2">
            <Link to="/login">
              <p className=" text-[1.30rem] md:text-[2rem] text-greyFont p-3 text-center">
                Login Account
              </p>
            </Link>
            <p className="text-[1.30rem] md:text-[2rem] text-blackSec border-b-2 border-[#C2C2C2] p-3 text-center">
              Register Account
            </p>
          </aside>
          <div className="isForm flex flex-col pb-[10rem] ">
            <h1 className=" text-[2rem] flex justify-center lg:justify-start">
              Create Account
            </h1>
            {isLoading ? (
              <Loader />
            ) : (
              <form className=" w-full justify-center flex flex-col gap-3">
                <label htmlFor="email" className="flex justify-center mt-11">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={onChangeForm}
                    className=" w-[75%] lg:w-[30rem] xl:w-[35rem] lg:h-[4.39rem] text-blackSec placeholder:text-greySec h-[4.4rem] border border-[#CECECE] placeholder:p-5 p-5"
                    placeholder="Email Address*"
                  />
                </label>
                <label htmlFor="password" className="flex justify-center">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={form.password}
                    onChange={onChangeForm}
                    className=" w-[75%] lg:w-[30rem] xl:w-[35rem] lg:h-[4.39rem] text-blackSec placeholder:text-greySec h-[4.4rem] border border-[#CECECE] placeholder:p-5 p-5"
                    placeholder="Password*"
                  />
                </label>

                <div className="flex gap-6 w-[75%] lg:w-[30rem] xl:w-[35rem] mx-auto my-[1rem]">
                  <div className="flex items-center mr-4 mb-3">
                    <input
                      id="radio1"
                      type="radio"
                      name="role_id"
                      value={1}
                      onChange={onChangeForm}
                      className="hidden"
                    />
                    <label
                      for="radio1"
                      className="flex items-center cursor-pointer"
                    >
                      <span class="w-4 h-4 inline-block mr-1 border border-grey"></span>
                      I'm Customer
                    </label>
                  </div>

                  <div className="flex items-center mr-4 mb-4">
                    <input
                      id="radio2"
                      type="radio"
                      name="role_id"
                      value={2}
                      onChange={onChangeForm}
                      className="hidden"
                    />
                    <label
                      for="radio2"
                      className="flex items-center cursor-pointer"
                    >
                      <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                      I'm Seller
                    </label>
                  </div>
                </div>

                <div className="flex w-[75%] lg:w-[30rem] xl:w-[35rem] mx-auto">
                  <button
                    type="submit"
                    onClick={handleRegister}
                    className="btn  bg-blackSec w-32 h-14 text-white"
                  >
                    Register
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </section>
      {isErrModal && (
        <ModalMsg
          msg={msgModal}
          isOpen={isErrModal}
          onclose={() => setErrModal(false)}
        />
      )}
      <Footer />
    </>
  );
}

export default Register;
