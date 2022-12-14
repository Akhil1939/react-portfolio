import React from "react";

import ManImage from "../assets/img/banner-man.png";
import { MovingComponent } from "react-moving-text";
import "./component.css";
import { Link } from "react-scroll";
export default function Hero() {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no -repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg text-accent mb-[22px] mx-3">
              Hey i'm Akhil <span class="wave">👋</span>
            </p>

            <h1 className="text-4xl leading-[44pxx] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[1px] animate-charcter">
              Full Stack <br />
              Developer
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              IT student with Dedicated Technical Skills. Building quality
              websites with HTML/CSS/JS and React Js framework. Love to Working
              in React Js for building amazing web apps.
            </p>
            <Link
              className="transition-all duration-300"
              to="contact"
              smooth={true}
              duration={500}
            >
              <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all">
                Work with me
              </button>
            </Link>
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-end ">
            <img
              className=""
              style={{ marginTop: "200px" }}
              src={ManImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
