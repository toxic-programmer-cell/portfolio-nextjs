"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "../components/ui/lamp";
// import { ContectFrom } from './ContectFrom';
// import SignUp from './SignUp';

function ConnectMe() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <h3 className="pt-0">💬 Let’s Connect</h3>
      </motion.h1>
      <div className="flex flex-col mt-4 text-lg text-slate-300 max-w-xl mx-auto font-sans justify-center">
        <p className="font-mono">
          I’m always open to exciting opportunities, collaborations, or just a
          friendly tech chat! 🚀
        </p>
        <div className="flex flex-col justify-center gap-2 mt-4 align-center">
          <p>
            <strong className="text-amber-300">📩 Email:</strong>{" "}
            rohitmahto062@gmail.com
          </p>
          <p>
            <strong className="text-amber-300">💼LinkedIn: </strong>
            <a
              href="https://www.linkedin.com/in/rohit-kumar-mahto-b041a3248/"
              target="_blank"
              className="text-blue-400"
            >
              https://www.linkedin.com/in/rohit-kumar-mahto
            </a>
          </p>
          <p>
            <strong className="text-amber-300">🐙 GitHub: </strong>
            <a
              className="text-blue-400"
              href="https://github.com/toxic-programmer-cell"
              target="_blank"
            >
              https://github.com/toxic-programmer-cell
            </a>
          </p>
        </div>
      </div>
    </LampContainer>
  );
}

export default ConnectMe;
