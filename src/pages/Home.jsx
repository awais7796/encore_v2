import React from "react";
import { Link } from "react-router-dom";

import LimitedOffer from "@/components/LimitedOffer";
import ContactForm from "@/components/ContactForm";

const Home = () => {
  return (
    <> 
    <main className="h-screen text-amber-100 bg-black">
      hello from encore 
    </main>
      <LimitedOffer />
      <ContactForm/>
    
    </>
  );
};

export default Home;
