import React from "react";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import { landingContent } from "../data/content";
import { FeaturedCaseStudies } from "../components/sections/FeaturedCaseStudies";

const digitalFormats = [
  {
    id: "digital-billboards",
    title: "Digital Billboards",
    image: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "digital-street-furniture",
    title: "Digital Street Furniture",
    image: "https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "digital-transit",
    title: "Digital Transit",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "digital-place-based",
    title: "Digital Place-based",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80",
  },
];

const resources = [
  {
    title: "Production Guidance",
    description: "Explore our library of creative specs for the various creative formats we offer within our Media options.",
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
    description: "Check out our creative guidelines that will help inspire the creation of dynamic and powerful digital creatives.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=400&q=80",
    href: "/resources/creative-best-practices",
  },
];

const faqs = [
  {
    question: "How does DOOH advertising differ from traditional out of home (OOH) advertising?",
    answer: "While traditional OOH advertising is 100% static, with printed billboards, bus shelters, kiosks, and more, DOOH advertising can also include digital billboards, screens in malls, transit stations, and more.",
  },
  {
    question: "Can DOOH advertising be targeted to specific audiences or locations?",
    answer: "Yes, absolutely. Our programmatic technology allows DOOH advertising to be targeted to specific audiences, locations, and times of day, ensuring your ads are shown to the right people at the right time.",
  },
  {
    question: "What are the benefits of using DOOH advertising for my business?",
    answer: "DOOH advertising offers flexibility, dynamic content updates, programmatic buying capabilities, and the ability to reach audiences in high-traffic locations with relevant, timely messaging.",
  },
  {
    question: "How can I measure the effectiveness of my DOOH advertising campaigns?",
    answer: "We provide comprehensive analytics and reporting including impressions, reach, frequency, and attribution data to help you understand your campaign's performance and ROI.",
  },
];

export const DigitalOOH: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
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
            <span className="text-white">Digital OOH</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.95]">
            DIGITAL OUT OF HOME
            <br />
            <span className="text-white/80">ADVERTISING</span>
          </h1>
        </div>

        {/* Hero Image */}
        <div className="mt-8 w-full h-[400px] sm:h-[500px] lg:h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80"
            alt="Digital billboard display"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Sticky Headline */}
            <div className="lg:col-span-7">
              <div className="lg:sticky lg:top-32">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-950 leading-[1.1]">
                  Digital out of home
                  <br />
                  ads deliver
                  <br />
                  <span className="text-brand-orange-500">flexibility, speed,</span>
                  <br />
                  and adaptability
                  <br />
                  to marketers
                  <br />
                  through a wide range
                  <br />
                  of media formats,
                  <br />
                  like LED
                  <br />
                  billboards and digital street
                  <br />
                  furniture.
                </h2>
              </div>
            </div>

            {/* Right: Scrolling Description */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-6">
                <p className="text-base text-neutral-700 leading-relaxed">
                  What does it get when you combine the impact, reach, and flexibility of digital
                  advertising with the geography, context, and versatility of out of home
                  (OOH)? An advertising juggernaut that drives business results.
                </p>
                <p className="text-base text-neutral-700 leading-relaxed">
                  Digital out of home advertising harnesses trends with the
                  ability to generate contextual relevance and deliver
                  creative at scale. Studies show that DOOH audiences are more likely
                  to purchase overall compared to those exposed only to television ads.
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-sm text-neutral-500 uppercase tracking-wider">
                  MRC Accreditations; Multipliers based on impressions uplift
                </p>
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
                82%
              </div>
              <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
                <strong>Aided Ad Recall</strong> — Overwhelmingly, consumers
                recall having seen a digital out of home ad.
              </p>
            </div>
            <div className="text-center">
              <div className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-brand-orange-500">
                62%
              </div>
              <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
                <strong>Noticed Digital Billboards</strong> — More than three out
                of four consumers noticed a digital billboard in the past month.
              </p>
            </div>
            <div className="text-center">
              <div className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-brand-orange-500">
                14%
              </div>
              <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
                <strong>More Relevant Than TV</strong> — Consumers rate
                DOOH as more relevant than television ads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* View Our Digital Formats Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Title */}
            <div className="lg:col-span-5">
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-950 leading-[0.95]">
                VIEW OUR
                <br />
                <span className="text-brand-orange-500">DIGITAL OOH</span>
                <br />
                FORMATS
              </h2>
            </div>

            {/* Right: Description */}
            <div className="lg:col-span-7">
              <p className="text-base text-neutral-600 leading-relaxed max-w-lg">
                Find the right venue to reach your desired audiences. Our digital
                media formats include:
              </p>
            </div>
          </div>

          {/* Digital Formats Grid */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {digitalFormats.map((format) => (
              <Link
                key={format.id}
                to={`/media/digital-ooh#${format.id}`}
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
                From billboards and walls to subway and buses, OUTFRONT has
                a diverse media set across our national footprint, including the top
                ten markets. Learn more about our media and the power of OOH.
              </p>

              <div className="mt-8">
                <a
                  href="#"
                  className="inline-flex items-center space-x-2 px-8 py-3.5 bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-lg hover:shadow-brand-glow transition-all transform hover:-translate-y-0.5"
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
                  FAQs ABOUT
                  <br />
                  DIGITAL OUT
                  <br />
                  OF HOME
                  <br />
                  <span className="text-brand-orange-500">ADVERTISING</span>
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
        items={landingContent.caseStudies.items.filter(
          (item) =>
            item.pills.some(
              (pill) =>
                pill.toLowerCase().includes("digital") ||
                pill.toLowerCase().includes("dooh") ||
                pill.toLowerCase().includes("programmatic") ||
                pill.toLowerCase().includes("3d anamorphic")
            ) ||
            item.tag.toLowerCase().includes("dooh")
        )}
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
