import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import { landingContent } from "../data/content";
import { FeaturedCaseStudies } from "../components/sections/FeaturedCaseStudies";
import { SEO } from "../components/SEO";

const monorailFormats = [
  {
    id: "station-dominations",
    title: "Station Dominations",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "platform-displays",
    title: "Platform Displays",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "train-wraps",
    title: "Train Wraps",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "digital-screens",
    title: "Digital Screens",
    image: "https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&w=600&q=80",
  },
];

const resources = [
  {
    title: "Production Guidance",
    description: "Explore our library of creative specs for the various creative formats available within our Media options.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=400&q=80",
    href: "/resources/specs",
  },
  {
    title: "Preview Tool",
    description: "Upload your brand creative for a preview of the impact our various formats.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
    href: "/resources/media-preview-tool",
  },
  {
    title: "Creative Best Practices",
    description: "Check out our creative guidelines that will help foster the creation of dynamic and powerful digital creatives.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=400&q=80",
    href: "/resources/creative-best-practices",
  },
];

const faqs = [
  {
    question: "What monorail advertising formats are available?",
    answer: "We offer station dominations, platform displays, train wraps, interior branding, and digital screens throughout the Cairo Monorail network connecting Sheikh Zayed and 6th of October.",
  },
  {
    question: "How effective is monorail advertising?",
    answer: "Monorail advertising reaches thousands of daily commuters with extended dwell times. Passengers spend an average of 20+ minutes in stations, providing sustained exposure to your brand message.",
  },
  {
    question: "Can I target specific stations or routes?",
    answer: "Yes, you can choose individual stations, groups of stations, or full network domination. Our team helps you select the optimal placement based on your target audience and campaign goals.",
  },
  {
    question: "What are the creative specifications for monorail ads?",
    answer: "Creative specs vary by format. Station dominations allow full environmental branding, while platform displays and digital screens have standard dimensions. Contact our team for detailed specifications.",
  },
];

