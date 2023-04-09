import React, { useEffect, useState } from "react";
// import Shape from "../../../assets/Shape.svg";

function SellingOrder() {
  const [form, setForm] = useState({});
  const [fileForm, setFileForm] = useState([]);

  const onChangeFile = (event) => {
    const files = Array.from(event.target.files);
    setFileForm([...fileForm, ...files]);
  };
  // const onChangeFile = (event) => {
  //   setFileForm((file) => {
  //     return [...file, event.target.files];
  //   });
  //   // setFileForm(event.target.files);
  // };
  const onChangeForm = (event) => {
    setForm((form) => {
      return {
        ...form,
        [event.target.name]: event.target.value,
      };
    });
  };
  const handleSubmit = () => {
    console.log(form);
  };

  useEffect(() => {
    document.title = "RAZYR - Selling Product";
  });
  // console.log(fileForm);
  return (
    <>
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
                    value={form.prod_name}
                    onChange={onChangeForm}
                    className=" h-[4.4rem] w-full p-5 border border-greyBord"
                    placeholder="Name of goods*"
                  />
                </label>
                <label htmlFor="desc">
                  <textarea
                    id="desc"
                    name="description"
                    value={form.description}
                    onChange={onChangeForm}
                    className="textarea textarea-bordered h-[10.3rem] w-full p-5 border border-greyBord placeholder:flex items-start pb-24"
                    placeholder="Description of Product"
                  ></textarea>
                  {/* <input
                    type="text"
                    className=" h-[10.3rem] w-full p-5 border border-greyBord placeholder:flex items-start pb-24"
                    placeholder="Description of Product"
                  /> */}
                </label>
              </form>
            </div>
          </section>
          <section className=" flex flex-col gap-10 mt-20">
            <h1 className=" text-2xl font-bold text-blackSec">Item Details</h1>
            <div className=" flex flex-col gap-10">
              <form action="" className="flex flex-col gap-10">
                <label htmlFor="price">
                  <input
                    type="text"
                    id="price"
                    name="price"
                    value={form.price}
                    onChange={onChangeForm}
                    className=" h-[4.4rem] w-full p-5 border border-greyBord"
                    placeholder="Unit Price*"
                  />
                </label>
                <label htmlFor="stock">
                  <input
                    type="text"
                    id="stock"
                    name="stock"
                    value={form.stock}
                    onChange={onChangeForm}
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
                      value="new"
                      onChange={onChangeForm}
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
                      value="secound"
                      onChange={onChangeForm}
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
                      name="brands"
                      value="IKEA"
                      onChange={onChangeForm}
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
                      name="brands"
                      value="NORTH OXFORD"
                      onChange={onChangeForm}
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
                      name="brands"
                      value="INFORMA"
                      onChange={onChangeForm}
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
                      name="brands"
                      value="SWEET HOUSE"
                      onChange={onChangeForm}
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
                      name="brands"
                      value="MR.POPPINS 1929"
                      onChange={onChangeForm}
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
                      value="brown"
                      onChange={onChangeForm}
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
                      value="blue"
                      onChange={onChangeForm}
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
                      value="grey"
                      onChange={onChangeForm}
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
                      value="green"
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
                      value="orange"
                      onChange={onChangeForm}
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
                      value={1}
                      onChange={onChangeForm}
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
                      value={2}
                      onChange={onChangeForm}
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
                      value={3}
                      onChange={onChangeForm}
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
                      value={4}
                      onChange={onChangeForm}
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
                      value={5}
                      onChange={onChangeForm}
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
                      value={6}
                      onChange={onChangeForm}
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
                      value={7}
                      onChange={onChangeForm}
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
              <div className=" flex flex-col mt-5">
                <h1 className=" mb-5 mt-10 font-bold">Size</h1>
                <div className=" flex gap-10 flex-wrap">
                  <div className="flex">
                    <input id="s" type="radio" name="size" className="hidden" />
                    <label for="s" className="flex items-center cursor-pointer">
                      <span className="w-4 h-4 inline-block mr-1 border border-blackSec"></span>
                      S
                    </label>
                  </div>
                  <div className="flex">
                    <input id="m" type="radio" name="size" className="hidden" />
                    <label for="m" className="flex items-center cursor-pointer">
                      <span className="w-4 h-4 inline-block mr-1 border border-blackSec"></span>
                      M
                    </label>
                  </div>
                  <div className="flex">
                    <input id="l" type="radio" name="size" className="hidden" />
                    <label for="l" className="flex items-center cursor-pointer">
                      <span className="w-4 h-4 inline-block mr-1 border border-blackSec"></span>
                      L
                    </label>
                  </div>
                  <div className="flex">
                    <input
                      id="xl"
                      type="radio"
                      name="size"
                      className="hidden"
                    />
                    <label
                      for="xl"
                      className="flex items-center cursor-pointer"
                    >
                      <span className="w-4 h-4 inline-block mr-1 border border-blackSec"></span>
                      XL
                    </label>
                  </div>
                  <div className="flex">
                    <input
                      id="xxl"
                      type="radio"
                      name="size"
                      className="hidden"
                    />
                    <label
                      for="xxl"
                      className="flex items-center cursor-pointer"
                    >
                      <span className="w-4 h-4 inline-block mr-1 border border-blackSec"></span>
                      XXL
                    </label>
                  </div>
                  <div className="flex">
                    <input
                      id="all_size"
                      type="radio"
                      name="size"
                      className="hidden"
                    />
                    <label
                      for="all_size"
                      className="flex items-center cursor-pointer"
                    >
                      <span className="w-4 h-4 inline-block mr-1 border border-blackSec"></span>
                      ALL SIZE
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </section>
          <section className="flex flex-col mt-[5rem]">
            <h1 className=" font-bold text-2xl mb-7">Photo Of Goods</h1>
            <section className="flex gap-4 flex-wrap">
              {/* <div className=" w-[12.5rem] h-[12.5rem]"></div> */}
              {fileForm.map((file, idx) => (
                <div
                  key={idx}
                  className="w-40 border border-blackSec h-40 overflow-hidden"
                >
                  <img
                    src={URL.createObjectURL(file)}
                    alt=""
                    className="object-cover"
                  />
                </div>
              ))}
              <section className="flex relative justify-center flex-col items-center lg:justify-normal lg:flex-row gap-4 overflow-hidden">
                <label
                  htmlFor="file"
                  className="relative text-greyBord cursor-pointer"
                >
                  <input
                    type="file"
                    id="file"
                    multiple={true}
                    onChange={onChangeFile}
                    className="hidden"
                  />
                  <i className="bi bi-plus-square-dotted text-[10rem]"></i>
                  <p className="absolute bottom-[58px] w-full text-center font-bold">
                    Add Photo
                  </p>
                </label>
                {/* <label
                  htmlFor="avatar"
                  className=" w-[12.5rem] h-[12.5rem] flex justify-center items-center hover:bg-opacity-50  z-20 top-[1.9rem] cursor-pointer  border-[3px] border-dashed p-5 border-greyBord "
                >
                  <input
                    type="file"
                    multiple={false}
                    id="avatar"
                    name="avatar"
                    onChange={onChangeFile}
                    className=" rounded-m inset-0  cursor-pointer z-30  opacity-0 "
                  />
                </label>
                <span className=" opacity-100 cursor-pointer flex justify-center absolute w-max items-center flex-col gap-8 lg:translate-x-[3.5rem]  ">
                  <img src={Shape} alt="" className="w-8" /> */}
                {/* <img
                    src={fileForm ? URL.createObjectURL(fileForm) : Shape}
                    alt=""
                    className={`${fileForm ? "pt-8 w-[12.5rem]" : "w-8"}`}
                  /> */}
                {/* <p className=" text-base  text-greyFont font-bold">
                    Add Photo
                  </p>
                </span> */}
              </section>
            </section>
            <div className=" mt-8">
              <button
                onClick={handleSubmit}
                className="btn bg-blackSec flex w-full lg:w-[13.125rem] h-[4.375rem] gap-3 border-none justify-center items-center"
              >
                <p className="text-white font-bold">Sell Product</p>
              </button>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}

export default SellingOrder;
