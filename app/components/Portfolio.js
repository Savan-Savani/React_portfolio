import Image from "next/image";
import React from "react";
import profileImg from "../../public/Images/profileImg.png"


const Portfolio = () => {
  return (
    <div>
      <div>
        <h3 className="text-3xl py-1">Portfolio</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
          I am a full stack Developer with 2 years of experience. Also, I am an
          expert in native and cross-platform mobile applications. I have
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
    </div>
  );
};

export default Portfolio;
