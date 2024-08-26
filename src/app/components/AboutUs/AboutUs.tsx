"use client";
import React from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      // Customize this to adjust the animation duration
      once: true, // Whether animation should happen only once or every time you scroll up and down
    });
  }, []);

  //  style = "background-image:url( images/bg-pattern-3.jpg )"

  return (
    <section
      className="section section-md bg-left-1 text-center text-sm-left "
      id="about-me"
    >
      <div className="bg-item   overflow-hidden hidden md:flex" data-animate="">
      
        <img src="images/bg-pattern-1.jpg" data-aos="fade-right"
              data-aos-anchor-placement="center-bottom"  alt="" />
      </div>
      <div className="container ">
        <div className="row row-30 ">
          <div className="col-sm-6 ">
            <div className=" " data-animate="" data-aos="fade-right"
              data-aos-anchor-placement="center-bottom">
              <img
                className="image"
                src="images/image-01-424x491.jpg"
                alt=""
                width="424"
                height="491"
              />
            </div>
          </div>
          <div className="col-sm-6" data-aos="fade-in"
              data-aos-anchor-placement="center-bottom"  data-animate="">
            <h2 className="text-decoration">About me</h2>
            <h5>
              My name is James Adams. I’m a UI/UX &amp; graphic designer. I
              believe that a well-designed product leads a business to success.
            </h5>
            <h5>
              I love learning how people think and behave, and I leverage
              research to design user-centered products and experiences which
              solve both user and business problems.
            </h5>
            <div className="btn-group-1">
              <a className="btn" href="#">
                Send message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
