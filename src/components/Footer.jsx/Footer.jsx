import React from "react";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
         <h1
  class="
    absolute inset-0
    flex items-center justify-center
    text-center font-black leading-none
    text-transparent bg-clip-text
    bg-gradient-to-b from-[#8c8c8c] via-[#2b2b2b] to-[#010101]
    text-6xl sm:text-[10rem] md:text-[14rem]
    opacity-90
    pointer-events-none select-none
    [mask-image:linear-gradient(to_bottom,black_45%,transparent_100%)]
    [-webkit-mask-image:linear-gradient(to_bottom,black_45%,transparent_100%)]
  "
>
  ENCORE
</h1>
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Encore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;