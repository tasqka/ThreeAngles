export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface StatItem {
  value: string;
  label: string;
  tooltip: string;
  linkText: string;
  href: string;
}

export interface ProductCard {
  id: string;
  title: string;
  description: string;
  image: string;
  badge?: string;
  alt: string;
  href: string;
}

export interface TabContent {
  id: string;
  label: string;
  headline: string;
  body: string;
  linkText: string;
  linkHref: string;
  image: string;
  imageAlt: string;
}

export interface MapPin {
  id: string;
  x: string;
  y: string;
  name: string;
  format: string;
}

export interface CaseStudy {
  id: string;
  name: string;
  headline: string;
  pills: string[];
  tag: string;
  description: string;
  image: string;
}

export interface NewCampaign {
  id: string;
  brand: string;
  tagline: string;
  image: string;
}

export interface LandingPageContent {
  brand: {
    name: string;
    tagline: string;
  };
  navigation: {
    links: NavItem[];
    mediaFinderLink: string;
    contactButtonText: string;
  };
  hero: {
    headlineLine1: string;
    headlineLine2: string;
    headlineLine3: string;
    heroImage: string;
    heroImageAlt: string;
  };
  newCampaigns: {
    tag: string;
    headline: string;
    items: NewCampaign[];
  };
  powerOfIrl: {
    image: {
      src: string;
      alt: string;
    };
    tabs: TabContent[];
  };
  powerToMove: {
    headline: string;
    description: string;
    searchPlaceholder: string;
    exploreLinkText: string;
    exploreHref: string;
    marketsList: string[];
  };
  stats: StatItem[];
  perfectSpots: {
    headlinePart1: string;
    headlineHighlight: string;
    headlinePart2: string;
    description: string;
    buttonText: string;
    buttonHref: string;
    mapImage: string;
    billboardImage: string;
    pins: MapPin[];
  };
  caseStudies: {
    tag: string;
    subheadline: string;
    items: CaseStudy[];
  };
  productsServices: {
    sectionTag: string;
    headlineStart: string;
    headlineHighlight: string;
    cards: ProductCard[];
  };
  testimonials: {
    sectionTag: string;
    items: {
      quote: string;
      author: string;
      title: string;
      company: string;
      avatar: string;
    }[];
  };
  ctaBand: {
    headlineStart: string;
    buttonText: string;
    headlineEnd: string;
    subheadline: string;
    bgImage: string;
  };
  footer: {
    columns: {
      title: string;
      links: NavItem[];
    }[];
    newsletter: {
      heading: string;
      description: string;
      placeholder: string;
      buttonText: string;
      successMessage: string;
    };
    legalLinks: NavItem[];
    copyright: string;
  };
}
