import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Header */}
      <div className="flex justify-center items-center h-24 bg-black select-none">
        <Link to="/">
          <button className="mx-4 text-gray-400 hover:text-white transition-colors font-sans text-lg border-none bg-black focus:outline-none">
            Home
          </button>
        </Link>
        <Link to="/about">
          <button className="mx-4 text-gray-400 hover:text-white transition-colors font-sans text-lg border-none bg-black focus:outline-none">
            About Me
          </button>
        </Link>
        <button className="mx-4 text-white font-sans text-lg border-none bg-black focus:outline-none cursor-default">
          Projects
        </button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-3 gap-4 max-h-[calc(100vh-6rem)] overflow-y-auto">
        {/* Projects Text */}
        <div className="col-span-2 mx-auto mt-[-2rem] mb-24 text-2xl font-sans">
          <div>
            <div className="text-3xl mt-8 mb-2">Personal Portfolio Webpage</div>
            <p>
              Created a static webpage to show off my portfolio utilizing the
              React.js library, hosted by GitHub Pages.
            </p>
            <div className="text-3xl mt-8 mb-2">Player Profile Analyzer</div>
            <p>
              Developed a web application to showcase player statistics and
              performance metrics from League of Legends, utilizing the Riot
              Games API to collect and display player data from past matches
              played.
            </p>
          </div>
          <div className="text-3xl mt-8 mb-2">
            Patient Health Record Summarizer
          </div>
          <p>
            Collaborated on a local React.js web application for simulating
            patient health records using Synthea, integrating a large language
            model sourced from Meta's Code Llama to process patient data.
          </p>
          <p>
            Utilized Together.api to extract and summarize important details
            from the health records.
          </p>
          <p>
            Designed and implemented a chatbot to respond to medical-related
            inquiries from patients.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
