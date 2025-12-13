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
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "services" },
    { name: "About", link: "about" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <>
      {/* 🌟 Navbar Section */}
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <NavbarButton variant="dark">Get Started</NavbarButton>
        </NavBody>

        {/* 📱 Mobile Nav */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="text-black dark:text-white text-lg font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <NavbarButton variant="dark" className="mt-4">
              Get Started
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Rest of Home Page */}
      <section id="hero" className="h-screen flex justify-center items-center">
        <h1 className="text-4xl font-bold">Welcome to My Website 🚀</h1>
      </section>

      <h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
        similique ad necessitatibus nobis perspiciatis numquam enim, molestias
        earum velit perferendis sint aliquid pariatur architecto quia veritatis
        iusto minus quam, temporibus, vero cupiditate. Dolore necessitatibus
        veritatis, repellendus natus quas optio.
      </h1>
    </>
  );
};

export default Home;
