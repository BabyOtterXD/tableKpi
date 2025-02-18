"use client";
import { navLinks } from "@/app/constant/contant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GrTechnology } from "react-icons/gr";

const Nav = () => {
    const [navbg, setNavbg] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 50) {
                setNavbg(true);
            } else {
                setNavbg(false);
            }
        };

        // แก้จาก 'scoll' เป็น 'scroll'
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`
        sticky top-0 z-[100] w-full h-[12vh]
        transition-all duration-200
        ${navbg ? "bg-white shadow-md" : ""}
      `}
        >
            <div className="flex items-center justify-between h-full w-[90%] xl:w-[80%] mx-auto">
                {/* LOGO */}
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center">
                        <GrTechnology className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-xl hidden sm:block md:text-2xl text-blue-800 font-bold">
                        KPI
                    </h1>
                </div>

                {/* Navlinks */}
                <div className="hidden lg:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <Link
                            href={link.url}
                            key={link.id}
                            className="text-black hover:text-rose-500 font-semibold transition-all duration-200"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Button */}
                {/* <div className="flex items-center space-x-4">
          <a
            href="#_"
            className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
          >
            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="relative z-20 flex items-center text-sm">
              <svg
                className="relative w-5 h-5 mr-2 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
              Button KPI Something...
            </span>
          </a>
        </div> */}
                <div className="relative w-full max-w-xs">
                    {/* ช่อง Input */}
                    <input
                        type="text"
                        placeholder="Search"
                        className="
      w-full
      pl-10
      pr-10
      py-2
      text-sm
      placeholder-gray-400
      border
      border-gray-300
      rounded-md
      focus:outline-none
      focus:border-blue-500
    "
                    />

                    {/* ไอคอน Search (แว่นขยาย) ที่ฝั่งซ้าย */}
                    <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                        <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 4a7 7 0 017 7c0 1.513-.468 2.914-1.268 4.068l4.4 4.4a1 1 0 01-1.414 1.414l-4.4-4.4A6.963 6.963 0 0111 18a7 7 0 110-14z"
                            />
                        </svg>
                    </span>

                    {/* ปุ่ม Filter ที่ฝั่งขวา */}
                    <button
                        type="button"
                        className="absolute inset-y-0 right-2 flex items-center text-gray-400 hover:text-gray-700"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.38a1 1 0 01-.293.707l-5.414 5.414A2 2 0 0014 13.586V17l-4 2v-5.414a2 2 0 00-.586-1.414L3.293 7.087A1 1 0 013 6.38V4z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Nav;
