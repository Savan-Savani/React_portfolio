'use client'
import React, { useState } from "react";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import profileImg from "../public/Images/profileImg.png";
import Eye from "./components/Eye";
import ServiceSections from "./components/ServiceSections";
import Portfolio from "./components/Portfolio";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <main className="px-10 bg-[#fefaf6] dark:bg-gray-900 md:px-20 lg:px-40 ">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <div className="flex items-center">
              <div className="relative bg-gradient-to-b from-teal-500 rounded-full mx-2 h-10 w-10 overflow-hidden md:h-10 md:w-10">
                <Image src={profileImg} objectFit="cover" layout="fill" />
              </div>
              <h1 className="text-xl font-burtons dark:text-white">
                Developed by Savan
              </h1>
            </div>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className={`cursor-pointer text-2xl ${
                    darkMode ? "text-white" : ""
                  }`}
                  onClick={toggleDarkMode}
                />
              </li>
              <li>
                <a
                  href="#"
                  className={`bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 ${
                    darkMode ? "dark:from-gray-800 dark:to-gray-700" : ""
                  }`}
                >
                  Resume
                </a>
              </li>
              <li>
                <div className="text-5xl flex justify-center py-3 text-gray-600 dark:text-gray-400">
                  <a
                    className="mx-2"
                    href="https://github.com/Savan-Savani"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/savansavani/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillLinkedin />
                  </a>
                </div>
              </li>
            </ul>
          </nav>
          <div className="block md:flex md:justify-between items-center">
            <div>
              <div className="text-center p-10 md:text-left font-serif">
                <h2 className="text-5xl py-2 text-teal-500 font-medium md:text-6xl">
                  Hi. I am Savañ
                </h2>
                <h3
                  className={`text-2xl py-2 md:text-3xl ${
                    darkMode ? "text-white" : ""
                  }`}
                >
                  <span
                    className={`text-teal-500 ${
                      darkMode ? "text-gray-300" : ""
                    }`}
                  >
                    A Designer/Developer.
                  </span>
                </h3>{" "}
                <p className="text-md py-5 leading-8 text-gray-500 dark:text-gray-300 md:text-md max-w-lg mx-auto">
                  Illuminating the Developer's Eye: Bringing Products to Life
                </p>
              </div>
            </div>
            <div>
              <Eye />
            </div>
          </div>
        </section>
        <section>
          <ServiceSections />
        </section>
        <section>
          <Portfolio />
        </section>
      </main>
    </div>
  );
}
