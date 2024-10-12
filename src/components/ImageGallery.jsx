function ImageGallery() {
  const images = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5ccdb054598daeb3ee970ee900d976c93bc7d48570e89c65e66459a9619afb50?placeholderIfAbsent=true&apiKey=306ef85b4c964c3b82034c41e8374a07",
      className:
        "object-contain rounded-3xl aspect-[1.94] min-w-[240px] w-[531px] max-md:max-w-full",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ae3d471a26dcde93417912e18a8ccdbe52415ddec71c3b6ad2d2e5fb55cec49?placeholderIfAbsent=true&apiKey=306ef85b4c964c3b82034c41e8374a07",
      className:
        "object-contain shrink-0 rounded-3xl aspect-square min-w-[240px] w-[274px]",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c09376cbb1dd657eca7b113c6573c12f4d6688f79e53edde287560a80fc2b8c1?placeholderIfAbsent=true&apiKey=306ef85b4c964c3b82034c41e8374a07",
      className:
        "object-contain shrink-0 rounded-3xl aspect-square min-w-[240px] w-[274px]",
    },
  ];

  return (
    <div className="flex relative flex-wrap gap-10 items-start mt-10 max-md:mr-1.5 max-md:max-w-full">
      {images.map((image, index) => (
        <img
          key={index}
          loading="lazy"
          src={image.src}
          alt=""
          className={image.className}
        />
      ))}
    </div>
  );
}

export default ImageGallery;
