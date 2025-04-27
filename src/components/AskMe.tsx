'use client'
import React from 'react'
import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input";
import Comments from './Comments';

function AskMe() {
    const placeholders = [
        "What's the first rule of Fight Club?",
        "Who is Tyler Durden?",
        "Where is Andrew Laeddis Hiding?",
        "Write a Javascript method to reverse a string",
        "How to assemble your own PC?",
      ];

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
      };
      const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
      };

  return (
    <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
      <h2 className="mb-10 mt-5 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Sen Your Message Or Ask Anything
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      <Comments />
    </div>
  )
}

export default AskMe