export const Monorail: React.FC = () => {
  const [expandedDesc, setExpandedDesc] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Monorail Advertising"
        description="Reach commuters with monorail advertising across Cairo's new monorail network. High-frequency exposure to daily transit riders."
        path="/media/monorail"
      />
      {/* Hero Section */}
      <section className="relative pt-28 pb-0 md:pt-36 overflow-hidden" style={{ backgroundColor: '#ea580c' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-white/60">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/media" className="hover:text-white transition-colors">
              Media
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Monorail</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.95]">
            OOH MONORAIL
            <br />
            <span className="text-white/80">ADVERTISING</span>
          </h1>
        </div>

        {/* Hero Image */}
        <div className="mt-8 w-full h-[400px] sm:h-[500px] lg:h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1600&q=80"
            alt="Monorail advertising display"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Sticky Headline */}
            <div className="lg:col-span-7">
              <div className="lg:sticky lg:top-32">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-950 leading-[1.1]">
                  Capture daily
                  <br />
                  commuters with
                  <br />
                  monorail advertising
                  <br />
                  that delivers sustained
                  <br />
                  brand exposure.
                </h2>
              </div>
            </div>

            {/* Right: Scrolling Description */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                {/* Visible text + gradient overlay wrapper */}
                <div className="relative">
                  <p className="text-base text-neutral-700 leading-relaxed mb-6">
                    The Cairo Monorail connects Sheikh Zayed and 6th of October
                    with thousands of daily commuters. Monorail advertising offers
                    extended dwell times and sustained brand exposure that few other
                    media formats can match.
                  </p>
                  <p className="text-base text-neutral-700 leading-relaxed mb-6">
                    Passengers spend an average of 20+ minutes in stations,
                    providing repeated exposure to your brand message. From platform
                    displays to full station dominations, monorail advertising creates
                    immersive brand experiences that drive recall and engagement.
                  </p>
                  <p className="text-base text-neutral-700 leading-relaxed">
                    THREEANGLES offers a comprehensive suite of monorail advertising
                    options including station dominations, platform displays, train wraps,
                    interior branding, and digital screens throughout the network. Each
                    format is designed to maximize visibility and audience engagement.
                  </p>

                  {/* Blur fade at bottom of visible text when collapsed */}
                  {!expandedDesc && (
                    <div
                      className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                      style={{
                        background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.5) 40%, white 100%)",
                      }}
                    />
                  )}
                </div>

                {/* Hidden expanded text */}
                <div
                  className="overflow-hidden transition-all duration-700 ease-in-out"
                  style={{ maxHeight: expandedDesc ? "600px" : "0px" }}
                >
                  <p className="text-base text-neutral-700 leading-relaxed mb-6">
                    Our station domination packages transform entire monorail stations
                    into branded environments, ensuring your message is impossible to
                    miss. Platform displays target passengers during their wait time,
                    while train wraps and interior branding create a captive audience
                    experience throughout the journey.
                  </p>
                  <p className="text-base text-neutral-700 leading-relaxed">
                    Digital screens throughout the network offer dynamic content
                    capabilities, allowing for dayparting, sequential messaging, and
                    real-time content updates. Whether you are looking to build brand
                    awareness, promote a product launch, or drive foot traffic to your
                    business, monorail advertising delivers unmatched reach and frequency
                    among engaged commuters.
                  </p>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => setExpandedDesc(!expandedDesc)}
                    className="inline-flex items-center space-x-2 px-8 py-3.5 bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-lg hover:shadow-brand-glow transition-all transform hover:-translate-y-0.5"
                  >
                    <span>{expandedDesc ? "Show Less" : "Read More"}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-brand-orange-500">
                20min
              </div>
              <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
                <strong>Average Dwell Time</strong> — Commuters spend 20+ minutes
                in stations providing sustained brand exposure.
              </p>
            </div>
            <div className="text-center">
              <div className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-brand-orange-500">
                50K+
              </div>
              <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
                <strong>Daily Riders</strong> — Thousands of commuters pass through
                the Monorail network every day.
              </p>
            </div>
            <div className="text-center">
              <div className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-brand-orange-500">
                73%
              </div>
              <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
                <strong>Brand Recall</strong> — Monorail advertising drives
                significantly higher brand recall than other transit formats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* View Our Monorail Formats Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Title */}
            <div className="lg:col-span-5">
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-950 leading-[0.95]">
                VIEW OUR
                <br />
                MONORAIL
                <br />
                <span className="text-brand-orange-500">ADVERTISING</span>
                <br />
                FORMATS
              </h2>
            </div>

            {/* Right: Description */}
            <div className="lg:col-span-7">
              <p className="text-base text-neutral-600 leading-relaxed max-w-lg">
                Find the right format to reach your desired audiences. Our
                monorail advertising options are designed to connect with commuters
                and deliver sustained brand exposure.
              </p>
            </div>
          </div>

          {/* Monorail Formats Grid */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {monorailFormats.map((format) => (
              <Link
                key={format.id}
                to={`/media/monorail#${format.id}`}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={format.image}
                  alt={format.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    {format.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* View Our National Media Kit Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-5">
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-950 leading-[0.95]">
                VIEW OUR
                <br />
                <span className="text-brand-orange-500">NATIONAL</span>
                <br />
                <span className="text-brand-orange-500">MEDIA KIT</span>
              </h2>

              <p className="mt-6 text-base text-neutral-600 leading-relaxed max-w-md">
                From monorail stations to digital screens, THREEANGLES has
                a diverse media set across our national footprint, including the top
                ten markets. Learn more about our media and the power of OOH.
              </p>

              <div className="mt-8">
                <a
                  href="#"
                  className="inline-flex items-center space-x-2 px-8 py-3.5 bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Now</span>
                </a>
              </div>
            </div>

            {/* Right: Media Kit Images */}
            <div className="lg:col-span-7 relative h-[400px] sm:h-[500px]">
              <div className="absolute left-0 top-0 w-[55%] h-[80%] rounded-2xl overflow-hidden shadow-2xl z-10">
                <img
                  src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80"
                  alt="Media kit document"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute right-0 bottom-0 w-[55%] h-[80%] rounded-2xl overflow-hidden shadow-2xl z-20">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
                  alt="Media kit presentation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Sticky Headline */}
            <div className="lg:col-span-6">
              <div className="lg:sticky lg:top-32">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-950 leading-[0.95]">
                  FAQs About
                  <br />
                  Monorail
                  <br />
                  <span className="text-brand-orange-500">Advertising</span>
                </h2>
              </div>
            </div>

            {/* Right: Scrolling FAQ Items */}
            <div className="lg:col-span-6 space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-neutral-200 pb-6">
                  <h3 className="font-display text-lg font-bold text-neutral-950 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies Section */}
      <FeaturedCaseStudies
        tag="Featured Case Studies"
        subheadline="Discover our latest and greatest tailor-made solutions for our partners."
        items={landingContent.caseStudies.items.slice(0, 6)}
      />

      {/* Resources Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Title */}
            <div className="lg:col-span-4">
              <p className="text-sm font-bold uppercase tracking-wider text-brand-orange-500 mb-4">
                Resources
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-neutral-950 leading-[0.95]">
                From creative best
                <br />
                practices to
                <br />
                preview
                <br />
                visualizations &
                <br />
                specs.{" "}
                <span className="text-brand-orange-500">We got you covered.</span>
              </h2>
            </div>

            {/* Right: Resource Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources.map((resource) => (
                <Link
                  key={resource.title}
                  to={resource.href}
                  className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-brand-orange-300 transition-colors group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-brand-orange-100 flex items-center justify-center mb-4 overflow-hidden">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h3 className="font-display text-lg font-bold text-neutral-950 mb-2 group-hover:text-brand-orange-500 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {resource.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
