import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { landingContent } from "./data/content";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Home } from "./pages/Home";
import { Markets } from "./pages/Markets";
import { Media } from "./pages/Media";
import { MediaFormat } from "./pages/MediaFormat";
import { DigitalOOH } from "./pages/DigitalOOH";
import { Billboards } from "./pages/Billboards";
import { Monorail } from "./pages/Monorail";
import { StreetFurniture } from "./pages/Banners";
import { Resources } from "./pages/Resources";
import { ResourceDetail } from "./pages/ResourceDetail";
import { AdTech } from "./pages/AdTech";
import { Creative } from "./pages/Creative";
import { About } from "./pages/About";
import { MediaFinder } from "./pages/MediaFinder";
import { Careers } from "./pages/Careers";
import { Contact } from "./pages/Contact";

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-neutral-900 flex flex-col selection:bg-brand-orange-500 selection:text-white">
        <Navbar
          brandName={landingContent.brand.name}
          links={landingContent.navigation.links}
          mediaFinderLink={landingContent.navigation.mediaFinderLink}
          contactButtonText={landingContent.navigation.contactButtonText}
        />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/markets" element={<Markets />} />
            <Route path="/media" element={<Media />} />
            <Route path="/media/:formatId" element={<MediaFormat />} />
            <Route path="/media/digital-ooh" element={<DigitalOOH />} />
            <Route path="/media/billboards" element={<Billboards />} />
            <Route path="/media/monorail" element={<Monorail />} />
            <Route path="/media/banners" element={<StreetFurniture />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/:resourceId" element={<ResourceDetail />} />
            <Route path="/ad-tech" element={<AdTech />} />
            <Route path="/creative" element={<Creative />} />
            <Route path="/about" element={<About />} />
            <Route path="/media-finder" element={<MediaFinder />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer
          brandName={landingContent.brand.name}
          columns={landingContent.footer.columns}
          newsletter={landingContent.footer.newsletter}
          legalLinks={landingContent.footer.legalLinks}
          copyright={landingContent.footer.copyright}
          ctaBand={landingContent.ctaBand}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
