import React from 'react';

import { brands } from '../data';
export default function Brands() {
  return (
    <section className='min-h-[146px] bg-tertiary flex items-center'>
    
    
    <div className="container mx-auto flex md:justify-between items-center flex-wrap justify-evenly">
{brands.map((item, index)=>{
    return <div key={index}> <img src={item.img} alt="" /></div>
})}
    </div>
    </section>
  );
}
