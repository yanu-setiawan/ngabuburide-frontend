import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import icoSearch from "../../assets/icon-search.svg";
import icoHeart from "../../assets/icon-love.svg";
import icoCart from "../../assets/icon-cart.svg";
import icoMenu from "../../assets/menu.svg";
import imgGlass from "../../assets/glass.webp";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../redux/slices/auth";

import { searchAction } from "../../redux/slices/search";
import { cartAction } from "../../redux/slices/cart";
import { authLogout } from "../../utils/https/auth";
import Loader from "../Loader";
import { favoriteAction } from "../../redux/slices/favorite";
import { getFavorite } from "../../utils/https/favorite";

function DropDownPages({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div className="md:w-72 flex flex-col gap-5 pl-4 md:pl-8 py-3 md:p-10 top-28 md:absolute md:bg-black text-white font-normal">
          <Link to={"/about"}>About Us</Link>
          <Link to={"/contact"}>Contact Us</Link>
          <Link to={"/commingsoon"} className="flex justify-between">
            Comming Soon <i className="bi bi-caret-right"></i>
          </Link>
          <Link to={"/notfound"}>404 Page</Link>
          <Link to={"/faq"}>FAQ Page</Link>
        </div>
      )}
    </>
  );
}

function DropDownShop({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div className="max-w-[700px] mt-4 md:mt-0 flex pl-4 md:p-10 top-28 left-[40%] md:absolute md:bg-black text-white font-normal">
          <section className="flex flex-col gap-5 mr-10">
            <Link to={"/product"}>Products</Link>
            <Link to={"/cart"}>Shopping Cart</Link>
            <Link to={"/checkout"} className="flex justify-between">
              Check Out
            </Link>
            <Link to={"/profile"}>My Account</Link>
            <Link to={"/tracking"}>Order Tracking</Link>
          </section>
          <span className="hidden w-96 h-52 md:flex justify-center items-center bg-white">
            <img src={imgGlass} alt="img-promo" />
            <div>
              <p className="text-black">Decorative Ceramic Accent Vases</p>
              <p className="text-4xl text-red-700">Off 50%</p>
              <button className="btn">Shop now</button>
            </div>
          </span>
        </div>
      )}
    </>
  );
}

function DropDownMenu({ isOpen, onToggle, onClose }) {
  const controller = useMemo(() => new AbortController(), []);
  const stateStore = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      const result = await authLogout(stateStore.token, controller);
      console.log(result);
      dispatch(userAction.authLogout());
      dispatch(cartAction.resetCart());
      dispatch(favoriteAction.resetFav());
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {isLoading && (
        <div className="w-screen h-screen fixed top-0 left-0 z-50 bg-slate-900/80 flex justify-center items-center">
          <Loader />
        </div>
      )}
      {isOpen && (
        <div
          className={`nav-menu ${
            onToggle ? "-right-4" : "right-[-400%] md:right-4"
          }`}
        >
          {stateStore.token === null ? (
            <>
              <Link to={"/login"}>Login</Link>
              <Link to={"/register"}>Register</Link>
            </>
          ) : (
            <>
              <Link to={"/profile"}>Profile</Link>
              <Link to={"/chat"}>Chat</Link>
              <Link
                to={"/notification"}
                className="flex justify-between relative"
              >
                Notification{" "}
                <i className="bi bi-circle-fill absolute right-28 md:static text-red-600"></i>
              </Link>
              <Link onClick={handleLogout}>Logout</Link>
            </>
          )}
        </div>
      )}
    </>
  );
}

