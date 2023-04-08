import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "./card";
import arrow from "../../assets/icon-arrow-right.svg";
import arrowDropdown from "../../assets/icon-dropdown.svg";

function Product() {
  return (
    <>
      <Header />
      <main className="">
        <section className="relative">
          <div className="absolute flex gap-4 px-20 pt-10">
            <p>Shop</p>
            <img src={arrow} alt="icon-arrow" />
            <p>Shop Right Sidebar</p>
          </div>
          <div className=" hero-login w-full h-[15.6rem] opacity-20 flex justify-center items-center "></div>
          <div className=" absolute flex justify-center items-center text-center flex-col top-16 w-full ">
            <h1 className=" text-[3.5rem] text-blackSec">Let’s Shopping</h1>
            <p className=" text-[1rem] text-blackSec">
              Find and buy the one you like
            </p>
          </div>
        </section>
        <section className="w-full h-full flex flex-col md:flex-row justify-center px-4 py-6 gap-12 lg:px-20 lg:py-16 ">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4 ">
              <h1 className="font-bold text-2xl mb-4">Categories</h1>
              <div className="flex flex-col md:gap-2 lg:gap-8">
                <div className="flex justify-between md:gap-24 gap-36 lg:gap-36">
                  <div>Accessories</div>
                  <div>5</div>
                </div>
                <div className="flex justify-between md:gap-24 gap-36 lg:gap-36">
                  <div>Brands</div>
                  <div>15</div>
                </div>
                <div className="flex justify-between md:gap-24 gap-36 lg:gap-36">
                  <div>Clothing</div>
                  <div>3</div>
                </div>
                <div className="flex justify-between md:gap-24 gap-36 lg:gap-36">
                  <div>Fashion</div>
                  <div>8</div>
                </div>
                <div className="flex justify-between md:gap-24 gap-36 lg:gap-36">
                  <div>Furniture</div>
                  <div>9</div>
                </div>
                <div className="flex justify-between md:gap-24 gap-36 lg:gap-36">
                  <div>Man</div>
                  <div>6</div>
                </div>
                <div className="flex justify-between md:gap-24 gap-36 lg:gap-36">
                  <div>Woman</div>
                  <div>8</div>
                </div>
                <div className="flex justify-between md:gap-24 gap-36 lg:gap-36">
                  <div>Shoes</div>
                  <div>11</div>
                </div>
                <div className="flex justify-between md:gap-24 gap-36 lg:gap-36">
                  <div>Wallets</div>
                  <div>11</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-2xl">Price</h1>
              <div>
                <div>price $39-$153</div>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                className="range range-xs"
              />
              <div className="btn w-fit">FILTER</div>
            </div>

            <div>
              <h1>Colors</h1>
              <div>
                <div class="flex items-center mr-4">
                  <input
                    type="checkbox"
                    checked
                    className="checkbox checkbox-xs"
                  />
                </div>
              </div>
            </div>

            <div>
              <h1>Size</h1>
              <div></div>
            </div>

            <div>image</div>
          </div>
          <div>
            <div className="flex justify-between mb-10">
              <p>Showing 1-16 of 39 Results</p>
              <div className="flex flex-col">
                <div className="flex items-center gap-4">
                  <p>Sort by</p>
                  <div>
                    <img src={arrowDropdown} alt="dropdown" />
                  </div>
                </div>
                <div className="w-52 h-56 bg-[#1A1A1A] text-white mt-8">
                  <ul className="grid place-items-center px-10 py-12 gap-8">
                    <li className="cursor-pointer">Latest Product</li>
                    <li className="cursor-pointer">More Expensive</li>
                    <li className="cursor-pointer">More Cheap</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <div className="mt-8 grid place-items-center md:place-content-start lg:place-content-start">
              <div className="btn-group">
                <button className="btn btn-sm">1</button>
                <button className="btn btn-sm btn-active">2</button>
                <button className="btn btn-sm">3</button>
                <button className="btn btn-sm">4</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Product;
