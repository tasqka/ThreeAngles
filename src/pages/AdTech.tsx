import React from "react";
import { PageTemplate } from "./PageTemplate";

const features = [
  {
    title: "Programmatic DOOH",
    description:
      "Automated bidding and placement across our digital inventory, integrated with major DSPs for seamless omnichannel campaigns.",
  },
  {
    title: "Mobile Retargeting",
    description:
      "Retarget exposed audiences on their mobile devices after they encounter your OOH campaign in the real world.",
  },
  {
    title: "Geofenced Triggers",
    description:
      "Activate mobile ads and notifications when audiences enter defined geofences around your OOH placements.",
  },
  {
    title: "Attribution & Analytics",
    description:
      "Measure foot traffic lift, brand awareness, and conversion metrics with our spatial intelligence platform.",
  },
];

export const AdTech: React.FC = () => {
  return (
    <PageTemplate
      title="Ad Tech"
      subtitle="Data-driven technology powering smarter out-of-home campaigns with measurable results."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200 hover:border-brand-orange-300 transition-colors"
          >
            <h3 className="font-display text-xl font-extrabold text-neutral-950">
              {feature.title}
            </h3>
            <p className="mt-3 text-neutral-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </PageTemplate>
  );
};
