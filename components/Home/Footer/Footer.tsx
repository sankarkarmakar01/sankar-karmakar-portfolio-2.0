import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <div>
        <Image
          src="/images/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="mx-auto"
        />
        <div className="flex items-center justify-center space-x-8 flex-wrap text-white font-bold">
          <Link href="#home">
            <h2>Home</h2>
          </Link>
          <Link href="#services">
            <h2>Services</h2>
          </Link>
          <Link href="#projects">
            <h2>Project</h2>
          </Link>
          <Link href="#skills">
            <h2>Skills</h2>
          </Link>
          <Link href="#hobbies">
            <h2>Hobbies</h2>
          </Link>
          <Link href="#contacts">
            <h2>Contact</h2>
          </Link>
        </div>
        <p className="text-white opacity-60 mt-6 text-center">
          © 2025 All Rights Reserved by Sankar Karmakar
        </p>
      </div>
    </div>
  );
};

export default Footer;
