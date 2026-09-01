import React from "react";

interface PageTemplateProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export const PageTemplate: React.FC<PageTemplateProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-950 leading-[0.95]">
            {title}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed">
            {subtitle}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
};
