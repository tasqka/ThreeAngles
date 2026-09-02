import { ArrowRight } from "lucide-react";
import React, { useCallback, useEffect, useRef, useState } from "react";

interface PowerToMoveProps {
  headline: string;
  description: string;
  searchPlaceholder: string;
  exploreLinkText: string;
  exploreHref: string;
  marketsList: string[];
}

const microStats = [
  "Sheikh Zayed & 6th of October",
  "10+ media formats",
  "Premium locations",
];

function useCountUp(target: number, duration: number, inView: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, inView]);
  return count;
}

export const PowerToMove: React.FC<PowerToMoveProps> = ({
  headline,
  description,
  exploreLinkText,
  exploreHref,
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const countValue = useCountUp(1200, 2000, inView);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const parallaxOffset = scrollY * 0.08;

  return (
    <section
      id="markets"
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-white overflow-hidden"
    >
      {/* Parallax background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <pattern
            id="shards"
            x="0"
            y="0"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M60 0 L120 60 L60 120 L0 60 Z"
              fill="none"
              stroke="#000"
              strokeWidth="0.5"
            />
            <line
              x1="0"
              y1="0"
              x2="120"
              y2="120"
              stroke="#000"
              strokeWidth="0.3"
            />
            <line
              x1="120"
              y1="0"
              x2="0"
              y2="120"
              stroke="#000"
              strokeWidth="0.3"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#shards)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-6 z-10">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-black leading-[0.95]">
              {headline}
            </h2>

            {/* Animated counter */}
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-brand-orange-500 leading-none">
                {countValue}+
              </span>
              <span className="text-sm sm:text-base font-bold text-neutral-500 uppercase tracking-wider">
                Displays Covered
              </span>
            </div>

            <p className="mt-6 text-base sm:text-lg text-neutral-600 max-w-lg font-normal leading-relaxed">
              {description}
            </p>

            {/* Micro stat strip */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-neutral-500 font-semibold">
              {microStats.map((stat, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <span className="w-px h-4 bg-neutral-300" />}
                  <span>{stat}</span>
                </React.Fragment>
              ))}
            </div>

            {/* Explore All Markets Link */}
            <div className="mt-6">
              <a
                href={exploreHref}
                className="inline-flex items-center space-x-2 text-sm sm:text-base font-bold text-black hover:text-brand-orange-500 transition-colors uppercase tracking-wider group"
              >
                <span>{exploreLinkText}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform text-brand-orange-500" />
              </a>
            </div>
          </div>

          {/* Right: Zayed & 6th of October Map */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-[4/3]">
              {/* Inline SVG map with light orange fill */}
              <svg
                className="w-full h-full"
                viewBox="0 0 1687 1378"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M78.0291 833.649L11.3465 733.263C2.33513 719.697 4.95036 701.527 17.4218 691.053L114.599 609.439C120.364 604.597 127.651 601.943 135.179 601.943H154.338C159.39 601.943 164.371 600.747 168.872 598.452L178.455 593.567C184.02 590.73 187.524 585.011 187.524 578.764C187.524 573.811 189.734 569.116 193.55 565.959L268.269 504.165C275.705 498.016 285.519 495.55 294.979 497.454L316.208 501.729C336.021 505.718 354.524 490.569 354.524 470.358V467.005C354.524 456.618 359.565 446.878 368.045 440.88L451.949 381.533C466.161 371.48 469.731 351.912 459.984 337.489L374.478 210.969C363.822 195.201 369.2 173.674 386.019 164.77L678.887 9.72203C692.79 2.36114 709.982 6.19865 719.437 18.7733L1094.29 517.358C1104.91 531.487 1124.98 534.327 1139.1 523.7L1313.19 392.737C1324.15 384.492 1339.15 384.148 1350.47 391.884L1365.09 401.868C1369.95 405.187 1373.8 409.783 1376.22 415.149L1451.29 581.771C1453.42 586.482 1456.65 590.61 1460.71 593.8L1514.33 635.871C1522.03 641.916 1532.08 644.102 1541.6 641.802L1572.98 634.219C1588.92 630.369 1605.18 639.185 1610.66 654.637L1678.8 846.964C1682.76 858.136 1678.66 870.572 1668.83 877.196C1664.71 879.97 1661.48 883.863 1659.5 888.417L1561.17 1115.36C1558.48 1121.59 1553.87 1126.8 1548.02 1130.23L1514.02 1150.21C1510.39 1152.35 1507.22 1155.17 1504.68 1158.53L1491.97 1175.39C1487.79 1180.94 1485.52 1187.7 1485.52 1194.66V1227.25C1485.52 1241.33 1476.33 1253.75 1462.86 1257.86L1435.88 1266.09C1429.78 1267.95 1423.27 1267.95 1417.17 1266.08L872.488 1099.18C862.764 1096.2 852.204 1098.02 844.038 1104.08L534.728 1333.71C530.971 1336.5 527.872 1340.08 525.648 1344.19L519.792 1355.03C511.769 1369.88 493.59 1375.95 478.257 1368.89L419.358 1341.78C413.912 1339.27 409.279 1335.29 405.989 1330.27L214.816 1039.1C209.003 1030.24 207.948 1019.09 211.998 1009.3L216.557 998.28C220.876 987.842 219.372 975.901 212.6 966.86L133.124 860.759C127.081 852.692 117.591 847.943 107.512 847.943H104.684C93.9661 847.943 83.9596 842.577 78.0291 833.649Z"
                  fill="#FFF3E6"
                  stroke="#F97316"
                  strokeWidth="3"
                />
              </svg>

              {/* Floating Metrics Badge */}
              <div className="absolute bottom-4 right-2 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-neutral-100 flex items-center space-x-3">
                <div className="w-16 h-9 rounded-xl bg-orange-100 flex items-center justify-center text-brand-orange-600 font-bold text-sm">
                  {countValue}+
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-900 uppercase">
                    Displays Covered
                  </div>
                  <div className="text-[11px] text-neutral-500">
                    Zayed & 6th of October
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
