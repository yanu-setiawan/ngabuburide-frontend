import React from "react";
import hamburger from "../../assets/menu.svg";
import { Link } from "react-router-dom";
import glass from "../../assets/glass.webp";
import HeaderLogin from "./headerLogin";
import HeaderSignIn from "./headerSignIn";
import love from "../../assets/icon-love.svg";
import cart from "../../assets/icon-cart.svg";
import search from "../../assets/icon-search.svg";

function Header() {
  const token = 1;
  return (
    <>
      <header className="navbar px-2 md:px-12 lg:px-20 lg:py-8 bg-base-100">
        <div className="navbar-start">
          <h1 className="text-2xl lg:text-4xl font-bold">RAZ</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
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
              <ul className="p-2 mt-8 bg-black text-white">
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
              <ul className="p-2 -translate-x-1/2">
                <div className="flex flex-row mt-6 w-fit px-10 py-12 gap-20 bg-black text-white">
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
                  <div className="flex gap-11 items-center justify-center px-12 py-8 bg-white w-fit h-fit ">
                    <div className="grid place-items-center w-36 h-36">
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
        </div>
        <div className="navbar-end gap-[1.5rem] items-start">
          <button className="hidden btn btn-ghost btn-circle lg:grid place-content-center">
            <img src={search} alt="icon-search" />
          </button>
          <div className="hidden lg:block dropdown dropdown-end">
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
              <div className="card-body">
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
          <div className="hidden lg:block dropdown dropdown-end">
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
              <div className="card-body">
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
          <div className="w-11 h-8">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-square ">
                <div className="w-9 h-6 md:w-11 md:h-8">
                  <img
                    src={hamburger}
                    alt="hamburger"
                    className="w-3/4 h-3/4 md:h-full md:w-full object-contain"
                  />
                </div>
              </label>
              {token === 0 ? <HeaderLogin /> : <HeaderSignIn />}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
