import React from "react";
import { MapPin } from "lucide-react";

interface PerfectSpotsProps {
  headlinePart1: string;
  headlineHighlight: string;
  headlinePart2: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  mapImage: string;
  billboardImage: string;
  pins: { id: string; x: string; y: string; name: string; format: string }[];
}

export const PerfectSpots: React.FC<PerfectSpotsProps> = ({
  headlinePart1,
  headlineHighlight,
  headlinePart2,
  description,
  buttonText,
  buttonHref,
  mapImage,
  billboardImage,
  pins,
}) => {
  return (
    <section
      id="media-finder"
      className="relative py-16 md:py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: Headline, Description & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-black leading-[0.95]">
              <span>{headlinePart1}</span>{" "}
              <span className="text-brand-orange-500 block sm:inline">
                {headlineHighlight}
              </span>{" "}
              <span>{headlinePart2}</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
              {description}
            </p>

            <div className="mt-8">
              <a
                href={buttonHref}
                className="inline-flex items-center space-x-2 px-8 py-3.5 bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-lg hover:shadow-brand-glow transition-all transform hover:-translate-y-0.5"
              >
                <span>{buttonText}</span>
              </a>
            </div>
          </div>

          {/* Right: Map SVG + Pins + Billboard Image */}
          <div className="lg:col-span-7 relative h-[400px] sm:h-[500px] lg:h-[560px]">
            {/* Map SVG Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={mapImage}
                alt="Sheikh Zayed and 6th of October map"
                className="w-full h-full object-contain opacity-30"
              />
            </div>

            {/* Map Pin Icons */}
            {pins.map((pin) => (
              <div
                key={pin.id}
                className="absolute z-10 flex flex-col items-center"
                style={{ left: pin.x, top: pin.y, transform: "translate(-50%, -100%)" }}
              >
                <div className="bg-brand-orange-500 rounded-full p-2 shadow-lg">
                  <MapPin className="w-5 h-5 text-white" fill="white" />
                </div>
                <div className="w-0.5 h-3 bg-brand-orange-500" />
              </div>
            ))}

            {/* Billboard Image Overlapping Right */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] sm:w-[42%] h-[85%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20">
              <img
                src={billboardImage}
                alt="Billboard display on Sheikh Zayed road"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
