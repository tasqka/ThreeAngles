import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronDown, ChevronRight, ArrowDown } from "lucide-react";
import { PerfectSpots } from "../components/sections/PerfectSpots";
import { landingContent } from "../data/content";

const marketsData = [
  {
    state: "El Sheikh Zayed",
    cities: [
      "26th of July Corridor",
      "Cairo–Alexandria Desert Road",
      "Ring Road (Al Da'ery)",
      "Wahat (Oasis) Road",
      "Northern Waslet Dahshour Road",
      "Southern Waslet Dahshour Road",
      "Rod El Farag Axis",
      "Middle Ring Road",
      "First District",
      "Second District",
      "Fourth District",
      "Eighth District",
      "Eleventh District",
      "Green Revolution (Al-Thawra Al-Khadraa)",
      "Inner Zayed",
    ],
  },
  {
    state: "6th of October",
    cities: [
      "26th of July Corridor",
      "Al Mehwar Al Markazi (Central Axis)",
      "Gamal Abdel Nasser Corridor",
      "6th of October Road",
      "Al Motamayez (El Motamayez) District",
      "Juhayna Square",
    ],
  },
];

const allDistricts = marketsData.flatMap((market) =>
  market.cities.map((city) => ({
    district: city,
    area: market.state,
  }))
);

export const Markets: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const marketsListRef = useRef<HTMLDivElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const query = searchQuery.toLowerCase().trim();

  const filteredDistricts = query
    ? allDistricts.filter(
        (item) =>
          item.district.toLowerCase().includes(query) ||
          item.area.toLowerCase().includes(query)
      )
    : [];

  const showSearchResults = query.length > 0 && isSearchFocused;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToMarkets = () => {
    marketsListRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-brand-orange-500 overflow-hidden">
        {/* Diagonal Stripes Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 40px,
                rgba(255,255,255,0.1) 40px,
                rgba(255,255,255,0.1) 80px
              )`,
            }}
          />
          <div className="absolute -right-20 -top-20 w-[600px] h-[600px] bg-purple-600 rounded-full opacity-30 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 w-[400px] h-[400px] bg-purple-800 rounded-full opacity-40 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[0.95]">
              <span className="block">REACH YOUR</span>
              <span className="block">AUDIENCE WITH</span>
              <span className="block">EASE</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-white/80 font-normal leading-relaxed max-w-lg">
              Our media reaches 7 out of 10 Americans weekly. That's one big
              audience—and a lot of dots on the map.
            </p>

            {/* Search Bar */}
            <div ref={searchContainerRef} className="mt-8 relative max-w-xl">
              <Search className="w-5 h-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search your market by location or district"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                className="w-full pl-12 pr-4 py-4 bg-white rounded-full text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-orange-300 shadow-lg text-sm"
              />

              {/* Search Results Dropdown */}
              {showSearchResults && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-neutral-100 overflow-hidden z-50 max-h-80 overflow-y-auto">
                  {filteredDistricts.length > 0 ? (
                    <div className="py-2">
                      {filteredDistricts.map((item) => (
                        <div
                          key={`${item.area}-${item.district}`}
                          className="flex items-center justify-between px-5 py-3 hover:bg-neutral-50 cursor-pointer transition-colors"
                        >
                          <span className="text-sm font-medium text-neutral-900">
                            {item.district}
                          </span>
                          <span
                            className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                              item.area === "El Sheikh Zayed"
                                ? "bg-purple-100 text-purple-700"
                                : "bg-brand-orange-100 text-brand-orange-700"
                            }`}
                          >
                            {item.area}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="px-5 py-6 text-center">
                      <p className="text-sm text-neutral-500">
                        No districts found for "{searchQuery}"
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Scroll Indicator */}
            <button
              onClick={scrollToMarkets}
              className="mt-8 flex items-center space-x-2 text-white/80 hover:text-white transition-colors group"
            >
              <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center group-hover:border-white transition-colors">
                <ArrowDown className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium">Scroll to see all markets</span>
            </button>
          </div>
        </div>
      </section>

      {/* Markets List Section */}
      <section ref={marketsListRef} className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Title */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-950 leading-[0.95]">
                  EGYPT
                </h2>
                <p className="mt-6 text-base text-neutral-600 leading-relaxed max-w-sm">
                  Engage audiences in the real world, where they live, travel, and shop.
                  Use the map to find the right market to reach your desired audiences.
                </p>
              </div>
            </div>

            {/* Right: States & Cities */}
            <div className="lg:col-span-8">
              <div className="space-y-0">
                {marketsData.map((market, index) => (
                  <div
                    key={market.state}
                    className={`flex flex-col sm:flex-row sm:items-start py-5 border-b border-neutral-200 ${
                      index === 0 ? "border-t" : ""
                    }`}
                  >
                    {/* State Name */}
                    <div className="sm:w-48 lg:w-56 shrink-0 mb-2 sm:mb-0">
                      <h3 className="font-display text-lg font-bold text-neutral-950 uppercase tracking-tight">
                        {market.state}
                      </h3>
                    </div>

                    {/* Cities */}
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-x-6 gap-y-1">
                        {market.cities.map((city) => (
                          <span
                            key={city}
                            className="text-sm text-neutral-600 hover:text-brand-orange-500 cursor-pointer transition-colors"
                          >
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Perfect Spots Section */}
      <PerfectSpots
        headlinePart1="DISCOVER THE"
        headlineHighlight="PERFECT SPOTS"
        headlinePart2="FOR YOUR MESSAGE"
        description="Find the right out-of-home screens in your desired city or market. Search our inventory across the top 50 markets. Search by address or enter a zip code today."
        buttonText="Browse Media Finder"
        buttonHref="/media"
        mapImage={landingContent.perfectSpots.mapImage}
        billboardImage={landingContent.perfectSpots.billboardImage}
        pins={landingContent.perfectSpots.pins}
      />
    </div>
  );
};
