/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import PhEdit from "../../../assets/profile/ppEdit.png";
import Pencil from "../../../assets/edit-3 (1).svg";
import imgLogout from "../../../assets/log-out.svg";

function EditProfile() {
  return (
    <>
      <section className="flex mt-24 items-center flex-col lg:flex-row lg:gap-[1.5rem]">
        <section className="flex  relative justify-center flex-col items-center lg:justify-normal lg:flex-row gap-4">
          <label
            htmlFor="avatar"
            className=" w-32 h-32 flex justify-center items-center rounded-full bg-black hover:bg-opacity-50 hover:opacity-[80%] z-20 top-[1.9rem] opacity-0 cursor-pointer absolute "
          >
            <span className="absolute z-30 opacity-100 cursor-pointer flex">
              <p className=" text-base text-white font-bold">EDIT</p>
              <img src={Pencil} alt="" height="30px" width="30px" />
            </span>
            <input
              type="file"
              multiple={false}
              id="avatar"
              name="avatar"
              className=" rounded-m inset-0  cursor-pointer z-30  opacity-0 "
            />
          </label>
          <span className="w-32 h-32 rounded-full border-2 overflow-hidden mt-8">
            <img
              src={PhEdit}
              alt="profile-picture"
              className=" object-cover h-full w-full bg-center bg-cover"
            />
          </span>
        </section>
        <section>
          <div className="flex flex-col text-center lg:items-start mt-10">
            <h1>
              <input
                type="text"
                className=" w-min  text-blackSec text-2xl font-bold placeholder:text-greySec h-[2rem] text-center lg:text-start lg:placeholder:text-start outline-none  placeholder:p-2 p-2 placeholder:text-center "
                placeholder="Your Name*"
                value="Aisyahh"
                id="name"
              />
            </h1>
            <p className=" p-[0.6rem] text-center">As Seller</p>
          </div>
        </section>
      </section>
      <section className=" flex flex-col mt-10  border border-greyBord mb-10">
        <form action="">
          <div className=" flex flex-col px-[3.8rem] py-10 border-b border-greyBord">
            <label htmlFor="" className=" ml-4 text-greySec ">
              Gender
            </label>
            <input
              type="text"
              className=" p-4 text-2xl text-blackSec outline-none "
              value="Female"
            />
          </div>
          <div className=" flex flex-col px-[3.8rem] py-10 border-b border-greyBord">
            <label htmlFor="" className=" ml-4 text-greySec ">
              Your Email
            </label>
            <input
              type="text"
              className=" p-4 text-2xl text-blackSec outline-none "
              value="Aisyahh@gmail.com"
            />
          </div>
          <div className=" flex flex-col px-[3.8rem] py-10 border-b border-greyBord">
            <label htmlFor="" className=" ml-4 text-greySec ">
              Store Name
            </label>
            <input
              type="text"
              className=" p-4 text-2xl text-blackSec outline-none "
              value="Razyr Stores"
            />
          </div>
          <div className=" flex flex-col px-[3.8rem] py-10 border-b border-greyBord">
            <label htmlFor="" className=" ml-4 text-greySec ">
              Store Description
            </label>
            <input
              type="text"
              className=" p-4 text-2xl text-blackSec outline-none  "
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </form>
      </section>
      <section className=" flex flex-col lg:flex-row justify-between mb-9 gap-10 ">
        <div>
          <button className="btn bg-blackSec flex w-full lg:w-[13.125rem] h-[4.375rem] gap-3 border-none justify-center items-center">
            <p className="text-white font-bold">Edit Password</p>
          </button>
        </div>
        <button className="btn bg-blackSec flex w-full lg:w-[13.125rem] h-[4.375rem] gap-3 border-none justify-center items-center">
          <p className="text-white font-bold">Save Changes</p>
        </button>
      </section>
      <button className="btn bg-redBtn flex w-full lg:w-[13.125rem] h-[4.375rem] gap-3 border-none justify-center items-center hover:bg-red-500">
        <img src={imgLogout} alt="" />
        <p className="text-white font-bold">Logout</p>
      </button>
    </>
  );
}

export default EditProfile;
