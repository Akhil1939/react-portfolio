import React from "react";
import { Button } from "react-scroll";
import { contact } from "../data";
import emailjs from 'emailjs-com';
import { toast } from "react-toastify";

export default function ContactUs() {
  const SERVICE_ID = "service_hfv9q02";
const TEMPLATE_ID =  "template_jr2l53k";
const USER_ID = "c19ZJhS4xXlKXPbP4";  

const handleOnSubmit = (e) => {
  e.preventDefault();
  toast.success('thank you for contact me', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
    .then((result) => {
      console.log(result.text);
      toast.success('massage sent', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      
      
    }, (error) => {
      console.log(error.text);
      toast.error('something went wrong', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
     
    });
  e.target.reset()
};
  return (
    <section className=" section bg-primary" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
            Contact Me
          </h2>
          <p className="subtitle">
          To obtain a creative and challenging position in an organization that gives me an opportunity for self improvement and leadership, while contributing to the symbolic growth of the organization with my technical, innovative and logical skills.
          </p>
        </div>

        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description, href } = item;
              return (
                <div className="flex flex-row gap-x-4" key={index}>
                  <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-1">{title}</h4>
                    <p className="mb-1 ">{subtitle}</p>
                    <a href={href} className="text-accent font-normal">{description}</a>
                  </div>
                </div>
              );
            })}
          </div>

          <form className="space-y-8 w-full max-w-[780px]" action="" onSubmit={handleOnSubmit}>
            <div className="flex gap-8">
                <input className="input" type="text" name="user_name"  placeholder="Your Name" required/>
                <input className="input" type="email" name="user_email"  placeholder="Your Email" required />
            </div>
            <input type="text" className="input" name="user_subject" placeholder="Subject" />
            <textarea className="textarea" name="user_message" placeholder="Your Message" required></textarea>
            <button className="btn btn-lg bg-accent hover:bg-accent-hover" type="submit">Send Message</button>
          </form> 
        </div>
      </div>
    </section>
  );
}
