import ContactForm from "@/components/ContactForm";
import LimitedOffer from "@/components/LimitedOffer";
import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="h-screen flex flex-col justify-center items-center">
      Contact
      <LimitedOffer/>
      <ContactForm/>
    </div>
  );
};

export default Contact;
