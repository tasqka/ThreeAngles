import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "../../types";

interface ProductsServicesProps {
  sectionTag: string;
  headlineStart: string;
  headlineHighlight: string;
  cards: ProductCard[];
}

export const ProductsServices: React.FC<ProductsServicesProps> = ({
  sectionTag,
  headlineStart,
  headlineHighlight,
  cards,
}) => {
  return (
    <section id="ad-tech" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-12 lg:mb-16">
          <div className="lg:col-span-4">
            <h3 className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-neutral-950 leading-[0.95]">
              {sectionTag}
            </h3>
          </div>

          <div className="lg:col-span-8">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-950 leading-[1.08]">
              <span>{headlineStart}</span>{" "}
              <span className="text-brand-orange-500 block sm:inline">
                {headlineHighlight}
              </span>
            </h2>
          </div>
        </div>

        {/* 3-Column Grid - OUTFRONT Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card) => (
            <div key={card.id} className="flex flex-col group">
              {/* Full-Width Image - No Border Radius */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Below */}
              <div className="mt-5 flex flex-col flex-1">
                <h3 className="font-display text-xl sm:text-2xl font-extrabold text-neutral-950">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-neutral-600 font-normal leading-relaxed flex-1">
                  {card.description}
                </p>

                {/* Arrow Link */}
                <div className="mt-5">
                  <Link
                    to={card.href}
                    className="inline-flex items-center text-neutral-900 group-hover:text-brand-orange-500 transition-colors"
                  >
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
