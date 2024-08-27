"use client";
import React, { useState, useEffect } from "react";
import { FaFacebookMessenger } from "react-icons/fa6";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
// Nav items
const navItems = [
  { name: "About me", path: "#about-me" },
  { name: "Portfolio", path: "#portfolio" },
  { name: "Testimonials", path: "#testimonials" },
  { name: "Contact", path: "#contact" },
  { name: "Blog", path: "#blog" },
];

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [showNewsletter2, setShowNewsletter2] = useState(false);

  // Toggle menu visibility
  const handleNav = () => setOpenMenu(!openMenu);

  // Toggle newsletter visibility
  const toggleNewsletter = () => setShowNewsletter(!showNewsletter);
  const toggleNewsletter2 = () => setShowNewsletter2(!showNewsletter2);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const element = document.getElementById("header");

      if (window.scrollY > 50) {
        element?.classList.add("bg-white");
        element?.classList.remove("bg-transparent");
      } else {
        element?.classList.remove("bg-white");
        element?.classList.add("bg-transparent");
      }

      navItems.forEach((item) => {
        const section = document.querySelector(item.path);
        if (
          section &&
          section.offsetTop <= window.scrollY + 100 &&
          section.offsetTop + section.offsetHeight > window.scrollY + 100
        ) {
          setActiveSection(item.path);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="rd-navbar-wrap rd-navbar-wrap-absolute">
      <nav className="rd-navbar rd-navbar-original rd-navbar-fullwidth">
        <div id="header" className="font-sans z-50 fixed h-20 w-full bg-transparent flex justify-between items-center transition-colors duration-300">
          <div className="w-full flex justify-between items-center pt-16 pb-5">
            <div className="navbar-panel hidden lg:flex">
              <div className="navbar-cell navbar-subpanel-contact w-[60px] h-[300px] mr-5">
                <div className={scrollY > 100 ? "contact-btn-fixed"  : "navbar-contact"}>
                  <button
                    className={`rd-navbar-fullwidth  navbar-contact-btn ${isActive ? "active" : ""}`}
                    onClick={toggleNewsletter2}
                  >
                    <span></span>
                  </button>
                  <div className={isActive ? "navbar-contact-active" : "navbar-contact-body"}>
                    <div className="navbar-contact-title h4">Join My Newsletter</div>
                    <form
                      className="rd-form rd-form-inline rd-mailform"
                      data-form-output="newsletter-navbar"
                      data-form-type="subscribe"
                      method="post"
                      action="components/rd-mailform/rd-mailform.php"
                      noValidate
                    >
                      <div className="form-group">
                        <input
                          className="form-control form-control-sm form-control-has-validation form-control-last-child"
                          type="email"
                          name="email"
                          placeholder="E-mail"
                          data-constraints="@Email @Required"
                          id="regula-generated-984968"
                        />
                        <span className="form-validation"></span>
                      </div>
                      <button className="btn btn-sm btn-primary" type="submit">
                        Subscribe
                      </button>
                    </form>
                    <div className="form-output snackbar snackbar-primary" id="newsletter-navbar"></div>
                  </div>
                </div>
              </div>
              <div className="navbar-logo">
                <a className="navbar-logo-link" href="index.html">
                  <img
                    className="navbar-logo-default"
                    src="https://ld-wt73.template-help.com/wt_prod-29297/images/logo-default-228x67.png"
                    alt="Booo"
                    width="114"
                    height="33"
                  />
                  <img
                    className="navbar-logo-inverse"
                    src="images/logo-inverse-228x67.png"
                    alt="Booo"
                    width="114"
                    height="33"
                  />
                </a>
              </div>
            </div>
            <div>
              <ul className="hidden lg:flex list-none gap-5">
                {navItems.map((item) => (
                  <li
                    className={`text-black px-0 mx-8 duration-1000 navbar-navigation-root-item border-n`}
                    key={item.path}
                  >
                    <Link
                      className={`navbar-navigation-root-link pb-3 ${activeSection === item.path ? "border-b border-orange" : ""}`}
                      href={item.path}
                    >
                      {item.name}
                    </Link>

                  </li>
                ))}
                <li className="navbar-navigation-root-item">
                  <div className="text-green-500 hover:text-pink-300 cursor-pointer">
                    <FaFacebookMessenger size={30} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Mobile view */}
          <div className="lg:hidden flex justify-between bg-white">
            <div className="cursor-pointer absolute left-5 text-black hover:text-green-500">
              <IoMdMenu onClick={handleNav} size={30} />
            </div>
            <div>
              {openMenu && (
                <div className="fixed h-full w-80 list-none gap-5 bg-white shadow-lg text-black top-20 translate-x-0 duration-700 ease-out left-0 animate-slide-down">
                  <ul className="flex flex-col pl-3 gap-1">
                    {navItems.map((item) => (
                      <li
                        className={`py-3 text-black duration-1000 navbar-navigation-root-item ${activeSection === item.path ? "border-b-2 border-blue-500" : ""}`}
                        key={item.path}
                      >
                        <Link className="navbar-navigation-root-link" href={item.path}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <li>
              <div className="absolute left-36 md:left-[50%]">
                <button className="navbar-switch mdi-menu novi-icon" data-multi-switch=""></button>
                <div className="navbar-logo">
                  <a className="navbar-logo-link" href="index.html">
                    <img
                      className="navbar-logo-default"
                      src="https://ld-wt73.template-help.com/wt_prod-29297/images/logo-default-228x67.png"
                      alt="Booo"
                      width="114"
                      height="33"
                    />
                    <img
                      className="navbar-logo-inverse"
                      src="images/logo-inverse-228x67.png"
                      alt="Booo"
                      width="114"
                      height="33"
                    />
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="text-black hover:text-pink-300 cursor-pointer">
                <HiOutlineDotsVertical size={18} className="mr-3" onClick={toggleNewsletter} />
              </div>
            </li>
            <li className="flex items-center pr-2">
              <div className="text-green-500 hover:text-pink-300 cursor-pointer">
                <FaFacebookMessenger size={18} />
              </div>
            </li>
          </div>
        </div>
        {/* Newsletter Form */}
        {showNewsletter && (
          <div className="absolute top-20 left-0 w-full bg-white py-5 transition-all duration-500 ease-in-out shadow-lg z-40">
            <div className="text-center font-semibold text-lg mb-4">Join My Newsletter</div>
            <form className="flex justify-center">
              <input
                className="border rounded-l-lg px-4 py-2 w-64 focus:outline-none"
                type="email"
                placeholder="E-mail"
              />
              <button className="bg-red-500 text-white px-6 py-2 rounded-r-lg">SUBSCRIBE</button>
            </form>
          </div>
        )}
        {showNewsletter2 && (
          <div className="absolute top-0 left-0 w-[344px] h-[ 308px] bg-orange py-5 transition-all duration-500 ease-in-out shadow-lg z-40">
            <div className="text-center font-semibold text-lg mb-4">Join My NewsLetter</div>
            <form className="flex justify-center">
              <input
                className="border rounded-l-lg px-4 py-2 w-64 focus:outline-none"
                type="email"
                placeholder="E-mail"
              />
              <button className="bg-red-500 text-white px-6 py-2 rounded-r-lg">SUBSCRIBE</button>
            </form>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
