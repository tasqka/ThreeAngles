import React from "react";
import { Briefcase, MapPin, Clock } from "lucide-react";
import { PageTemplate } from "./PageTemplate";

const openings = [
  {
    title: "Account Manager",
    location: "Sheikh Zayed",
    type: "Full-time",
    description:
      "Manage client relationships and campaign execution across our OOH portfolio in Sheikh Zayed and 6th of October.",
  },
  {
    title: "Creative Designer",
    location: "Sheikh Zayed",
    type: "Full-time",
    description:
      "Create bold, attention-grabbing OOH creatives for top-tier brands using our in-house design studio.",
  },
  {
    title: "Data Analyst",
    location: "6th of October",
    type: "Full-time",
    description:
      "Analyze spatial data, foot traffic patterns, and campaign performance metrics to drive data-informed strategies.",
  },
];

export const Careers: React.FC = () => {
  return (
    <PageTemplate
      title="Careers"
      subtitle="Join Egypt's leading out-of-home media company and help brands dominate the real world."
    >
      <div className="space-y-6">
        {openings.map((job) => (
          <div
            key={job.title}
            className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200 hover:border-brand-orange-300 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="font-display text-xl font-extrabold text-neutral-950">
                  {job.title}
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-neutral-500">
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{job.type}</span>
                  </span>
                </div>
                <p className="mt-3 text-neutral-600 leading-relaxed">
                  {job.description}
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-bold text-sm uppercase tracking-wider rounded-full transition-colors shrink-0"
              >
                <Briefcase className="w-4 h-4" />
                <span>Apply</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </PageTemplate>
  );
};
