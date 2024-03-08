const Banner = ({ text, bgStyle }) => {
  return (
    <div className="h-[100px] w-5/6 mt-4 m-auto rounded-lg relative border-2 border-color2">
      <div
        className={`h-full w-full bg-cover blur-[2px] rounded-lg ${bgStyle}`}
      ></div>
      <h1 className="text-4xl font-bold text-white absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {text}
      </h1>
    </div>
  );
};

export default Banner;
