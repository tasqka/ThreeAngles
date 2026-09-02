import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import React, { useState } from "react";

interface TestimonialItem {
  quote: string;
  author: string;
  title: string;
  company: string;
  avatar: string;
}

interface TestimonialProps {
  sectionTag: string;
  items: TestimonialItem[];
}

export const Testimonial: React.FC<TestimonialProps> = ({
  sectionTag,
  items,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const active = items[currentIndex];

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setAnimKey((k) => k + 1);
  };
  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setAnimKey((k) => k + 1);
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Section Label & Controls */}
          <div className="lg:col-span-3 flex flex-col justify-between h-full">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-neutral-950 leading-[0.95]">
                {sectionTag}
              </h3>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center space-x-3 mt-6 lg:mt-12">
              <button
                onClick={goPrev}
                aria-label="Previous quote"
                className="w-12 h-12 rounded-full border border-neutral-300 hover:border-brand-orange-500 hover:text-brand-orange-500 flex items-center justify-center text-neutral-600 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goNext}
                aria-label="Next quote"
                className="w-12 h-12 rounded-full border border-neutral-300 hover:border-brand-orange-500 hover:text-brand-orange-500 flex items-center justify-center text-neutral-600 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right: Angled Container with Massive Quote & Author Info */}
          <div className="lg:col-span-9 relative bg-neutral-50 rounded-3xl p-8 sm:p-12 lg:p-16 border border-neutral-100 shadow-sm clip-diagonal-testimonial min-h-[380px]">
            <div key={animKey} className="animate-testimonial">
              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-brand-orange-500 flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 fill-current" />
              </div>

              {/* Pull Quote */}
              <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black uppercase tracking-tight text-neutral-900 leading-[1.1]">
                <span className="text-brand-orange-500">
                  {active.quote.slice(0, 29)}
                </span>
                <span>{active.quote.slice(29)}</span>
              </blockquote>

              {/* Author Profile */}
              <div className="mt-8 pt-8 border-t border-neutral-200 flex items-center space-x-4">
                <img
                  src={active.avatar}
                  alt={active.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-orange-500 shadow-md"
                />
                <div>
                  <div className="font-display text-base sm:text-lg font-black uppercase text-neutral-900 tracking-wide">
                    {active.author}
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-600 font-medium">
                    {active.title},{" "}
                    <span className="font-semibold text-neutral-800">
                      {active.company}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
