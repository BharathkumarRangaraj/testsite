import React from "react";

const Footer = () => {
  return (
    <div className="bg-green-600 md:text-base text-sm">
      <div>
        <h1 className="text-white text-xl font-extrabold pt-4">
          JOIN OUR VEIRDO FAM
        </h1>
        <p className="text-white">
          Here is the space for marketing bros to use some combination of
          alphabets to convince people to give their email
        </p>
      </div>
      <div className="text-white pt-3">
        <ul className="flex justify-between">
          <li className="border border-black px-4 hover:bg-slate-300">
            Instagram
          </li>
          <li className="border border-black px-4 hover:bg-slate-300">
            LinkedIn
          </li>
          <li className="border border-black px-4 hover:bg-slate-300">
            Whatsapp
          </li>
          <li className="border border-black px-4 hover:bg-slate-300">
            Twitter
          </li>
        </ul>
      </div>
      <p className="font-semibold pt-9">
        @2023 VEIRDO.All Rights reserved by Pratyaya E-commerce Pvt.Ltd
      </p>
    </div>
  );
};

export default Footer;
