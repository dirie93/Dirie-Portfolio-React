import React from "react";
import { Link } from "react-router-dom";
import { useTypingEffect } from "../hooks/typing-effect";

function Home() {
  const text = useTypingEffect("Mohamed Dirie", 100);
  return (
    <div className="bg-green-custom text-gray-800 min-h-screen flex items-center justify-center">
      <div className="w-48 h-48 mb-5">
        <img src="./bitmoji.svg" alt="me" />
      </div>

      <div className="text-center">
        <h1 className="lg:text-8xl sm:text-8xl font-extrabold mb-4">{text}</h1>
        <p className="lg:text-lg mb-8 sm:text-3xl text-teal-950 font-bold">
          I'm an aspiring Junior Web Developer with a strong passion for
          crafting dynamic and interactive websites.
        </p>
        <Link to="/projects">
          <button className="bg-light-grey hover:bg-yellow-600 text-gray-900 font-semibold px-6 py-2 rounded-full">
            Explore My Work
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
