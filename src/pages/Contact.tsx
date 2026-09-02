import React, { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageTemplate } from "./PageTemplate";
import { SEO } from "../components/SEO";

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageTemplate
      title="Contact Us"
      subtitle="Ready to build your brand in the real world? Get in touch with our team."
    >
      <SEO
        title="Contact Us"
        description="Get in touch with ThreeAngles for out-of-home advertising inquiries, media plans, and partnership opportunities."
        path="/contact"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact ThreeAngles",
          "url": "https://threeangles.vercel.app/contact"
        }}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Contact Form */}
        <div>
          {submitted ? (
            <div className="p-8 bg-orange-50 border border-brand-orange-200 rounded-3xl flex items-center space-x-4">
              <CheckCircle2 className="w-8 h-8 text-brand-orange-500 shrink-0" />
              <div>
                <h3 className="font-display text-xl font-extrabold text-neutral-950">
                  Message Sent
                </h3>
                <p className="mt-1 text-neutral-600">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-neutral-800 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand-orange-500 focus:ring-1 focus:ring-brand-orange-500 transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-neutral-800 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand-orange-500 focus:ring-1 focus:ring-brand-orange-500 transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-neutral-800 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand-orange-500 focus:ring-1 focus:ring-brand-orange-500 transition-all"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-neutral-800 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand-orange-500 focus:ring-1 focus:ring-brand-orange-500 transition-all"
                  placeholder="+20 XXX XXX XXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-neutral-800 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand-orange-500 focus:ring-1 focus:ring-brand-orange-500 transition-all"
                  placeholder="Company name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-neutral-800 mb-2">
                    Budget Range
                  </label>
                  <select className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 focus:outline-none focus:border-brand-orange-500 focus:ring-1 focus:ring-brand-orange-500 transition-all">
                    <option value="">Select budget</option>
                    <option value="under-1m">Under 1,000,000 EGP</option>
                    <option value="1m-2m">1,000,000 – 2,000,000 EGP</option>
                    <option value="2m-5m">2,000,000 – 5,000,000 EGP</option>
                    <option value="5m-10m">5,000,000 – 10,000,000 EGP</option>
                    <option value="10m-20m">10,000,000 – 20,000,000 EGP</option>
                    <option value="20m+">20,000,000+ EGP</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-neutral-800 mb-2">
                    Market of Interest
                  </label>
                  <select className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 focus:outline-none focus:border-brand-orange-500 focus:ring-1 focus:ring-brand-orange-500 transition-all">
                    <option value="">Select market</option>
                    <option value="sheikh-zayed">El Sheikh Zayed</option>
                    <option value="6th-october">6th of October</option>
                    <option value="both">Both</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-neutral-800 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand-orange-500 focus:ring-1 focus:ring-brand-orange-500 transition-all resize-none"
                  placeholder="Tell us about your campaign..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center space-x-2 px-8 py-3.5 bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-lg transition-all"
              >
                <span>Send Message</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-orange-100 text-brand-orange-500 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display text-lg font-extrabold text-neutral-950">
                Office
              </h3>
              <p className="mt-1 text-neutral-600">
                Villa 113, North Dahshur Axis,<br />
                El Sheikh Zayed, Giza, Egypt
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-orange-100 text-brand-orange-500 flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display text-lg font-extrabold text-neutral-950">
                Phone
              </h3>
              <a href="tel:+201222169797" className="mt-1 text-neutral-600 hover:text-brand-orange-500 transition-colors block">
                +20 1222 16 9797
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-orange-100 text-brand-orange-500 flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display text-lg font-extrabold text-neutral-950">
                Email
              </h3>
              <a href="mailto:Threeangles.eg@gmail.com" className="mt-1 text-neutral-600 hover:text-brand-orange-500 transition-colors block">
                Threeangles.eg@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};
