import React from "react";

import { skills } from "../data";
export default function Skills() {
  return (
    <section className="bg-tertiary">
      <div className="container mx-auto ">
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-10 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 w-[60px] duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="h-10 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
