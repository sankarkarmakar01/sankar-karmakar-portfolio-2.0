"use client"
import { navLinks } from "../../../constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen `}
      >
        {/* Nav Links */}
        <div
          className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed flex justify-center flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715] space-x-6 z-[10000]`}
        >
          {navLinks.map((navLink) => {
            return (
              <div key={navLink.id} id={navLink.url}>
                <Link href={navLink.url}>
                  <p className="nav_link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]">
                    {navLink.label}
                  </p>
                </Link>
              </div>
            );
          })}
          {/* </div> */}
          {/* Close Button */}
          <CgClose
            onClick={closeNav}
            className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 w-6 h-6 text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
