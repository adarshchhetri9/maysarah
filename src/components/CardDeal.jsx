import React from "react";

const CardDeal = () => {
  return (
    <div className="px-6 py-5 bg-[#F5F5F5] rounded-lg w-[21%] ">
      <h1 className="font-extrabold text-[48px]">
        LUANCH <br />
        SALE
      </h1>
      <div className="flex  text-[#D82A3C] font-bold text-[24px]">
        <p className="relative top-5 px-2 ">Extra</p>
        <div>
          <p className="text-[64px] font-extrabold">20%</p>
          <p className="relative bottom-5 ">OFF</p>
        </div>
      </div>
      <p className="font-bold text-[24px]">On your first order</p>
      <p className=" font-normal text-[14px]">Terms & Conditions Applied</p>
    </div>
  );
};

export default CardDeal;
