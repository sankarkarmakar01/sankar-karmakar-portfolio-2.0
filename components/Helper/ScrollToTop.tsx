"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [inVisible, setInVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.screenY > 300) {
        setInVisible(true);
      } else {
        setInVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.addEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 animate-pulse ring-4">
      {inVisible && (
        <button
          onClick={scrollToTop}
          className="bg-blue-900 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
