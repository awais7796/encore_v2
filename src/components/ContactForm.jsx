import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-[#0B0F14] py-20 px-4"
    >
      <div className="mx-auto max-w-screen-xl">

        <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">

          {/* LEFT CONTENT — SEO FRIENDLY */}
          <header className="max-w-md space-y-6">

            <p className="text-sm uppercase tracking-widest text-slate-400">
              Contact Us
            </p>

            <h2
              id="contact-heading"
              className="text-4xl font-semibold tracking-tight text-white"
            >
              Ready to Start Your Project?
            </h2>

            <p className="text-slate-400 leading-relaxed">
              Ready to dominate the digital space? As a trusted digital marketing
              agency for growing businesses, we provide a full suite of digital
              marketing services. From powerful SEO strategies to modern web
              solutions, we help brands grow with confidence.
            </p>

            <p className="text-slate-400 leading-relaxed">
              We specialize in WordPress e-commerce development and
              high-converting Shopify stores, supported by data-driven digital
              marketing campaigns that deliver measurable results.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Let’s discuss how our custom React and Next.js development along
              with targeted campaigns can accelerate your business growth.
              Get in touch today.
            </p>

            {/* CONTACT INFO */}
            <address className="not-italic space-y-2 border-t border-white/10 pt-4 text-slate-400">
              <p className="font-medium text-white">
                You can also reach us at:
              </p>

              <p>
                Email:{" "}
                <a
                  href="mailto:outways.in@gmail.com"
                  className="underline underline-offset-4 hover:text-white transition"
                >
                  outways.in@gmail.com
                </a>
              </p>

              <p>
                Phone:{" "}
                <a
                  href="tel:+918830441461"
                  className="underline underline-offset-4 hover:text-white transition"
                >
                  +91-8830441461
                </a>
              </p>
            </address>

          </header>

          {/* RIGHT CONTENT — FORM */}
          <div
            className="
              w-full
              max-w-xl
              rounded-xl
              border border-white/10
              bg-[#0E131A]
              p-8 sm:p-10
            "
          >
            <form className="space-y-6" noValidate>

              <fieldset className="flex flex-col gap-4 sm:flex-row">
                <legend className="sr-only">Name</legend>

                <div className="w-full">
                  <Label htmlFor="firstname" className="text-slate-300">
                    First Name
                  </Label>
                  <Input
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    className="mt-1 bg-[#0B0F14] border-white/10 text-white placeholder:text-slate-500"
                  />
                </div>

                <div className="w-full">
                  <Label htmlFor="lastname" className="text-slate-300">
                    Last Name
                  </Label>
                  <Input
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    className="mt-1 bg-[#0B0F14] border-white/10 text-white placeholder:text-slate-500"
                  />
                </div>
              </fieldset>

              <div>
                <Label htmlFor="email" className="text-slate-300">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  className="mt-1 bg-[#0B0F14] border-white/10 text-white placeholder:text-slate-500"
                />
              </div>

              <div>
                <Label htmlFor="subject" className="text-slate-300">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  className="mt-1 bg-[#0B0F14] border-white/10 text-white placeholder:text-slate-500"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-slate-300">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Type your message here"
                  className="mt-1 min-h-[120px] bg-[#0B0F14] border-white/10 text-white placeholder:text-slate-500"
                />
              </div>

              <Button
                type="submit"
                className="
                  w-full
                  bg-[#1F2937]
                  text-white
                  border border-white/10
                  hover:bg-[#273449]
                "
              >
                Send Message
              </Button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
