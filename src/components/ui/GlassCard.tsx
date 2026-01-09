import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`
        glass rounded-lg p-6
        transition-all duration-300
        hover:bg-opacity-20
        ${className}
      `}
    >
      {children}
    </div>
  );
}
