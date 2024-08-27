"use client";
import React from "react";
import { FaFacebookMessenger } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      // Customize this to adjust the animation duration
      once: true, // Whether animation should happen only once or every time you scroll up and down
    });
  }, []);
  return (
    
    <>
      <section className="footer footer-top context-dark bg-800">
        <div className="row justify-content-center justify-content-lg-start">
          <div className="col-sm-6 col-xxl-5">
          <div className="relative image-social">
  <a className="absolute right-0 top-0 image-social-icon" href="#">
    <div className="hover:bg-gray-100 bg-red-500 p-4">
      <FaFacebookMessenger className="text-slate-200" size={30} />
    </div>
  </a>
  <img
    className="image"
    src="images/image-11-787x516.jpg"
    alt=""
    width="787"
    height="516"
  />
</div>

          </div>
          <div className="col-md-10 col-lg-6 col-xl-5 col-xxl-3 offset-xxl-1">
            <div className="footer-inner">
              <div className="logo">
                <div className="relative " href="index.html">
                  

                  <div className="text-white">
                    <div className=" navbar-panel">
                      <button
                        className="navbar-switch "
                        data-multi-switch=""
                      ></button>
                      <div className="navbar-logo">
                        <a className="navbar-logo-link" href="index.html">
                          <img
                            className=""
                            src="https://ld-wt73.template-help.com/wt_prod-29297/images/logo-inverse-228x67.png"
                            alt="Booo"
                            width="114"
                            height="33"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <form
                className="flex justify-center items-center "
                data-aos="fade-in-up" // Animation type
       
        data-aos-anchor-placement="bottom-bottom"
                data-form-output="newsletter-sample"
                data-form-type="subscribe"
                method="post"
                action="components/rd-mailform/rd-mailform.php"
                data-animate=""
                noValidate="novalidate"
              >
                <div className="form-group  w-full">
                  <input
                    className="mt-4 form-control form-control-sm form-control-has-validation form-control-last-child"
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    data-constraints="@Email @Required"
                    id="regula-generated-932748"
                  />
                  <span className="form-validation"></span>
                </div>
                <button className=" btn px-4 py-3 btn-secondary" type="submit">
                  Subscribe
                </button>
              </form>
              <div
                className="form-output snackbar snackbar-primary"
                id="newsletter-sample"
              ></div>
              <div className="row row-20 row-content">
                <div
                  className="col-6 col-sm-4 col-xl-6 animated fadeInUp"
                  data-aos="fade-up" // Animation type
       
        data-aos-anchor-placement="bottom-bottom"
                  data-animate=""
                >
                  <h5>E-mail</h5>
                  <p>
                    <a href="mailto:#">info@demolink.org</a>
                  </p>
                </div>
                <div
                  className="col-6 col-sm-4 col-xl-6 animated fadeInUp"
                  data-aos="fade-up" // Animation type
       data-aos-anchor-placement="bottom-bottom"
                  data-animate=""
                >
                  <h5>Phone</h5>
                  <p>
                    <a href="tel:#">800.567.1234</a>
                  </p>
                </div>
                <div
                  className="col-6 col-sm-4 col-xl-6 animated fadeInUp"
                  data-aos="fade-up" // Animation type
       
        data-aos-anchor-placement="bottom-bottom"
                  data-animate=""
                >
                  <h5>Address</h5>
                  <p>121 King Street, Melbourne , Australia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer footer-bottom context-dark bg-800">
        <div className="container">
          <div className="row row-20 animated fadeIn" data-animate="">
            <div className="col-md-7 col-xl-6">
              <div className="group-80x15">
                <a className="image-link" href="#">
                  <img
                    className="image"
                    src="https://ld-wt73.template-help.com/wt_prod-29297/images/logo-07-81x20.png"
                    alt=""
                    width="81"
                    height="20"
                  />
                  
                </a>
                <a className="image-link" href="#">
                  <img
                    className="image"
                    src="https://ld-wt73.template-help.com/wt_prod-29297/images/logo-08-102x20.png"
                    alt=""
                    width="102"
                    height="20"
                  />
                </a>
                <a className="" href="#">
                  <img
                    className=""
                    src="images/logo-09-98x27.png"
                    alt=""
                    width="98"
                    height="27"
                  />
                </a>
              </div>
            </div>
            <div className="col-md-5 col-xl-6">
              <p className="rights">
                <span>© 2020&nbsp;</span>
                <span>Booo</span>
                <span>. All rights reserved.</span>
              </p>
            </div>
            <div className="absolute bg-green-500 size-10 right-10 flex justify-center items-center">
              <a href="/">
                <IoIosArrowUp className="text-white" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
