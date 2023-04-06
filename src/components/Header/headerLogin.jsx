import React from "react";
import { Link } from "react-router-dom";
import glass from "../../assets/glass.webp";

function headerLogin() {
  return (
    <>
      <ul className="menu bg-black text-gray-400 menu-compact dropdown-content lg:mt-8 p-10 shadow -translate-x-[20.6rem] md:-translate-x-[20rem] lg:hidden rounded-box w-fit h-fit">
        <li>
          <Link to="/">
            <p>HOME</p>
          </Link>
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
          <ul className="p-2 -translate-x-[9.4rem] translate-y-36  bg-black text-white">
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
          <ul className="p-2 -translate-x-[9.97rem] translate-y-16 md:-translate-x-[65.8%] lg:-translate-x-[65.8%]">
            <div className="flex flex-col md:flex-row mt-6 w-fit px-6 py-8 md:px-10 md:py-12 md:gap-20 bg-black text-white">
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
              <div className="flex gap-[2.36rem] md:gap-11 items-center justify-center px-12 py-8 bg-white w-fit h-fit ">
                <div className="grid place-items-center w-28 h-28 md:w-36 md:h-36">
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
          <Link>
            <p>BLOG</p>
          </Link>
        </li>
      </ul>
      <ul
        tabIndex={0}
        className="menu block bg-black text-gray-400 menu-compact dropdown-content lg:mt-8 p-10 shadow -translate-x-36 md:-translate-x-[8.3rem] rounded-box w-fit h-fit"
      >
        <li>
          <Link>Profile</Link>
        </li>
        <li>
          <Link>Chat</Link>
        </li>
        <li>
          <Link>Notification</Link>
        </li>
        <li>
          <Link>Logout</Link>
        </li>
      </ul>
    </>
  );
}

export default headerLogin;
