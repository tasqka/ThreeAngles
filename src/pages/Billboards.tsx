import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import { landingContent } from "../data/content";
import { FeaturedCaseStudies } from "../components/sections/FeaturedCaseStudies";
import { SEO } from "../components/SEO";

const billboardFormats = [
  {
    id: "bulletins",
    title: "Bulletins",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "posters",
    title: "Posters",
    image: "https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "walls",
    title: "Walls",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "digital-billboards",
    title: "Digital Billboards",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=600&q=80",
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
    question: "What are the most popular billboard advertising formats?",
    answer: "Our most popular billboard formats include bulletins (14'x48'), posters (11'x22'), and digital billboards. Bulletins offer maximum impact on highways, while posters provide cost-effective reach in urban areas.",
  },
  {
    question: "How effective is billboard advertising compared to other mediums?",
    answer: "Billboards consistently outperform digital ads in brand recall and awareness. Studies show billboards drive 40% more online activity per unit of spend compared to other media, making them one of the most cost-efficient advertising channels.",
  },
  {
    question: "How long should I run my billboard advertising campaign?",
    answer: "For maximum impact, we recommend a minimum 4-week campaign. OOH advertising works best with sustained exposure, as repeated impressions build brand recognition and drive consumer action over time.",
  },
  {
    question: "How should I design my billboard advertisement?",
    answer: "Billboard design should be simple and direct. Best practices suggest use of 7 words or less for text, bold colors that contrast with the background, high-resolution images, and a clear call-to-action or contact method.",
  },
];

export const Billboards: React.FC = () => {
  const [expandedDesc, setExpandedDesc] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Billboard Advertising"
        description="High-impact billboard advertising in Sheikh Zayed and 6th of October. Static and illuminated billboards reaching millions daily."
        path="/media/billboards"
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
            <span className="text-white">Billboards</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.95]">
            OOH BILLBOARD
            <br />
            <span className="text-white/80">ADVERTISING</span>
          </h1>
        </div>

        {/* Hero Image */}
        <div className="mt-8 w-full h-[400px] sm:h-[500px] lg:h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80"
            alt="Billboard advertising display"
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
                  Build brand trust with
                  <br />
                  billboard advertising for
                  <br />
                  high-impact visibility in local,
                  <br />
                  consumer-driven markets.
                </h2>
              </div>
            </div>

            {/* Right: Scrolling Description */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                {/* Visible text + gradient overlay wrapper */}
                <div className="relative">
                  <p className="text-base text-neutral-700 leading-relaxed mb-6">
                    Did you know that out of home advertising is the most
                    trusted advertising medium there is? It's because the real
                    world is not an algorithm. It's reliable and seen as legitimate.
                  </p>
                  <p className="text-base text-neutral-700 leading-relaxed mb-6">
                    Billboards, posters, and bulletins are a perfect
                    solution for any marketing campaign. In fact, four out of five
                    OOH audiences have engaged with a mobile device after viewing
                    an out of home ad, both search and display advertising work better.
                  </p>
                  <p className="text-base text-neutral-700 leading-relaxed">
                    Billboard media options include the classic bulletin format
                    often seen alongside highways, pedestrian-friendly posters,
                    hand-painted wallscapes, and oversized spectaculars sure to
                    command attention. THREEANGLES offers digital LED
                    billboards that are similar to static billboard signs but offer a
                    superior level of flexibility, creativity, and audience targeting.
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
                    Our bulletin format measures 14 feet by 48 feet and is commonly
                    located on major highways and arterials where they reach a vast
                    audience. Posters come in 11'x22' and are perfect for targeting
                    specific neighborhoods and consumer segments. Wallscapes are
                    large-scale formats applied to the sides of buildings and offer
                    unmatched creative potential.
                  </p>
                  <p className="text-base text-neutral-700 leading-relaxed">
                    Whether you are looking to build brand awareness, drive foot
                    traffic, or launch a new product, billboard advertising delivers
                    unmatched visibility and recall. Out-of-home advertising continues
                    to be the most effective medium for reaching consumers at scale,
                    with studies showing that OOH drives more online activity per unit of spend
                    spent than any other medium.
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
                +40%
              </div>
              <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
                <strong>Increased ROAS</strong> — Adding out of home
                increases search's return on ad spend by 40%.
              </p>
            </div>
            <div className="text-center">
              <div className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-brand-orange-500">
                48%
              </div>
              <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
                <strong>More Likely to Engage</strong> — Exposure to OOH
                makes consumers more likely to engage with the same ad online.
              </p>
            </div>
            <div className="text-center">
              <div className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-brand-orange-500">
                58%
              </div>
              <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
                <strong>Most Trusted</strong> — More people trust out of home
                than any other ad medium.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* View Our Billboard Formats Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Title */}
            <div className="lg:col-span-5">
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-950 leading-[0.95]">
                VIEW OUR
                <br />
                BILLBOARD
                <br />
                <span className="text-brand-orange-500">ADVERTISING</span>
                <br />
                FORMATS
              </h2>
            </div>

            {/* Right: Description */}
            <div className="lg:col-span-7">
              <p className="text-base text-neutral-600 leading-relaxed max-w-lg">
                Find the right venue to reach your desired audiences. Our
                billboard media options are designed to connect with your audience and
                bring you closer to your audience for you.
              </p>
            </div>
          </div>

          {/* Billboard Formats Grid */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {billboardFormats.map((format) => (
              <Link
                key={format.id}
                to={`/media/billboards#${format.id}`}
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
                From billboards and walls to subway and buses, THREEANGLES has
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
                  Billboard
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
        items={landingContent.caseStudies.items.filter(
          (item) =>
            item.pills.some(
              (pill) =>
                pill.toLowerCase().includes("billboard") ||
                pill.toLowerCase().includes("static") ||
                pill.toLowerCase().includes("brand awareness") ||
                pill.toLowerCase().includes("project launch")
            )
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
