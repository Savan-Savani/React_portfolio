"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import profileImg from "../public/Images/profileImg.png";
import Eye from "./components/Eye";
import ServiceSections from "./components/ServiceSections";
import Portfolio from "./components/Portfolio";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleResumeClick = (e) => {
    e.preventDefault();
    window.open("/resume.pdf", "_blank");
  };

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <main className="px-10 bg-[#fefaf6] dark:bg-gray-900 md:px-20 lg:px-40 ">
        <section className="h-auto mb-40">
          <nav className="py-10 mb-12 flex justify-between">
            <div className="flex items-center ml-[-30px]">
              <div className="relative bg-gradient-to-b from-teal-500 rounded-full mx-2 h-10 w-10 overflow-hidden md:h-10 md:w-10">
                <Image
                  src={profileImg}
                  objectFit="cover"
                  layout="fill"
                  alt="profile image"
                />
              </div>
              <h1 className="text-xl font-burtons dark:text-white">
                Developed by Savan
              </h1>
            </div>
            <ul className="flex items-center">
              <li>
                {darkMode ? (
                  <BsFillSunFill
                    className={`cursor-pointer text-2xl ${
                      darkMode ? "text-white" : ""
                    }`}
                    onClick={toggleDarkMode}
                  />
                ) : (
                  <BsFillMoonStarsFill
                    className={`cursor-pointer text-2xl ${
                      darkMode ? "text-white" : ""
                    }`}
                    onClick={toggleDarkMode}
                  />
                )}
              </li>
              <li>
                <a
                  href="#"
                  onClick={handleResumeClick}
                  className={`bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md md:ml-8 ml-4 ${
                    darkMode ? "dark:from-gray-800 dark:to-gray-700" : ""
                  }`}
                >
                  Resume
                </a>
              </li>
              <li>
                <div className="md:text-5xl flex justify-center py-3 text-gray-600 dark:text-gray-400 text-2xl">
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
          <div className="block lg:flex lg:justify-between lg:items-center">
            <div>
              <div className="text-center p-10 lg:text-left font-serif">
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
                  Illuminating the Developer&apos;s Eye: Bringing Products to Life
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:inline">
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
      <div>
        <footer className="bg-gray-800 text-gray-200">
          <div className="container mx-auto py-8 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold">About Me</h3>
                <p className="mt-4">
                  Versatile software and web developer, designer with a creative
                  flair, committed to delivering impactful solutions and driving
                  success.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Contact</h3>
                <p className="mt-4">
                  <a href="mailto:savansavani111@gmail.com?subject=Hello%20there">
                    Email: savansavani111@gmail.com
                  </a>
                </p>
                <p>Location: Canada</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Follow Me</h3>
                <ul className="flex mt-4 space-x-4">
                  <li>
                    <a href="https://github.com/Savan-Savani">
                      <FaGithub />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/savansavani/">
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-gray-900">
            <div className="container mx-auto py-4 px-4">
              <p className="text-center text-sm text-gray-500">
                &copy; 2023 Savañ Savani. All rights reserved. |{" "}
                <a href="#" className="text-gray-300">
                  Privacy Policy
                </a>{" "}
                |{" "}
                <a href="#" className="text-gray-300">
                  Terms of Service
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
