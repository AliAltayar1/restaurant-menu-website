"use client";

import { useState } from "react";
import Image from "next/image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function ProductCard({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(
    product.hasVariants ? product.variants[0] : null
  );

  const handleAddToCart = () => {
    const itemToAdd = product.hasVariants
      ? {
          ...product,
          selectedVariant,
          price: selectedVariant.price,
          variantName: selectedVariant.name_ar,
        }
      : product;

    onAddToCart(itemToAdd, quantity, notes);
    setQuantity(1);
    setNotes("");
    setShowDetails(false);
  };

  const getCurrentPrice = () => {
    if (product.hasVariants && selectedVariant) {
      return selectedVariant.price.newCurrency;
    }
    return product.price.newCurrency;
  };

  const getOldPrice = () => {
    if (product.hasVariants && selectedVariant) {
      return selectedVariant.price.oldCurrency;
    }
    return product.price.oldCurrency;
  };

  const spicyIcons = (level) => {
    if (level === 0) return null;
    return (
      <div className="flex gap-0.5">
        {Array.from({ length: level }).map((_, i) => (
          <span key={i} className="text-[var(--spicy-alert)] text-sm">
            🌶️
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-card rounded-lg card-shadow hover:card-shadow-hover transition-all overflow-hidden">
      {/* Product Image */}
      <div className="relative h-48 w-full overflow-hidden rounded-lg">
        <TransformWrapper
          initialScale={1}
          minScale={1}
          maxScale={3}
          wheel={{ disabled: true }} // منع زوم الماوس (مريح للموبايل)
          doubleClick={{ disabled: true }}
          pinch={{ step: 5 }}
          panning={{ disabled: true }}
        >
          <TransformComponent
            wrapperStyle={{
              width: "100%",
              height: "100%",
            }}
            contentStyle={{
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              src={product.imageUrl || "/placeholder.svg"}
              alt={product.name_ar}
              fill
              className="object-contain cursor-zoom-in"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </TransformComponent>
        </TransformWrapper>

        {/* Badges */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 z-10">
          {product.isBestSeller && (
            <span className="bg-[var(--accent)] text-[var(--accent-foreground)] text-xs font-semibold px-2 py-1 rounded">
              الأكثر طلباً
            </span>
          )}

          {product.spicyLevel > 0 && (
            <span className="bg-white/90 text-xs font-semibold px-2 py-1 rounded flex items-center gap-1">
              حار {spicyIcons(product.spicyLevel)}
            </span>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-secondary mb-1">
          {product.name_ar}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description_ar}
        </p>

        {!product.hasVariants && (
          <div className="mb-3">
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold text-primary">
                {product.price.newCurrency} ل.س
              </span>
              <span className="text-base text-muted-foreground">
                {product.price.oldCurrency} ل.س
              </span>
            </div>
          </div>
        )}

        {/* Variants Selection */}
        {product.hasVariants && !showDetails && (
          <div className="mb-3">
            <p className="text-xs text-muted-foreground mb-2">اختر الحجم:</p>
            <div className="flex gap-2 flex-wrap">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  className={`flex-1 py-2 px-3 rounded-lg text-sm font-semibold transition-all ${
                    selectedVariant?.id === variant.id
                      ? "text-white bg-primary"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <div className="whitespace-nowrap">{variant.name_ar}</div>
                  <div className="text-xs font-bold whitespace-nowrap">
                    {variant.price.newCurrency} ل.س
                  </div>
                  <div className="text-[10px] opacity-70 whitespace-nowrap">
                    {variant.price.oldCurrency} ل.س
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Add Button */}
        {!showDetails && (
          <button
            onClick={() => setShowDetails(true)}
            className="w-full text-white font-semibold py-2.5 rounded-lg hover:opacity-90"
            style={{ backgroundColor: "var(--primary)" }}
          >
            إضافة
          </button>
        )}

        {/* Quantity Controls & Notes */}
        {showDetails && (
          <div className="space-y-3">
            {/* Variant Selection in Details View */}
            {product.hasVariants && (
              <div>
                <p className="text-xs text-muted-foreground mb-2">
                  اختر الحجم:
                </p>
                <div className="flex gap-2 flex-wrap">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant)}
                      className={`flex-1 py-2 px-3 rounded-lg text-sm font-semibold transition-all ${
                        selectedVariant?.id === variant.id
                          ? "text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                      style={
                        selectedVariant?.id === variant.id
                          ? { backgroundColor: "var(--primary)" }
                          : {}
                      }
                    >
                      <div className="whitespace-nowrap">{variant.name_ar}</div>
                      <div className="text-xs font-bold whitespace-nowrap">
                        {variant.price.newCurrency} ل.س
                      </div>
                      <div className="text-[10px] opacity-70 whitespace-nowrap">
                        {variant.price.oldCurrency} ل.س
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Controls */}
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-10 h-10 rounded-lg font-bold flex items-center justify-center"
                style={{
                  backgroundColor: "var(--light-surface)",
                  color: "var(--secondary)",
                }}
              >
                -
              </button>
              <span className="text-lg font-bold w-12 text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-10 h-10 rounded-lg font-bold flex items-center justify-center text-white"
                style={{ backgroundColor: "var(--primary)" }}
              >
                +
              </button>
            </div>

            {/* Notes Input */}
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="ملاحظات (مثال: بدون بصل)"
              className="w-full px-3 py-2 rounded-lg text-sm"
              style={{
                backgroundColor: "var(--light-surface)",
                border: "1px solid var(--border)",
              }}
            />

            {/* Confirm Add Button */}
            <button
              onClick={handleAddToCart}
              className="w-full text-white font-semibold py-2.5 rounded-lg hover:opacity-90"
              style={{ backgroundColor: "var(--primary)" }}
            >
              أضف للسلة ({(getCurrentPrice() * quantity).toLocaleString()} ل.س)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
