import React, { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar"; // your file path

const Home = () => {


  return (
    <>
      {/* Rest of Home Page */}
      <section
        id="hero"
        className=" h-screen flex flex-col justify-center items-center"
      >
        <h1 className="text-4xl font-bold">Launch your dream website</h1>
        <h2>Built for Growth Speed and result</h2>
      </section>
    </>
  );
};

export default Home;
