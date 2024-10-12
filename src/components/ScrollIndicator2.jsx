function ScrollIndicator() {
  return (
    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col self-end">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/48add6658beea9d4b4d21bdd0286eabc20565682e217d22f18b8ca1918b3baf2?placeholderIfAbsent=true&apiKey=306ef85b4c964c3b82034c41e8374a07"
        alt=""
        className="object-contain aspect-square w-[34px]"
      />
      <div className="flex flex-col self-center mt-3 w-[22px]">
        <div className="flex flex-col pb-36 rounded-2xl bg-zinc-300 bg-opacity-30">
          <div className="flex shrink-0 -mb-7 bg-green-300 rounded-2xl h-[148px] max-md:mb-2.5" />
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/773209ae249a528f3c5b55bdb57e4521ce6a75765554f359cba7c3be690a04a7?placeholderIfAbsent=true&apiKey=306ef85b4c964c3b82034c41e8374a07"
        alt=""
        className="object-contain mt-3 aspect-square w-[34px]"
      />
    </div>
  );
}

export default ScrollIndicator;
