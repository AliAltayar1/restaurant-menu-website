"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemove,
  onClear,
  totalPrice,
  totalOldPrice,
  onViewOrder,
}) {
  // Prevent body scroll when drawer is open
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

  const handleClearCart = () => {
    if (window.confirm("هل أنت متأكد من تفريغ السلة؟")) {
      onClear();
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl z-50 max-h-[85vh] flex flex-col md:left-auto md:right-0 md:top-0 md:bottom-0 md:w-[500px] md:rounded-none md:max-h-screen"
        style={{ animation: "slideUp 0.3s ease-out" }}
      >
        {/* Header */}
        <div className="p-4 border-b border-border flex items-center justify-between">
          <h2
            className="text-2xl font-bold"
            style={{ color: "var(--secondary)" }}
          >
            سلة الطلبات
          </h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-muted transition-all"
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

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-20 h-20 text-muted-foreground mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <p className="text-xl font-semibold text-muted-foreground">
                سلتك فارغة
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                أضف بعض المنتجات للبدء
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div
                  key={`${item.cartItemId || item.id}-${index}`}
                  className="bg-muted rounded-lg p-3 flex gap-3"
                >
                  {/* Item Image */}
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.imageUrl || "/placeholder.svg"}
                      alt={item.name_ar}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-secondary mb-1">
                      {item.name_ar}
                      {item.hasVariants && item.variantName && (
                        <span className="text-sm font-normal text-muted-foreground">
                          {" "}
                          ({item.variantName})
                        </span>
                      )}
                    </h3>
                    {item.notes && (
                      <p className="text-sm text-muted-foreground mb-2">
                        ملاحظة: {item.notes}
                      </p>
                    )}

                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            if (item.quantity === 1) {
                              onRemove(item.cartItemId || item.id, item.notes);
                            } else {
                              onUpdateQuantity(
                                item.cartItemId || item.id,
                                item.notes,
                                item.quantity - 1
                              );
                            }
                          }}
                          className="w-8 h-8 rounded-lg flex items-center justify-center font-bold bg-white hover:bg-gray-100 transition-all"
                        >
                          {item.quantity === 1 ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="w-4 h-4"
                              style={{ color: "var(--destructive)" }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          ) : (
                            "-"
                          )}
                        </button>
                        <span className="font-bold w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            onUpdateQuantity(
                              item.cartItemId || item.id,
                              item.notes,
                              item.quantity + 1
                            )
                          }
                          className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white transition-all"
                          style={{ backgroundColor: "var(--primary)" }}
                        >
                          +
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-left">
                        <p
                          className="font-bold"
                          style={{ color: "var(--primary)" }}
                        >
                          {(item.hasVariants
                            ? item.price.newCurrency
                            : item.price.newCurrency) * item.quantity}{" "}
                          ل.س
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {(item.hasVariants
                            ? item.price.oldCurrency
                            : item.price.oldCurrency) * item.quantity}{" "}
                          ل.س
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() =>
                      onRemove(item.cartItemId || item.id, item.notes)
                    }
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center hover:bg-destructive/10 transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                      style={{ color: "var(--destructive)" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ))}

              {/* Clear Cart Button */}
              {cart.length > 0 && (
                <button
                  onClick={handleClearCart}
                  className="w-full py-3 rounded-lg font-semibold text-sm hover:bg-destructive/20 transition-all"
                  style={{
                    backgroundColor: "var(--muted)",
                    color: "var(--destructive)",
                  }}
                >
                  تفريغ السلة
                </button>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-4 border-t border-border space-y-3">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">الإجمالي:</span>
                <span
                  className="text-2xl font-bold"
                  style={{ color: "var(--primary)" }}
                >
                  {totalPrice.toLocaleString()} ل.س
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  السعر القديم:
                </span>
                <span className="text-base text-muted-foreground">
                  {totalOldPrice.toLocaleString()} ل.س
                </span>
              </div>
            </div>

            {/* View Order Button */}
            <p className="text-primary text-sm">
              يمكنك عرض الطلب على المسؤول عن جمع الطلبات عند الانتهاء من طلبك
            </p>
            <button
              onClick={onViewOrder}
              className="w-full text-white font-bold py-4 rounded-lg hover:opacity-90 transition-all text-lg"
              style={{ backgroundColor: "var(--primary)" }}
            >
              عرض الطلب
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
