import React from "react";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, title, subtitle, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-20 px-4 md:px-8 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">{title}</h2>
            {subtitle && <p className="text-xl text-gray-600 dark:text-gray-400">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
