import h from "./assets/main-dog.svg";
import p from "./Alabay_Assets/milgya.png";
import manydog from "./Alabay_Assets/manydog.png";
import image1 from "./Alabay_Assets/image1.png";
import image2 from "./Alabay_Assets/image2.png";
import image4 from "./Alabay_Assets/image4.png";
import arrowRight from "./Alabay_Assets/arrowRight.png";
import arrowLeft from "./Alabay_Assets/arrowLeft.png";
import section1 from "./assets/Rectangle.png";
import section2 from "./Alabay_Assets/Section2.png";
import Rectangle4 from "./Alabay_Assets/Rectangle4.png";
import sction3 from "./Alabay_Assets/sction3.png";
import sction3blur from "./Alabay_Assets/sction3blur.png";
import moneyDog from "./Alabay_Assets/moneyDog.png";
import Union from "./Alabay_Assets/Union.png";
import footer from "./Alabay_Assets/footer.png";
import footerblur from "./Alabay_Assets/footerblur.png";
import game1 from "./Alabay_Assets/game1.png";
import game2 from "./Alabay_Assets/game2.png";
import game3 from "./Alabay_Assets/game3.png";
import pinktshirt from "./Alabay_Assets/Alabay Merch/pinktshirt.png";
import pinkbg from "./Alabay_Assets/Alabay Merch/pinkbg.png";
import yellowtshirt from "./Alabay_Assets/Alabay Merch/yellowtshirt.png";
import yellowbg from "./Alabay_Assets/Alabay Merch/yellowbg.png";
import bluecap from "./Alabay_Assets/Alabay Merch/bluecap.png";
import cap from "./Alabay_Assets/Alabay Merch/cap.png";
import leftarr from "./Alabay_Assets/Alabay Merch/leftarr.png";
import rightarr from "./Alabay_Assets/Alabay Merch/rightarr.png";
import gameone from "./Alabay_Assets/Alabay Games/gameone.png";
import green from "./Alabay_Assets/Alabay Games/green.png";
import gametwo from "./Alabay_Assets/Alabay Games/gametwo.png";
import zenitsu from "./Alabay_Assets/zenitsu.gif";
import kakashi from "./Alabay_Assets/kakashi.gif";
import minato from "./Alabay_Assets/minato.gif";
import itachi from "./Alabay_Assets/itachi.gif";
import background from "./Alabay_Assets/background.png";

import "./App.css";
// import CommunityRoadmapItem, {
//   ImageComponent,
//   SocialLink,
//   SocialLinkItem,
// } from "./add";
import { useEffect, useState } from "react";
import CommunityRoadmapItem from "./add";
import Carousel from "./coursel";
import { Link } from "react-router-dom";

const roadmapItems = [
  {
    title: "Community Building",
    subtitle: "and Initial Launch",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/77f0f4847182935ffe44b535f4bd8739354820a70df7ce6a326405eebf7fc45c?placeholderIfAbsent=true&apiKey=306ef85b4c964c3b82034c41e8374a07",
    gradient:
      "linear-gradient(to bottom, rgba(219, 199, 12, 1), rgba(255, 242, 128, 0))", // yellow gradient for index 1
  },
  {
    title: "Merchandise",
    subtitle: "Store Launch",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d4f0b63a9075971e1294d8a76a76a2950a3b2428744f79fa3b63be089c97c81f?placeholderIfAbsent=true&apiKey=306ef85b4c964c3b82034c41e8374a07",
    gradient:
      "linear-gradient(to bottom, rgba(0, 212, 212, 1), rgba(65, 255, 255, 0))", // yellow gradient for index 1
  },
  {
    title: "Community Events",
    subtitle: "and contests",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8ed506697fa8fad58b4a52d07d3f6d89a391a8d49a69a56a8d48f8d23dd93aab?placeholderIfAbsent=true&apiKey=306ef85b4c964c3b82034c41e8374a07",
    gradient:
      "linear-gradient(to bottom,rgba(212, 39, 255, 1), rgba(212, 39, 255, 0))", // default white gradient
  },
  {
    title: "Expansion and New",
    subtitle: "Features",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1d1cf8b33a9e77ddfe174ea582623c35455cb3faa0a621f6d26297446c870c51?placeholderIfAbsent=true&apiKey=306ef85b4c964c3b82034c41e8374a07",
    gradient:
      "linear-gradient(to bottom, rgba(143, 58, 60, 1), rgba(143, 58, 60, 0))", // default white gradient
  },
];

