import { LandingPageContent } from "../types";

import audienceImg from "../assets/Photos/Audience.jpg";
import bannersImg from "../assets/Photos/Banners.jpg";
import digitalOohImg from "../assets/Photos/Digital OOH.jpg";
import innovationImg from "../assets/Photos/Innovarion.jpg";
import sevenHarbyImg from "../assets/Photos/Seven Harby.png";
import staticOohImg from "../assets/Photos/Static OOH.jpg";
import whoWeAreImg from "../assets/Photos/Who we are.jpg";
import zayedOctoberMap from "../assets/ZayedAndOctober.svg";

export const landingContent: LandingPageContent = {
  brand: {
    name: "THREEANGLES",
    tagline: "STEP OUTSIDE WITH US",
  },
  navigation: {
    links: [
      { label: "Markets", href: "/markets" },
      {
        label: "Media",
        href: "/media",
        children: [
          { label: "Digital OOH", href: "/media/digital-ooh" },
          { label: "Billboards", href: "/media/billboards" },
          { label: "Monorail", href: "/media/monorail" },
          { label: "Street Furniture", href: "/media/banners" },
        ],
      },
      {
        label: "Resources",
        href: "/resources",
        children: [
          { label: "Blog", href: "/resources/blog" },
          {
            label: "Media Preview Tool",
            href: "/resources/media-preview-tool",
          },
          {
            label: "Research and Insights",
            href: "/resources/research-insights",
          },
          { label: "Media Kits", href: "/resources/media-kits" },
          { label: "Case Studies", href: "/resources/case-studies" },
        ],
      },
      { label: "About", href: "/about" },
    ],
    mediaFinderLink: "/media-finder",
    contactButtonText: "Contact us",
  },
  hero: {
    headlineLine1: "STEP",
    headlineLine2: "OUTSIDE WITH",
    headlineLine3: "US",
    heroImage:
      "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=1200&q=80",
    heroImageAlt:
      "Massive digital billboard lighting up Sheikh Zayed streets at night",
  },
  newCampaigns: {
    tag: "New Campaigns",
    headline: "LATEST CAMPAIGNS",
    items: [
      {
        id: "eterna",
        brand: "Eterna Developments",
        tagline: "Project Launch · 2026",
        image: "/assets/Campains Images/eternaImg.jpg",
      },
      {
        id: "roshan",
        brand: "Roshan Masr Development",
        tagline: "Brand Awareness · 2026",
        image: "/assets/Campains Images/roshan.jpg",
      },
      {
        id: "levels",
        brand: "Levels Developments",
        tagline: "Project Launch · 2026",
        image: "/assets/Campains Images/levels.jpg",
      },
      {
        id: "kayan-elaf",
        brand: "Kayan | Elaf",
        tagline: "Brand Awareness · 2026",
        image: "/assets/Campains Images/kayanelaf.jpg",
      },
      {
        id: "marsoum",
        brand: "Marsoum Developments",
        tagline: "Project Launch · 2026",
        image: "/assets/Campains Images/marsoum.jpg",
      },
      {
        id: "zaya",
        brand: "Zaya Developments",
        tagline: "Project Launch · 2026",
        image: "/assets/Campains Images/zaya.jpg",
      },
    ],
  },
  powerOfIrl: {
    image: {
      src: "https://images.unsplash.com/photo-1568322503122-d21b5f527af8?auto=format&fit=crop&w=900&q=80",
      alt: "Pedestrians walking past prime street-level billboard in Sheikh Zayed",
    },
    tabs: [
      {
        id: "brands",
        label: "Who we are",
        headline: "THE POWER OF IRL MEDIA",
        body: "Out-of-home commands unskippable attention in the real world. We help iconic brands dominate cultural conversation with premier physical canvases across Sheikh Zayed and 6th of October that drive measurable digital action.",
        linkText: "About Us",
        linkHref: "/about#leadership",
        image: whoWeAreImg,
        imageAlt: "Who we are - Threeangles team",
      },
      {
        id: "agencies",
        label: "Audience",
        headline: "SCALE YOUR CREATIVE VISION",
        body: "Equip your media plans with data-informed spatial targeting, real-time attribution, and breakthrough dynamic formats engineered for omnichannel amplification across Sheikh Zayed and 6th of October.",
        linkText: "Agency Solutions",
        linkHref: "/about#agency-solutions",
        image: audienceImg,
        imageAlt: "Audience reach and engagement",
      },
      {
        id: "people",
        label: "Innovation",
        headline: "CONNECTING COMMUNITIES",
        body: "Our displays enrich urban landscapes, deliver essential civic messaging, and connect everyday commuters to the brands and experiences they love across Sheikh Zayed and 6th of October.",
        linkText: "Our Impact",
        linkHref: "/about#impact",
        image: innovationImg,
        imageAlt: "Innovation in outdoor media",
      },
    ],
  },
  powerToMove: {
    headline: "THE POWER TO MOVE",
    description:
      "Out-of-home advertising moves people to act, shop, and visit your brand across Sheikh Zayed and 6th of October.",
    searchPlaceholder: "Search by city or governorate...",
    exploreLinkText: "Explore All Markets",
    exploreHref: "/markets",
    marketsList: ["El Sheikh Zayed", "6th of October City"],
  },
  stats: [
    {
      value: "1.2K+",
      label: "Displays",
      tooltip:
        "Over 500,000 prime static, digital, transit, and mobile displays across Sheikh Zayed and 6th of October.",
      linkText: "Explore our displays",
      href: "/media",
    },
    {
      value: "2M+",
      label: "Impressions",
      tooltip:
        "Over 2 million weekly verified consumer impressions generated in Sheikh Zayed and 6th of October.",
      linkText: "View audience data",
      href: "/media-finder",
    },
    {
      value: "2",
      label: "Locations",
      tooltip:
        "Sheikh Zayed and 6th of October — premium locations covering key metropolitan corridors.",
      linkText: "Find your market",
      href: "/markets",
    },
  ],
  perfectSpots: {
    headlinePart1: "DISCOVER THE",
    headlineHighlight: "PERFECT SPOTS",
    headlinePart2: "FOR YOUR MESSAGE",
    description:
      "Put your message right where your audience lives, works, and travels across Sheikh Zayed and 6th of October. Leverage our interactive mapping engine to pinpoint high-density locations, demographic clusters, and high-traffic arterial roadways.",
    buttonText: "Browse Media Finder",
    buttonHref: "#media-finder",
    mapImage: zayedOctoberMap,
    billboardImage: sevenHarbyImg,
    pins: [
      {
        id: "1",
        x: "45%",
        y: "30%",
        name: "El Sheikh Zayed Digital",
        format: "Digital Spectacular",
      },
      {
        id: "2",
        x: "55%",
        y: "55%",
        name: "6th of October Bridge Wallscape",
        format: "Static Wallscape",
      },
    ],
  },
  caseStudies: {
    tag: "Featured Case Studies",
    subheadline:
      "Discover our latest and greatest out-of-home solutions for our partners across Sheikh Zayed and 6th of October.",
    items: [
      {
        id: "eterna",
        name: "Eterna Developments",
        headline:
          "Eterna Developments leveraged OOH to launch their new residential project.",
        pills: [
          "Sheikh Zayed",
          "Static and Digital Billboards",
          "Project Launch",
        ],
        tag: "Project Launch · 2026",
        description:
          "We supported Eterna Developments' launch with a strategic OOH campaign across Sheikh Zayed, utilizing prime digital and static billboards to generate widespread awareness and drive significant interest in their new residential project Haus.",
        image: "/assets/Campains Images/eternaImg.jpg",
      },
      {
        id: "roshan",
        name: "Roshan Masr Development",
        headline: "We helped Roshan Masr Development make their mark.",
        pills: [
          "Sheikh Zayed",
          "Static and Digital Billboards",
          "Brand Awareness",
        ],
        tag: "Brand Awareness · 2026",
        description:
          "A high-visibility OOH campaign across Sheikh Zayed introduced Rosan Misr Developments to the market, pairing premium billboard placements with digital screens to build early awareness and drive interest in their launch project.",
        image: "/assets/Campains Images/roshan.jpg",
      },
      {
        id: "levels",
        name: "Levels Developments",
        headline: "We put Levels Developments on the map across Sheikh Zayed.",
        pills: [
          "Sheikh Zayed",
          "Static and Digital Billboards",
          "Project Launch",
        ],
        tag: "Project Launch · 2026",
        description:
          "A high-impact OOH rollout across Sheikh Zayed's key corridors introduced Levels Developments to the market and drove strong early interest in their launch project.",
        image: "/assets/Campains Images/levels.jpg",
      },
      {
        id: "kayan-elaf",
        name: "Kayan | Elaf Developments",
        headline: "We amplified Kayan | Elaf Developments' brand presence.",
        pills: [
          "Sheikh Zayed",
          "Static and Digital Billboards",
          "Brand Awareness",
        ],
        tag: "Brand Awareness · 2026",
        description:
          "Prime billboard placements across Sheikh Zayed built strong visibility for Kayan | Elaf Developments among prospective buyers.",
        image: "/assets/Campains Images/kayanelaf.jpg",
      },
      {
        id: "amlak-real-estate",
        name: "Amlak Real Estate Investment",
        headline: "We drove awareness for Amlak Real Estate Investment.",
        pills: [
          "Sheikh Zayed",
          "Static and Digital Billboards",
          "Brand Awareness",
        ],
        tag: "Brand Awareness · 2026",
        description:
          "A targeted OOH presence across Sheikh Zayed positioned Amlak Real Estate Investment in front of the region's most active property buyers.",
        image: "/assets/Campains Images/amlak.jpg",
      },
      {
        id: "marsoum",
        name: "Marsoum Developments",
        headline: "We launched Marsoum Developments with a bold OOH statement.",
        pills: [
          "Sheikh Zayed",
          "Static and Digital Billboards",
          "Project Launch",
        ],
        tag: "Project Launch · 2026",
        description:
          "Strategic billboard placements across Sheikh Zayed introduced Marsoum Developments' new project to a wide, high-intent audience.",
        image: "/assets/Campains Images/marsoum.jpg",
      },
      {
        id: "assal",
        name: "ASSAL Developments",
        headline: "We built brand momentum for ASSAL Developments.",
        pills: [
          "Sheikh Zayed",
          "Static and Digital Billboards",
          "Brand Awareness",
        ],
        tag: "Brand Awareness · 2026",
        description:
          "A sustained OOH presence across Sheikh Zayed helped establish ASSAL Developments as a name to watch in the market.",
        image: "/assets/Campains Images/asal.jpg",
      },
      {
        id: "dubai-development-ezz",
        name: "Dubai Development | Ezz Group",
        headline:
          "We elevated Dubai Development | Ezz Group's market visibility.",
        pills: [
          "Sheikh Zayed",
          "Static and Digital Billboards",
          "Brand Awareness",
        ],
        tag: "Brand Awareness · 2026",
        description:
          "High-visibility placements across Sheikh Zayed reinforced Dubai Development | Ezz Group's presence among premium real estate audiences.",
        image: "/assets/Campains Images/dubaiezz.jpg",
      },
      {
        id: "solvia",
        name: "Solvia Developments",
        headline:
          "We introduced Solvia Developments to the Sheikh Zayed market.",
        pills: [
          "Sheikh Zayed",
          "Static and Digital Billboards",
          "Project Launch",
        ],
        tag: "Project Launch · 2026",
        description:
          "A coordinated static and digital billboard campaign across Sheikh Zayed generated strong early awareness for Solvia Developments' launch.",
        image: "/assets/Campains Images/solvia.jpg",
      },
      {
        id: "darak",
        name: "Darak Developments",
        headline: "We built out-of-home reach for Darak Developments.",
        pills: [
          "Sheikh Zayed",
          "Static and Digital Billboards",
          "Brand Awareness",
        ],
        tag: "Brand Awareness · 2026",
        description:
          "A focused OOH campaign across Sheikh Zayed's key routes reinforced Darak Developments' brand among target audiences.",
        image: "/assets/Campains Images/darak.jpg",
      },
      {
        id: "mirad",
        name: "Mirad Developments",
        headline: "We gave Mirad Developments a strong market debut.",
        pills: [
          "Sheikh Zayed",
          "Static and Digital Billboards",
          "Project Launch",
        ],
        tag: "Project Launch · 2026",
        description:
          "Prime billboard exposure across Sheikh Zayed supported Mirad Developments' entry into a competitive market.",
        image: "/assets/Campains Images/mirad.jpg",
      },
      {
        id: "centrada-narrative",
        name: "Centrada Developments | Narrative Communities",
        headline:
          "We connected Centrada Developments | Narrative Communities with new buyers.",
        pills: [
          "Sheikh Zayed",
          "Static and Digital Billboards",
          "Brand Awareness",
        ],
        tag: "Brand Awareness · 2026",
        description:
          "An integrated OOH campaign across Sheikh Zayed raised awareness for Centrada Developments | Narrative Communities among prospective residents.",
        image: "/assets/Campains Images/centradanarrative.jpg",
      },
      {
        id: "aloula",
        name: "Aloula Developments",
        headline: "We strengthened Aloula Developments' brand footprint.",
        pills: [
          "Sheikh Zayed",
          "Static and Digital Billboards",
          "Brand Awareness",
        ],
        tag: "Brand Awareness · 2026",
        description:
          "A wide-reaching billboard campaign across Sheikh Zayed built consistent visibility for Aloula Developments.",
        image: "/assets/Campains Images/aloula.jpg",
      },
      {
        id: "edic",
        name: "Edic Development",
        headline: "We supported Edic Development's push into the market.",
        pills: [
          "Sheikh Zayed",
          "Static and Digital Billboards",
          "Project Launch",
        ],
        tag: "Project Launch · 2026",
        description:
          "Targeted OOH placements across Sheikh Zayed helped Edic Development reach a broad base of prospective buyers at launch.",
        image: "/assets/Campains Images/edic.jpg",
      },
      {
        id: "via",
        name: "Via Developments",
        headline: "We put Via Developments in front of the right audience.",
        pills: [
          "Sheikh Zayed",
          "Static and Digital Billboards",
          "Brand Awareness",
        ],
        tag: "Brand Awareness · 2026",
        description:
          "A sustained presence on Sheikh Zayed's premium billboard network kept Via Developments top of mind among buyers.",
        image: "/assets/Campains Images/via.jpg",
      },
      {
        id: "tesla-developments",
        name: "Tesla Developments",
        headline: "We drove strong market awareness for Tesla Developments.",
        pills: [
          "Sheikh Zayed",
          "Static and Digital Billboards",
          "Project Launch",
        ],
        tag: "Project Launch · 2026",
        description:
          "A high-visibility OOH rollout across Sheikh Zayed supported Tesla Developments' project launch with broad market reach.",
        image: "/assets/Campains Images/tesla.jpg",
      },
      {
        id: "kayan",
        name: "Kayan Developments",
        headline: "We expanded Kayan Developments' reach across Sheikh Zayed.",
        pills: [
          "Sheikh Zayed",
          "Static and Digital Billboards",
          "Brand Awareness",
        ],
        tag: "Brand Awareness · 2026",
        description:
          "Strategic billboard placements across Sheikh Zayed reinforced Kayan Developments' presence among target home buyers.",
        image: "/assets/Campains Images/kayan.jpg",
      },
      {
        id: "centrada",
        name: "Centrada",
        headline: "We built consistent visibility for Centrada.",
        pills: [
          "Sheikh Zayed",
          "Static and Digital Billboards",
          "Brand Awareness",
        ],
        tag: "Brand Awareness · 2026",
        description:
          "An OOH campaign across Sheikh Zayed's busiest corridors kept Centrada visible to a wide, relevant audience.",
        image: "/assets/Campains Images/centrada.jpg",
      },
      {
        id: "binbaz",
        name: "Binbaz",
        headline: "We helped Binbaz establish a strong market presence.",
        pills: [
          "Sheikh Zayed",
          "Static and Digital Billboards",
          "Brand Awareness",
        ],
        tag: "Brand Awareness · 2026",
        description:
          "A focused billboard campaign across Sheikh Zayed built brand recognition for Binbaz among prospective clients.",
        image: "/assets/Campains Images/binbaz.jpg",
      },
      {
        id: "zaya",
        name: "Zaya Developments",
        headline: "We launched Zaya Developments with high-impact OOH.",
        pills: [
          "Sheikh Zayed",
          "Static and Digital Billboards",
          "Project Launch",
        ],
        tag: "Project Launch · 2026",
        description:
          "A coordinated static and digital billboard campaign across Sheikh Zayed drove strong launch-week awareness for Zaya Developments.",
        image: "/assets/Campains Images/zaya.jpg",
      },
      {
        id: "harby",
        name: "Harby Groups",
        headline: "We elevated Harby Groups' brand across Sheikh Zayed.",
        pills: [
          "Sheikh Zayed",
          "Static and Digital Billboards",
          "Brand Awareness",
        ],
        tag: "Brand Awareness · 2026",
        description:
          "A broad OOH presence across Sheikh Zayed's key routes strengthened Harby Groups' visibility among target audiences.",
        image: "/assets/Campains Images/harby.jpg",
      },
    ],
  },
  productsServices: {
    sectionTag: "Products & Services",
    headlineStart: "From the Art to the Science, we have you covered.",
    headlineHighlight:
      "Explore our ad tech and services to enhance your next campaign in Sheikh Zayed and 6th of October.",
    cards: [
      {
        id: "billboards",
        title: "Billboards",
        description:
          "High-impact static billboards and wallscape formats positioned across Sheikh Zayed and 6th of October for maximum brand visibility.",
        image: staticOohImg,
        alt: "Billboard displays in Sheikh Zayed",
        href: "/media/billboards",
      },
      {
        id: "digital-screens",
        title: "Digital Screens",
        description:
          "Programmatic digital screens and dynamic creatives delivered across premium digital spectaculars in Sheikh Zayed and 6th of October.",
        image: digitalOohImg,
        alt: "Digital billboard screens in Sheikh Zayed",
        href: "/media/digital-ooh",
      },
      {
        id: "banners",
        title: "Banners",
        description:
          "Large-format banners, street pole flags, and building wraps designed to dominate visual corridors across Sheikh Zayed and 6th of October.",
        image: bannersImg,
        alt: "Banner and building wrap display",
        href: "/media/banners",
      },
    ],
  },
  testimonials: {
    sectionTag: "Client Talk",
    items: [
      {
        quote:
          "OOH BENEFITS BRANDS LONG-TERM IN SHEIKH ZAYED AND 6TH OF OCTOBER. CONSISTENCY IS IMPORTANT AND WILL COMPEL VIEWERS TO LOOK UP THE BRAND.",
        author: "AHMED HASSAN",
        title: "Marketing Director",
        company: "Vodafone Egypt",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
      },
      {
        quote:
          "THREEANGLES DELIVERED A 45% SURGE IN BRAND RECALL FOR OUR 5G LAUNCH. THEIR DOMINANCE OF THE SHEIKH ZAYED SKYLINE WAS UNMATCHED.",
        author: "SARA Khaled",
        title: "Head of Brand",
        company: "Etisalat Misr",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80",
      },
      {
        quote:
          "THE GEO-TARGETED HIGHWAY BULLETINS NEAR OUR SHOWROOMS DROVE A 32% LIFT IN FOOT TRAFFIC. THREEANGLES UNDERSTANDS RETAIL OOH.",
        author: "MOHAMED FARID",
        title: "Retail Marketing Manager",
        company: "Oriental Weavers",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80",
      },
    ],
  },
  ctaBand: {
    headlineStart: "READY TO",
    buttonText: "Connect",
    headlineEnd: "WITH THREEANGLES?",
    subheadline:
      "Become our next success story in Sheikh Zayed and 6th of October.",
    bgImage:
      "https://images.unsplash.com/photo-1568322503122-d21b5f527af8?auto=format&fit=crop&w=1600&q=80",
  },
  footer: {
    columns: [
      {
        title: "Explore",
        links: [
          { label: "Markets", href: "/markets" },
          { label: "Media Formats", href: "/media" },
          { label: "Ad Tech & Data", href: "/ad-tech" },
          { label: "Creative Studio", href: "/creative" },
          { label: "Case Studies", href: "/" },
          { label: "Media Finder", href: "/media-finder" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About Us", href: "/about" },
          { label: "Leadership", href: "/about" },
          { label: "Careers", href: "/careers" },
          { label: "Newsroom", href: "/about" },
          { label: "Investors", href: "/about" },
          { label: "Sustainability", href: "/about" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Production Specs", href: "/resources" },
          { label: "Research & Insights", href: "/resources" },
          { label: "Rate Cards", href: "/resources" },
          { label: "Client Portal", href: "/resources" },
          { label: "Help & FAQs", href: "/resources" },
        ],
      },
    ],
    newsletter: {
      heading: "Stay Ahead of the Curve",
      description:
        "Subscribe for the latest out-of-home industry insights from Sheikh Zayed and 6th of October.",
      placeholder: "Enter your work email address",
      buttonText: "Subscribe",
      successMessage: "Thank you for subscribing to THREEANGLES insights!",
    },
    legalLinks: [
      { label: "Privacy Policy", href: "/about" },
      { label: "Terms of Use", href: "/about" },
      { label: "Do Not Sell My Info", href: "/about" },
      { label: "Accessibility Statement", href: "/about" },
      { label: "Cookie Settings", href: "/about" },
    ],
    copyright: "© 2026 THREEANGLES MEDIA EGYPT. ALL RIGHTS RESERVED.",
  },
};
