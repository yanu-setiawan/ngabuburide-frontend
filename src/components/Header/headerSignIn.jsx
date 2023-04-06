import React from "react";
import { Link } from "react-router-dom";
import love from "../../assets/icon-love.svg";
import cart from "../../assets/icon-cart.svg";
import search from "../../assets/icon-search.svg";
import glass from "../../assets/glass.webp";

function headerSignIn() {
  return (
    <>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content lg:hidden bg-black text-gray-400 lg:mt-8 p-2 shadow -translate-x-[9.5rem] md:-translate-x-36 rounded-box w-fit"
      >
        <li>
          <Link>HOME</Link>
        </li>
        <li tabIndex={0}>
          <Link>
            PAGES
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </Link>
          <ul className="p-2 -translate-x-[19.8rem] md:-translate-x-[19.8rem] bg-black text-white">
            <li>
              <Link>About Us</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
            <li>
              <Link>Coming Soon</Link>
            </li>
            <li>
              <Link>404 Page</Link>
            </li>
            <li>
              <Link>FAQ Page</Link>
            </li>
          </ul>
        </li>
        <li tabIndex={0}>
          <Link>
            SHOP
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </Link>
          <ul className="p-2 -translate-x-[25rem] -translate-y-8 md:-translate-y-8 md:-translate-x-[43.3rem] lg:-translate-x-[65.8%] lg:translate-y-40">
            <div className="flex flex-col md:flex-row mt-6 w-fit px-2 py-4 md:px-10 md:py-12 md:gap-20 bg-black text-white">
              <div>
                <p>Other Page</p>
                <li>
                  <Link>Shopping Cart</Link>
                </li>
                <li>
                  <Link>Check Out</Link>
                </li>
                <li>
                  <Link>My Account</Link>
                </li>
                <li>
                  <Link>Order Tracking</Link>
                </li>
              </div>
              <div className="flex gap-2 md:gap-4 items-center justify-center py-8 lg:px-12 lg:py-8 bg-white w-fit h-fit ">
                <div className="grid place-items-center w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36">
                  <img src={glass} alt="img-glass" />
                </div>
                <div>
                  <p className="text-black text-xs">
                    Decorative Ceramic Accent Vases
                  </p>
                  <p className="text-red-600 text-3xl">Off 50%</p>
                  <div className="btn">Shop now</div>
                </div>
              </div>
            </div>
          </ul>
        </li>
        <li>
          <Link>BLOG</Link>
        </li>
        <div className="border-t flex gap-2 py-4 px-2">
          <div className="btn btn-ghost btn-circle grid place-content-center">
            <img src={search} alt="icon-search" />
          </div>
          <div className=" dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <img src={love} alt="icon-love" />
                <span className="badge rounded-full indicator-item -translate-y-4">
                  8
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body hidden">
                <span className="font-bold text-lg">8 Favorite</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <img src={cart} alt="icon-cart" />
                <span className="badge rounded-full indicator-item -translate-y-4">
                  8
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body hidden">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </>
  );
}

export default headerSignIn;
