import React, { useState } from "react";
import hamburger from "../../assets/menu.svg";
import { Link } from "react-router-dom";
import glass from "../../assets/glass.webp";
import HeaderLogin from "./headerLogin";
import HeaderSignIn from "./headerSignIn";
import love from "../../assets/icon-love.svg";
import cart from "../../assets/icon-cart.svg";
import search from "../../assets/icon-search.svg";
import dropdown from "../../assets/icon-dropdown.svg";
import arrow from "../../assets/icon-arrow.svg";

function Header() {
  const [dropPages, setDropPages] = useState(false);
  const [dropShop, setDropShop] = useState(false);
  const [dropSoon, setDropSoon] = useState(false);
  const [dropMenu, setDropMenu] = useState(false);
  const handleMenuClick = (menuName) => {
    if (menuName === "pages") {
      setDropPages((prevDropPages) => !prevDropPages);
      setDropShop(false);
      setDropSoon(false);
      setDropMenu(false);
    } else if (menuName === "shop") {
      setDropShop((prevDropShop) => !prevDropShop);
      setDropPages(false);
      setDropSoon(false);
      setDropMenu(false);
    } else if (menuName === "burger") {
      setDropMenu((prevDropMenu) => !prevDropMenu);
      setDropPages(false);
      setDropSoon(false);
    }
  };
  const handleSoon = () => {
    setDropSoon((prevDropSoon) => !prevDropSoon);
  };
  const token = 0;
  return (
    <>
      <header className="navbar px-2 md:px-8 lg:px-20 py-8 lg:py-[3.15rem] ">
        <div className="navbar-start">
          <h1 className="cursor-pointer select-none font-bold text-xl lg:text-[2.82rem]">
            RAZYR
          </h1>
        </div>
        <div className="hidden lg:flex navbar-center gap-[4.3rem] text-lg font-bold">
          <div className="navlink">
            <Link to="/">HOME</Link>
          </div>
          <div className="relative">
            <div
              className="navlink flex items-center justify-end"
              onClick={() => handleMenuClick("pages")}
            >
              PAGES
              <img
                src={dropdown}
                alt="icon-dropdown"
                className="absolute translate-x-5"
              />
            </div>
            {dropPages && (
              <div className="relative">
                <div className="absolute z-10 flex flex-col gap-8 justify-center translate-y-[3.2rem] px-8 bg-zinc-900 w-[18.75rem] h-[21.875rem] py-6 font-normal text-white shadow-xl">
                  <Link to="/login">
                    <div className="cursor-pointer hover:text-slate-200">
                      About Us
                    </div>
                  </Link>
                  <div className="cursor-pointer hover:text-slate-200">
                    Contact Us
                  </div>
                  <div
                    className="flex justify-between cursor-pointer hover:text-slate-200"
                    onClick={handleSoon}
                  >
                    Comming Soon
                    <img src={arrow} alt="icon-arrow" />
                  </div>
                  <div className="cursor-pointer hover:text-slate-200">
                    404 Page
                  </div>
                  <div className="cursor-pointer hover:text-slate-200">FAQ</div>
                </div>
              </div>
            )}
          </div>
          {dropSoon && (
            <div className="absolute flex flex-col px-10 gap-4 text-[#919191] translate-x-[26.3rem] translate-y-60 justify-center shadow-xl z-20 w-[16.25rem] h-[11.25rem] bg-[#353535]">
              <div>Cooming Soon 01</div>
              <div>Cooming Soon 02</div>
            </div>
          )}
          <div className="relative">
            <div
              className="navlink flex items-center justify-end"
              onClick={() => handleMenuClick("shop")}
            >
              SHOP
              <img
                src={dropdown}
                alt="icon-dropdown"
                className="absolute translate-x-5"
              />
            </div>
            {dropShop && (
              <div className="relative">
                <div className="absolute z-10 flex gap-8 items-center justify-between translate-y-[3.2rem] -translate-x-[22rem] bg-zinc-900 w-[699px] h-[341px] pl-20 pr-10 font-normal shadow-xl">
                  <div>
                    <p className="text-white mb-6">Other Page</p>
                    <div className="flex flex-col gap-2 text-[#B4B4B4] text-sm">
                      <Link to="/cart">
                        <div>Shopping Cart</div>
                      </Link>
                      <Link to="/checkout">
                        <div>Check Out</div>
                      </Link>
                      <Link to="">
                        <div>My Account</div>
                      </Link>
                      <Link to="/tracking">
                        <div>Order Tracking</div>
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center gap-14 bg-[#F9F9F9] w-[25rem] h-56 px-10">
                    <div className="w-32 h-32">
                      <img
                        src={glass}
                        alt="glass"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p>Decorative Ceramic Accent Vases</p>
                      <p className="text-[#D94141] text-3xl">Off 50%</p>
                      <div className="btn bg-[#262626]">Shop now</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="navlink">BLOG</div>
        </div>
        <div className="navbar-end relative">
          <div className="flex gap-12">
            <div className="hidden lg:flex lg:gap-12">
              <div className="cursor-pointer w-6 h-6">
                <img
                  src={search}
                  alt="icon-search"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative w-6 h-6 cursor-pointer">
                <img
                  src={love}
                  alt="icon-love"
                  className="w-full h-full object-cover"
                />
                <span className="absolute w-[1.625rem] h-[1.625rem] -top-6 left-4 grid place-items-center rounded-full text-white bg-black">
                  01
                </span>
              </div>
              <div className="relative cursor-pointer w-6 h-6">
                <img
                  src={cart}
                  alt="icon-cart"
                  className="w-full h-full object-cover"
                />
                <span className="absolute w-[1.625rem] h-[1.625rem] -top-6 left-4 grid place-items-center rounded-full text-white bg-black">
                  01
                </span>
              </div>
            </div>
            <div
              className="cursor-pointer w-6 h-6"
              onClick={() => handleMenuClick("burger")}
            >
              <img
                src={hamburger}
                alt="icon-humberger"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {token === 1
            ? dropMenu && <HeaderLogin />
            : dropMenu && <HeaderSignIn />}
        </div>
        <div className="flex flex-col absolute z-20 translate-x-[14.2rem] translate-y-[11.4rem] md:translate-x-[33rem] bg-black text-white lg:hidden ">
          <div className="flex flex-col gap-4  px-16 py-5">
            <div className="navlink">HOME</div>
            <div className="navlink">PAGES</div>
            <div className="navlink">SHOP</div>
            <div className="navlink">BLOG</div>
          </div>
          <div className="bg-white w-full h-full">
            <div className="flex justify-center items-center gap-6 my-8 bg-white">
              <div className="cursor-pointer w-6 h-6">
                <img
                  src={search}
                  alt="icon-search"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative w-6 h-6 cursor-pointer">
                <img
                  src={love}
                  alt="icon-love"
                  className="w-full h-full object-cover"
                />
                <span className="absolute w-[1.625rem] h-[1.625rem] -top-6 left-4 grid place-items-center rounded-full text-white bg-black">
                  01
                </span>
              </div>
              <div className="relative cursor-pointer w-6 h-6">
                <img
                  src={cart}
                  alt="icon-cart"
                  className="w-full h-full object-cover"
                />
                <span className="absolute w-[1.625rem] h-[1.625rem] -top-6 left-4 grid place-items-center rounded-full text-white bg-black">
                  01
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
