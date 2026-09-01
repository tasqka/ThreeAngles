import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const resources = [
  {
    id: "blog",
    title: "Blog",
    description: "Read about noteworthy out of home campaigns that captivated audiences, OOH advertising, essential industry insights, and much more.",
    heroImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1600&q=80",
    content: [
      { heading: "Industry Insights", text: "Stay up to date with the latest trends and developments in the OOH advertising industry with our regular blog posts and analysis." },
      { heading: "Campaign Highlights", text: "Read about successful campaigns we've executed for our clients, including strategy, creative execution, and results." },
      { heading: "Expert Tips", text: "Get expert advice on how to maximize your OOH campaigns, from creative best practices to media planning tips." },
    ],
  },
  {
    id: "media-preview-tool",
    title: "Media Preview Tool",
    description: "Upload your brand creative for a review of the impact our various formats.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    content: [
      { heading: "Upload Your Creative", text: "Upload your brand creative assets to see how they'll look on our various OOH formats before launching your campaign." },
      { heading: "Format Visualization", text: "Preview your creative on digital billboards, static displays, monorail stations, and other formats in real locations." },
      { heading: "Impact Assessment", text: "Get an estimated impact report showing how your creative will perform across different locations and formats." },
    ],
  },
  {
    id: "research-insights",
    title: "Research and Insights",
    description: "Leverage our insights team to find the right audiences, location, and strategy to achieve your business goals.",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    content: [
      { heading: "Audience Data", text: "Access comprehensive audience measurement data including demographics, behaviors, and media consumption patterns across our markets." },
      { heading: "Location Analytics", text: "Get detailed traffic and pedestrian data for each of our locations to optimize your media placement strategy." },
      { heading: "Market Reports", text: "Download market reports for Sheikh Zayed and 6th of October with insights on audience reach, competitive landscape, and opportunities." },
    ],
  },
  {
    id: "media-kits",
    title: "Media Kits",
    description: "We have national scale and local depth, making your brand messaging hyper-relevant. Read more about our markets and audiences.",
    heroImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1600&q=80",
    content: [
      { heading: "Market Media Kits", text: "Download comprehensive media kits for each of our markets including format specifications, audience data, and pricing information." },
      { heading: "Format Guides", text: "Access detailed guides for each of our advertising formats with specifications, creative requirements, and case studies." },
      { heading: "Custom Media Plans", text: "Request a custom media plan tailored to your campaign objectives, target audience, and budget." },
    ],
  },
  {
    id: "case-studies",
    title: "Case Studies",
    description: "Take a look at our wide array of case studies, ranging across categories and audiences to find examples of how we've helped our clients.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    content: [
      { heading: "Brand Campaigns", text: "Explore how leading brands have used our OOH media to drive awareness, engagement, and measurable business results." },
      { heading: "Retail Success Stories", text: "See how retail brands have leveraged our locations to drive foot traffic and increase sales at their stores." },
      { heading: "Innovative Uses", text: "Discover innovative and creative uses of our OOH formats that have pushed the boundaries of advertising." },
    ],
  },
  {
    id: "rates",
    title: "Rates",
    description: "Our Sales Team will help you understand our media and build a campaign that will deliver impressions that matter most for your specific business.",
    heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
    content: [
      { heading: "Digital OOH Rates", text: "Our digital billboard rates are based on location, time of day, and campaign duration. Programmatic buying options are available." },
      { heading: "Static OOH Rates", text: "Static billboard pricing varies by location, size, and contract length. Long-term contracts offer significant discounts." },
      { heading: "Custom Packages", text: "We offer custom advertising packages tailored to your budget and campaign objectives. Contact our sales team for a personalized quote." },
    ],
  },
  {
    id: "specs",
    title: "Specs",
    description: "Ready to build your campaign? Get information on production and how we get your campaign ready to go to site.",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80",
    content: [
      { heading: "File Requirements", text: "All creative files should be submitted in the following formats: JPG, PNG, or TIFF for static displays. Video files should be MP4 or MOV." },
      { heading: "Digital Specs", text: "Digital displays support full HD (1920x1080) and 4K (3840x2160) content. Recommended aspect ratio is 16:9." },
      { heading: "Static Specs", text: "Static billboards require high-resolution files at 150 DPI for viewing distances over 50 feet. Poster formats require 300 DPI." },
    ],
  },
  {
    id: "creative-best-practices",
    title: "Creative Best Practices",
    description: "Given the size of the creative canvas and the nuances within physical environments check out our tips to help you develop powerful creative.",
    heroImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1600&q=80",
    content: [
      { heading: "Design Principles", text: "Learn the fundamental design principles for effective OOH creative, including readability, contrast, and visual hierarchy." },
      { heading: "Format-Specific Tips", text: "Get tips for optimizing your creative for each of our formats, from digital billboards to monorail displays." },
      { heading: "Creative Inspiration", text: "Explore examples of award-winning OOH creative and learn what makes them effective in the real world." },
    ],
  },
];

export const ResourceDetail: React.FC = () => {
  const { resourceId } = useParams<{ resourceId: string }>();
  const resource = resources.find((r) => r.id === resourceId);

  if (!resource) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-black text-neutral-950">
            Resource not found
          </h1>
          <Link
            to="/resources"
            className="mt-6 inline-flex items-center space-x-2 text-brand-orange-500 hover:text-brand-orange-600 font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Resources</span>
          </Link>
        </div>
      </div>
    );
  }

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
            <Link to="/resources" className="hover:text-brand-orange-500 transition-colors">
              Resources
            </Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-900">{resource.title}</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight text-neutral-950 leading-[0.95]">
            {resource.title.split(" ").map((word, i) => (
              <span key={i}>
                {i > 0 && " "}
                {i === resource.title.split(" ").length - 1 ? (
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
            src={resource.heroImage}
            alt={`${resource.title} display`}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Title */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-950 leading-[0.95]">
                  {resource.title.split(" ").slice(0, 2).join(" ").toUpperCase()}
                </h2>
                <p className="mt-6 text-base text-neutral-600 leading-relaxed max-w-sm">
                  {resource.description}
                </p>
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-8 space-y-12">
              {resource.content.map((section, index) => (
                <div key={index}>
                  <h3 className="font-display text-2xl font-black uppercase tracking-tight text-neutral-950 mb-4">
                    {section.heading}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    {section.text}
                  </p>
                </div>
              ))}

              <div className="pt-8">
                <Link
                  to="/resources"
                  className="inline-flex items-center space-x-2 text-brand-orange-500 hover:text-brand-orange-600 font-semibold transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to all resources</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
