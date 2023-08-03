import React from "react";
import { Timeline, Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import illustration_01 from "../../public/Images/illustration_01.png";
import illustration_02 from "../../public/Images/illustration_02.png";
import illustration_03 from "../../public/Images/illustration_03.png";
import illustration_04 from "../../public/Images/illustration_04.png";
import illustration_05 from "../../public/Images/illustration_05.png";
import illustration_06 from "../../public/Images/illustration_06.png";
import illustration_07 from "../../public/Images/illustration_07.png";
import Image from "next/image";

const ServiceSections = () => {
  return (
    <div className="pb-12">
      <Controller>
        <div>
          <Scene triggerHook="onLeave" duration={1000} pin>
            {(progress) => {
              let totalProgress1,
                totalProgress2,
                totalProgress3,
                totalProgress4;

              switch (true) {
                case progress <= 0.25:
                  totalProgress1 = progress * 4;
                  totalProgress2 = 0;
                  totalProgress3 = 0;
                  totalProgress4 = 0;
                  break;
                case progress <= 0.5:
                  totalProgress1 = 1;
                  totalProgress2 = (progress - 0.25) * 4;
                  totalProgress3 = 0;
                  totalProgress4 = 0;
                  break;
                case progress <= 0.75:
                  totalProgress1 = 1;
                  totalProgress2 = 1;
                  totalProgress3 = (progress - 0.5) * 4;
                  totalProgress4 = 0;
                  break;
                default:
                  totalProgress1 = 1;
                  totalProgress2 = 1;
                  totalProgress3 = 1;
                  totalProgress4 = (progress - 0.75) * 4;
              }

              return (
                <div>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                    <h3 className="text-3xl py-1 font-bold text-gray-800 dark:text-white">
                      What I can do
                    </h3>
                    <p className="text-sm py-2 leading-6 text-gray-800 dark:text-gray-300">
                      With 2 years of experience, I am a versatile full-stack
                      developer proficient in developing native and
                      cross-platform mobile applications.
                    </p>
                  </div>
                  <div
                    className="grid grid-cols-1 xl:grid-cols-2 mt-5 rounded-lg  border-2 py-10 relative"
                    style={{
                      background:
                        "linear-gradient(338.83deg, #f8c6ff -3.41%, rgba(255, 196, 255, 0) 52.31%), #ffeec4",
                    }}
                  >
                    <div className="p-5 md:mx-8 text-center bg-gray-100 rounded-lg leading-7">
                      <Timeline totalProgress={totalProgress2} paused>
                        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }}>
                          <h2 className="text-lg font-black uppercase mb-3 data-1">
                            frontend apps
                          </h2>
                          <p className="mb-5 px-10">
                            I have extensive experience in developing portfolio
                            websites using the MERN stack, Next.js, Tailwind
                            CSS, and other modern front-end technologies,
                            ensuring visually appealing and engaging user
                            experiences.{" "}
                          </p>
                        </Tween>
                      </Timeline>

                      <Timeline totalProgress={totalProgress3} paused>
                        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }}>
                          <h2 className="text-lg font-black uppercase mb-3 data-2">
                            backend apps
                          </h2>
                          <p className="mb-5 px-10">
                            Build modern and resilient server applications by
                            harnessing the capabilities of Node.js, MongoDB,
                            PostgreSQL, and Docker.
                          </p>
                        </Tween>
                      </Timeline>

                      <Timeline totalProgress={totalProgress4} paused>
                        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }}>
                          <h2 className="text-lg font-black uppercase mb-3 data-3">
                            mobile apps
                          </h2>
                          <p className="mb-5 px-10">
                            Develop native and cross-platform mobile
                            applications using the power of React Native and
                            SwiftUI for native iOS , along with Kotlin for
                            native Android app development.
                          </p>
                        </Tween>
                      </Timeline>
                    </div>

                    <div className="hidden xl:block">
                      <Timeline totalProgress={totalProgress1} paused>
                        <Tween from={{ scale: 0.5 }} to={{ scale: 1 }}>
                          <Image
                            src={illustration_01}
                            alt="illustration 1"
                            className="absolute w-1/3 top-40 right-20 z-50"
                          />
                        </Tween>
                      </Timeline>
                      <Timeline totalProgress={totalProgress2} paused>
                        <Tween
                          from={{ scale: 0.5, opacity: 0 }}
                          to={{ scale: 1, opacity: 1 }}
                        >
                          <Image
                            src={illustration_02}
                            alt="illustration 2"
                            className="absolute w-1/3 top-[11.45rem] right-24 z-40"
                          />
                        </Tween>
                      </Timeline>
                      <Timeline totalProgress={totalProgress2} paused>
                        <Tween
                          from={{ y: -70, opacity: 0 }}
                          to={{ y: 0, opacity: 1 }}
                        >
                          <Image
                            src={illustration_03}
                            alt="illustration 3"
                            className="absolute w-1/3 right-24 z-30"
                          />
                        </Tween>
                      </Timeline>
                      <Timeline totalProgress={totalProgress4} paused>
                        <Tween
                          from={{ x: -70, opacity: 0 }}
                          to={{ x: 0, opacity: 1 }}
                        >
                          <Image
                            src={illustration_04}
                            alt="illustration 4"
                            className="absolute w-1/3 -top-8 right-52 z-40"
                          />
                        </Tween>
                      </Timeline>
                      <Timeline totalProgress={totalProgress3} paused>
                        <Tween
                          from={{ x: 70, opacity: 0 }}
                          to={{ x: 0, opacity: 1 }}
                        >
                          <Image
                            src={illustration_05}
                            alt="illustration 5"
                            className="absolute w-1/3 -top-14 -right-5 z-40"
                          />
                        </Tween>
                      </Timeline>
                      <Timeline totalProgress={totalProgress3} paused>
                        <Tween
                          from={{ x: -70, opacity: 0 }}
                          to={{ x: 0, opacity: 1 }}
                        >
                          <Image
                            src={illustration_06}
                            alt="illustration 6"
                            className="absolute w-1/3 top-12 right-52 z-40"
                          />
                        </Tween>
                      </Timeline>
                      <Timeline totalProgress={totalProgress4} paused>
                        <Tween
                          from={{ x: 70, opacity: 0 }}
                          to={{ x: 0, opacity: 1 }}
                        >
                          <Image
                            src={illustration_07}
                            alt="illustration 7"
                            className="absolute w-1/3 top-12 -right-5 z-40"
                          />
                        </Tween>
                      </Timeline>
                    </div>
                  </div>
                </div>
              );
            }}
          </Scene>
        </div>
      </Controller>
    </div>
  );
};

export default ServiceSections;
