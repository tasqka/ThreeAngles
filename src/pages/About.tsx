import { Play } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const tabs = [
  { id: "leadership", label: "Leadership" },
  { id: "agency-solutions", label: "Agency Solutions" },
  { id: "impact", label: "Impact" },
];

export const About: React.FC = () => {
  const [expandedBrand, setExpandedBrand] = useState(false);
  const [activeTab, setActiveTab] = useState("leadership");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative pt-28 pb-0 md:pt-36 overflow-hidden"
        style={{ backgroundColor: "#ea580c" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-sm text-white/60">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">About Us</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.95]">
            ABOUT US
          </h1>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-sm font-semibold transition-colors ${
                  activeTab === tab.id
                    ? "text-brand-orange-500 border-b-2 border-brand-orange-500 pb-1"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="w-full h-[400px] sm:h-[500px] lg:h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80"
          alt="Threeangles outdoor advertising"
          className="w-full h-full object-cover"
        />
      </section>

      {/* We Are Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Sticky Headline */}
            <div className="lg:col-span-6">
              <div className="lg:sticky lg:top-32">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-950 leading-[1.1]">
                  THREEANGLES.
                  <br />
                  ALL ANGLES COVERED.
                </h2>
              </div>
            </div>

            {/* Right: Description */}
            <div className="lg:col-span-6 space-y-8">
              <p className="text-base text-neutral-700 leading-relaxed">
                THREEANGLES is one of Egypt's leading IRL media companies, built
                to do more than be seen. We create breakthrough experiences that
                engage, influence, and drive impact. Through creative
                excellence, high-impact environments, and intelligent audience
                data, we help brands move people, show up with relevance, and
                make a lasting impression.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed">
                Our media lives where life happens, embedded in the culture and
                landscape of cities and the flow of everyday movement. It's not
                just seen — it's felt, and part of the cultural fabric, creating
                meaningful connections between brands and the audiences they
                serve.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed">
                We're redefining out of home by bringing intelligence,
                flexibility, and digital innovation to scale, turning physical
                presence into measurable impact and real-world influence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-orange-500 mb-4">
            This is our brand.
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-950 leading-[1.1] max-w-2xl mx-auto">
            Build trust. Shape Culture. Drive Results.
          </h2>

          {/* Video/Image Card */}
          <div className="mt-12 relative max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80"
              alt="Brand video"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button className="w-20 h-20 rounded-full bg-brand-orange-500/90 hover:bg-brand-orange-500 flex items-center justify-center transition-all hover:scale-110 shadow-xl">
                <Play className="w-8 h-8 text-white ml-1" fill="white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Our Brand Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Sticky Headline */}
            <div className="lg:col-span-6">
              <div className="lg:sticky lg:top-32">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-950 leading-[1.1]">
                  Experience Our Brand.
                </h2>
              </div>
            </div>

            {/* Right: Vision, Mission, Pillars */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <h3 className="text-sm font-bold text-brand-orange-500 mb-2">
                  Our Vision:
                </h3>
                <p className="text-base text-neutral-700 leading-relaxed">
                  Media solutions that enable brands to win in today's action
                  economy.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-brand-orange-500 mb-2">
                  Our Mission:
                </h3>
                <p className="text-base text-neutral-700 leading-relaxed">
                  To pioneer the next generation of brand and consumer
                  experiences.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-brand-orange-500 mb-2">
                  How We Do It:
                </h3>
                <p className="text-base text-neutral-700 leading-relaxed">
                  Create breakthrough IRL experiences to engage, influence, and
                  impact.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-brand-orange-500 mb-2">
                  Our Brand Pillars:
                </h3>

                {/* Expandable content */}
                <div className="relative">
                  <p className="text-base text-neutral-700 leading-relaxed">
                    <strong>Build Trust:</strong> Our physical medium engages
                    with people every day in shared spaces across cities and
                    local communities.
                  </p>

                  {!expandedBrand && (
                    <div
                      className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.5) 40%, white 100%)",
                      }}
                    />
                  )}
                </div>

                <div
                  className="overflow-hidden transition-all duration-700 ease-in-out"
                  style={{ maxHeight: expandedBrand ? "400px" : "0px" }}
                >
                  <p className="text-base text-neutral-700 leading-relaxed mb-4">
                    <strong>Influence:</strong> We shape culture by connecting
                    brands with audiences in the moments and places that matter
                    most.
                  </p>
                  <p className="text-base text-neutral-700 leading-relaxed mb-4">
                    <strong>Innovation:</strong> We push the boundaries of what
                    out-of-home can do through digital technology, data-driven
                    targeting, and creative excellence.
                  </p>
                  <p className="text-base text-neutral-700 leading-relaxed">
                    <strong>Impact:</strong> We deliver measurable results that
                    drive real business outcomes for our partners.
                  </p>
                </div>

                <div className="mt-6">
                  <button
                    onClick={() => setExpandedBrand(!expandedBrand)}
                    className="inline-flex items-center space-x-2 px-8 py-3.5 bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-lg hover:shadow-brand-glow transition-all transform hover:-translate-y-0.5"
                  >
                    <span>{expandedBrand ? "Show Less" : "Read More"}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
