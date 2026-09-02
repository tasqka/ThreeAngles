import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { NavItem } from '../../types';
import billboardSvg from '../../assets/BillboardIllustration.svg';

interface FooterProps {
  brandName: string;
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
  ctaBand: {
    headlineStart: string;
    buttonText: string;
    headlineEnd: string;
    subheadline: string;
    bgImage: string;
  };
}

export const Footer: React.FC<FooterProps> = ({
  brandName,
  columns,
  newsletter,
  legalLinks,
  copyright,
  ctaBand,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <>
      {/* CTA Band */}
      <section
        id="contact"
        className="relative py-20 md:py-28 bg-black text-white overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={ctaBand.bgImage}
            alt=""
            className="w-full h-full object-cover opacity-35 filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/70" />
        </div>

        <div className="absolute inset-0 z-0 flex items-center justify-start pointer-events-none pl-8 sm:pl-16 lg:pl-24">
          <img
            src={billboardSvg}
            alt=""
            className="w-[55%] sm:w-[50%] lg:w-[45%] h-auto opacity-15"
            style={{ filter: "brightness(0) invert(0.5)" }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[1.05] max-w-5xl mx-auto">
            <span>{ctaBand.headlineStart}</span>{" "}
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-5 sm:px-10 py-2 sm:py-3.5 my-2 sm:my-0 bg-brand-orange-500 hover:bg-brand-orange-600 active:bg-brand-orange-700 text-white rounded-full shadow-2xl hover:shadow-brand-glow transform hover:scale-105 transition-all text-xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-normal align-middle"
            >
              <span>{ctaBand.buttonText}</span>
              <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 inline" />
            </Link>{" "}
            <span className="block sm:inline">{ctaBand.headlineEnd}</span>
          </div>

          <p className="mt-8 text-lg sm:text-2xl text-neutral-300 font-light max-w-xl mx-auto">
            {ctaBand.subheadline}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 text-white pt-16 pb-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-neutral-800">
          {/* Brand Logo & About */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-display text-3xl font-black tracking-tighter text-white">
                  {brandName}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-brand-orange-500" />
              </div>
              
              <p className="mt-4 text-sm text-neutral-400 max-w-sm leading-relaxed">
                Empowering brands to build unforgettable connections with audiences in the physical world through cutting-edge out-of-home media infrastructure and spatial intelligence.
              </p>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex items-center space-x-4 text-neutral-400">
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-neutral-900 hover:bg-brand-orange-500 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                </svg>
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-neutral-900 hover:bg-brand-orange-500 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#twitter"
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-full bg-neutral-900 hover:bg-brand-orange-500 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-neutral-900 hover:bg-brand-orange-500 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Directory Links Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 gap-6">
            {columns.map((column) => (
              <div key={column.title}>
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
                  {column.title}
                </h4>
                <ul className="space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-xs sm:text-sm text-neutral-400 hover:text-brand-orange-500 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Box */}
          <div id="contact-form" className="lg:col-span-4 bg-neutral-900 p-6 sm:p-8 rounded-3xl border border-neutral-800 flex flex-col justify-between">
            <div>
              <h4 className="font-display text-lg font-black uppercase text-white tracking-tight">
                {newsletter.heading}
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {newsletter.description}
              </p>
            </div>

            <div className="mt-6">
              {subscribed ? (
                <div className="p-4 bg-orange-950/60 border border-brand-orange-500/50 rounded-2xl flex items-center space-x-3 text-brand-orange-300 text-xs font-semibold animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange-500 shrink-0" />
                  <span>{newsletter.successMessage}</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label htmlFor="newsletter-email" className="sr-only">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        id="newsletter-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={newsletter.placeholder}
                        className="w-full pl-10 pr-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl text-xs sm:text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand-orange-500 focus:ring-1 focus:ring-brand-orange-500 transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-brand-orange-500 hover:bg-brand-orange-600 active:bg-brand-orange-700 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center space-x-2"
                  >
                    <span>{newsletter.buttonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-brand-orange-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div>{copyright}</div>
        </div>
      </div>
      </footer>
    </>
  );
};
