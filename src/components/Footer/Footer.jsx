import React from "react";

const Footer = () => {
  return (
    <footer className="relative mt-32 overflow-hidden bg-black text-white">
      
      {/* Footer Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        
        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Design</li>
              <li>Development</li>
              <li>Branding</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Blog</li>
              <li>Docs</li>
              <li>Support</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
          
        


        </div>


        {/* Copyright */}
        <p className="text-sm opacity-70">
          &copy; {new Date().getFullYear()} Encore. All rights reserved.
        </p>
      </div>

      {/* Big Brand Text — AFTER everything */}
      <h1
        className="
          absolute bottom-0 left-0 right-0
          text-center font-black leading-none
          text-transparent bg-clip-text
          bg-gradient-to-b from-[#8c8c8c] via-[#2b2b2b] to-[#010101]
          text-6xl sm:text-[10rem] md:text-[14rem]
          opacity-80
          pointer-events-none select-none
          translate-y-1/3
          [mask-image:linear-gradient(to_top,black_40%,transparent_100%)]
          [-webkit-mask-image:linear-gradient(to_top,black_40%,transparent_100%)]
        "
      >
        ENCORE
      </h1>
    </footer>
  );
};

export default Footer;
