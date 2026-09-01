import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import billboardSvg from "../../assets/BillboardIllustration.svg";

interface CtaBandProps {
  headlineStart: string;
  buttonText: string;
  headlineEnd: string;
  subheadline: string;
  bgImage: string;
}

export const CtaBand: React.FC<CtaBandProps> = ({
  headlineStart,
  buttonText,
  headlineEnd,
  subheadline,
  bgImage,
}) => {
  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 bg-black text-white overflow-hidden"
    >
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Nighttime urban billboards lighting up the skyline"
          className="w-full h-full object-cover opacity-35 filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/70" />
      </div>

      {/* Billboard SVG Outline Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-start pointer-events-none pl-8 sm:pl-16 lg:pl-24">
        <img
          src={billboardSvg}
          alt=""
          className="w-[55%] sm:w-[50%] lg:w-[45%] h-auto opacity-15"
          style={{ filter: "brightness(0) invert(0.5)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Central Headline with Inline Orange CTA Pill */}
        <div className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[1.05] max-w-5xl mx-auto">
          <span>{headlineStart}</span>{" "}
          <Link
            to="/media-finder"
            className="inline-flex items-center space-x-2 px-6 sm:px-10 py-2 sm:py-3.5 my-2 sm:my-0 bg-brand-orange-500 hover:bg-brand-orange-600 active:bg-brand-orange-700 text-white rounded-full shadow-2xl hover:shadow-brand-glow transform hover:scale-105 transition-all text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-normal align-middle"
          >
            <span>{buttonText}</span>
            <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 inline" />
          </Link>{" "}
          <span className="block sm:inline">{headlineEnd}</span>
        </div>

        {/* Subtitle */}
        <p className="mt-8 text-lg sm:text-2xl text-neutral-300 font-light max-w-xl mx-auto">
          {subheadline}
        </p>
      </div>
    </section>
  );
};
