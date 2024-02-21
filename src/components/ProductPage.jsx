import React from "react";
import {
  cart,
  MainProduct,
  heart,
  minus,
  plus,
  share,
  star,
  arrowdown,
} from "../assets";
import { subImg } from "../constants";

const ProductPage = () => {
  return (
    <div className="px-[55px] border ">
      <h1 className="my-6">Home / Unstitched / Marina / Cross Stitch</h1>

      <div className="flex gap-6 ">
        <div className="flex-1">
          <img className="h-[890px]" src={MainProduct} alt="MainProduct" />
          <div className=" flex ">
            <div className=" w-[94%] grid grid-cols-2 gap-4 mt-4">
              {subImg.map((nav, index) => (
                <img key={nav.id} src={nav.icon} alt="" />
              ))}
            </div>
          </div>
        </div>
        <div></div>
        <div className="w-full flex-1">
          <h1 className="text-[#292E42] text-[32px] font-bold ">
            Cross Stitch <br /> DUSKY BLUE - Unstitched
          </h1>
          <div className="flex  justify-between my-3 ">
            <div className="flex justify-center items-center gap-4">
              <p className="font-semibold">ID: III8667</p>
              <div className="bg-[#515670] h-full px-[0.5px]"></div>
              <div className="flex justify-center items-center gap-1">
                <img src={star} alt="rating" />
                <p className="text-[#292E42] font-bold">4.5</p>
              </div>
              <div className="bg-[#515670] p-[2px] rounded-full"></div>
              <div className="underline text-[#515670]">130 reviews</div>
            </div>
            <div className="flex gap-2">
              <img src={share} alt="shareButton" />
              <p>Share</p>
            </div>
          </div>

          <div className="flex gap-3 font-bold text text-[24px] items-center">
            <h1 className="text-[#292E42]">AED 89.00</h1>
            <h1 className="line-through text-[#888CA6]">AED 100.00</h1>
            <p className=" text-[16px] text-[#29CC80]">11% off</p>
          </div>
          <div className="bg-[#888CA6] w-full h-[1px] my-8"></div>
          <p className="font-bold">Size:</p>
          <div className="my-4">
            <p className="border border-gray-400 rounded-lg inline-block px-6 py-2">
              Unstitched
            </p>
          </div>

          <p className="font-bold mt-10"> Quantity:</p>

          <div className="flex items-center text-center mt-4 gap-5 ">
            <div className="bg-[#F5F6FA] inline-block p-4 rounded-lg ">
              <div className="flex gap-6 justify-between items-center">
                <img src={minus} alt="minus" className="h-5 w-5" />
                <p>1</p>
                <img src={plus} alt="plus" className="h-5 w-5" />
              </div>
            </div>
            <h4 className="opacity-60">5 pieces at most per customer</h4>
          </div>
          <div className="bg-[#888CA6] h-[1px] my-8 "></div>
          <div className="flex w-full  gap-5 ">
            <div className="p-4 border rounded-lg  border-gray-300">
              <img src={heart} alt="heart" />
            </div>
            <button className="bg-[#21807F] flex py-4 px-[35%] rounded-lg">
              <img className="mr-2" src={cart} alt="cart" />
              <p className="text-white  ">Add To cart</p>
            </button>
          </div>
          <div className="flex items-center justify-center text-white bg-black my-4 py-4 rounded-lg gap-3">
            <img src={cart} alt="cart" />
            <button className="">Checkout and pickup from store</button>
          </div>

          <div className="border border-gray-800 rounded-lg flex justify-between items-center p-4">
            <h1>Product Description </h1>
            <img src={arrowdown} className="h-5 w-5" alt="arrowdown" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
