import React from "react";

function About() {
  return (
    <div className="bg-green-custom h-screen flex items-center justify-center">
      <div className="flex justify-center items-center w-full  ">
        {/* Image */}
        <img
          src="./cous-cous.jpg"
          alt="kitten"
          className=" rounded-2xl smallest:w-2/4 xl:w-4/12 laptop:w-3/12 larger:text-2xl md:w-1/4 shadow-lg xl:mr-20 larger:h-96 larger:w-80 larger:mr-4 middle:h-50 middle:w-60 "
        />
        {/* About Box */}
        <div className="bg-gray-300 p-6 rounded-lg shadow-lg text-center middle:mb-32 w-1/2 md:w-3/4 tablet:w-6/12 tablet:ml-9 tablet:mt-14 larger:ml-2 middle:w-22 middle:mt-16 smallest:w-/6  ">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">About Me</h1>
          <ul className="text-gray-700 list-inside pl-6">
            <li className="mb-2 middle:text-sm">
              <svg
                className="h-5 w-5 inline text-green-600 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2.293 9.293a1 1 0 011.414 0L10 15.586l6.293-6.293a1 1 0 111.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              I am thrilled to be embarking on a journey to hopefully becoming a
              successful Front-end Developer. As someone who previously worked
              in construction and ran a small business, I am excited to
              transition into the tech industry and learn new skills that will
              enable me to create visually stunning and functional websites.
            </li>
            <li className="mb-2 middle:text-sm">
              <svg
                className="h-5 w-5 inline text-green-600 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2.293 9.293a1 1 0 011.414 0L10 15.586l6.293-6.293a1 1 0 111.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              I am a Spurs Fan
            </li>
            <li className="mb-2 middle:text-sm">
              <svg
                className="h-5 w-5 inline text-green-600 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2.293 9.293a1 1 0 011.414 0L10 15.586l6.293-6.293a1 1 0 111.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              I have traveled to 9 countries and still counting
            </li>
            <li className="mb-2 middle:text-sm">
              <svg
                className="h-5 w-5 inline text-green-600 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2.293 9.293a1 1 0 011.414 0L10 15.586l6.293-6.293a1 1 0 111.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              My pet kitten is called Cous-Cous
            </li>
            <li className="mb-2 middle:text-sm">
              <svg
                className="h-5 w-5 inline text-green-600 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2.293 9.293a1 1 0 011.414 0L10 15.586l6.293-6.293a1 1 0 111.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              I am the eldest of 3 siblings
            </li>
            <li className="mb-2 middle:text-sm">
              <svg
                className="h-5 w-5 inline text-green-600 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2.293 9.293a1 1 0 011.414 0L10 15.586l6.293-6.293a1 1 0 111.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              I am an avid reader and have read more than 40 books in the past
              year!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
