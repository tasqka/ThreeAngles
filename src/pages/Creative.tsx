import React from "react";
import { PageTemplate } from "./PageTemplate";
import { SEO } from "../components/SEO";

const services = [
  {
    title: "Creative Design",
    description:
      "Award-winning in-house creative studio producing bold, attention-grabbing designs tailored for out-of-home impact.",
  },
  {
    title: "3D Anamorphic",
    description:
      "Cutting-edge anamorphic illusions and 3D creative that stop commuters in their tracks and dominate social media.",
  },
  {
    title: "Experiential Production",
    description:
      "Full-service production for stunts, activations, and immersive brand experiences at OOH locations.",
  },
];

export const Creative: React.FC = () => {
  return (
    <PageTemplate
      title="Creative"
      subtitle="Our in-house creative studio delivers award-winning designs that maximize real-world attention."
    >
      <SEO
        title="Creative Services"
        description="From concept to installation — our creative team designs eye-catching OOH campaigns that connect brands with real-world audiences."
        path="/creative"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200 hover:border-brand-orange-300 transition-colors"
          >
            <h3 className="font-display text-xl font-extrabold text-neutral-950">
              {service.title}
            </h3>
            <p className="mt-3 text-neutral-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </PageTemplate>
  );
};
