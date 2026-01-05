"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 container-padding py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl text-primary font-bold mb-6 text-center">
            موقعنا
          </h1>

          <div className="flex justify-center items-center w-full flex-col ">
            <h1 className="text-2xl font-semibold text-primary mb-2">
              الفرع الرئيسي
            </h1>
            <p className="text-white bg-primary border-primary border py-2 px-6 w-fit rounded-sm">
              الصابونية - جانب التجنيد القديم
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-muted rounded-md p-4 text-center mt-10">
            <div className="mt-2 h-60 bg-accent/20 rounded flex items-center justify-center">
              <div className="w-full h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d203.96067843830588!2d36.75785198807715!3d35.122417819791956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1524830061908d67%3A0x86666b7aa56d38cb!2z2YXYt9i52YUg2LDYpyDZh9mI2YjZgyB8IFRoZSBIb29rIFJlc3RhdXJhbnQ!5e0!3m2!1sen!2snl!4v1767569721683!5m2!1sen!2snl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-secondary mb-4">
                معلومات التواصل
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-semibold text-secondary">العنوان</p>
                    <p className="text-muted-foreground">
                      {" "}
                      الصابونية - جانب التجنيد القديم
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="font-semibold text-secondary mb-1">
                      رقم الهاتف
                    </p>
                    <p className="text-muted-foreground mb-0.5" dir="ltr">
                      +963 932 221 340
                    </p>
                    <p className="text-muted-foreground mb-0.5" dir="ltr">
                      +963 945 695 694
                    </p>
                    <p className="text-muted-foreground mb-0.5" dir="ltr">
                      013 253 55 11
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="font-semibold text-secondary">
                      البريد الإلكتروني
                    </p>
                    <p className="text-muted-foreground">info@thehook.sy</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md ">
              <h2 className="text-xl font-bold text-secondary mb-4">
                ساعات العمل
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-secondary">
                    السبت - الجمعة
                  </span>
                  <span className="text-muted-foreground" dir="ltr">
                    9:00 AM - 3:00 AM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
