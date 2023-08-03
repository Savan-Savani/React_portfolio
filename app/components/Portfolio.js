import Image from "next/image";
import React from "react";
import work_1 from "../../public/Images/work_1.png";
import work_2 from "../../public/Images/work_2.png";
import work_3 from "../../public/Images/work3.jpeg";
import work_4 from "../../public/Images/work_4.png";
import work_5 from "../../public/Images/work_5.png";
import "../css/portfolio.css";
import { AiFillGithub } from "react-icons/ai";

const Portfolio = () => {
  return (
    <div>
      <section className="py-4">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
          <h3 className="text-3xl py-1 font-bold text-gray-800 dark:text-white">
            My Works
          </h3>
          <p className="text-sm py-2 leading-6 text-gray-800 dark:text-gray-300">
            Experienced Full Stack Developer proficient in full stack
            development, with a focus on building native and cross-platform
            mobile applications. Dedicated to delivering robust and scalable
            solutions to meet client objectives.
          </p>
        </div>
      </section>
      <section className="portfolio flex justify-center p-10 mb-2rem">
        <div class="project-card">
          <div class="project-card__left">
            <h4 class="text-sm"> React JS, SyncFusion, Tailwind CSS </h4>
          </div>
          <div>
            <div class="project-card__middle">
              <Image src={work_5} alt="App image" className="work__image" />
            </div>
            <div class="project-card__right p-5">
              <h2 class="text-2xl mb-2 portfoio__name">
                React
                <br />
                Dashboard
              </h2>
              <div className="whitespace-nowrap mt-[5%] absolute lg:left-[21rem] flex justify-center items-center  portfolio__data">
                <div className="text_container">
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://react-dashboard-git-main-savan-savani.vercel.app/"
                    className="text-[1rem] text_website"
                  >
                    VISIT THE WEBSITE
                  </a>
                </div>
                <span class="project-card__socials">
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://github.com/Savan-Savani/React_Dashboard"
                  >
                    <AiFillGithub className="text-[1.5rem]" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio flex justify-center p-10 mb-2rem">
        <div class="project-card">
          <div class="project-card__left">
            <h4 class="text-sm"> Stripe, React JS, Node JS, MongoDB</h4>
          </div>
          <div>
            <div class="project-card__middle">
              <Image src={work_4} alt="App image" className="work__image" />
            </div>
            <div class="project-card__right p-5">
              <h2 class="text-2xl mb-2 portfoio__name">
                React +
                <br />
                Stripe
              </h2>
              <div className="whitespace-nowrap mt-[5%] absolute lg:left-[21rem] flex justify-center items-center  portfolio__data">
                <div className="text_container">
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://react-stripe-nine.vercel.app/"
                    className="text-[1rem] text_website"
                  >
                    VISIT THE WEBSITE
                  </a>
                </div>
                <span class="project-card__socials">
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://github.com/Savan-Savani/react-stripe"
                  >
                    <AiFillGithub className="text-[1.5rem]" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio flex justify-center p-10 mb-2rem">
        <div class="project-card">
          <div class="project-card__left">
            <h4 class="text-sm">React JS ,Redux ,firebase ,Tailwind CSS</h4>
          </div>
          <div>
            <div class="project-card__middle">
              <Image src={work_1} alt="App image" className="work__image" />
            </div>
            <div class="project-card__right p-5">
              <h2 class="text-2xl mb-2 portfoio__name">
                Youtube
                <br />
                clone
              </h2>
              <div className="whitespace-nowrap mt-[5%] absolute lg:left-[21rem] flex justify-center items-center  portfolio__data">
                <div className="text_container">
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://yt-clone-by-savan.web.app/"
                    className="text-[1rem] text_website"
                  >
                    VISIT THE WEBSITE
                  </a>
                </div>
                <span class="project-card__socials">
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://github.com/Savan-Savani/youtube-by-Savan"
                  >
                    <AiFillGithub className="text-[1.5rem]" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio flex justify-center p-10 mb-2rem">
        <div className="project-card">
          <div className="project-card__left">
            <h4 className="text-sm">NEXT JS ,TypeScript ,MongoDB ,Prisma</h4>
          </div>
          <div>
            <div className="project-card__middle">
              <Image src={work_2} alt="App image" className="work__image" />
            </div>
            <div className="project-card__right p-5">
              <h2 className="text-2xl mb-2 portfoio__name">
                Messenger
                <br />
                clone
              </h2>
              <div className="whitespace-nowrap mt-[5%] absolute lg:left-[21rem] flex justify-center items-center portfolio__data">
                <div className="text_container">
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://messenger-two-tau.vercel.app/"
                    className="text_website text-[1rem]"
                  >
                    VISIT THE WEBSITE
                  </a>
                </div>
                <span className="project-card__socials">
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://github.com/Savan-Savani/Messenger"
                  >
                    <AiFillGithub className="text-[1.5rem]" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio flex justify-center p-10 mb-2rem">
        <div className="project-card">
          <div className="project-card__left">
            <h4 className="text-sm">Socket.io ,webRtc ,Ejs ,Javascript</h4>
          </div>
          <div>
            <div className="project-card__middle">
              <Image src={work_3} alt="App image" className="work__image" />
            </div>
            <div className="project-card__right p-5">
              <h2 className="text-2xl mb-2 portfoio__name">
                VideoCall
                <br />
                app
              </h2>
              <div className="whitespace-nowrap mt-[5%] absolute lg:left-[21rem] flex justify-center items-center portfolio__data">
                <div className="text_container">
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://github.com/Savan-Savani/Video-call-app"
                    className="text_website text-[1rem]"
                  >
                    Show Source Code
                  </a>
                </div>
                <span className="project-card__socials">
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://github.com/Savan-Savani/Video-call-app"
                  >
                    <AiFillGithub className="text-[1.5rem]" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
