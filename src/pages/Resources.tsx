import React, { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "blog",
    title: "Blog",
    heroImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "media-preview-tool",
    title: "Media Preview Tool",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "research-insights",
    title: "Research and Insights",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "media-kits",
    title: "Media Kits",
    heroImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "case-studies",
    title: "Case Studies",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
  },
];

const resources = [
  {
    id: "blog",
    title: "Blog",
    description: "Read about noteworthy out of home campaigns that captivated audiences, OOH advertising, essential industry insights, and much more.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "media-preview-tool",
    title: "Preview Tool",
    description: "Upload your brand creative for a review of the impact our various formats.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "research-insights",
    title: "Research and Insights",
    description: "Leverage our insights team to find the right audiences, location, and strategy to achieve your business goals.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "media-kits",
    title: "Media Kits",
    description: "We have national scale and local depth, making your brand messaging hyper-relevant. Read more about our markets and audiences.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "case-studies",
    title: "Case Studies",
    description: "Take a look at our wide array of case studies, ranging across categories and audiences to find examples of how we've helped our clients.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "rates",
    title: "Rates",
    description: "Our Sales Team will help you understand our media and build a campaign that will deliver impressions that matter most for your specific business.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "specs",
    title: "Specs",
    description: "Ready to build your campaign? Get information on production and how we get your campaign ready to go to site.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "creative-best-practices",
    title: "Creative Best Practices",
    description: "Given the size of the creative canvas and the nuances within physical environments check out our tips to help you develop powerful creative.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80",
  },
];

export const Resources: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState("Blog");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-28 pb-0 md:pt-36 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-neutral-500">
            <Link to="/" className="hover:text-brand-orange-500 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-900">Resources</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight text-neutral-950 leading-[0.95]">
            ADVERTISING
            <br />
            <span className="text-brand-orange-500">RESOURCES</span>
          </h1>

          {/* Category Tabs */}
          <div className="mt-8 flex flex-wrap gap-6 border-b border-neutral-200 pb-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/resources/${category.id}`}
                onMouseEnter={() => setHoveredCategory(category.title)}
                className={`text-sm font-semibold transition-colors whitespace-nowrap ${
                  hoveredCategory === category.title
                    ? "text-brand-orange-500"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                {category.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-8 w-full h-[400px] sm:h-[500px] lg:h-[600px]">
          <img
            src={categories.find(c => c.title === hoveredCategory)?.heroImage || categories[0].heroImage}
            alt={`${hoveredCategory} display`}
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>
      </section>

      {/* Delivering Impact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Sticky Headline */}
            <div className="lg:col-span-7">
              <div className="lg:sticky lg:top-32">
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-950 leading-[0.95]">
                  DELIVERING
                  <br />
                  IMPACT
                  <br />
                  <span className="text-brand-orange-500">WHERE IT</span>
                  <br />
                  <span className="text-brand-orange-500">MATTERS</span>
                </h2>
              </div>
            </div>

            {/* Right: Scrolling Description */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-6">
                <p className="text-base text-neutral-700 leading-relaxed">
                  We impact everyone, from social urbanites to suburban
                  settlers and from Gen Z to Gen Next. Our displays are in the
                  places that matter, primed to bring brands to life.
                </p>
                <p className="text-base text-neutral-700 leading-relaxed">
                  We're here to help you tap into our media and how we
                  leverage the power of technology, data, and creativity to
                  drive impact and engagement between brands and
                  audiences.
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-base text-neutral-700 leading-relaxed">
                  Don't know where to start? We're here to help make your
                  campaign a success. Get inspired using our resources
                  below.
                </p>
                <p className="text-base text-neutral-700 leading-relaxed">
                  Our resources are designed to help you understand the full
                  potential of out-of-home advertising and how it can
                  integrate with your digital marketing strategy.
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-base text-neutral-700 leading-relaxed">
                  From creative best practices to market insights, we provide
                  the tools and information you need to create successful
                  campaigns that resonate with your target audience.
                </p>
                <p className="text-base text-neutral-700 leading-relaxed">
                  Explore our case studies to see how leading brands have
                  used our media to achieve their marketing objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* View Our Resources Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Title */}
            <div className="lg:col-span-4">
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-950 leading-[0.95]">
                VIEW OUR
                <br />
                <span className="text-brand-orange-500">RESOURCES</span>
              </h2>
            </div>

            {/* Right: Description */}
            <div className="lg:col-span-8">
              <p className="text-base text-neutral-600 leading-relaxed max-w-lg">
                Learn more about OOH ads with advertising tools and resources.
                Let us help plan your campaign to target your audience.
              </p>
            </div>
          </div>

          {/* Resources Grid */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {resources.map((resource) => (
              <Link
                key={resource.id}
                to={`/resources/${resource.id}`}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    {resource.title}
                  </h3>
                  <p className="text-xs text-white/70 mt-1 line-clamp-2">
                    {resource.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
