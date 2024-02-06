import React from "react";

export default function About() {
  return (
    <div className=" app-about text-center home text-white d-flex justify-content-center align-items-center flex-column">
      <div className="component mb-2">
        <h1>ABOUT COMPONENT</h1>
        <span></span>
        <i class="fa-solid fa-star mx-3"></i>
        <span></span>
      </div>
      <div className="container">
        <div className="row px-5">
          <div className="col-md-6 ps-md-5">
            <div className="text text-start fs-5">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
          </div>
          <div className="col-md-6 pe-md-5">
            <div className="text text-start fs-5">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
