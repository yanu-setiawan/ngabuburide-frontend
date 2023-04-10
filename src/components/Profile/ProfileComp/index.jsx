/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useMemo, useState } from "react";
import PhEdit from "../../../assets/profile/ppEdit.png";
import Pencil from "../../../assets/edit-3 (1).svg";
import imgLogout from "../../../assets/log-out.svg";
import ChangePWD from "../../EditPassword";

import Loader from "../../Loader";

import { useSelector } from "react-redux";
import { getProfile, updateProfile } from "../../../utils/https/auth";

function EditProfile() {
  const controller = useMemo(() => new AbortController(), []);
  const stateUser = useSelector((state) => state.user);
  const token = stateUser.token;

  const [isLoading, setLoading] = useState(true);
  const [canEdit, setCanEdit] = useState(false);
  const [modal, setModal] = useState(false);
  const [reset, setReset] = useState(false);
  const [dataProfile, setDataProfile] = useState();
  const [imgFile, setImgFile] = useState("");
  const [form, setForm] = useState();

  const onChangeForm = (event) => {
    setForm((form) => {
      return { ...form, [event.target.name]: event.target.value };
    });
  };
  const onChangeFile = (event) => {
    setImgFile(event.target.files[0]);
  };

  const handleSave = async () => {
    setLoading(true);
    console.log(form);
    if (Object.keys(form).length === 0) return console.log("INPUT KOSONG");
    try {
      const newForm = {};
      Object.keys(form).forEach((key) => {
        if (!dataProfile.hasOwnProperty(key)) {
          newForm[key] = form[key];
        } else if (dataProfile[key] !== form[key]) {
          newForm[key] = form[key];
        }
      });
      console.log(newForm);
      const result = await updateProfile(token, newForm, imgFile, controller);
      console.log(result);
      setReset(!reset);
    } catch (error) {
      console.log(error);
    }
  };

  const fetching = async () => {
    setLoading(true);
    try {
      const result = await getProfile(token, controller);
      if (result.status === 200) {
        setDataProfile(result.data.data[0]);
        setForm(result.data.data[0]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    document.title = "RAZYR - Profile";
    fetching();
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reset]);
  // console.log(dataProfile);
  // console.log(stateUser);

  const handleChangePWD = (e) => {
    setModal(true);
  };
  return (
    <>
      {modal && <ChangePWD modal={modal} setModal={setModal} />}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <section className="flex mt-24 items-center flex-col lg:flex-row lg:gap-[1.5rem]">
            <section className="flex  relative justify-center flex-col items-center lg:justify-normal lg:flex-row gap-4">
              <label
                htmlFor="avatar"
                className=" w-32 h-32 flex justify-center items-center rounded-full bg-black hover:bg-opacity-40 hover:opacity-[100%] z-20 top-[1.9rem] opacity-0 cursor-pointer absolute "
              >
                <span className="absolute z-30 opacity-100 cursor-pointer flex">
                  <p className=" text-base text-white font-bold">EDIT</p>
                  <img src={Pencil} alt="" height="30px" width="30px" />
                </span>
                <input
                  type="file"
                  multiple={false}
                  id="avatar"
                  name="image"
                  onChange={onChangeFile}
                  className=" rounded-m inset-0  cursor-pointer z-30  opacity-0 "
                />
              </label>
              <span className="w-32 h-32 rounded-full border-2 overflow-hidden mt-8">
                <img
                  src={
                    imgFile
                      ? URL.createObjectURL(imgFile)
                      : dataProfile.image || PhEdit
                  }
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
                    id="name"
                    name="display_name"
                    value={
                      form.display_name
                        ? form.display_name
                        : dataProfile.display_name
                    }
                    onChange={onChangeForm}
                    disabled={!canEdit}
                    placeholder="Your Name*"
                    className=" w-min  text-blackSec text-2xl font-bold placeholder:text-greySec h-[2rem] text-center lg:text-start lg:placeholder:text-start outline-none  placeholder:p-2 p-2 placeholder:text-center "
                  />
                </h1>
                <p className=" p-[0.6rem] text-center">
                  As {stateUser.data.role === 2 ? "Seller" : "Customer"}
                </p>
              </div>
            </section>
          </section>
          <section className=" flex flex-col mt-10  border border-greyBord mb-10">
            <form className="relative">
              <button
                type="button"
                onClick={() => setCanEdit(!canEdit)}
                className="absolute btn btn-ghost -top-14 right-0 z-30 cursor-pointer flex gap-2 items-center"
              >
                <p className=" text-xl font-bold">EDIT</p>
                <i className="bi bi-pencil-square text-3xl"></i>
              </button>
              <div className=" flex flex-col px-[3.8rem] py-10 border-b border-greyBord">
                <p className="ml-5">Gender</p>
                <span className="flex gap-10 mt-6 ml-5">
                  <input
                    id="MALE"
                    type="radio"
                    name="gender"
                    value="MALE"
                    checked={form.gender === "MALE"}
                    onChange={onChangeForm}
                    disabled={!canEdit}
                    className="hidden"
                  />
                  <label
                    for="MALE"
                    className="flex items-center cursor-pointer"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-blackSec"></span>
                    MALE
                  </label>
                  <input
                    id="FEMALE"
                    type="radio"
                    name="gender"
                    value="FEMALE"
                    checked={form.gender === "FEMALE"}
                    onChange={onChangeForm}
                    disabled={!canEdit}
                    className="hidden"
                  />
                  <label
                    for="FEMALE"
                    className="flex items-center cursor-pointer"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-blackSec"></span>
                    FEMALE
                  </label>
                </span>
                {/* <label htmlFor="gender" className=" ml-4 text-greySec ">
                  Gender
                </label>
                <input
                  className={`p-4 text-2xl text-blackSec outline-none ${
                    canEdit && "border-b-2"
                  }`}
                  type="text"
                  id="gender"
                  name="gender"
                  value={form.gender}
                  disabled={!canEdit}
                  onChange={onChangeForm}
                  placeholder="unset*"
                /> */}
              </div>
              <div className=" flex flex-col px-[3.8rem] py-10 border-b border-greyBord">
                <label htmlFor="address" className=" ml-4 text-greySec ">
                  Your Adress
                </label>
                <input
                  className={`p-4 text-2xl text-blackSec outline-none ${
                    canEdit && "border-b-2"
                  }`}
                  type="text"
                  id="address"
                  name="address"
                  value={form.address}
                  onChange={onChangeForm}
                  disabled={!canEdit}
                  placeholder="unset*"
                />
              </div>
              <div className=" flex flex-col px-[3.8rem] py-10 border-b border-greyBord">
                <label htmlFor="phone" className=" ml-4 text-greySec ">
                  Your Phone Number
                </label>
                <input
                  className={`p-4 text-2xl text-blackSec outline-none ${
                    canEdit && "border-b-2"
                  }`}
                  type="text"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={onChangeForm}
                  disabled={!canEdit}
                  placeholder="unset*"
                />
              </div>
              {stateUser.data.role === 2 && (
                <>
                  <div className=" flex flex-col px-[3.8rem] py-10 border-b border-greyBord">
                    <label htmlFor="store-name" className=" ml-4 text-greySec ">
                      Store Name
                    </label>
                    <input
                      className={`p-4 text-2xl text-blackSec outline-none ${
                        canEdit && "border-b-2"
                      }`}
                      type="text"
                      id="store-name"
                      name="store_name"
                      value={form.store_name}
                      onChange={onChangeForm}
                      disabled={!canEdit}
                      placeholder="set your store name*"
                    />
                  </div>
                  <div className=" flex flex-col px-[3.8rem] py-10 border-b border-greyBord">
                    <label htmlFor="store-desc" className=" ml-4 text-greySec ">
                      Store Description
                    </label>
                    <input
                      className={`p-4 text-2xl text-blackSec outline-none ${
                        canEdit && "border-b-2"
                      }`}
                      type="text"
                      id="store-desc"
                      name="store_desc"
                      value={form.store_desc}
                      onChange={onChangeForm}
                      disabled={!canEdit}
                      placeholder="set your store description*"
                    />
                  </div>
                </>
              )}
            </form>
          </section>
          <section className=" flex flex-col-reverse lg:flex-row justify-between mb-9 gap-10 ">
            <div>
              <button
                onClick={handleChangePWD}
                className="btn bg-blackSec flex w-full lg:w-[13.125rem] h-[4.375rem] gap-3 border-none justify-center text-white font-bold items-center"
              >
                {/* <p className="text-white font-bold">Edit Password</p> */}
                Edit Password
              </button>
            </div>
            <button
              onClick={handleSave}
              disabled={!canEdit ? !canEdit : Object.keys(form).length === 0}
              className="btn bg-blackSec flex w-full lg:w-[13.125rem] h-[4.375rem] gap-3 border-none justify-center items-center"
            >
              <p className="text-white font-bold">Save Changes</p>
            </button>
          </section>
          <button className="btn bg-redBtn flex w-full lg:w-[13.125rem] h-[4.375rem] gap-3 border-none justify-center items-center hover:bg-red-500">
            <img src={imgLogout} alt="" />
            <p className="text-white font-bold">Logout</p>
          </button>
        </>
      )}
    </>
  );
}

export default EditProfile;
