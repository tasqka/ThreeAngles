import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import { SEO } from "../components/SEO";

const mediaFormats = [
  {
    id: "digital-ooh",
    title: "Digital OOH",
    description: "Programmatic digital screens and dynamic creatives delivered across premium digital spectaculars in Sheikh Zayed and 6th of October.",
    image: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?auto=format&fit=crop&w=600&q=80",
    heroImage: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "billboards",
    title: "Billboards",
    description: "High-impact static billboards and wallscape formats positioned across Sheikh Zayed and 6th of October for maximum brand visibility.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80",
    heroImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "monorail",
    title: "Monorail",
    description: "Premium advertising displays on Cairo Monorail stations and trains connecting Sheikh Zayed and 6th of October.",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=600&q=80",
    heroImage: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "banners",
    title: "Banners",
    description: "Large-format banners, street pole flags, and building wraps designed to dominate visual corridors across Sheikh Zayed and 6th of October.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "static-ooh",
    title: "Static OOH",
    description: "High-impact static billboards positioned on major arterial roads and highway corridors across Sheikh Zayed and 6th of October.",
    image: "https://images.unsplash.com/photo-1568322503122-d21b5f527af8?auto=format&fit=crop&w=600&q=80",
    heroImage: "https://images.unsplash.com/photo-1568322503122-d21b5f527af8?auto=format&fit=crop&w=1600&q=80",
  },
];

export const Media: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState("Digital OOH");

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Media — OOH Advertising Formats"
        description="Discover our full range of out-of-home advertising formats: billboards, digital OOH, transit, monorail, street furniture, and mall advertising."
        path="/media"
      />
      {/* Hero Section */}
      <section className="relative pt-28 pb-0 md:pt-36 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-neutral-500">
            <Link to="/" className="hover:text-brand-orange-500 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-900">Media</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight text-neutral-950 leading-[0.95]">
            OOH MEDIA
            <br />
            <span className="text-brand-orange-500">SOLUTIONS</span>
          </h1>

          {/* Category Tabs */}
          <div className="mt-8 flex flex-wrap gap-6 border-b border-neutral-200 pb-4">
            {mediaFormats.map((format) => (
              <Link
                key={format.id}
                to={`/media/${format.id}`}
                onMouseEnter={() => setHoveredCategory(format.title)}
                className={`text-sm font-semibold transition-colors whitespace-nowrap ${
                  hoveredCategory === format.title
                    ? "text-brand-orange-500"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                {format.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-8 w-full h-[400px] sm:h-[500px] lg:h-[600px]">
          <img
            src={mediaFormats.find(f => f.title === hoveredCategory)?.heroImage || mediaFormats[0].heroImage}
            alt={`${hoveredCategory} display`}
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>
      </section>

      {/* Choose the Right Media Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Sticky Headline */}
            <div className="lg:col-span-7">
              <div className="lg:sticky lg:top-32">
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-950 leading-[0.95]">
                  CHOOSE THE
                  <br />
                  RIGHT MEDIA
                  <br />
                  FORMAT FOR
                  <br />
                  <span className="text-brand-orange-500">YOUR BRAND.</span>
                </h2>
              </div>
            </div>

            {/* Right: Scrolling Description */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-6">
                <p className="text-base text-neutral-700 leading-relaxed">
                  <strong>THREEANGLES</strong> reaches seven out of ten Egyptians weekly
                  with our 1,200+ canvases, delivering the reach to introduce
                  brands in the real world and the capability to encourage
                  consumers' affinity with those brands.
                </p>
                <p className="text-base text-neutral-700 leading-relaxed">
                  Advertisers can choose from digital and static options,
                  representing both traditional billboard inventory and media in
                  some of Sheikh Zayed and 6th of October's busiest corridors.
                </p>
                <p className="text-base text-neutral-700 leading-relaxed">
                  From compact posters to larger-than-life spectaculars, we
                  offer coverage across Sheikh Zayed and 6th of October's premium
                  locations to deliver your brand's message to exactly the
                  right audience.
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-base text-neutral-700 leading-relaxed">
                  Our media formats are strategically placed in high-traffic areas
                  across Sheikh Zayed and 6th of October, ensuring maximum visibility
                  for your brand. Whether you're looking for digital dynamism or
                  static dominance, we have the right format for your campaign.
                </p>
                <p className="text-base text-neutral-700 leading-relaxed">
                  With real-time data analytics and programmatic capabilities,
                  our digital formats allow for dynamic creative optimization
                  and targeted messaging throughout the day.
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-base text-neutral-700 leading-relaxed">
                  Our static formats provide unmissable presence on major highways
                  and arterial roads, delivering consistent brand exposure 24/7.
                  Perfect for brand building and long-term campaigns.
                </p>
                <p className="text-base text-neutral-700 leading-relaxed">
                  The Cairo Monorail advertising network offers unique opportunities
                  to reach commuters traveling between Sheikh Zayed and 6th of October,
                  with premium displays at stations and on trains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* View Our Media Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-950 leading-[0.95]">
            VIEW OUR
            <br />
            <span className="text-brand-orange-500">MEDIA</span>
          </h2>

          {/* Media Grid */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            {mediaFormats.map((format) => (
              <Link
                key={format.id}
                to={`/media/${format.id}`}
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

      {/* Media Kit Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-5">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-950 leading-[0.95]">
                VIEW OUR
                <br />
                <span className="text-brand-orange-500">NATIONAL</span>
                <br />
                <span className="text-brand-orange-500">MEDIA KIT</span>
              </h2>

              <p className="mt-6 text-base text-neutral-600 leading-relaxed max-w-md">
                From billboards and walls to transit and street furniture, THREEANGLES has
                a diverse media set across Sheikh Zayed and 6th of October, including the top
                corridors. Learn more about our media and the power of OOH.
              </p>

              <div className="mt-8">
                <a
                  href="#"
                  className="inline-flex items-center space-x-2 px-8 py-3.5 bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-lg hover:shadow-brand-glow transition-all transform hover:-translate-y-0.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Media Kit</span>
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
    </div>
  );
};
