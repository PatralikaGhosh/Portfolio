"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromTop, slideInFromLeft, slideInFromRight } from "../../../utils/motion";
import MyPhoto from "./MyPhoto";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Patralika Ghosh{" "}
            </span>
          </span>
        </motion.div>
        {<motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
        Senior Computer Science student at Texas A&M University. Currently dabbling in blockchain development and machine learning.
        </motion.p>}
      </div>
        <MyPhoto />
    </motion.div>
  );
};

export default HeroContent;
