import React from "react";

function Projects() {
  return (
    <div className="flex flex-col items-center phone:ml-14 smallest:ml-4 medium:ml-16 tablet:ml-36 middle:ml-24 larger:ml-10 xl:ml-10">
      {/* First Row of Cards */}
      <div className="flex flex-wrap gap-4 mt-5 lg:flex-row">
        <div className="card card-compact w-80 bg-base-100 shadow-xl border border-gray-200 p-4 md:w-1/3 lg:w-1/2">
          <figure className="h-56">
            <img
              src="https://images.unsplash.com/photo-1594329852649-012d9528deda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-80 bg-base-100 shadow-xl border border-gray-200 p-4 md:w-1/3 lg:w-1/2">
          <figure className="h-56">
            <img
              src="https://images.unsplash.com/photo-1594329852649-012d9528deda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row of Cards */}
      <div className="flex flex-wrap gap-4 mt-5 mb-8">
        <div className="card card-compact w-80 bg-base-100 shadow-xl border border-gray-200 p-4 md:w-1/3 lg:w-1/2">
          <figure className="h-56">
            <img
              src="https://images.unsplash.com/photo-1594329852649-012d9528deda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-80 bg-base-100 shadow-xl border border-gray-200 p-4 md:w-1/3 lg:w-1/2 ">
          <figure className="h-56">
            <img
              src="https://images.unsplash.com/photo-1594329852649-012d9528deda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
