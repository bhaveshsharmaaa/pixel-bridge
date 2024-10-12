const CommunityRoadmapItem = ({
  title,
  subtitle,
  imageSrc,
  bgColor,
  roundedTopLeft,
  roundedTopRight,
  gradient,
}) => {
  return (
    <div
      className={`relative flex flex-col w-3/12 max-md:ml-0 max-md:w-full ${bgColor} 
        ${roundedTopLeft ? "rounded-tl-[54px]" : ""} 
        ${roundedTopRight ? "rounded-tr-[54px]" : ""}`}
    >
      {/* Gradient from bottom to top */}
      <div
        className="absolute inset-0"
        style={{ background: gradient, borderRadius: "inherit" }}
      ></div>

      <div className="flex flex-col grow px-2.5 pt-5 pb-14 text-4xl font-black text-center text-white max-md:mt-5 relative z-10">
        <h2 className="self-center">
          {title} <br />
          {subtitle && <span className="text-3xl text-white">{subtitle}</span>}
        </h2>
        <img
          loading="lazy"
          src={imageSrc}
          alt=""
          className="object-contain mt-6 w-full aspect-[0.75]"
        />
      </div>
    </div>
  );
};

export function ImageComponent({ src, alt, className }) {
  return <img loading="lazy" src={src} alt={alt} className={className} />;
}
export function SocialLinkItem({ iconSrc, linkText }) {
  return (
    <div className="flex relative gap-9 mt-14 max-md:mt-10">
      <img
        loading="lazy"
        src={iconSrc}
        alt=""
        className="object-contain shrink-0 aspect-square w-[91px]"
      />
      <div className="flex-auto my-auto">{linkText}</div>
    </div>
  );
}

export function SocialLink({ iconSrc, linkText, altText }) {
  return (
    <div className="flex relative ml-16 gap-9">
      <img
        loading="lazy"
        src={iconSrc}
        alt={altText}
        className="object-contain shrink-0 aspect-square w-[91px]"
      />
      <div className="flex-auto my-auto font-extrabold text-[20px] text-[#FFFFFF]">
        {linkText}
      </div>
    </div>
  );
}

export default CommunityRoadmapItem;
