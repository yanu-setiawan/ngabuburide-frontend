/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useDispatch } from "react-redux";
import { userAction } from "../../redux/slices/auth";
import ModalMsg from "../../components/ModalMsg";
import Loader from "../../components/Loader";

function Login() {
  const controller = useMemo(() => new AbortController(), []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isErrModal, setErrModal] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [msgModal, setMsgModal] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const onChangeForm = (event) => {
    setForm((form) => {
      return { ...form, [event.target.name]: event.target.value };
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (form.email === "" || form.password === "") {
      setMsgModal("Input Empty !");
      setErrModal(true);
      return;
    }
    console.log(form);
    setLoading(true);
    dispatch(
      userAction.loginThunk(
        { email: form.email, password: form.password },
        controller
      )
    )
      .then((res) => {
        console.log(res.payload);
        if (res.payload.message === "Request failed with status code 401") {
          setLoading(false);
          setMsgModal(res.payload.response.data.msg);
          setErrModal(true);
          setForm({ ...form, password: "" });
          return;
        }
        if (res.payload.token) {
          setLoading(false);
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    document.title = "RAZYR - Login";
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
        {isLoading ? (
          <Loader />
        ) : (
          <section className=" mt-20 flex flex-col gap-20 lg:gap-32 lg:flex-row justify-center">
            <aside className=" flex gap-20 justify-center lg:flex-col lg:justify-normal p-2">
              <p className=" text-[1.20rem] md:text-[2rem]  text-blackSec border-b-2 border-[#C2C2C2] p-3 text-center">
                Login Account
              </p>
              <Link to="/register">
                <p className="text-[1.20rem] md:text-[2rem] text-greyFont  p-3 text-center">
                  Register Account
                </p>
              </Link>
            </aside>
            <div className="isForm flex flex-col pb-[10rem] ">
              <h1 className=" text-[2rem] flex justify-center lg:justify-start">
                Login
              </h1>
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

                <div className="flex w-[75%] lg:w-[30rem] xl:w-[35rem] mx-auto flex-col mt-3">
                  <button
                    type="submit"
                    onClick={handleLogin}
                    className="btn bg-blackSec w-32 h-14 text-white"
                  >
                    Login
                  </button>
                  <div className="flex gap-1 w-[75%] lg:w-[30rem] xl:w-[35rem]  lg:mx-auto  my-[1rem] mt-3">
                    <div className="flex items-center mr-4 mb-4">
                      <input
                        id="remember"
                        type="checkbox"
                        name="rember"
                        value=""
                        className="checkbox w-4 h-4 "
                      ></input>
                      <label
                        for="remember"
                        className="flex items-center cursor-pointer w-max"
                      >
                        <span class=" h-4 inline-block mr-1 border border-grey w-max"></span>
                        Remember Me
                      </label>
                    </div>

                    <div className="flex items-center mr-4 mb-4">
                      <Link to="/forgot">
                        <p className="text-[#FF0000] w-max cursor-pointer hover:text-greyFont">
                          Forget your password ?
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section>
        )}
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

export default Login;
