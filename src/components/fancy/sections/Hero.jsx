import React from "react";
import { motion } from "framer-motion";
import Magic from "./Magic.json";
import Lottie from "lottie-react";

const animationVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2.5,
      ease: "easeInOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="flex h-screen items-center justify-center">
      <div className="mb-16 flex w-fit flex-col-reverse items-center md:flex-row">
        <div className="max-h-fit max-w-fit">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={animationVariants}
          >
            <div className="w-[220px] h-[220px] md:w-[450px] md:h-[450px]">
              <Lottie
                animationData={Magic}
                loop
                autoplay
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </motion.div>
        </div>
        <div className="text-center text-xs md:text-start md:text-xl">
          <h1 className="font-mono text-5xl font-extrabold md:text-8xl lg:text-8xl text-center">
            {/* ᴄʜᴇᴛᴀɴ ʀᴇᴅᴅʏ */}
            CHETAN REDDY
          </h1>
          <p className="text-sm md:text-md pl-2 text-center md:text-lg font-semibold">
            Computer Science student passionate about full-stack development,
            real-time apps, and building smooth user experiences through
            hands-on projects.
          </p>
        </div>
      </div>
    </section>
  );
}