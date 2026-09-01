import React from "react";
import { landingContent } from "../data/content";
import { Hero } from "../components/sections/Hero";
import { PowerOfIrlMedia } from "../components/sections/PowerOfIrlMedia";
import { PowerToMove } from "../components/sections/PowerToMove";
import { StatsRow } from "../components/sections/StatsRow";
import { PerfectSpots } from "../components/sections/PerfectSpots";
import { FeaturedCaseStudies } from "../components/sections/FeaturedCaseStudies";
import { ProductsServices } from "../components/sections/ProductsServices";
import { Testimonial } from "../components/sections/Testimonial";

export const Home: React.FC = () => {
  return (
    <>
      <Hero
        headlineLine1={landingContent.hero.headlineLine1}
        headlineLine2={landingContent.hero.headlineLine2}
        headlineLine3={landingContent.hero.headlineLine3}
        heroImage={landingContent.hero.heroImage}
        heroImageAlt={landingContent.hero.heroImageAlt}
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
