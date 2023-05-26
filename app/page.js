"use client";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import profileImg from "../public/profileImg.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <main className="px-10 bg-white dark:bg-gray-900 md:px-20 lg:px-40 ">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">
              Developed by Savan
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className={`cursor-pointer text-2xl ${
                    darkMode ? "text-white" : ""
                  }`}
                  onClick={() => setDarkMode(!darkMode)}
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
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-500 font-medium md:text-6xl">
              I am Savañ
            </h2>
            <h3
              className={`text-2xl py-2 md:text-3xl ${
                darkMode ? "text-white" : ""
              }`}
            >
              <span
                className={`text-teal-500 ${darkMode ? "text-gray-300" : ""}`}
              >
                A Designer/Developer
              </span>
              .
            </h3>{" "}
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-300 md:text-xl max-w-lg mx-auto">
              I'm Developer with an eye of bringing products to life.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <AiFillGithub />
            <AiFillLinkedin />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full h-80 w-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={profileImg} fill="true" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Service I Offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              I am full stack Developer with 2 years experience. Also, I am an
              expert in native and cross-platform mobile applications. I have
              experience as{" "}
              <span className="text-teal-500">Full stack developer</span>.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              I have strong communication skills and I am adaptable and fast
              learner.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="shadow-lg text-center p-10 rounded-xl my-10 dark:bg-gray-800 dark:text-white">
              <Image
                src={profileImg}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating beautiful designs for your needs and desires.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">React.js</p>
              <p className="text-gray-800 py-1">Node.js</p>
              <p className="text-gray-800 py-1">Redux</p>
            </div>
            <div className="shadow-lg text-center p-10 rounded-xl my-10 dark:bg-gray-800 dark:text-white">
              <Image
                src={profileImg}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating beautiful designs for your needs and desires.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">React.js</p>
              <p className="text-gray-800 py-1">Node.js</p>
              <p className="text-gray-800 py-1">Redux</p>
            </div>
            <div className="shadow-lg text-center p-10 rounded-xl my-10 dark:bg-gray-800 dark:text-white">
              <Image
                src={profileImg}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating beautiful designs for your needs and desires.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">React.js</p>
              <p className="text-gray-800 py-1">Node.js</p>
              <p className="text-gray-800 py-1">Redux</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              I am a full stack Developer with 2 years of experience. Also, I am
              an expert in native and cross-platform mobile applications. I have
              experience as{" "}
              <span className="text-teal-500">Full stack developer</span>.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              I have strong communication skills and I am adaptable and fast
              learner.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={profileImg}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={profileImg}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={profileImg}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={profileImg}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={profileImg}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={profileImg}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
