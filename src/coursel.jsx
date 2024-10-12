import { useState, useEffect } from "react";
import game1 from "./Alabay_Assets/game1.png";
import game2 from "./Alabay_Assets/game2.png";
import game3 from "./Alabay_Assets/game3.png";
import pinktshirt from "./Alabay_Assets/Alabay Merch/pinktshirt.png";
import gameone from "./Alabay_Assets/Alabay Games/gameone.png";
import zenitsu from "./Alabay_Assets/zenitsu.gif";
import kakashi from "./Alabay_Assets/kakashi.gif";
import minato from "./Alabay_Assets/minato.gif";
import itachi from "./Alabay_Assets/itachi.gif";
import "./App.css";

// Sample media data (images and videos)
const mediaData = [
  { type: "image", src: game1 },
  { type: "image", src: game2 },
  { type: "image", src: game3 },
  { type: "image", src: pinktshirt },
  { type: "image", src: gameone },
  { type: "video", src: zenitsu },
  { type: "video", src: kakashi },
  { type: "video", src: minato },
  { type: "video", src: itachi },
];

const Carousel = () => {
  const [activeMedia, setActiveMedia] = useState(mediaData); // Stores filtered media
  const [startIndex, setStartIndex] = useState(0); // Track the start index for carousel
  const [activeFilter, setActiveFilter] = useState("all"); // Track the active filter
  const [isAnimating, setIsAnimating] = useState(false); // For animation control
  const ITEMS_PER_PAGE = 3;

  // Filter media based on button clicked
  const handleFilter = (type) => {
    if (type === "all") {
      setActiveMedia(mediaData);
    } else if (type === "images") {
      setActiveMedia(mediaData.filter((media) => media.type === "image"));
    } else if (type === "videos") {
      setActiveMedia(mediaData.filter((media) => media.type === "video"));
    }
    setStartIndex(0); // Reset carousel index when filter changes
    setActiveFilter(type); // Update active filter
  };

  // Carousel navigation
  const handleNext = () => {
    if (startIndex + ITEMS_PER_PAGE < activeMedia.length) {
      setIsAnimating(true); // Start animation
      setStartIndex(startIndex + ITEMS_PER_PAGE);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setIsAnimating(true); // Start animation
      setStartIndex(startIndex - ITEMS_PER_PAGE);
    }
  };

  // Display only 3 items per page
  const visibleMedia = activeMedia?.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false); // End animation after a short delay
    }, 500); // Match this with the CSS transition duration

    return () => clearTimeout(timer);
  }, [startIndex]);

  return (
    <div className="max-w-4xl z-[100] mx-auto mt-10">
      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        {["all", "images", "videos"].map((type) => (
          <button
            key={type}
            onClick={() => handleFilter(type)}
            className={`px-4 py-2 rounded-lg ${
              activeFilter === type
                ? "bg-blue-600 text-white"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="flex items-center space-x-4">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className={`px-4 py-2 bg-gray-300 rounded-lg ${
            startIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-400"
          }`}
          disabled={startIndex === 0}
        >
          Prev
        </button>

        {/* Media Items */}
        <div
          className={`flex space-x-4 overflow-hidden transition-all duration-500 ${
            isAnimating ? "transition-transform" : ""
          }`}
        >
          {visibleMedia?.map((media, index) => (
            <div
              key={index}
              className={`w-64 h-40 border-2 border-gray-300 rounded-lg overflow-hidden slide ${
                isAnimating ? "slide-exit" : "slide-enter"
              }`}
            >
              <img
                src={media.src}
                alt={`Media ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className={`px-4 py-2 bg-gray-300 rounded-lg ${
            startIndex + ITEMS_PER_PAGE >= activeMedia.length
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-400"
          }`}
          disabled={startIndex + ITEMS_PER_PAGE >= activeMedia.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
