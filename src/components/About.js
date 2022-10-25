import React from "react";
import { Link } from "react-scroll";
import Image from "../assets/img/office.jpg";

export default function About() {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full rounded-[12px] w-[566px] md:mx-auto lg:mx-0 "
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className='text-3xl lg:text"4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before::opacity-40 before:-top-[2rem] before:hidden before:lg:block '>Akhil Kukadiya</h2>
              <p className="mb-4 text-accent"> Full Stack Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">IT Professional seeking a challenging and rewarding opportunity with an organization of repute which recognizes and utilizes my true potential while nurturing my analytical and technical skills in the field of IT.</p>
            </div> 
           <Link className="transition-all duration-300" to="contact" smooth={true}
                duration={500}> <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all" > Contact me</button></Link>
          </div> 
        </div>
      </div> 
    </section>
  );
}
