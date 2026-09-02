import React from "react";
import { landingContent } from "../data/content";
import { Hero } from "../components/sections/Hero";
import { NewCampaignsCarousel } from "../components/sections/NewCampaignsCarousel";
import { PowerOfIrlMedia } from "../components/sections/PowerOfIrlMedia";
import { PowerToMove } from "../components/sections/PowerToMove";
import { StatsRow } from "../components/sections/StatsRow";
import { PerfectSpots } from "../components/sections/PerfectSpots";
import { FeaturedCaseStudies } from "../components/sections/FeaturedCaseStudies";
import { ProductsServices } from "../components/sections/ProductsServices";
import { Testimonial } from "../components/sections/Testimonial";
import { SEO } from "../components/SEO";

export const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="ThreeAngles — Out of Home Advertising in Egypt"
        description="Egypt's leading out-of-home advertising company. We build brands in the real world through billboards, transit media, digital screens, and street furniture across Sheikh Zayed and 6th of October."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ThreeAngles",
          "url": "https://threeangles.vercel.app",
          "description": "Out of home advertising company in Egypt",
          "sameAs": ["https://www.instagram.com/threeangles_advertising/"],
          "contactPoint": { "@type": "ContactPoint", "contactType": "sales", "area": "EG" }
        }}
      />
      <Hero
        headlineLine1={landingContent.hero.headlineLine1}
        headlineLine2={landingContent.hero.headlineLine2}
        headlineLine3={landingContent.hero.headlineLine3}
        heroImage={landingContent.hero.heroImage}
        heroImageAlt={landingContent.hero.heroImageAlt}
      />

      <NewCampaignsCarousel
        tag={landingContent.newCampaigns.tag}
        headline={landingContent.newCampaigns.headline}
        items={landingContent.newCampaigns.items}
      />

      <PowerOfIrlMedia
        image={landingContent.powerOfIrl.image}
        tabs={landingContent.powerOfIrl.tabs}
      />

      <PowerToMove
        headline={landingContent.powerToMove.headline}
        description={landingContent.powerToMove.description}
        searchPlaceholder={landingContent.powerToMove.searchPlaceholder}
        exploreLinkText={landingContent.powerToMove.exploreLinkText}
        exploreHref={landingContent.powerToMove.exploreHref}
        marketsList={landingContent.powerToMove.marketsList}
      />

      <StatsRow stats={landingContent.stats} />

      <PerfectSpots
        headlinePart1={landingContent.perfectSpots.headlinePart1}
        headlineHighlight={landingContent.perfectSpots.headlineHighlight}
        headlinePart2={landingContent.perfectSpots.headlinePart2}
        description={landingContent.perfectSpots.description}
        buttonText={landingContent.perfectSpots.buttonText}
        buttonHref={landingContent.perfectSpots.buttonHref}
        mapImage={landingContent.perfectSpots.mapImage}
        billboardImage={landingContent.perfectSpots.billboardImage}
        pins={landingContent.perfectSpots.pins}
      />

      <div style={{ height: "300vh" }}>
        <FeaturedCaseStudies
          tag={landingContent.caseStudies.tag}
          subheadline={landingContent.caseStudies.subheadline}
          items={landingContent.caseStudies.items}
        />
      </div>

      <ProductsServices
        sectionTag={landingContent.productsServices.sectionTag}
        headlineStart={landingContent.productsServices.headlineStart}
        headlineHighlight={landingContent.productsServices.headlineHighlight}
        cards={landingContent.productsServices.cards}
      />

      <Testimonial
        sectionTag={landingContent.testimonials.sectionTag}
        items={landingContent.testimonials.items}
      />
    </>
  );
};