function Header(props) {
  // const stateSearch = useSelector((state) => state.search);
  const controller = useMemo(() => new AbortController(), []);
  const stateStore = useSelector((state) => state.user);
  const stateCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [linkPages, setLinkPages] = useState(0);
  const [isToggle, setIsToggle] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [countFavorite, setCountFav] = useState(0);
  const handleSearch = () => {
    dispatch(searchAction.addSearch(inputSearch));
  };
  const fetching = async () => {
    if (!stateStore.token) return;
    try {
      const getFav = await getFavorite(stateStore.token, controller);
      // console.log(getFav.data.data);
      setCountFav(getFav.data.data.length);
    } catch (error) {
      setCountFav(0);
      console.log(error);
    }
  };
  useEffect(() => {
    fetching();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.loved]);
  return (
    <>
      <nav className="fixed top-0 left-0 z-40 bg-white w-full h-16 md:h-28 flex items-center px-4 md:px-10 border-b border-black">
        <Link
          to={"/"}
          className="text-3xl md:text-5xl font-bold mr-auto md:mr-0 cursor-pointer"
        >
          RAZYR
        </Link>
        <div className={`navbar ${isToggle ? "right-0" : "right-[-100%]"}`}>
          <Link to={"/"} className="navlink">
            HOME
          </Link>
          <Link
            className="navlink"
            onMouseEnter={() => setLinkPages(1)}
            onMouseLeave={() => {
              setLinkPages(0);
            }}
          >
            <div className="flex gap-1">
              PAGES <i className="bi bi-caret-down"></i>
            </div>
            <DropDownPages
              isOpen={linkPages === 1}
              onClose={() => setLinkPages(false)}
            />
          </Link>
          <Link
            className="navlink"
            onMouseEnter={() => setLinkPages(2)}
            onMouseLeave={() => {
              setLinkPages(0);
            }}
          >
            {" "}
            <div className="flex gap-1">
              SHOP <i className="bi bi-caret-down"></i>
            </div>
            <DropDownShop
              isOpen={linkPages === 2}
              onClose={() => setLinkPages(false)}
            />
          </Link>
          <Link to="/blog" className="navlink">
            BLOG
          </Link>
        </div>
        <div className={`nav-icon ${isToggle ? "right-0" : "right-[-100%]"}`}>
          <span
            onClick={() => setIsSearch(!isSearch)}
            className="relative cursor-pointer"
          >
            <img src={icoSearch} alt="icon-search" />
          </span>
          <Link to={"/favorite"} className="relative cursor-pointer">
            <img src={icoHeart} alt="icon-search" />
            <h2
              className={`${
                countFavorite === 0 && "hidden"
              } absolute -top-6 left-4 w-6 h-6 flex justify-center items-center rounded-full text-xs bg-black text-white`}
            >
              {countFavorite}
            </h2>
          </Link>
          <Link to={"/cart"} className="relative cursor-pointer">
            <img src={icoCart} alt="icon-search" />
            <h2
              className={`${
                stateCart.shoppingCart.length === 0 && "hidden"
              } absolute -top-6 left-4 w-6 h-6 flex justify-center items-center rounded-full text-xs bg-black text-white`}
            >
              {stateCart.shoppingCart.length}
            </h2>
          </Link>
        </div>
        <div
          className="relative hidden md:block h-fit btn btn-ghost md:py-4 ml-14 cursor-pointer"
          onClick={() => setLinkPages(linkPages === 3 ? 0 : 3)}
        >
          <img src={icoMenu} alt="icon-menu" />
          <DropDownMenu
            isOpen={linkPages === 3}
            onClose={() => setLinkPages(false)}
          />
        </div>
        <div
          className="relative md:hidden h-fit btn btn-ghost md:py-4 ml-14 cursor-pointer"
          onClick={() => setIsToggle(!isToggle)}
        >
          <img src={icoMenu} alt="icon-menu" />
          <DropDownMenu
            isOpen={true}
            onToggle={isToggle}
            onClose={() => setLinkPages(false)}
          />
        </div>
      </nav>
      <div
        className={`nav-search ${isSearch ? "top-2 md:top-36" : "top-[-7rem]"}`}
      >
        <button onClick={handleSearch} className="btn">
          <i className="bi bi-search text-white"></i>
        </button>
        <input
          type="text"
          name="search"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          placeholder="Search*"
          className="input input-bordered input-secondary w-full"
        />
      </div>
      <section className="w-full h-16 md:h-28"></section>
    </>
  );
}

export default Header;
