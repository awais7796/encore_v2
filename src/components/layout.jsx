import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer/Footer.jsx";

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
} from "@/components/ui/resizable-navbar";

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <NavbarButton href="#contact">Get Started</NavbarButton>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={menuOpen}>
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                className="text-white text-lg font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <NavbarButton href="#contact" className="mt-4">
              Get Started
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
