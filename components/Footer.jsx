import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  const location = "نزلة العلمين مقابل شعبة التجنيد سابقاً";

  return (
    <footer className="bg-secondary text-white mt-12 py-8 border-t border-border">
      <div className="container-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-3">THE HOOK</h3>
            <p className="text-sm text-gray-300">
              مطعم ذا هوك - أفضل وجبات الدجاج والبرغر في المنطقة
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-3">روابط سريعة</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm text-gray-300 hover:text-white transition-colors w-fit"
              >
                الرئيسية
              </Link>
              <Link
                href="/menu"
                className="text-sm text-gray-300 hover:text-white transition-colors w-fit"
              >
                القائمة
              </Link>
              <Link
                href="/location"
                className="text-sm text-gray-300 hover:text-white transition-colors w-fit"
              >
                الموقع
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-3">تواصل معنا</h3>
            <div className="text-sm text-gray-300 space-y-2">
              <p className="" dir="ltr">
                +963 932 221 340
              </p>
              <p className="" dir="ltr">
                +963 945 695 694
              </p>
              <p className="" dir="ltr">
                013 253 55 11
              </p>
              <a href="mailto:hookt1370@gmail.com" className="mb-1 block">
                hookt1370@gmail.com
              </a>
              <p>📍{location}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-400" dir="rtl">
            © {year} <span dir="ltr">THE HOOK</span>. جميع الحقوق محفوظة
          </p>
          <p className="text-sm text-gray-400 mt-2" dir="rtl">
            created by{" "}
            <Link
              href="https://appstech.vercel.app/"
              className="text-orange-400 hover:underline"
            >
              appstech
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
