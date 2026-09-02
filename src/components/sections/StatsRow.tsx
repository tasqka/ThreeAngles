import React, { useState } from 'react';
import { Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StatItem } from '../../types';

interface StatsRowProps {
  stats: StatItem[];
}

export const StatsRow: React.FC<StatsRowProps> = ({ stats }) => {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-16 bg-white border-t border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative p-6 sm:p-8 rounded-2xl bg-neutral-50/70 border border-neutral-100 hover:border-orange-200 hover:bg-orange-50/30 transition-all duration-300 group"
            >
              {/* Stat Number in Brand Orange */}
              <div className="font-display text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-black text-brand-orange-500 tracking-tighter leading-none">
                {stat.value}
              </div>

              {/* Label + Tooltip Trigger */}
              <div className="mt-4 flex items-center space-x-2">
                <span className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-neutral-900">
                  {stat.label}
                </span>

                <div className="relative inline-block">
                  <button
                    type="button"
                    aria-label={`Info about ${stat.label}`}
                    onMouseEnter={() => setActiveTooltip(index)}
                    onMouseLeave={() => setActiveTooltip(null)}
                    onClick={() =>
                      setActiveTooltip(activeTooltip === index ? null : index)
                    }
                    className="p-1 rounded-full text-neutral-400 hover:text-brand-orange-500 focus:outline-none focus:ring-2 focus:ring-brand-orange-500"
                  >
                    <Info className="w-4 h-4" />
                  </button>

                  {/* Tooltip Popup */}
                  {activeTooltip === index && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 sm:w-64 p-3 bg-neutral-900 text-white text-xs rounded-xl shadow-xl z-20 animate-fadeIn pointer-events-none">
                      <p>{stat.tooltip}</p>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-neutral-900" />
                    </div>
                  )}
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-6 pt-4 border-t border-neutral-200/60">
                <Link
                  to={stat.href}
                  className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-700 group-hover:text-brand-orange-500 transition-colors"
                >
                  <span>{stat.linkText}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform text-brand-orange-500" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
