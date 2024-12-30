import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import rooftop from "./images/rooftop.jpg";
import img7 from "./images/7.jpg";
import img16 from "./images/16.jpg";
import img8 from "./images/8.jpg";
import img2 from "./images/2.jpg";
import img12 from "./images/12.jpg";
import img9replacement from "./images/9replacement.png";
import img10 from "./images/10.jpg";
import img14 from "./images/14.jpg";
import img17 from "./images/17.jpg";
import lastdayofsummer from "./images/lastdayofsummer.png";

function Sidescroll() {
  useEffect(() => {
    const track = document.getElementById("image-track") as HTMLElement | null;

    if (!track) {
      console.warn("Track element not found.");
      return;
    }

    const handleOnDown = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      track.dataset.mouseDownAt = clientX.toString();
    };

    const handleOnUp = () => {
      track.dataset.mouseDownAt = "0";
      track.dataset.prevPercentage = track.dataset.percentage || "0";
    };

    const handleOnMove = (e: MouseEvent | TouchEvent) => {
      if (track.dataset.mouseDownAt === "0") return;

      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const mouseDelta = parseFloat(track.dataset.mouseDownAt || "0") - clientX;
      const maxDelta = window.innerWidth / 2;

      const percentage = (mouseDelta / maxDelta) * -100;
      const nextPercentageUnconstrained =
        parseFloat(track.dataset.prevPercentage || "0") + percentage;
      const nextPercentage = Math.max(
        Math.min(nextPercentageUnconstrained, 0),
        -90
      );

      track.dataset.percentage = nextPercentage.toString();
      track.style.transform = `translate(${nextPercentage}%, -50%)`;

      for (const image of track.getElementsByClassName("image")) {
        (image as HTMLElement).style.objectPosition = `${
          100 + nextPercentage
        }% center`;
      }
    };

    const handleOnWheel = (e: WheelEvent) => {
      const delta = -Math.sign(e.deltaY);
      const percentage =
        delta * 3 + parseFloat(track.dataset.prevPercentage || "0");
      const nextPercentage = Math.max(Math.min(percentage, 0), -90);

      track.dataset.prevPercentage = nextPercentage.toString();
      track.dataset.percentage = nextPercentage.toString();

      track.style.transform = `translate(${nextPercentage}%, -50%)`;

      for (const image of track.getElementsByClassName("image")) {
        (image as HTMLElement).style.objectPosition = `${
          100 + nextPercentage
        }% center`;
      }
    };

    window.addEventListener("mousedown", handleOnDown);
    window.addEventListener("mouseup", handleOnUp);
    window.addEventListener("mousemove", handleOnMove);
    window.addEventListener("touchstart", handleOnDown);
    window.addEventListener("touchend", handleOnUp);
    window.addEventListener("touchmove", handleOnMove);
    document.addEventListener("wheel", handleOnWheel);

    return () => {
      window.removeEventListener("mousedown", handleOnDown);
      window.removeEventListener("mouseup", handleOnUp);
      window.removeEventListener("mousemove", handleOnMove);
      window.removeEventListener("touchstart", handleOnDown);
      window.removeEventListener("touchend", handleOnUp);
      window.removeEventListener("touchmove", handleOnMove);
      document.removeEventListener("wheel", handleOnWheel);
    };
  }, []);

  const images = [
    rooftop,
    img7,
    img16,
    img8,
    img2,
    img12,
    img9replacement,
    img10,
    img14,
    img17,
    lastdayofsummer,
  ];

  return (
    <div className="bg-black min-h-screen text-white">
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
        <Link to="/projects">
          <button className="mx-4 text-gray-400 hover:text-white transition-colors font-sans text-lg border-none bg-black focus:outline-none">
            Projects
          </button>
        </Link>
      </div>
      <div
        id="image-track"
        data-mouse-down-at="0"
        data-prev-percentage="0"
        className="absolute left-1/2 top-1/2 flex gap-4 transform -translate-y-1/2 user-select-none"
      >
        {images.map((src, index) => (
          <img
            key={index}
            className="w-32vmin h-44.8vmin object-cover object-[100%_center]"
            alt=""
            src={src}
            draggable="false"
          />
        ))}
      </div>
    </div>
  );
}

export default Sidescroll;
