import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TabContent } from "../../types";

interface PowerOfIrlMediaProps {
  image: {
    src: string;
    alt: string;
  };
  tabs: TabContent[];
}

export const PowerOfIrlMedia: React.FC<PowerOfIrlMediaProps> = ({
  image,
  tabs,
}) => {
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id || "brands");
  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <section className="relative w-full overflow-hidden bg-neutral-900 min-h-[85vh] lg:min-h-[95vh]">
      <div className="relative w-full h-full grid grid-cols-1 lg:grid-cols-12 min-h-[85vh] lg:min-h-[95vh]">
        {/* Left: Tab-Specific Image */}
        <div className="lg:col-span-6 relative min-h-[40vh] lg:min-h-full overflow-hidden clip-diagonal-left">
          <img
            src={activeTab.image || image.src}
            alt={activeTab.imageAlt || image.alt}
            className="w-full h-full object-cover object-right absolute inset-0 zoomed-rotate transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:hidden" />
        </div>

        {/* Right: Orange Diagonal Angled Panel */}
        <div className="lg:col-span-6 relative bg-brand-orange-500 text-white p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-center z-10 clip-diagonal-right min-h-[40vh] lg:min-h-full">
          <div className="max-w-xl">
            {/* Simplified Tab Navigation */}
            <div className="flex flex-wrap items-center gap-2 mb-8 lg:mb-12">
              {tabs.map((tab) => {
                const isActive = tab.id === activeTabId;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTabId(tab.id)}
                    className={`px-5 py-2.5 text-sm sm:text-base font-bold tracking-wide transition-all duration-200 rounded-full ${
                      isActive
                        ? "bg-white text-brand-orange-600 shadow-md"
                        : "text-white/80 hover:text-white hover:bg-white/15"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Dynamic Content based on Active Tab */}
            <div className="animate-fadeIn min-h-[280px] lg:min-h-[320px] flex flex-col justify-center">
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tight leading-[0.95] text-white">
                {activeTab.headline}
              </h2>

              <p className="mt-6 lg:mt-8 text-white/95 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-lg">
                {activeTab.body}
              </p>

              {/* Bottom Link Action */}
              <div className="mt-8 lg:mt-12">
                <Link
                  to={activeTab.linkHref}
                  className="inline-flex items-center space-x-2 text-sm sm:text-base font-bold text-white uppercase tracking-wider hover:underline group"
                >
                  <span>{activeTab.linkText}</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
