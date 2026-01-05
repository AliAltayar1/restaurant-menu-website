"use client"

import { useState } from "react"

export default function FilterSortBar({ filters, setFilters, sortBy, setSortBy }) {
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="space-y-3">
      {/* Filter & Sort Toggle Buttons */}
      <div className="flex flex-col sm:flex-row gap-2">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm"
          style={{ backgroundColor: "var(--light-surface)", color: "var(--secondary)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
            />
          </svg>
          تصفية
        </button>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2.5 rounded-lg font-semibold text-sm w-full sm:w-auto"
          style={{
            backgroundColor: "var(--light-surface)",
            color: "var(--secondary)",
            border: "1px solid var(--border)",
          }}
        >
          <option value="none">ترتيب حسب</option>
          <option value="price-asc">السعر: من الأقل للأعلى</option>
          <option value="price-desc">السعر: من الأعلى للأقل</option>
          <option value="name">الاسم</option>
        </select>
      </div>

      {/* Filter Options */}
      {showFilters && (
        <div className="p-4 rounded-lg space-y-4" style={{ backgroundColor: "var(--light-surface)" }}>
          {/* Best Seller Filter */}
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.bestSeller}
              onChange={(e) => setFilters({ ...filters, bestSeller: e.target.checked })}
              className="w-5 h-5 rounded accent-[var(--primary)]"
            />
            <span className="font-semibold">الأكثر طلباً فقط</span>
          </label>

          {/* Spicy Level Filter */}
          <div className="space-y-2">
            <p className="font-semibold mb-2">مستوى الحرارة:</p>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setFilters({ ...filters, spicyLevel: null })}
                className="px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all"
                style={{
                  backgroundColor: filters.spicyLevel === null ? "var(--primary)" : "var(--background)",
                  color: filters.spicyLevel === null ? "var(--primary-foreground)" : "var(--secondary)",
                  border: "1px solid var(--border)",
                }}
              >
                الكل
              </button>
              <button
                onClick={() => setFilters({ ...filters, spicyLevel: 0 })}
                className="px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all"
                style={{
                  backgroundColor: filters.spicyLevel === 0 ? "var(--primary)" : "var(--background)",
                  color: filters.spicyLevel === 0 ? "var(--primary-foreground)" : "var(--secondary)",
                  border: "1px solid var(--border)",
                }}
              >
                غير حار
              </button>
              <button
                onClick={() => setFilters({ ...filters, spicyLevel: 1 })}
                className="px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap"
                style={{
                  backgroundColor: filters.spicyLevel === 1 ? "var(--primary)" : "var(--background)",
                  color: filters.spicyLevel === 1 ? "var(--primary-foreground)" : "var(--secondary)",
                  border: "1px solid var(--border)",
                }}
              >
                🌶️ خفيف
              </button>
              <button
                onClick={() => setFilters({ ...filters, spicyLevel: 2 })}
                className="px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap"
                style={{
                  backgroundColor: filters.spicyLevel === 2 ? "var(--primary)" : "var(--background)",
                  color: filters.spicyLevel === 2 ? "var(--primary-foreground)" : "var(--secondary)",
                  border: "1px solid var(--border)",
                }}
              >
                🌶️🌶️ متوسط
              </button>
              <button
                onClick={() => setFilters({ ...filters, spicyLevel: 3 })}
                className="px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap"
                style={{
                  backgroundColor: filters.spicyLevel === 3 ? "var(--primary)" : "var(--background)",
                  color: filters.spicyLevel === 3 ? "var(--primary-foreground)" : "var(--secondary)",
                  border: "1px solid var(--border)",
                }}
              >
                🌶️🌶️🌶️ حار جداً
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
