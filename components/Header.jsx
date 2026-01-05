"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const getBreadcrumbs = () => {
    if (pathname === "/") return null;

    const breadcrumbs = [{ label: "الصفحة الرئيسية", href: "/" }];

    if (pathname === "/menu") {
      breadcrumbs.push({ label: "المنيو", href: "/menu" });
    } else if (pathname === "/location") {
      breadcrumbs.push({ label: "الموقع", href: "/location" });
    }

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <header className="bg-white border-b border-border sticky top-0 z-40">
      <div className="container-padding py-3 sm:py-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity"
            >
              <Image
                src="/the-hook-restaurant-logo.png"
                alt="THE HOOK Logo"
                width={40}
                height={40}
                className="rounded-lg sm:w-[50px] sm:h-[50px]"
              />
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-secondary">
                  THE HOOK
                </h1>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  القائمة الرئيسية
                </p>
              </div>
            </Link>
          </div>

          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-2 text-sm">
              {breadcrumbs.map((crumb, index) => (
                <div key={crumb.href} className="flex items-center gap-2">
                  {index > 0 && (
                    <span className="text-muted-foreground">&gt;</span>
                  )}
                  {index === breadcrumbs.length - 1 ? (
                    <span
                      className="font-semibold"
                      style={{ color: "var(--primary)" }}
                    >
                      {crumb.label}
                    </span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
