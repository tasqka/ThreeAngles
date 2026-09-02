import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SEO } from "../components/SEO";

const mediaFormats = [
  {
    id: "digital-ooh",
    title: "Digital OOH",
    description: "Programmatic digital screens and dynamic creatives delivered across premium digital spectaculars in Sheikh Zayed and 6th of October.",
    heroImage: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?auto=format&fit=crop&w=1600&q=80",
    features: [
      "Real-time content updates and dynamic creative optimization",
      "Dayparting capabilities for targeted messaging",
      "Programmatic buying and automated campaign management",
      "High-resolution LED and LCD displays",
      "Weather and traffic-triggered content",
    ],
  },
  {
    id: "billboards",
    title: "Billboards",
    description: "High-impact static billboards and wallscape formats positioned across Sheikh Zayed and 6th of October for maximum brand visibility.",
    heroImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80",
    features: [
      "Premium locations on major highways and arterial roads",
      "Large-format bulletins and posters",
      "24/7 brand exposure and visibility",
      "High-impact wallscape formats",
      "Strategic placement for maximum reach",
    ],
  },
  {
    id: "monorail",
    title: "Monorail",
    description: "Premium advertising displays on Cairo Monorail stations and trains connecting Sheikh Zayed and 6th of October.",
    heroImage: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1600&q=80",
    features: [
      "Station dominations and platform displays",
      "Train wraps and interior branding",
      "Digital screens throughout the network",
      "Access to daily commuters between Sheikh Zayed and 6th of October",
      "Extended dwell time for message exposure",
    ],
  },
  {
    id: "banners",
    title: "Banners",
    description: "Large-format banners, street pole flags, and building wraps designed to dominate visual corridors across Sheikh Zayed and 6th of October.",
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
    features: [
      "Large-format building wraps and murals",
      "Street pole flags and banner networks",
      "Customizable sizes and configurations",
      "High-visibility placements in commercial zones",
      "Weather-resistant materials",
    ],
  },
  {
    id: "static-ooh",
    title: "Static OOH",
    description: "High-impact static billboards positioned on major arterial roads and highway corridors across Sheikh Zayed and 6th of October.",
    heroImage: "https://images.unsplash.com/photo-1568322503122-d21b5f527af8?auto=format&fit=crop&w=1600&q=80",
    features: [
      "Premium bulletin and poster positions",
      "Consistent 24/7 brand presence",
      "Strategic locations on high-traffic corridors",
      "Multiple format sizes available",
      "Long-term campaign flexibility",
    ],
  },
];

export const MediaFormat: React.FC = () => {
  const { formatId } = useParams<{ formatId: string }>();
  const format = mediaFormats.find((f) => f.id === formatId);

  if (!format) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-black text-neutral-950">
            Format not found
          </h1>
          <Link
            to="/media"
            className="mt-6 inline-flex items-center space-x-2 text-brand-orange-500 hover:text-brand-orange-600 font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Media</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={format?.name || "Media Format"}
        description={format?.description || "Explore this out-of-home advertising format offered by ThreeAngles."}
        path={`/media/${formatId}`}
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
            <Link to="/media" className="hover:text-brand-orange-500 transition-colors">
              Media
            </Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-900">{format.title}</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight text-neutral-950 leading-[0.95]">
            {format.title.split(" ").map((word, i) => (
              <span key={i}>
                {i > 0 && " "}
                {i === format.title.split(" ").length - 1 ? (
                  <span className="text-brand-orange-500">{word}</span>
                ) : (
                  word
                )}
              </span>
            ))}
          </h1>
        </div>

        {/* Hero Image */}
        <div className="mt-8 w-full h-[400px] sm:h-[500px] lg:h-[600px]">
          <img
            src={format.heroImage}
            alt={`${format.title} display`}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Title */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-950 leading-[0.95]">
                  ABOUT
                  <br />
                  <span className="text-brand-orange-500">{format.title.split(" ")[0].toUpperCase()}</span>
                </h2>
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-8 space-y-12">
              <p className="text-lg text-neutral-700 leading-relaxed">
                {format.description}
              </p>

              <div>
                <h3 className="font-display text-2xl font-black uppercase tracking-tight text-neutral-950 mb-6">
                  Key Features
                </h3>
                <ul className="space-y-4">
                  {format.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-brand-orange-500 mt-2 shrink-0" />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <Link
                  to="/media"
                  className="inline-flex items-center space-x-2 text-brand-orange-500 hover:text-brand-orange-600 font-semibold transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to all media formats</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
