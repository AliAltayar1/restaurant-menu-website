"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      {/* Logo */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <Image
            src="/the-hook-restaurant-logo.png"
            alt="THE HOOK Logo"
            width={120}
            height={120}
            className="rounded-2xl shadow-lg"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-3">
          THE HOOK
        </h1>
        <p className="text-lg text-muted-foreground">
          مرحباً بك في مطعم ذا هوك
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
        <Link
          href="/menu"
          className="flex-1 text-white font-bold py-6 px-8 rounded-xl hover:opacity-90 transition-all text-center text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          style={{ backgroundColor: "var(--primary)" }}
        >
          <div className="text-2xl mb-2">🍔</div>
          <div>القائمة</div>
        </Link>

        <Link
          href="/location"
          className="flex-1 font-bold py-6 px-8 rounded-xl hover:opacity-90 transition-all text-center text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          style={{
            backgroundColor: "var(--accent)",
            color: "var(--accent-foreground)",
          }}
        >
          <div className="text-2xl mb-2">📍</div>
          <div>الموقع</div>
        </Link>
      </div>
    </div>
  );
}
