const Button = ({ type }) => {
  if (type === "play") {
    return (
      <button className="flex gap-4 px-4 py-1 items-center bg-white rounded-[34px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-neutral-800">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d75665f2307968665a8412c18fb8c7313baf488062d351d8da6c2afb6a799917?placeholderIfAbsent=true&apiKey=306ef85b4c964c3b82034c41e8374a07"
          className="object-contain shrink-0 aspect-square w-[42px]"
          alt=""
        />
        <span className="grow shrink my-auto w-[103px]">PLAY</span>
      </button>
    );
  } else if (type === "exit") {
    return (
      <button className="px-12 py-6 border-4 border-white border-solid rounded-[34px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 text-white">
        EXIT
      </button>
    );
  }
  return null;
};

export default Button;
