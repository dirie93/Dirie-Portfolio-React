import React from "react";

function Projects() {
  return (
    <div className="flex flex-col items-center phone:ml-14 smallest:ml-4 medium:ml-16 tablet:ml-36 middle:ml-24 larger:ml-10 xl:ml-10">
      {/* First Row of Cards */}
      <div className="flex flex-wrap gap-4 mt-5 lg:flex-row">
        <div className="card card-compact w-80 bg-base-100 shadow-xl border border-gray-200 p-4 md:w-1/3 lg:w-1/2">
          <figure className="h-56">
            <img
              src="./Weather-App.svg"
              alt="Weather Project"
              className="w-full h-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-semibold">NowForecast</h2>
            <p className="text-gray-500">
              A 5-day forecast app built on JavaScript that offers accurate
              readings on your location!
            </p>
            <div className="card-actions justify-end m-4 mr-5">
              <button className="btn btn-primary">Code</button>
              <button className="btn btn-primary ml-10">Demo</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-80 bg-base-100 shadow-xl border border-gray-200 p-4 md:w-1/3 lg:w-1/2">
          <figure className="h-56">
            <img
              src="./Note-taker.svg"
              alt="Note-taking app"
              className="w-full h-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-semibold">Simple Note</h2>
            <p className="text-gray-500">
              A note-taking app allowing users to keep track of their thoughts
              in a single place.
            </p>
            <div className="card-actions justify-end m-4 mr-5">
              <button className="btn btn-primary">Code</button>
              <button className="btn btn-primary ml-10">Demo</button>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row of Cards */}
      <div className="flex flex-wrap gap-4 mt-5 mb-8">
        <div className="card card-compact w-80 bg-base-100 shadow-xl border border-gray-200 p-4 md:w-1/3 lg:w-1/2">
          <figure className="h-56">
            <img src="./Horizon.svg" alt="Horizon" className="w-full h-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-semibold">
              Horizon Marketing
            </h2>
            <p className="text-gray-500">
              A codebase that follows accessibility standards and optimised for
              user accessibility
            </p>
            <div className="card-actions justify-end m-4 mr-5">
              <button className="btn btn-primary">Code</button>
              <button className="btn btn-primary ml-10">Demo</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-80 bg-base-100 shadow-xl border border-gray-200 p-4 md:w-1/3 lg:w-1/2">
          <figure className="h-56">
            <img src="./Quiz2.svg" alt="Shoes" className="w-full h-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-semibold">
              JavaScript Quiz
            </h2>
            <p className="text-gray-500">
              A timed coding quiz with multiple-choice questions using JS, where
              the user is tested on fundementals of the programming language!
            </p>
            <div className="card-actions justify-end m-4 mr-5">
              <button className="btn btn-primary">Code</button>
              <button className="btn btn-primary ml-10">Demo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
