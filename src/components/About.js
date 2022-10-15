import React from "react";
import Image from "../assets/img/about.webp";

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
              <p className="mb-4 text-accent"> Freelance web Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, delectus veritatis nihil corporis soluta sit fuga quisquam <br/> quaerat odit! Pariatur, illum adipisci. Magni doloribus error placeat!</p>
            </div> 
            <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all"> Contact me</button>
          </div>
        </div>
      </div> 
    </section>
  );
}
