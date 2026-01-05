"use client";

import { useRef } from "react";

export default function CategoryChips({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  const containerRef = useRef(null);

  return (
    <div className=" top-[65px] sm:top-[73px] bg-background z-30 border-b border-border py-3">
      <div
        ref={containerRef}
        className="container-padding overflow-x-auto scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="flex gap-2 min-w-max px-1">
          {categories.map((category) => {
            const isSelected = category === selectedCategory;
            return (
              <button
                key={category}
                onClick={() => onSelectCategory(category)}
                className="px-3 sm:px-4 py-2 rounded-full font-semibold text-xs sm:text-sm whitespace-nowrap transition-all active:scale-95"
                style={{
                  backgroundColor: isSelected
                    ? "var(--primary)"
                    : "var(--light-surface)",
                  color: isSelected
                    ? "var(--primary-foreground)"
                    : "var(--secondary)",
                }}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
