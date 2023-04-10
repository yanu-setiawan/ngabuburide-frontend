/* eslint-disable no-undef */
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import img from "../../assets/Products/imgRelate.png";

function EditProducts() {
  return (
    <>
      <Header />
      <section className=" flex flex-col pb-[10rem]">
        <section className="relative">
          <div className=" hero-login w-full h-[15.6rem] opacity-20 flex justify-center items-center "></div>
          <div className=" absolute flex justify-center items-center text-center flex-col top-16 w-full ">
            <h1 className=" text-[3.5rem] text-blackSec">Edit Product</h1>
            <p className=" text-[1rem] text-blackSec">
              See your notifications for the latest updates
            </p>
          </div>
        </section>
        <section className=" mt-20 flex flex-col mx-[5%] md-[4%] lg:mx-[10%]">
          <section className=" w-full mt-[6.25rem]">
            <section className=" w-[50%] mx-auto flex flex-col">
              <section className=" flex flex-col gap-10">
                <h1 className=" text-2xl font-bold text-blackSec">Inventory</h1>
                <div className=" flex flex-col gap-10">
                  <form action="" className="flex flex-col gap-10">
                    <label htmlFor="name">
                      <input
                        type="text"
                        id="name"
                        name="prod_name"
                        // value={form.prod_name}
                        // onChange={onChangeForm}
                        className=" h-[4.4rem] w-full p-5 border border-greyBord"
                        placeholder="Name of goods*"
                      />
                    </label>
                    <label htmlFor="desc">
                      <textarea
                        id="desc"
                        name="description"
                        // value={form.description}
                        // onChange={onChangeForm}
                        className="textarea textarea-bordered h-[10.3rem] w-full p-5 border border-greyBord placeholder:flex items-start pb-24"
                        placeholder="Description of Product"
                      ></textarea>
                    </label>
                  </form>
                </div>
              </section>
              <section className=" flex flex-col gap-10 mt-20">
                <h1 className=" text-2xl font-bold text-blackSec">
                  Item Details
                </h1>
                <div className=" flex flex-col gap-10">
                  <form action="" className="flex flex-col gap-10">
                    <label htmlFor="price">
                      <input
                        type="text"
                        id="price"
                        name="price"
                        // value={form.price}
                        // onChange={onChangeForm}
                        className=" h-[4.4rem] w-full p-5 border border-greyBord"
                        placeholder="Unit Price*"
                      />
                    </label>
                    <label htmlFor="stock">
                      <input
                        type="text"
                        id="stock"
                        name="stock"
                        // value={form.stock}
                        // onChange={onChangeForm}
                        className=" h-[4.4rem] w-full p-5 border border-greyBord"
                        placeholder="Unit Stocks*  /pcs"
                      />
                    </label>
                  </form>
                </div>
              </section>

              <section className="flex flex-col">
                <form>
                  <div className=" flex flex-col">
                    <h1 className=" mb-5 mt-10 font-bold">Stock Condition</h1>
                    <div className=" flex gap-10 flex-wrap">
                      <div className="flex">
                        <input
                          id="new"
                          type="radio"
                          name="condition"
                          //   value="new"
                          //   onChange={onChangeForm}
                          className="hidden"
                        />
                        <label
                          for="new"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-blackSec"></span>
                          New Product
                        </label>
                      </div>
                      <div className="flex">
                        <input
                          id="second"
                          type="radio"
                          name="condition"
                          //   value="secound"
                          //   onChange={onChangeForm}
                          className="hidden"
                        />
                        <label
                          for="second"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-blackSec"></span>
                          Second Product
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-col mt-5">
                    <h1 className=" mb-5 mt-10 font-bold">Brands</h1>
                    <div className=" flex gap-10 flex-wrap">
                      <div className="flex">
                        <input
                          id="ikea"
                          type="radio"
                          name="brand"
                          //   value="IKEA"
                          //   onChange={onChangeForm}
                          className="hidden"
                        />
                        <label
                          for="ikea"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-blackSec"></span>
                          IKEA
                        </label>
                      </div>
                      <div className="flex">
                        <input
                          id="north_oxford"
                          type="radio"
                          name="brand"
                          //   value="NORTH OXFORD"
                          //   onChange={onChangeForm}
                          className="hidden"
                        />
                        <label
                          for="north_oxford"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-blackSec"></span>
                          NORTH OXFORD
                        </label>
                      </div>
                      <div className="flex">
                        <input
                          id="informa"
                          type="radio"
                          name="brand"
                          //   value="INFORMA"
                          //   onChange={onChangeForm}
                          className="hidden"
                        />
                        <label
                          for="informa"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-blackSec"></span>
                          INFORMA
                        </label>
                      </div>
                      <div className="flex">
                        <input
                          id="sweet_house"
                          type="radio"
                          name="brand"
                          //   value="SWEET HOUSE"
                          //   onChange={onChangeForm}
                          className="hidden"
                        />
                        <label
                          for="sweet_house"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-blackSec"></span>
                          SWEET HOUSE
                        </label>
                      </div>
                      <div className="flex">
                        <input
                          id="mr_poppins"
                          type="radio"
                          name="brand"
                          //   value="MR.POPPINS 1929"
                          //   onChange={onChangeForm}
                          className="hidden"
                        />
                        <label
                          for="mr_poppins"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-blackSec"></span>
                          MR.POPPINS 1929
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-col mt-5">
                    <h1 className=" mb-5 mt-10 font-bold">Colors</h1>
                    <div className=" flex gap-10 flex-wrap">
                      <div className="flex px-2 hover:bg-amber-800/50">
                        <input
                          id="brown"
                          type="radio"
                          name="color"
                          //   value="brown"
                          //   onChange={onChangeForm}
                          className="hidden"
                        />
                        <label
                          for="brown"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-blackSec"></span>
                          BROWN
                        </label>
                      </div>
                      <div className="flex px-2 hover:bg-blue-800/50">
                        <input
                          id="blue"
                          type="radio"
                          name="color"
                          //   value="blue"
                          //   onChange={onChangeForm}
                          className="hidden"
                        />
                        <label
                          for="blue"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-blackSec"></span>
                          BLUE
                        </label>
                      </div>
                      <div className="flex px-2 hover:bg-slate-800/50">
                        <input
                          id="grey"
                          type="radio"
                          name="color"
                          //   value="grey"
                          //   onChange={onChangeForm}
                          className="hidden"
                        />
                        <label
                          for="grey"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-blackSec"></span>
                          GREY
                        </label>
                      </div>
                      <div className="flex px-2 hover:bg-green-800/50">
                        <input
                          id="green"
                          type="radio"
                          name="color"
                          //   value="green"
                          className="hidden"
                        />
                        <label
                          for="green"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-blackSec"></span>
                          GREEN
                        </label>
                      </div>
                      <div className="flex px-2 hover:bg-orange-600/50">
                        <input
                          id="orange"
                          type="radio"
                          name="color"
                          //   value="orange"
                          //   onChange={onChangeForm}
                          className="hidden"
                        />
                        <label
                          for="orange"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-blackSec"></span>
                          ORANGE
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-col mt-5">
                    <h1 className=" mb-5 mt-10 font-bold">CATEGORY</h1>
                    <div className=" flex gap-10 flex-wrap">
                      <div className="flex">
                        <input
                          id="accessories"
                          type="radio"
                          name="category_id"
                          //   value={1}
                          //   onChange={onChangeForm}
                          className="hidden"
                        />
                        <label
                          for="accessories"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-blackSec"></span>
                          ACCESSORIES
                        </label>
                      </div>
                      <div className="flex">
                        <input
                          id="brands"
                          type="radio"
                          name="category_id"
                          //   value={2}
                          //   onChange={onChangeForm}
                          className="hidden"
                        />
                        <label
                          for="brands"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-blackSec"></span>
                          BRANDS
                        </label>
                      </div>
                      <div className="flex">
                        <input
                          id="clothing"
                          type="radio"
                          name="category_id"
                          //   value={3}
                          //   onChange={onChangeForm}
                          className="hidden"
                        />
                        <label
                          for="clothing"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-blackSec"></span>
                          CLOTHING
                        </label>
                      </div>
                      <div className="flex">
                        <input
                          id="fashion"
                          type="radio"
                          name="category_id"
                          //   value={4}
                          //   onChange={onChangeForm}
                          className="hidden"
                        />
                        <label
                          for="fashion"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-blackSec"></span>
                          FASHION
                        </label>
                      </div>
                      <div className="flex">
                        <input
                          id="furniture"
                          type="radio"
                          name="category_id"
                          //   value={5}
                          //   onChange={onChangeForm}
                          className="hidden"
                        />
                        <label
                          for="furniture"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-blackSec"></span>
                          FURNITURE
                        </label>
                      </div>
                      <div className="flex">
                        <input
                          id="man"
                          type="radio"
                          name="category_id"
                          //   value={6}
                          //   onChange={onChangeForm}
                          className="hidden"
                        />
                        <label
                          for="man"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-blackSec"></span>
                          MAN
                        </label>
                      </div>
                      <div className="flex">
                        <input
                          id="woman"
                          type="radio"
                          name="category_id"
                          //   value={7}
                          //   onChange={onChangeForm}
                          className="hidden"
                        />
                        <label
                          for="woman"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-blackSec"></span>
                          WOMAN
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </section>
              <section className="flex flex-col mt-[5rem]">
                <h1 className=" font-bold text-2xl mb-7">Photo Of Goods</h1>
                <section className="flex gap-4 flex-wrap">
                  <section className=" flex gap-5 items-center flex-wrap xl:flex-nowrap">
                    <div className=" relative">
                      <label
                        htmlFor="avatar"
                        className=" w-[10rem] h-[10rem] lg:w-48 lg:h-48 flex justify-center items-center  bg-black hover:bg-opacity-40 hover:opacity-[100%] z-20 opacity-0 cursor-pointer absolute "
                      >
                        <span className="absolute z-30 opacity-100 cursor-pointer flex text-2xl">
                          <p className="  text-white font-bold">Edit</p>
                        </span>
                        <input
                          type="file"
                          multiple={false}
                          id="avatar"
                          name="image"
                          //   onChange={onChangeFile}
                          className=" rounded-m inset-0  cursor-pointer z-30  opacity-0 "
                        />
                      </label>
                      <div className=" w-[10rem] h-[10rem] lg:w-48 lg:h-48 flex overflow-hidden cursor-pointer">
                        <img
                          src={img}
                          alt=""
                          className=" object-cover w-full h-full"
                        />
                      </div>
                    </div>
                    <div className=" relative">
                      <label
                        htmlFor="avatar"
                        className=" w-[10rem] h-[10rem] lg:w-48 lg:h-48 flex justify-center items-center  bg-black hover:bg-opacity-40 hover:opacity-[100%] z-20 opacity-0 cursor-pointer absolute "
                      >
                        <span className="absolute z-30 opacity-100 cursor-pointer flex text-2xl">
                          <p className="  text-white font-bold">Edit</p>
                        </span>
                        <input
                          type="file"
                          multiple={false}
                          id="avatar"
                          name="image"
                          //   onChange={onChangeFile}
                          className=" rounded-m inset-0  cursor-pointer z-30  opacity-0 "
                        />
                      </label>
                      <div className=" w-[10rem] h-[10rem] lg:w-48 lg:h-48 flex overflow-hidden cursor-pointer">
                        <img
                          src={img}
                          alt=""
                          className=" object-cover w-full h-full"
                        />
                      </div>
                    </div>
                    <div className=" relative">
                      <label
                        htmlFor="avatar"
                        className=" w-[10rem] h-[10rem] lg:w-48 lg:h-48 flex justify-center items-center  bg-black hover:bg-opacity-40 hover:opacity-[100%] z-20 opacity-0 cursor-pointer absolute "
                      >
                        <span className="absolute z-30 opacity-100 cursor-pointer flex text-2xl">
                          <p className="  text-white font-bold">Edit</p>
                        </span>
                        <input
                          type="file"
                          multiple={false}
                          id="avatar"
                          name="image"
                          //   onChange={onChangeFile}
                          className=" rounded-m inset-0  cursor-pointer z-30  opacity-0 "
                        />
                      </label>
                      <div className=" w-[10rem] h-[10rem] lg:w-48 lg:h-48 flex overflow-hidden cursor-pointer">
                        <img
                          src={img}
                          alt=""
                          className=" object-cover w-full h-full"
                        />
                      </div>
                    </div>
                    <div className=" relative">
                      <label
                        htmlFor="avatar"
                        className=" w-[10rem] h-[10rem] lg:w-48 lg:h-48 flex justify-center items-center  bg-black hover:bg-opacity-40 hover:opacity-[100%] z-20 opacity-0 cursor-pointer absolute "
                      >
                        <span className="absolute z-30 opacity-100 cursor-pointer flex text-2xl">
                          <p className="  text-white font-bold">Edit</p>
                        </span>
                        <input
                          type="file"
                          multiple={false}
                          id="avatar"
                          name="image"
                          //   onChange={onChangeFile}
                          className=" rounded-m inset-0  cursor-pointer z-30  opacity-0 "
                        />
                      </label>
                      <div className="w-[10rem] h-[10rem] lg:w-48 lg:h-48 flex overflow-hidden cursor-pointer">
                        <img
                          src={img}
                          alt=""
                          className=" object-cover w-full h-full"
                        />
                      </div>
                    </div>

                    {/* <div
                      className={`${
                        fileDua === "" && "hidden"
                      } w-40 border border-blackSec h-40 overflow-hidden`}
                    >
                      <img
                        src={fileDua === "" ? "" : URL.createObjectURL(fileDua)}
                        alt=""
                        className="object-cover"
                      />
                    </div>
                    <div
                      className={`${
                        fileTiga === "" && "hidden"
                      } w-40 border border-blackSec h-40 overflow-hidden`}
                    >
                      <img
                        src={
                          fileTiga === "" ? "" : URL.createObjectURL(fileTiga)
                        }
                        alt=""
                        className="object-cover"
                      />
                    </div>
                    <div
                      className={`${
                        fileEmpat === "" && "hidden"
                      } w-40 border border-blackSec h-40 overflow-hidden`}
                    >
                      <img
                        src={
                          fileEmpat === "" ? "" : URL.createObjectURL(fileEmpat)
                        }
                        alt=""
                        className="object-cover"
                      />
                    </div> */}
                  </section>
                  {/* Side Image  */}
                  <section className=" flex relative justify-center flex-col items-center lg:justify-normal lg:flex-row gap-4 overflow-hidden">
                    <label
                      htmlFor="file"
                      className="relative text-greyBord cursor-pointer"
                    >
                      <input
                        type="file"
                        id="file"
                        multiple={false}
                        // onChange={onChangeFile}
                        className="hidden"
                      />
                      <i className="bi bi-plus-square-dotted text-[10rem]"></i>
                      <p className="absolute bottom-[58px] w-full text-center font-bold">
                        Add Photo
                      </p>
                    </label>
                  </section>
                </section>
                <div className=" mt-8">
                  <button
                    // onClick={handleSubmit}
                    className="btn bg-blackSec flex w-full lg:w-[13.125rem] h-[4.375rem] gap-3 border-none justify-center items-center"
                  >
                    <p className="text-white font-bold">Save Changes</p>
                  </button>
                </div>
              </section>
            </section>
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default EditProducts;
