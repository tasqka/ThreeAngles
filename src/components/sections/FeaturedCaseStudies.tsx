import { ArrowRight } from "lucide-react";
import React, { useRef, useEffect, useState } from "react";
import { CaseStudy } from "../../types";

interface FeaturedCaseStudiesProps {
  tag: string;
  subheadline: string;
  items: CaseStudy[];
}

export const FeaturedCaseStudies: React.FC<FeaturedCaseStudiesProps> = ({
  tag,
  subheadline,
  items,
}) => {
  const [activeId, setActiveId] = useState<string>("");
  const activeItem = items.find((i) => i.id === activeId) ?? null;
  const displayHeadline = activeItem?.headline || subheadline;
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scroll = scrollRef.current;
    if (!section || !scroll) return;

    const onWheel = (e: WheelEvent) => {
      if (window.innerWidth < 1024) return;
      const rect = section.getBoundingClientRect();
      const pinned = rect.top <= 1 && rect.bottom >= window.innerHeight - 1;
      if (!pinned) return;

      const maxScroll = scroll.scrollHeight - scroll.clientHeight;
      const atTop = scroll.scrollTop <= 0;
      const atBottom = scroll.scrollTop >= maxScroll - 1;

      if ((e.deltaY < 0 && atTop) || (e.deltaY > 0 && atBottom)) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();
      scroll.scrollTop = Math.max(0, Math.min(maxScroll, scroll.scrollTop + e.deltaY));
    };

    document.addEventListener("wheel", onWheel, { passive: false });
    return () => document.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="case-studies"
      className="relative lg:sticky lg:top-0 lg:h-screen bg-brand-orange-500"
    >
      {/* ── Background images — clipped to section bounds only ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {items.map((item) => (
          <div
            key={item.id}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: item.id === activeId ? 1 : 0 }}
            aria-hidden="true"
          >
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover object-center"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
            <div className="absolute inset-0 bg-brand-orange-600/25 mix-blend-multiply" />
          </div>
        ))}
      </div>

      {/* ── Content — full height of section ── */}
      <div className="relative z-10 flex h-full flex-col lg:flex-row">
        {/* LEFT: header group + active case detail */}
        <div className="lg:w-[52%] flex flex-col justify-center px-6 sm:px-8 lg:px-12 h-full py-8 lg:py-0">
          {/* Top: badge + heading + link grouped */}
          <div>
            {/* Pills */}
            {activeItem && activeItem.pills && (
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {activeItem.pills.map((pill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full border border-white/40 text-white text-xs font-semibold"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            )}
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-[1.1] text-white max-w-[450px]">
              {displayHeadline}
            </h2>
            <a
              href="#all-case-studies"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white/55 hover:text-white transition-colors group"
            >
              <span>Explore All Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Bottom: active case info */}
          <div className="mt-8 transition-all duration-500">
            {activeItem ? (
              <>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-2 block">
                  {activeItem.tag}
                </span>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-[450px]">
                  {activeItem.description}
                </p>
                <a
                  href={`#case-${activeItem.id}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white border border-white/35 hover:bg-white hover:text-black transition-all px-4 py-2 rounded-full group"
                >
                  <span>Read Full Case</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </>
            ) : (
              <p className="text-white/40 text-sm italic">
                Press case study to learn more
              </p>
            )}
          </div>
        </div>

        {/* RIGHT: names list — starts from middle, scrolls via wheel hijack */}
        <div
          ref={scrollRef}
          className="lg:w-[74%] pl-0 pr-6 lg:pr-10 overflow-y-auto scrollbar-hide relative max-h-[50vh] lg:max-h-none"
        >
          <div style={{ paddingTop: "10vh", paddingBottom: "10vh" }} className="lg:pt-[50vh]">
            <ul className="flex flex-col">
              {items.map((item, idx) => {
                const isActive = item.id === activeId;
                const rotation =
                  idx % 2 === 0 ? "-rotate-[0.5deg]" : "rotate-[0.5deg]";

                return (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveId(item.id)}
                      className={[
                        "w-full text-right font-display font-black uppercase tracking-tighter",
                        "leading-[0.87] transition-all duration-300",
                        "text-[clamp(2.5rem,5.5vw,5.5rem)]",
                        "transform origin-right",
                        rotation,
                        "py-[0.14em]",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50",
                        isActive ? "scale-[1.012]" : "hover:scale-[1.006]",
                      ].join(" ")}
                      style={
                        isActive
                          ? {
                              fontFamily: "'TT Fors', sans-serif",
                              WebkitTextFillColor: "white",
                              color: "white",
                            }
                          : activeId
                            ? {
                                fontFamily: "'TT Fors Outline', sans-serif",
                                color: "white",
                              }
                            : {
                                fontFamily: "'TT Fors', sans-serif",
                                WebkitTextFillColor: "black",
                                color: "black",
                              }
                      }
                      aria-current={isActive ? "true" : undefined}
                    >
                      {item.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
