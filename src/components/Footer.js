import React from "react";
import { logoDark, paymentLogo } from "../assets";
import { ImGithub } from "react-icons/im";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";

import {BsPersonFill, BsPaypal} from "react-icons/bs"
import {MdLocationOn} from "react-icons/md"




const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-5">
          <img className="w-16 h-16 rounded-full" src={logoDark} alt="logoLight" />
          <p className="text-white text-sm tracking-wide">© ICTwithVIMU</p>
          <img className="w-24" src={paymentLogo} alt="paymentLogo" />
          <div className="flex gap-5 text-lg text-gray-400">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">locate us</h2>
          <div className="flex flex-col gap-2 text-base">
            <p>Kaluthara North, Western, Srilanka</p>
            <p>Mobile: 070 1767818</p>
            <p>Phone: 034 000000</p>
            <p>Email: ictthimira@gmail.com</p>
          </div>
        </div>

        <div>
            <h2 className="text-2xl font-semibold text-white mb-4">profile</h2>

            <div className="flex flex-col gap-2 text-base">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                <span className="text-lg">
                    <BsPersonFill />
                </span>
                my account
            </p>

            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                <span className="text-lg">
                    <BsPaypal />
                </span>
                checkout
            </p>

            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                <span className="text-lg">
                    <FaHome />
                </span>
                order track
            </p>

            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                <span className="text-lg">
                    <MdLocationOn />
                </span>
                help & support
            </p>
            </div>
          
        </div>

        <div className="flex flex-col justify-center">
            <input className="bg-transparent border px-4 py-2 text-sm"
            placeholder="e-mail"
            type="text"
             />
             <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">Subscribe</button>
        </div>

      </div>
    </div>
  );
};

export default Footer;
