import React from 'react';

import { skills } from '../data';
export default function Skills() {
  return (
    <section className='bg-tertiary'>
    <div className="container mx-auto">
        <div className='grid grid-cols-8 md:grid-flex-row'>
            {
                skills.map((skill, index)=>{
                    return (
                        <div className='flex items-center justify-center' key={index}> 
                            <img src={skill.image} alt="" />
                        </div>
                    )
                })
            }
        </div>
    </div>
    </section>
  );
}
