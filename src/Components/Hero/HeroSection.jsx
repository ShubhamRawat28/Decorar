import { useState } from "react";
function HeroSection() {
  const [backgroundColor, setbackgroundColor] = useState("skyblue");

  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  };

  const handleClick = () => {
    const randomColor = getRandomColor();
    setbackgroundColor(`${randomColor}`);
  };

  return (
    <section className="bg-gray-900 pt-10 md:pt-8">
      {/* Image */}
      <div className="" />
      {/* Outlet section */}
      <div className="bg-hero bg-cover bg-center pt-10 md:pt-16 lg:pt-10 px-1 md:px-8 lg:px-16 flex flex-col justify-center text-center">
        <h1 className="mb-2 md:mb-4 lg:mb-6 px-0 md:px-24 text-5xl md:text-6xl font-extrabold tracking-tight leading-none md:text-center text-white">
          CHECK FOR FAKE REVIEWS
        </h1>
        <p className="py-6 md:py-0 px-6 md:px-4 text-lg md:text-lg lg:text-xl font-normal text-gray-500 md:text-center dark:text-gray-300">
          <span className="text-green-500 font-semibold">
            TROUBLE HAVING BOT REVIEWS ON THE PRODUCTS ?
          </span>{" "}
          Our innovative fake review detector will tell all the fake reviews and make your user experience much better.
        </p>
        <button
          type="submit"
          className="my-8 md:my-16 mx-auto px-10 py-4 text-gray-900 bg-transparent font-medium rounded-lg text-lg md:text-xl"
          style={{
            backgroundColor: backgroundColor,
          }}
          onClick={handleClick}
        >
          Download Extension
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
