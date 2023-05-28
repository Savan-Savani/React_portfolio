"use client";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import profileImg from "../public/profileImg.png";
import { useState } from "react";
import Eye from "./components/Eye";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

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
              <li>
                <div className="text-5xl flex justify-center py-3 text-gray-600 dark:text-gray-400">
                  <a
                    className="mx-2"
                    href="https://github.com/Savan-Savani"
                    target="_blank"
                  >
                    <AiFillGithub />
                  </a>

                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/savansavani/"
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
          <div>
            <h3 className="text-3xl py-1 font-bold text-gray-800 dark:text-white">
              Services I Offer
            </h3>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mt-4">
              <p className="text-md py-2 leading-6 text-gray-800 dark:text-gray-300">
                With 2 years of experience, I am a versatile full-stack
                developer proficient in developing native and cross-platform
                mobile applications.
              </p>
              <p className="text-md py-2 leading-6 text-gray-800 dark:text-gray-300">
                As a full-stack developer, I offer end-to-end solutions for web
                and mobile applications, combining technical expertise with
                strong communication skills.
              </p>
              <p className="text-md py-2 leading-6 text-gray-800 dark:text-gray-300">
                With a passion for learning and adapting to new technologies, I
                consistently deliver high-quality work and excel in dynamic
                environments.
              </p>
            </div>
          </div>
          <div className="lg:flex gap-10">
            <div className="shadow-lg text-center p-10 rounded-xl my-10 dark:bg-gray-800 dark:text-white">
              <Image
                src={profileImg}
                width={100}
                height={100}
                className="mx-auto rounded-full"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">Web Development</h3>
              <p className="py-2">
                Crafting exceptional web experiences tailored to your unique
                needs.
              </p>
              <h4 className="py-4 text-teal-600 font-medium">
                Technologies I use
              </h4>
              <ul className="text-gray-800">
                <li className="py-1">TypeScript</li>
                <li className="py-1">MERN Stack</li>
                <li className="py-1">Redux</li>
              </ul>
            </div>
            <div className="shadow-lg text-center p-10 rounded-xl my-10 dark:bg-gray-800 dark:text-white">
              <Image
                src={profileImg}
                width={100}
                height={100}
                className="mx-auto rounded-full"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Mobile App Development
              </h3>
              <p className="py-2">
                Creating intuitive and engaging mobile applications for iOS and
                Android.
              </p>
              <h4 className="py-4 text-teal-600 font-medium">
                Technologies I use
              </h4>
              <ul className="text-gray-800">
                <li className="py-1">React Native</li>
                <li className="py-1">SwiftUI</li>
                <li className="py-1">Kotlin</li>
              </ul>
            </div>
            <div className="shadow-lg text-center p-10 rounded-xl my-10 dark:bg-gray-800 dark:text-white">
              <Image
                src={profileImg}
                width={100}
                height={100}
                className="mx-auto rounded-full"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">UI/UX Design</h3>
              <p className="py-2">
                Crafting visually appealing and user-friendly interfaces that
                drive engagement.
              </p>
              <h4 className="py-4 text-teal-600 font-medium">Tools I use</h4>
              <ul className="text-gray-800">
                <li className="py-1">Figma</li>
                <li className="py-1">Adobe XD</li>
                <li className="py-1">Sketch</li>
              </ul>
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
