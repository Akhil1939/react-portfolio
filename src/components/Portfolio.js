import React from 'react';

import Projects from './Projects';
export default function Portfolio() {
  return (
    <section className='section bg-primary min-h-[700px]' id='portfolio'>
        <div className="container mx-auto">
            <div className="flex flex-col items-center text-center">
                <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-40 before:hidden before:lg:block">My latest Projects</h2>
                <p className='subtitle'> Below are my latest projects which I made in MERN stack</p>
            </div>
            <Projects/>
        </div>
    
    </section>
  );
}
