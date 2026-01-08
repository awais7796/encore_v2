import React from "react";
import { Link } from "react-router-dom";

const LimitedOffer = () => {
  return (
    <section className="w-full bg-[#0B0F14] py-20 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-7">

        {/* Badge */}
        <span className="
          rounded-full
          border border-white/10
          bg-white/5
          px-4 py-1.5
          text-xs
          font-medium
          uppercase
          tracking-widest
          text-slate-400
        ">
          Limited Time Offer
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          Launch Your Professional Website
        </h2>

        {/* Description */}
        <p className="max-w-2xl text-[15px] sm:text-base leading-relaxed text-slate-400">
          Get an affordable, fast-loading static website perfect for small
          businesses, portfolios, or landing pages. Our SEO-optimized design
          helps you build trust and attract organic traffic from day one.
        </p>

        {/* Price (soft accent, no gradient) */}
        <div className="text-4xl font-bold text-[#E5E7EB]">
          ₹4,000
        </div>

        {/* CTA */}
        <Link to="/contact">
          <button
            className="
              mt-6
              rounded-xl
              bg-[#1F2937]
              px-10 py-3
              text-lg font-medium
              text-white
              border border-white/10
              transition
              hover:bg-[#273449]
              hover:border-white/20
              active:scale-95
            "
          >
            Claim This Offer →
          </button>
        </Link>

      </div>
    </section>
  );
};

export default LimitedOffer;
