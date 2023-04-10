import React, { useEffect, useMemo, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import withSearchParams from "../../utils/wrapper/withSearchParams";
import Card from "./card";
import { getDataProducts, getMetaCategories } from "../../utils/https/products";
import Loader from "../../components/Loader";
import arrow from "../../assets/icon-arrow-right.svg";
// import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
// import { searchAction } from "../../redux/slices/search";

function DataNotFound() {
  return (
    <div className="w-full h-[50vh] flex justify-center items-center text-4xl md:text-6xl font-bold text-center">
      DATA NOT FOUND
    </div>
  );
}

function CategoriesContent(props) {
  const handleClick = () => {
    const paramsName = props.name.toLowerCase();
    props.onClick(paramsName);
  };
  return (
    <div
      onClick={handleClick}
      className="w-full flex justify-between cursor-pointer"
    >
      <p className={props.dataPar === props.name.toLowerCase() && "font-bold"}>
        {props.name}
      </p>
      <p>{props.count}</p>
    </div>
  );
}

function Product(props) {
  const controller = useMemo(() => new AbortController(), []);
  // const searchState = useSelector((state) => state.search);

  const [isLoading, setLoading] = useState(true);

  const [dataParams, setDataParams] = useSearchParams({
    brand: "",
    color: "",
    price: "",
    order: "",
    categories: "",
    keyword: "",
    page: "",
    limit: "",
  });
  const [metaData, setMetaData] = useState({
    total: 0,
  });
  const [dataProducts, setDataProducts] = useState([]);
  const [countCategory, setCountCategory] = useState([]);
  const [rangePrice, setRangePrice] = useState(0);
  const [brand, setBrand] = useState();
  const [allColor, setAllColor] = useState(true);

  const handleCategoryParams = (info) => {
    const params = Object.fromEntries(dataParams);
    setDataParams({
      ...params,
      categories: dataParams.categories === info ? "" : info,
    });
  };

  const handleBrand = (e) => {
    setBrand(e.target.id);
    const params = Object.fromEntries(dataParams);
    setDataParams({
      ...params,
      brand: e.target.id,
    });
  };

  const allCategories = () => {
    const params = Object.fromEntries(dataParams);
    setDataParams({
      ...params,
      categories: "",
      keyword: "",
    });
  };

  const handleRangeParams = (event) => {
    setRangePrice(event.target.value);
  };

  const handleSetSearch = (value) => {
    const params = Object.fromEntries(dataParams);
    setDataParams({
      ...params,
      keyword: value,
    });
  };

  const handleAllBrand = (e) => {
    setBrand(e.target.id);
    const params = Object.fromEntries(dataParams);
    setDataParams({
      ...params,
      brand: "",
    });
  };

  const handleSubmitRange = () => {
    const checking = parseInt(dataParams.price) / 1000000;
    const params = Object.fromEntries(dataParams);
    const newPriceParams = parseInt(rangePrice) * 1000000;
    // console.log(rangePrice, checking);
    if (newPriceParams === 0) {
      setDataParams({
        ...params,
        price: "",
      });
      return;
    }
    setDataParams({
      ...params,
      price: parseInt(rangePrice) === checking ? "" : `0-${newPriceParams}`,
    });
    if (parseInt(rangePrice) === checking) {
      setRangePrice(0);
    }
  };

  const handleColor = (info) => {
    const params = Object.fromEntries(dataParams);
    setDataParams({
      ...params,
      color: dataParams.color === info ? "" : info,
    });
  };

  const handleSorting = (e) => {
    e.preventDefault();
    const params = Object.fromEntries(dataParams);
    setDataParams({
      ...params,
      order: e.target.id,
      column: e.target.value,
    });
  };

  const fetchingData = async () => {
    setLoading(true);
    const newPar = new URLSearchParams(dataParams);
    try {
      const result = await getDataProducts(newPar, controller);
      // console.log(result.data);
      setMetaData({ ...metaData, total: result.data.totalData });
      setDataProducts(result.data.data);
      // dispatch(searchAction.resetSearch());
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchingMetaCategories = async () => {
    setLoading(true);
    try {
      const result = await getMetaCategories(controller);
      // console.log(result.data);
      setCountCategory(result.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(
    () => {
      document.title = "RAZYR - Products";
      window.scrollTo(0, 0);
      // const queryParams = new URLSearchParams(dataParams);
      // props.setSearchParams(Object.fromEntries(queryParams));
      // setLoading(true)
      fetchingData();
      fetchingMetaCategories();
      // setLoading(false)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dataParams]
  );
  console.log(dataProducts);
  return (
    <>
      <Header setSearch={handleSetSearch} />
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
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <section className="w-full h-full flex flex-col md:flex-row justify-center gap-12 px-4 lg:px-20 lg:py-16 ">
              <div className="w-full md:w-48 lg:w-64 flex flex-col gap-10">
                <div className="flex flex-col gap-4 ">
                  <h1 className="font-bold text-2xl mb-4">Categories</h1>
                  <p onClick={allCategories} className="cursor-pointer">
                    All
                  </p>
                  {countCategory.map((cat) => (
                    <CategoriesContent
                      key={cat.category_name}
                      dataPar={dataParams.categories}
                      onClick={handleCategoryParams}
                      name={cat.category_name}
                      count={cat.totaldata}
                    />
                  ))}
                  <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-2xl">Price</h1>
                    <div>
                      <div>
                        price Rp. 0 - Rp.{" "}
                        {(rangePrice * 1000000).toLocaleString("id-ID")}
                      </div>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={rangePrice}
                      onChange={handleRangeParams}
                      className="range range-xs"
                    />
                    <button onClick={handleSubmitRange} className="btn w-fit">
                      {parseInt(rangePrice) ===
                      parseInt(dataParams.price) / 1000000
                        ? "RESET"
                        : "FILTER"}
                    </button>
                  </div>

                  <div className=" flex flex-col w-full mt-5 mb-10">
                    <h1 className=" mb-5 mt-10 font-bold">Brands</h1>
                    <div className=" flex flex-wrap justify-between gap-4">
                      <div className="flex w-full">
                        <input
                          id="all"
                          type="radio"
                          name="brands"
                          className="hidden"
                          value={brand}
                          onChange={handleAllBrand}
                          checked={!brand || brand === "all"}
                        />
                        <label
                          for="all"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-blackSec"></span>
                          ALL
                        </label>
                      </div>
                      <div className="flex">
                        <input
                          id="ikea"
                          type="radio"
                          name="brands"
                          className="hidden"
                          onChange={handleBrand}
                          checked={brand === "ikea"}
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
                          className="hidden"
                          onChange={handleBrand}
                          checked={brand === "north_oxford"}
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
                          className="hidden"
                          onChange={handleBrand}
                          checked={brand === "informa"}
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
                          className="hidden"
                          onChange={handleBrand}
                          checked={brand === "sweet_house"}
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
                          className="hidden"
                          onChange={handleBrand}
                          checked={brand === "mr_poppins"}
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

                  <div>
                    <h1 className="font-bold text-2xl mb-4">Color</h1>
                    <div>
                      <div class="flex gap-5 items-center mr-4 flex-wrap">
                        <input
                          id="all-color"
                          type="radio"
                          name="brands"
                          className="hidden"
                          onChange={() => {
                            handleColor("");
                            setAllColor(true);
                          }}
                          checked={allColor === true}
                          // checked
                        />
                        <label
                          for="all-color"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-blackSec"></span>
                          ALL
                        </label>
                        <br />
                        <span
                          onClick={() => {
                            handleColor("brown");
                            setAllColor(false);
                          }}
                          className="bg-amber-800 w-5 h-5 rounded-full cursor-pointer flex justify-center items-center"
                        >
                          {dataParams.color === "brown" && (
                            <i className="bi bi-check text-white text-lg"></i>
                          )}
                        </span>
                        <span
                          onClick={() => {
                            handleColor("blue");
                            setAllColor(false);
                          }}
                          className="bg-blue-800 w-5 h-5 rounded-full cursor-pointer flex justify-center items-center"
                        >
                          {dataParams.color === "blue" && (
                            <i className="bi bi-check text-white text-lg"></i>
                          )}
                        </span>
                        <span
                          onClick={() => {
                            handleColor("grey");
                            setAllColor(false);
                          }}
                          className="bg-slate-800 w-5 h-5 rounded-full cursor-pointer flex justify-center items-center"
                        >
                          {dataParams.color === "grey" && (
                            <i className="bi bi-check text-white text-lg"></i>
                          )}
                        </span>
                        <span
                          onClick={() => {
                            handleColor("green");
                            setAllColor(false);
                          }}
                          className="bg-green-800 w-5 h-5 rounded-full cursor-pointer flex justify-center items-center"
                        >
                          {dataParams.color === "green" && (
                            <i className="bi bi-check text-white text-lg"></i>
                          )}
                        </span>
                        <span
                          onClick={() => {
                            handleColor("orange");
                            setAllColor(false);
                          }}
                          className="bg-orange-600 w-5 h-5 rounded-full cursor-pointer flex justify-center items-center"
                        >
                          {dataParams.color === "orange" && (
                            <i className="bi bi-check text-white text-lg"></i>
                          )}
                        </span>
                        <span
                          onClick={() => {
                            handleColor("black");
                            setAllColor(false);
                          }}
                          className="bg-black w-5 h-5 rounded-full cursor-pointer flex justify-center items-center"
                        >
                          {dataParams.color === "orange" && (
                            <i className="bi bi-check text-white text-lg"></i>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className=" flex flex-col w-full mt-5 mb-10">
                    <h1 className=" mb-5 mt-10 font-bold">Size</h1>
                    <div className="flex flex-wrap justify-start gap-4">
                      <div className="flex">
                        <input
                          id="s"
                          type="radio"
                          name="size"
                          className="hidden"
                        />
                        <label
                          for="s"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-blackSec"></span>
                          S
                        </label>
                      </div>
                      <div className="flex">
                        <input
                          id="m"
                          type="radio"
                          name="size"
                          className="hidden"
                        />
                        <label
                          for="m"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-blackSec"></span>
                          M
                        </label>
                      </div>
                      <div className="flex">
                        <input
                          id="l"
                          type="radio"
                          name="size"
                          className="hidden"
                        />
                        <label
                          for="l"
                          className="flex items-center cursor-pointer"
                        >
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

                  <div>image</div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-10">
                  <p>
                    Showing 1-{metaData.total} of {metaData.total} Results
                  </p>
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost m-1">
                      Short By
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-blackSec text-white rounded-box w-52"
                    >
                      {dataProducts.length < 1 ? (
                        <>
                          <button
                            className="btn"
                            id="ascending"
                            onClick={handleSorting}
                          >
                            Latest Product
                          </button>
                          <button
                            className="btn"
                            id="ascending"
                            onClick={handleSorting}
                          >
                            More Expensive
                          </button>
                          <button
                            className="btn"
                            id="descending"
                            onClick={handleSorting}
                          >
                            More Cheap
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            className="btn"
                            id="ascending"
                            onClick={handleSorting}
                            value={dataProducts[0].id}
                          >
                            Latest Product
                          </button>
                          <button
                            className="btn"
                            id="ascending"
                            onClick={handleSorting}
                          >
                            More Expensive
                          </button>
                          <button
                            className="btn"
                            id="descending"
                            onClick={handleSorting}
                          >
                            More Cheap
                          </button>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
                {dataProducts.length < 1 ? (
                  <DataNotFound />
                ) : (
                  <>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-content-between">
                      {dataProducts.map((product) => (
                        <Card
                          key={product.id}
                          id={product.id}
                          prodName={product.prod_name}
                          img={product.image[0]}
                          price={product.price}
                          category={product.category_name}
                        />
                      ))}
                    </div>
                    {/* <div className="mt-8">
                      <div className="btn-group">
                        <button className="btn btn-sm">1</button>
                        <button className="btn btn-sm btn-active">2</button>
                        <button className="btn btn-sm">3</button>
                        <button className="btn btn-sm">4</button>
                      </div>
                    </div> */}
                    <section className=" flex gap-3 mt-[6.5rem] mb-24">
                      <div className=" w-12 h-12 bg-blackSec text-white flex justify-center items-center text-center border border-[#D1D1D1]">
                        01
                      </div>
                      <div className=" w-12 h-12  text-blackSec flex justify-center items-center text-center border border-[#D1D1D1]">
                        02
                      </div>
                      <div className=" w-12 h-12  text-blackSec flex justify-center items-center text-center border border-[#D1D1D1]">
                        03
                      </div>
                      <div className=" w-12 h-12  text-blackSec flex justify-center items-center text-center border border-[#D1D1D1]">
                        04
                      </div>
                      <div className=" w-12 h-12  text-blackSec flex justify-center items-center text-center border border-[#D1D1D1]">
                        05
                      </div>
                    </section>
                  </>
                )}
              </div>
            </section>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default withSearchParams(Product);
