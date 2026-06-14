"use client";

import { useEffect } from "react";

export default function OrderSummaryModal({
  isOpen,
  onClose,
  cart,
  totalPrice,
}) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const getCurrentDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString("ar-SY", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const time = now.toLocaleTimeString("ar-SY", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${date} - ${time}`;
  };

  const generateOrderSummary = () => {
    let summary = "🍽️ ملخص الطلب - THE HOOK\n";
    summary += "━━━━━━━━━━━━━━━━━━━━\n\n";
    summary += `📅 ${getCurrentDateTime()}\n\n`;
    summary += "📋 الأصناف:\n";
    summary += "━━━━━━━━━━━━━━━━━━━━\n\n";

    cart.forEach((item, index) => {
      const itemName =
        item.hasVariants && item.variantName
          ? `${item.name_ar} (${item.variantName})`
          : item.name_ar;
      const itemPrice = item.hasVariants
        ? item.price.newCurrency
        : item.price.newCurrency;

      summary += `${index + 1}. ${itemName}\n`;
      summary += `   الكمية: ${item.quantity}\n`;
      summary += `   السعر: ${(itemPrice * item.quantity).toLocaleString()} ل.س\n`;
      if (item.notes) {
        summary += `   ملاحظات: ${item.notes}\n`;
      }
      summary += "\n";
    });

    summary += "━━━━━━━━━━━━━━━━━━━━\n";
    summary += `💰 الإجمالي: ${totalPrice.toLocaleString()} ل.س\n`;
    summary += "━━━━━━━━━━━━━━━━━━━━\n";

    return summary;
  };

  const handleCopyToClipboard = async () => {
    try {
      const summary = generateOrderSummary();
      await navigator.clipboard.writeText(summary);
      alert("تم نسخ ملخص الطلب!");
    } catch (error) {
      console.error("Failed to copy:", error);
      alert("فشل نسخ الملخص. حاول مرة أخرى.");
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-[60] transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[600px] md:max-h-[90vh] bg-white rounded-2xl z-[60] flex flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <div
          className="p-6 border-b border-border flex items-center justify-between"
          style={{ backgroundColor: "var(--light-surface)" }}
        >
          <div>
            <h2
              className="text-3xl font-bold mb-1"
              style={{ color: "var(--secondary)" }}
            >
              ملخص الطلب
            </h2>
            <p className="text-sm text-muted-foreground">
              {getCurrentDateTime()}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Restaurant Info */}
        <div className="p-6 border-b border-border text-center">
          <h1
            className="text-4xl font-bold mb-2"
            style={{ color: "var(--primary)" }}
          >
            THE HOOK
          </h1>
          <p className="text-muted-foreground">مطعم ذا هوك</p>
        </div>

        {/* Order Items */}
        <div className="flex-1 overflow-y-auto p-6">
          <h3
            className="text-xl font-bold mb-4"
            style={{ color: "var(--secondary)" }}
          >
            الأصناف المطلوبة:
          </h3>
          <div className="space-y-4">
            {cart.map((item, index) => {
              const itemPrice = item.hasVariants
                ? item.price.newCurrency
                : item.price.newCurrency;

              return (
                <div
                  key={`${item.id}-${index}`}
                  className="pb-4 border-b border-border last:border-0"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="font-bold text-lg"
                          style={{ color: "var(--secondary)" }}
                        >
                          {index + 1}.
                        </span>
                        <h4
                          className="font-bold text-lg"
                          style={{ color: "var(--secondary)" }}
                        >
                          {item.name_ar}
                          {item.hasVariants && item.variantName && (
                            <span className="text-base font-normal text-muted-foreground">
                              {" "}
                              ({item.variantName})
                            </span>
                          )}
                        </h4>
                      </div>
                      {item.notes && (
                        <p className="text-sm text-muted-foreground mr-6">
                          <span className="font-semibold">ملاحظات:</span>{" "}
                          {item.notes}
                        </p>
                      )}
                    </div>
                    {/* <div className="text-left">
                      <p
                        className="font-bold text-lg"
                        style={{ color: "var(--primary)" }}
                      >
                        {(itemPrice * item.quantity).toLocaleString()} ل.س
                      </p>
                    </div> */}
                  </div>
                  <div className="mr-6">
                    <p className="text-sm text-muted-foreground">
                      الكمية:{" "}
                      <span className="font-semibold">{item.quantity}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div
          className="p-6 border-t border-border space-y-4"
          style={{ backgroundColor: "var(--light-surface)" }}
        >
          {/* Total */}
          {/* <div className="flex items-center justify-between py-4">
            <span
              className="text-2xl font-bold"
              style={{ color: "var(--secondary)" }}
            >
              الإجمالي:
            </span>
            <span
              className="text-3xl font-bold"
              style={{ color: "var(--primary)" }}
            >
              {totalPrice.toLocaleString()} ل.س
            </span>
          </div> */}

          {/* Copy Button */}
          <button
            onClick={handleCopyToClipboard}
            className="w-full text-white font-bold py-4 rounded-lg hover:opacity-90 transition-all text-lg flex items-center justify-center gap-2"
            style={{ backgroundColor: "var(--primary)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
              />
            </svg>
            نسخ الملخص
          </button>
        </div>
      </div>
    </>
  );
}
