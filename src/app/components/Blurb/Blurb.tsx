
"use client";
import React from "react";
import Link from "next/link";
import { FaDroplet } from "react-icons/fa6";
import { TbBrandItch } from "react-icons/tb";
import { CiLight } from "react-icons/ci";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';


const Blurb = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize this to adjust the animation duration
      once: true, // Whether animation should happen only once or every time you scroll up and down
    });
  }, []);
  return (
    <section className="section bg-800 context-dark text-center">
      <div className="row-bordered">
        <div className="row no-gutters">
          <div className="col-sm-4">
            <article className="blurb animated fadeIn" data-aos="fade-in"
              data-aos-anchor-placement="center-bottom"  data-animate="">
              <div className="icon blurb-icon thin-icon-box flex justify-center items-center">
                <TbBrandItch />
              </div>
              <div className="blurb-title h4">Branding</div>
            </article>
          </div>
          <div className="col-sm-4">
            <article className="blurb animated fadeIn" data-aos="fade-in"
              data-animate="">
              <div className="icon blurb-icon thin-icon-tint flex justify-center items-center">
                <FaDroplet size={30} />
              </div>
              <div className="blurb-title h4">UI/UX Design</div>
            </article>
          </div>
          <div className="col-sm-4">
            <article className="blurb animated fadeIn" data-aos="fade-in"
               data-animate="">
              <div className="icon blurb-icon thin-icon-satelite flex justify-center items-center">
                <CiLight />
              </div>
              <div className="blurb-title h4">Development</div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blurb;
