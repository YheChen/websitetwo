import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./layout";
import Sidescroll from "../components/sidescroll";
import About from "../components/about";
import Projects from "../components/projects";

export default function Home() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Sidescroll />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  );
}
