import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { NewCampaign } from "../../types";

interface NewCampaignsCarouselProps {
  tag: string;
  headline: string;
  items: NewCampaign[];
}

export const NewCampaignsCarousel: React.FC<NewCampaignsCarouselProps> = ({
  tag,
  headline,
  items,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const idxRef = useRef(0);
  const jumping = useRef(false);
  const len = items.length;
  const triple = [...items, ...items, ...items];

  const scrollToIndex = useCallback(
    (targetReal: number) => {
      const container = scrollRef.current;
      if (!container) return;
      const clamped = ((targetReal % len) + len) % len;
      const card = container.children[len + clamped] as HTMLElement;
      if (!card) return;
      idxRef.current = clamped;
      setActiveIndex(clamped);
      jumping.current = true;
      container.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
      setTimeout(() => {
        jumping.current = false;
      }, 500);
    },
    [len]
  );

  const prev = () => scrollToIndex(idxRef.current - 1);
  const next = () => scrollToIndex(idxRef.current + 1);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const midCard = container.children[len] as HTMLElement;
    if (midCard) container.scrollLeft = midCard.offsetLeft;

    let ticking = false;
    const onScroll = () => {
      if (ticking || jumping.current) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const { scrollLeft, children } = container;
        const total = children.length;

        let closest = 0;
        let best = Infinity;
        for (let i = 0; i < total; i++) {
          const d = Math.abs((children[i] as HTMLElement).offsetLeft - scrollLeft);
          if (d < best) {
            best = d;
            closest = i;
          }
        }

        const real = closest % len;
        idxRef.current = real;
        setActiveIndex(real);

        if (closest < len || closest >= len * 2) {
          jumping.current = true;
          const mirror = children[len + real] as HTMLElement;
          if (mirror) container.scrollTo({ left: mirror.offsetLeft });
          requestAnimationFrame(() => {
            jumping.current = false;
          });
        }
      });
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, [len]);

  const renderCard = (campaign: NewCampaign, key: string | number) => (
    <div
      key={key}
      className="snap-start flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[55vw] lg:w-[42vw] group cursor-pointer"
    >
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5">
        <div className="flex h-full gap-[3px]">
          {[0, 1, 2].map((slice) => (
            <div key={slice} className="relative flex-1 overflow-hidden">
              <img
                src={campaign.image}
                alt={`${campaign.brand} campaign`}
                className="absolute inset-0 w-[300%] h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ left: `${-(slice * 100)}%` }}
                draggable={false}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-[0.9]">
            {campaign.brand}
          </h3>
          <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
            {campaign.tagline}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-8 md:pt-36 md:pb-10 lg:pt-40 lg:pb-12">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-orange-500 mb-3 block">
              {tag}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-black">
              {headline}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="flex items-center justify-center w-12 h-12 rounded-full border border-neutral-200 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all"
              aria-label="Previous campaign"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="flex items-center justify-center w-12 h-12 rounded-full border border-neutral-200 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all"
              aria-label="Next campaign"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-8 sm:px-12 lg:px-[calc((100vw-80rem)/2+3rem)] pb-12"
        style={{ scrollPaddingLeft: "32px" }}
      >
        {triple.map((campaign, idx) => renderCard(campaign, `${campaign.id}-${idx}`))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="flex items-center gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`h-[3px] rounded-full transition-all duration-500 ${
                idx === activeIndex
                  ? "w-10 bg-brand-orange-500"
                  : "w-4 bg-neutral-300 hover:bg-neutral-400"
              }`}
              aria-label={`Go to campaign ${idx + 1}`}
            />
          ))}
          <span className="ml-3 text-xs font-bold text-neutral-400 tabular-nums">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(len).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
};
