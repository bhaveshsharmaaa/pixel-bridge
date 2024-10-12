import Features2 from "./Features2";
import GamePreview2 from "./GamePreview2";
import ImageGallery2 from "./ImageGallery2";
import blue from "../Alabay_Assets/Alabay Games/blue.png";
import "./scroll.css";

function AlabayCampaign() {
  return (
    <main className="flex flex-col bg-white overflow-hidden h-screen">
      <section className="flex flex-col px-20 pt-24 pb-16 w-full min-h-[1080px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <img
          loading="lazy"
          src={blue}
          alt=""
          className="fixed inset-0 w-full h-full"
        />
        <div className="flex relative flex-wrap gap-5 justify-between max-md:max-w-full">
          <div className="flex flex-col font-bold leading-none text-white max-md:max-w-full">
            <div>
              <h1 className="font-baron text-[70px] font-normal leading-[104.38px] text-left max-md:max-w-full max-md:text-4xl max-md:leading-10">
                ALABAY GUARDIAN <br />
                <span className="text-5xl font-bebas text-[#A4A8FF] tracking-[11.04px]">
                  SHEPHERD OF THE STEPPES
                </span>
              </h1>
            </div>

            {/* Scrollable Section with Custom Scroll Bar */}
            <div className="overflow-y-scroll custom-scroll h-[450px] pr-4">
              <p className="mt-10 mr-10 font-montserrat text-[22px] font-semibold leading-[25.92px] text-left max-md:mr-2.5 max-md:max-w-full w-[500px]">
                Take on the role of the legendary Alabay on a quest to uncover
                the ancient secrets of its ancestors.
              </p>
              <button className="flex space-x-10 items-center w-56 self-start px-4 py-3 mt-14 text-xl whitespace-nowrap bg-[#A4A8FF] rounded-[34px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-neutral-800 max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/09c02edf64c3168b606119dde34fd5fe4209fd6f4608d293dd6e5e6311c94b4b?placeholderIfAbsent=true&apiKey=306ef85b4c964c3b82034c41e8374a07"
                  alt=""
                  className="object-contain shrink-0 aspect-square w-[42px]"
                />
                <span>PLAY</span>
              </button>
              <GamePreview2 />
              <ImageGallery2 />
              <Features2 />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AlabayCampaign;
