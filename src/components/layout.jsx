import React from "react";
import {Outlet} from "react-router-dom"
import Footer from "./Footer.jsx/Footer";
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
      { name: "Services", link: "services" },
      { name: "About", link: "about" },
      { name: "Contact", link: "contact" },
    ];
  
  return <>
 
    // {/* 🌟 Navbar Section */}
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
      <Outlet />
      <Footer/>
 </>
  
};

export default Layout;
