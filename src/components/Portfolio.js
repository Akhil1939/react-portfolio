import React from 'react';

import Projects from './Projects';
export default function Portfolio() {
  return (
    <section className='section bg-primary min-h-[1400px]' id='portfolio'>
        <div className="container mx-auto">
            <div className="flex flex-col items-center text-center">
                <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">My latest Projects</h2>
                <p className='subtitle'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, earum incidunt assumenda possimus totam impedit doloribus minima accusamus aliquid iusto!</p>
            </div>
            <Projects/>
        </div>
    
    </section>
  );
}
