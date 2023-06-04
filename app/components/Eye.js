import React, { useEffect, useRef, useState } from "react";

const Eye = () => {
  const eyeRef = useRef(null);
  const pupilRef = useRef(null);
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const [relativeAngle, setRelativeAngle] = useState(0);

  useEffect(() => {
    const eyeElement = eyeRef.current;
    const eyeRect = eyeElement.getBoundingClientRect();

    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    setEyePosition({ x: eyeCenterX, y: eyeCenterY });
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const xPos = event.clientX;
      const yPos = event.clientY;

      const angle = findAngle(eyePosition.x, eyePosition.y, xPos, yPos);
      setRelativeAngle(angle);

      const xA = -32;
      const yA = -32;
      const distance = 50;

      const angleRad = (angle * Math.PI) / 180;

      const xB = xA + distance * Math.cos(angleRad);
      const yB = yA + distance * Math.sin(angleRad);

      const pupilElement = pupilRef.current;
      if (pupilElement) {
        pupilElement.style.transform = `translate(${xB}px, ${yB}px)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [eyePosition]);

  const findAngle = (x1, y1, x2, y2) => {
    const dx = x2 - x1;
    const dy = y2 - y1;

    const angleInRadians = Math.atan2(dy, dx);
    const angleInDegrees = (angleInRadians * 180) / Math.PI;

    return angleInDegrees;
  };

  return (
    <div className="flex items-center justify-center w-96 h-96 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl mb-[50px] ml-[-37px] md:my-4 md:mx-4 md:mb-0 md:ml-0">
      <div
        ref={eyeRef}
        className="relative w-72 h-[45%] rounded-[80%] bg-white shadow-md mt-16"
      >
        <div className="absolute w-6 h-[40%] rounded-full bg-white transform rotate-[320deg] left-[10%] top-[-40%]"></div>
        <div className="absolute w-6 h-[40%] rounded-full bg-white transform rotate-[40deg] left-[80%] top-[-40%] "></div>
        <div className="absolute w-6 h-[40%] rounded-full bg-white transform rotate-[360deg] left-[45%] top-[-50%] "></div>

        <div
          ref={pupilRef}
          className="w-16 h-16 rounded-full bg-black absolute top-1/2 left-1/2 "
        ></div>
      </div>
    </div>
  );
};

export default Eye;
