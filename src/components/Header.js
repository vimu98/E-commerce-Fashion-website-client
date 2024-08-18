import React from "react";
import { logoDark, cart, shopping } from "../assets/index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
  const productData = useSelector((state)=>state.bazar.productData);
  const userInfo = useSelector((state)=>state.bazar.userInfo);
  console.log("hi hi",userInfo.image)
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
        <div>
          <img className="w-12 h-12 rounded-full" src={logoDark} alt="logoDark" />
        </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>
         <Link to="/cart">
         <div className="relative">
            <img className="w-8" src={cart} alt="cartLogo" />
            <span className="absolute w-8 top-2 left-0 text-sm flex items-center justify-center font-semibold">
             {productData.length}
            </span>
          </div>
         </Link>
         <Link to="/login">
         <img className="w-8 h-8 rounded-full " src={userInfo ? userInfo.image : shopping} alt="user" />
         </Link>
         {userInfo && <p className="text-base font-titleFont font-semibold underline underline-offset-2">{userInfo.name}</p>}
        </div>
      </div>
   
    </div>
  );
};

export default Header;
