import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={`
        rounded-lg p-6
        bg-white dark:bg-gray-800
        border border-gray-200 dark:border-gray-700
        ${hover ? "transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-500 dark:hover:border-blue-400" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
