import { ExternalLink, Volume2, VolumeX } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface HeroProps {
  headlineLine1: string;
  headlineLine2: string;
  headlineLine3: string;
  heroImage: string;
  heroImageAlt: string;
}

export const Hero: React.FC<HeroProps> = ({
  headlineLine1,
  headlineLine2,
  headlineLine3,
  heroImage,
  heroImageAlt,
}) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Bold Typography Headline */}
          <div className="lg:col-span-5 flex flex-col justify-center z-10">
            <h1 className="font-display text-[2.75rem] sm:text-6xl md:text-7xl xl:text-[80px] font-black leading-[0.85] tracking-tighter uppercase text-black">
              <span className="block">{headlineLine1}</span>
              <span className="block">{headlineLine2}</span>
              <span className="block text-brand-orange-500">
                {headlineLine3}
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-neutral-600 max-w-md font-normal leading-relaxed">
              Unskippable real-world presence that turns heads, sparks cultural
              conversation, and drives exponential business impact.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                to="/media-finder"
                className="inline-flex items-center justify-center h-14 px-8 bg-neutral-900 hover:bg-black text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-lg transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-900/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900"
              >
                Find Locations
              </Link>
            </div>
          </div>

          {/* Right: Video Player with Controls */}
          <div className="lg:col-span-7 relative">
            <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
              {/* Main Visual Frame with Soft Rounded Corners & Shadow */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-neutral-900 border-4 border-white aspect-[4/3] sm:aspect-[16/10]">
                <video
                  ref={videoRef}
                  src="/assets/hero-video.mp4"
                  poster={heroImage}
                  className="w-full h-full object-cover object-center"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  preload="metadata"
                />

                {/* Subtle Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-orange-950/20 to-transparent pointer-events-none mix-blend-overlay" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-4 py-2 rounded-full bg-gradient-to-r from-black/80 to-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest flex items-center space-x-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-brand-orange-500 animate-pulse shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                  <span>Roshan Masr Developments Campain</span>
                </div>

                {/* Bottom Controls: Mute Button & Instagram Link */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/reel/DcYQpoVsRKp/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View on Instagram"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/80 transition-colors border border-white/20"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/80 transition-colors border border-white/20"
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
