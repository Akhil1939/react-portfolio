import React from 'react'
import { social } from '../data'
import Logo from "../assets/Aklogo.svg";
import './component.css'

export default function Footer() {
  return (
    <footer className='bg-tertiary py-12'>
        <div className="container mx-auto">
            <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
                <div className="flex space-x-6 items-center justify-center">
                    {
                        social.map((item, index)=>{
                            const {href, icon} = item;
                            return(
                                <a className='text-accent text-base' href={href} key={index}>{icon}</a>

                            )
                        })
                    }
                </div>
                <div>
                    <img src={Logo} alt="" />
                </div>
                <p className='animate-character-footer'><span className='text-accent animate-charcter'>"</span> If you've got an idea, start today <span className='text-accent'>"</span> </p>
            </div>
        </div>
      
    </footer>
  )
}
