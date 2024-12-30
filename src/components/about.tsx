import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Header */}
      <div className="flex justify-center items-center h-24 bg-black select-none">
        <Link to="/">
          <button className="mx-4 text-gray-400 hover:text-white transition-colors font-sans text-lg border-none bg-black focus:outline-none">
            Home
          </button>
        </Link>
        <button className="mx-4 text-white font-sans text-lg border-none bg-black focus:outline-none cursor-default">
          About Me
        </button>
        <Link to="/projects">
          <button className="mx-4 text-gray-400 hover:text-white transition-colors font-sans text-lg border-none bg-black focus:outline-none">
            Projects
          </button>
        </Link>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-3 gap-4 max-h-[calc(100vh-6rem)] overflow-y-auto">
        {/* About Text */}
        <div className="col-span-2 mx-auto mt-[-3.5rem] mb-24 text-2xl font-sans">
          <div>
            <p className="mt-20">
              I'm Yanzhen, an undergraduate student in my second year of studies
              in Mathematics and Statistics at the University of Toronto.
            </p>
            <p className="mt-12">
              While pursuing my studies, I have been learning web development
              skills on the side. In the future, I plan to expand to software
              development, and artificial intelligence and machine learning.
            </p>
            <p className="mt-12">
              I'm open to any opportunities to expand my knowledge, and would
              love to have the privilege to apply my skills in a workplace
              setting!
            </p>
            <div className="text-3xl mt-12 mb-2">Education</div>
          </div>
          {/* Education Section */}
          <div>
            <p className="text-xl mt-12 ml-24">
              University of Toronto • Honors Bachelors of Science
            </p>
            <p className="text-lg ml-24 mt-4">
              Mathematics Major & Statistics Major
            </p>
            <p className="text-gray-400 text-base ml-24 mt-4">
              Toronto, ON, Canada · September 2023 - April 2027
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