const App = () => {
  const slides = [
    {
      background: pinkbg, // background image path
      image: pinktshirt, // foreground image path
    },
    {
      background: yellowbg,
      image: yellowtshirt,
    },
    {
      background: bluecap,
      image: cap,
    },
  ];
  const gameslides = [
    {
      image: gameone, // foreground image path
      button: (
        <Link to="/dog2">
          <section className="px-12 py-5 absolute bottom-[10%] left-[35%] max-w-full bg-violet-600 rounded-[100px] shadow-[12px_11px_11px_rgba(0,0,0,0.61)] w-[350px] max-md:px-5 max-md:mt-10">
            <div className="flex cursor-pointer justify-center items-center max-md:flex-col">
              <div className="flex flex-col cursor-pointer w-[79%] max-md:ml-0 max-md:w-full">
                <button className="self-stretch my-auto text-4xl font-black leading-none text-center text-white max-md:mt-10">
                  DISCOVER
                </button>
              </div>
              <div className="flex cursor-pointer flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b64332149dd57bec05d2053427fc363ccd77824b6e98446e3d671972d0bc3e1a?placeholderIfAbsent=true&apiKey=306ef85b4c964c3b82034c41e8374a07"
                  alt="Discover icon"
                  className="object-contain cursor-pointer grow shrink-0 aspect-[1.11] w-[58px] max-md:mt-10"
                />
              </div>
            </div>
          </section>
        </Link>
      ),
    },
    {
      image: gametwo,
      button: (
        <Link to="/dog">
          <section className="px-12 py-5 absolute bottom-[10%] left-[35%] max-w-full bg-[#45D689] rounded-[100px] shadow-[12px_11px_11px_rgba(0,0,0,0.61)] w-[350px] max-md:px-5 max-md:mt-10">
            <div className="flex cursor-pointer justify-center items-center max-md:flex-col">
              <div className="flex flex-col cursor-pointer w-[79%] max-md:ml-0 max-md:w-full">
                <button className="self-stretch my-auto text-4xl font-black leading-none text-center text-white max-md:mt-10">
                  DISCOVER
                </button>
              </div>
              <div className="flex cursor-pointer flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b64332149dd57bec05d2053427fc363ccd77824b6e98446e3d671972d0bc3e1a?placeholderIfAbsent=true&apiKey=306ef85b4c964c3b82034c41e8374a07"
                  alt="Discover icon"
                  className="object-contain cursor-pointer grow shrink-0 aspect-[1.11] w-[58px] max-md:mt-10"
                />
              </div>
            </div>
          </section>
        </Link>
      ),
    },
  ];

  const mediaData = [
    { type: "image", src: game1 },
    { type: "image", src: game2 },
    { type: "video", src: itachi },
    { type: "image", src: game3 },
    { type: "image", src: green },
    { type: "image", src: gameone },
    { type: "video", src: kakashi },
    { type: "video", src: minato },
    { type: "video", src: zenitsu },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0); // Track the previous index
  const [direction, setDirection] = useState(""); // Track the direction of animation

  // Handle next slide
  const nextSlide = () => {
    setDirection("next"); // Set direction to "next" (right to left)
    setPrevIndex(currentIndex); // Save the current index before updating
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Handle previous slide
  const prevSlide = () => {
    setDirection("prev"); // Set direction to "prev" (left to right)
    setPrevIndex(currentIndex); // Save the current index before updating
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const [currentIndexgame, setCurrentIndexgame] = useState(0);
  const [prevIndexgame, setPrevIndexgame] = useState(0); // Track the previous index
  const [directiongame, setDirectiongame] = useState(""); // Track the direction of animation

  // Handle next slide
  const nextSlidegame = () => {
    setDirectiongame("next"); // Set direction to "next" (right to left)
    setPrevIndexgame(currentIndex); // Save the current index before updating
    setCurrentIndexgame(
      (prevIndexgame) => (prevIndexgame + 1) % gameslides.length
    );
  };

  // Handle previous slide
  const prevSlidegame = () => {
    setDirectiongame("prev"); // Set direction to "prev" (left to right)
    setPrevIndexgame(currentIndex); // Save the current index before updating
    setCurrentIndexgame((prevIndexgame) =>
      prevIndexgame === 0 ? gameslides.length - 1 : prevIndexgame - 1
    );
  };

  const [activeMedia, setActiveMedia] = useState(mediaData); // Stores filtered media
  const [startIndex, setStartIndex] = useState(0); // Track the start index for carousel
  const [activeFilter, setActiveFilter] = useState("all"); // Track the active filter

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

  const handleNext = () => {
    // Show the next three items
    if (startIndex + 1 < activeMedia.length) {
      setStartIndex(
        Math.min(startIndex + 1, activeMedia.length - ITEMS_PER_PAGE)
      );
    }
  };

  const handlePrev = () => {
    // Show the previous three items
    if (startIndex > 0) {
      setStartIndex(Math.max(startIndex - 1, 0));
    }
  };

  // Display only 3 items per page
  const visibleMedia = activeMedia?.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE // Show the next three items
  );

  return (
    <div className="overflow-y-hidden">
      <img
        src={background}
        className="z-[-1] overflow-y-hidden fixed h-full w-full"
        alt=""
      />

      <p className="uppercase text-wrap fixed left-10 text-center bg-gradient-to-b from-custom-yellow to-custom-green bg-clip-text text-transparent font-cheeseburga font-[400] text-[110px]">
        welcome to alabay world
      </p>

      <p className="bg-[#181C27] fixed bottom-52 py-4 text-wrap text-center font-cheeseburga font-[400] text-white text-[30px]">
        where the{" "}
        <span className="text-yellow-300">
          legendary Central Asian Shepherd Dog{" "}
        </span>{" "}
        meets a new-age adventure.{" "}
        <span className="text-yellow-300">Join us</span> in celebrating the
        <span className="text-yellow-300"> strength</span>,{" "}
        <span className="text-yellow-300">loyalty</span>, and{" "}
        <span className="text-yellow-300">heritage</span>
        of the Alabay <br /> breed.
      </p>

      <div className="z-[20] absolute mt-[720px] w-6/9 mx-9 rounded-[35px] bg-white ">
        <section className="flex flex-col space-y-7 mb-36">
          {/* 1st div */}
          <img src={section1} className="absolute  z-[-1] w-full" alt="" />
          <div className="flex justify-center items-center">
            <div className="w-[150px] bg-[#FFF6A1] h-4  border border-none rounded-3xl"></div>
          </div>

          {/* 2nd div */}
          <div className="flex flex-col lg:flex-row justify-evenly">
            <div className="relative">
              <img
                src={h}
                className="h-[450px] lg:h-[650px] lg:w-[620px] w-full"
                alt=""
              />
              <img
                src={p}
                className="h-[450px] lg:h-[650px] w-full lg:w-[620px] absolute top-[300px] lg:top-[460px]"
                alt=""
              />
            </div>
            <div className="pt-8 pl-8">
              <p className="font-montserrat text-[#F76902D1] text-4xl lg:text-6xl font-black text-right">
                History Of
              </p>
              <p className="font-cheeseburga text-[60px] lg:text-[140px] font-normal text-right text-[#FFFFFF]">
                ALABAY
              </p>
              <p className="font-kumbh text-[18px] lg:text-[30px] font-bold h-auto lg:h-[552px] w-full lg:w-[609px] text-right leading-7 lg:leading-9 text-[#353535]">
                The Central Asian Shepherd Dog, also known as Alabay, has been a
                guardian of livestock and property for centuries. Originating
                from Central Asia, these dogs are renowned for their courage,
                strength, and loyalty.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="flex space-x-9">
              {["all", "images", "videos"].map((type) => (
                <button
                  key={type}
                  onClick={() => handleFilter(type)}
                  className={`font-montserrat z-[100] text-lg lg:text-[32px] font-black leading-[33.51px] text-right ${
                    activeFilter === type ? "text-[#FFA800]" : "text-black"
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-around items-center space-x-4 lg:space-x-9">
            <img
              src={arrowLeft}
              onClick={handlePrev}
              className={`h-[40px] rounded-lg ${
                startIndex === 0 ? "cursor-not-allowed" : "cursor-pointer"
              } z-[100] lg:h-[80px]`}
              alt=""
              disabled={startIndex === 0}
            />
            <section className="overflow-hidden rounded-[30px]">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex space-x-4 overflow-hidden">
                  {visibleMedia?.map((media, index) => (
                    <div
                      key={index}
                      className="w-80 h-48 border-2 border-gray-300 rounded-lg overflow-hidden"
                    >
                      <img
                        src={media.src}
                        alt={`Media ${index}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                {/* <Carousel></Carousel> */}
              </div>
            </section>
            <img
              src={arrowRight}
              onClick={handleNext}
              className={`h-[40px] rounded-lg ${
                startIndex + ITEMS_PER_PAGE >= activeMedia.length
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              } z-[100] lg:h-[80px]`}
              alt=""
              disabled={startIndex + ITEMS_PER_PAGE >= activeMedia.length}
            />
          </div>
        </section>

        <section>
          <img
            src={section2}
            className="absolute z-[-1] mt-10 lg:mt-[350px] w-full"
            alt=""
          />
          <div className="flex mb-20 justify-center items-center">
            <p className="font-cheeseburga text-5xl lg:text-[140px] font-normal text-right text-[#FFA800]">
              PROJECT VISION
            </p>
          </div>

          <div className="relative flex flex-col">
            <img src={manydog} className="w-full" alt="" />
            <div className="flex justify-center items-center">
              <p className="font-kumbh z-10 text-[18px] lg:text-[30px] w-[90%] lg:w-[1200px] absolute top-[600px] lg:top-[900px] font-bold text-center">
                Our mission is to honor the heritage of the Alabay by creating a
                vibrant, loyal, and powerful community. Just as the Alabay
                protects its flock, we aim to build a pack that stands strong
                together.
              </p>
            </div>
          </div>

          <div className="relative">
            <p className="font-cheeseburga top-[-100px] lg:top-[-300px] ml-4 lg:ml-14 absolute text-5xl lg:text-[140px] text-left text-[#FFFFFF]">
              ROAD MAP
            </p>
          </div>

          <div className="flex flex-col lg:flex-row ">
            <div className=" lg:mt-28 max-w-[360px] ml-12 lg:max-w-[700px] space-y-11">
              <p className="font-kumb font-bold text-[#353535] text-[18px] lg:text-[40px] leading-10">
                Our journey is just beginning. Explore our roadmap to see the
                exciting milestones and future plans we have in store.
              </p>
              <p className="text-[#FFA800] text-[18px] lg:text-[35px] font-kumbh leading-10 font-bold">
                Join us as we grow and achieve new <br /> heights.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center -space-y-5 lg:-space-y-14">
              <img
                src={sction3}
                className="h-[400px] mt-[-100px] lg:h-[650px] z-20"
                alt=""
              />
              <img
                src={sction3blur}
                className="h-[300px] lg:h-[650px]"
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="rounded-[54px] px-14 z-40 mt-[-470px]">
          <div className="flex gap-5 max-md:flex-col">
            {roadmapItems.map((item, index) => (
              <CommunityRoadmapItem
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                imageSrc={item.imageSrc}
                bgColor={item.bgColor}
                roundedTopLeft={index === 0}
                roundedTopRight={index === 3}
                gradient={item.gradient}
              />
            ))}
            <div className=""></div>
          </div>
        </section>
        <section>
          <img
            src={Rectangle4}
            className="absolute z-[-1] mt-10  w-full"
            alt=""
          />
          <div className="relative">
            <p className="font-cheeseburga absolute z-10 mt-96 ml-4 lg:ml-14 text-5xl lg:text-[140px] text-left text-[#FFFFFF]">
              TOKENOMICS
            </p>
          </div>
          <div className="flex justify-between px-16">
            <div className="flex flex-col mt-[700px] space-y-9">
              <div>
                <section className="flex flex-col font-black whitespace-nowrap max-w-[481px]">
                  <div className="flex flex-col items-start px-20 py-7 w-full bg-neutral-700 rounded-[35px] shadow-[17px_20px_36px_rgba(168,125,41,1)] max-md:px-5 max-md:max-w-full">
                    <h2 className="text-3xl text-white">LIQUIDITY</h2>
                    <h1 className="text-5xl text-yellow-200 max-md:max-w-full max-md:text-4xl">
                      LOCKED
                    </h1>
                  </div>
                </section>
              </div>
              <div>
                <section className="flex flex-col font-black whitespace-nowrap max-w-[481px]">
                  <div className="flex flex-col items-start px-20 py-7 w-full bg-neutral-700 rounded-[35px] shadow-[17px_20px_36px_rgba(168,125,41,1)] max-md:px-5 max-md:max-w-full">
                    <h2 className="text-3xl text-white">CONTRACT</h2>
                    <h1 className="text-5xl text-yellow-200 max-md:max-w-full max-md:text-4xl">
                      RENOUNCED
                    </h1>
                  </div>
                </section>
              </div>
              <div>
                <section className="flex flex-col font-black whitespace-nowrap max-w-[481px]">
                  <div className="flex flex-col items-start px-20 py-7 w-full bg-neutral-700 rounded-[35px] shadow-[17px_20px_36px_rgba(168,125,41,1)] max-md:px-5 max-md:max-w-full">
                    <h2 className="text-3xl text-white">TAXES</h2>
                    <h1 className="text-5xl text-yellow-200 max-md:max-w-full max-md:text-4xl">
                      0%
                    </h1>
                  </div>
                </section>
              </div>
            </div>
            <div className="">
              <img className=" h-[1400px] mt-[600px]" src={moneyDog} alt="" />
            </div>
          </div>
        </section>
        <section className="flex flex-col space-y-40">
          <div className="flex justify-center items-center mt-[-400px]">
            <p className="font-cheeseburga ml-4 lg:ml-14 text-5xl lg:text-[140px] text-center text-[#FFA800]">
              MERCHANDISE
            </p>
          </div>

          <div className="carousel-container">
            {/* Background container with smooth transition */}
            <img
              className="carousel-background"
              style={{
                backgroundImage: `url(${slides[currentIndex].background})`,
              }}
            />

            {/* Foreground image */}
            <div className="flex justify-between">
              <img
                key={currentIndex} // Ensures React re-renders on every slide change
                className={`carousel-image ${
                  direction === "next" ? "slide-in-left" : "slide-in-right"
                }`}
                src={slides[currentIndex].image}
                alt="carousel"
              />
              <div>
                <p className="font-montserrat z-[100] left-[73%] font-[900] text-[30px] absolute top-[15%]">
                  Coming Soon...
                </p>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="carousel-controls">
              <img
                src={leftarr}
                className="carousel-prev"
                onClick={prevSlide}
              />
              <img
                src={rightarr}
                className="carousel-next"
                onClick={nextSlide}
              />
            </div>
          </div>
        </section>

        <section className="">
          <img src={Rectangle4} className="z-[-10] mt-[-300px]" alt="" />
          <div className="">
            <p className="font-cheeseburga mt-[-1000px] z-50 ml-4 lg:ml-14 text-5xl lg:text-[140px] text-center text-[#FFFFFF]">
              GAMES
            </p>
          </div>
          <div>
            <p className="font-montserrat font-[900] z-50 ml-4 mt-14 lg:ml-14 text-5xl lg:text-[40px] text-center text-[#353535]">
              Stay tuned for upcoming games !
            </p>
          </div>
          <div className="m-10 relative">
            <img
              src={arrowLeft}
              onClick={prevSlidegame}
              className="h-[40px] lg:h-[80px] absolute top-[50%] left-[1%]"
              // disabled={currentIndexgame === 0}
            />
            <img
              key={currentIndex} // Ensures React re-renders on every slide change
              className={`bg-cover object-contain bg-no-repeat bg-center `}
              src={gameslides[currentIndexgame].image}
              alt=""
            />
            <img
              src={arrowRight}
              onClick={nextSlidegame}
              className="h-[40px] lg:h-[80px] absolute top-[50%] right-[1%]"
              // disabled={currentIndexgame === gameslides.length - 1}
            />
            {gameslides[currentIndexgame].button}
          </div>
        </section>

        <section className="flex flex-col space-y-5 px-10">
          <div className="px-20 mt-16">
            <p className="text-[#FFA800] font-montserrat font-extrabold text-[45px]">
              GAME <span className="text-[#353535]">PREVIEWS</span>
            </p>
          </div>
          <div className="flex justify-center space-x-5 items-center">
            <div>
              <img src={arrowLeft} className="h-[40px] lg:h-[80px]" alt="" />
            </div>
            <div className="flex space-x-5 ">
              <img src={game1} className="h-[380px]" alt="" />
              <img src={game2} className="h-[380px]" alt="" />
              <img src={game3} className="h-[380px]" alt="" />
            </div>
            <div>
              <img src={arrowRight} className="h-[40px] lg:h-[80px]" alt="" />
            </div>
          </div>
        </section>

        <section>
          <div className="">
            <p className="font-cheeseburga  mt-96 ml-4 lg:ml-14 text-5xl lg:text-[140px] text-left text-[#FFA800] leading-normal">
              SOCIAL MEDIA <br /> LINKS
            </p>
          </div>
          <div className="flex items-center px-16">
            <div className="relative">
              <img loading="lazy" src={Union} className="h-[350px] " />
              <div className="flex flex-col space-y-10 top-14 absolute">
                <div className="flex relative ml-16 gap-9">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/550d073ca6d66c92a02f9646422f1085756c2a1cc3d3cff2442baadd3eee98b8?placeholderIfAbsent=true&apiKey=306ef85b4c964c3b82034c41e8374a07"
                    className="object-contain shrink-0 aspect-square w-[91px]"
                  />
                  <div className="flex-auto my-auto font-extrabold text-[30px] text-[#FFFFFF]">
                    Twitter Link
                  </div>
                </div>
                <div className="flex relative ml-16 gap-9">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/23b5574e4153bd16a8143fee1553b18679f9799ad29abe88f3cf4b5f64ca4701?placeholderIfAbsent=true&apiKey=306ef85b4c964c3b82034c41e8374a07"
                    className="object-contain shrink-0 aspect-square w-[91px]"
                  />
                  <div className="flex-auto my-auto font-extrabold text-[30px] text-[#FFFFFF]">
                    Telegram Link
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center -space-y-5 lg:-space-y-32">
              <img
                src={footer}
                className="h-[400px] mt-[-100px] lg:h-[750px] z-20"
                alt=""
              />
              <img src={footerblur} className="h-[300px] lg:h-[200px]" alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
