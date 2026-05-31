import React from "react";
import { CiPhone } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-base-200">
      <div className="w-11/12 lg:w-10/12 mx-auto">
        <div className="flex gap-7 lg:gap-10 flex-col lg:flex-row pt-20 pb-10 justify-between border-b border-gray-300 ">
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="baloo text-[36px] mb-5 text-black font-medium">
              Get In Touch With Us
            </h2>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your mail here"
                className="p-3 rounded-lg border border-dashed border-primary focus:outline-none min-w-[350px] lg:w-full placeholder:text-accent"
              />
              <button className="bg-primary text-white px-3 py-2 rounded-lg hover:bg-secondary absolute right-1.5 top-1.25">
                Subscribe
              </button>
            </div>
            <p className="my-3">No spam, we hate it more than you do.</p>
          </div>
          <div className="flex flex-col text-center md:text-start md:flex-row gap-7 md:gap-0 justify-around flex-1">
            <div>
              <h4 className="baloo text-2xl font-semibold">Legal</h4>
              <p className="text-black opacity-90 hover:text-primary cursor-pointer">
                Faq
              </p>
              <p className="text-black opacity-90 hover:text-primary cursor-pointer">
                Retailers
              </p>
              <p className="text-black opacity-90 hover:text-primary cursor-pointer">
                Privacy Policy
              </p>
              <p className="text-black opacity-90 hover:text-primary cursor-pointer">
                Cookies
              </p>
              <p className="text-black opacity-90 hover:text-primary cursor-pointer">
                Terms of use
              </p>
            </div>
            <div>
              <h4 className="baloo text-2xl font-semibold">Services</h4>
              <p className="text-black opacity-90 hover:text-primary cursor-pointer">
                Contact
              </p>
              <p className="text-black opacity-90 hover:text-primary cursor-pointer">
                Careers
              </p>
              <p className="text-black opacity-90 hover:text-primary cursor-pointer">
                24/7 Support
              </p>
              <p className="text-black opacity-90 hover:text-primary cursor-pointer">
                News
              </p>
              <p className="text-black opacity-90 hover:text-primary cursor-pointer">
                Delivery Info
              </p>
            </div>
            <div className="flex flex-col md:items-start items-center">
              <h4 className="baloo text-2xl font-semibold">Contact US</h4>
              <p className="flex gap-1 items-center">
                <span>
                  <FaLocationDot />
                </span>{" "}
                177A/22, Rampura, Dhaka, <br /> Bangladesh 1201
              </p>
              <p className="flex gap-1 items-center">
                <span>
                  <MdAlternateEmail />
                </span>
                info@toypopia.com
              </p>
              <p className="flex gap-1 items-center">
                <span>
                  <CiPhone />
                </span>
                +880 1700000000
              </p>
            </div>
            <div className="text-[18px] flex flex-col gap-1 items-center md:items-start">
              <h4 className="baloo text-2xl font-semibold">Follow Us</h4>
              <p className="text-black opacity-90 hover:text-primary cursor-pointer flex gap-2 items-center">
                <span>
                  <FaFacebook />
                </span>{" "}
                Facebook
              </p>
              <p className="text-black opacity-90 hover:text-primary cursor-pointer flex gap-2 items-center">
                <span>
                  <FaTwitter />
                </span>{" "}
                Twitter
              </p>
              <p className="text-black opacity-90 hover:text-primary cursor-pointer flex gap-2 items-center">
                <span>
                  <FaInstagram />
                </span>{" "}
                Instagram
              </p>
              <p className="text-black opacity-90 hover:text-primary cursor-pointer flex gap-2 items-center">
                <span>
                  <FaLinkedin />
                </span>{" "}
                LinkedIn
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center text-accent font-medium py-5">
            <small className="baloo">
              © 2025 ToyTopia. All rights reserved.
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
