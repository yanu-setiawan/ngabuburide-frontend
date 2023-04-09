/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useMemo } from "react";
// import { changePassword } from "../../../utils/https/auth";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { usersAction } from "../../../Redux/slices/users";

function changePWD({ modal, setModal }) {
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [form, setForm] = useState({
  //     old_password: "",
  //     new_password: "",
  //   });

  //   const handleForm = (event) => {
  //     setForm((form) => {
  //       return { ...form, [event.target.name]: event.target.value };
  //     });
  //   };

  //   const handleClick = (event) => {
  //     event.stopPropagation();
  //     setModal(false);
  //   };

  //   const handleSave = async (event) => {
  //     event.preventDefault();
  //     setIsLoading(true);
  //   };

  return (
    <>
      <section className="  w-screen h-screen inset-0 bg-black  bg-opacity-80  fixed z-[100] ">
        <section className="">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full p-6 bg-white  shadow dark:border md:mt-0 sm:max-w-md sm:p-8">
              <div className="  flex justify-end ">
                <button
                  type="button"
                  className="  text-[32px] font-bold text-[#F70000] cursor-pointer"
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  &times;
                </button>
              </div>

              <h2 className="text-xl font-bold leading-tight tracking-tight text-blackSec md:text-2xl flex justify-center items-center mb-[3.2rem]">
                Change Password
              </h2>
              <form
                className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
                // onSubmit={handleSave}
              >
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium "
                  >
                    Old Password
                  </label>
                  <input
                    // onChange={handleForm}
                    type="password"
                    name="old_password"
                    id="old_password"
                    placeholder="Enter Old Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm   focus:border-blackSec block w-full p-2.5  "
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium "
                  >
                    New password
                  </label>
                  <input
                    // onChange={handleForm}
                    type="password"
                    name="new_password"
                    id="new_password"
                    placeholder="Enter New Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  focus:border-blackSec block w-full p-2.5  "
                    required=""
                  />
                </div>
                <div className="flex items-start"></div>
                <button
                  type="submit"
                  className="w-full btn bg-blackSec p-2 text-white font-semibold "
                >
                  Save Change
                </button>
              </form>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default changePWD;
