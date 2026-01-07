"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import CategoryChips from "@/components/CategoryChips";
import SearchBar from "@/components/SearchBar";
import FilterSortBar from "@/components/FilterSortBar";
import ProductCard from "@/components/ProductCard";
import CartButton from "@/components/CartButton";
import CartDrawer from "@/components/CartDrawer";
import OrderSummaryModal from "@/components/OrderSummaryModal";
import { menuItems, categories } from "@/data/menu";

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [filters, setFilters] = useState({
    spicyLevel: null,
    bestSeller: false,
  });
  const [sortBy, setSortBy] = useState("none");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderSummaryOpen, setIsOrderSummaryOpen] = useState(false);

  const CART_KEY = "hookCart";

  function setCartWithExpiry(cart, minutes = 30) {
    const now = Date.now();
    const item = {
      value: cart,
      expiry: now + minutes * 60 * 1000, // 30 minutes
    };
    localStorage.setItem(CART_KEY, JSON.stringify(item));
  }

  function getCartWithExpiry() {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return [];

    try {
      const item = JSON.parse(raw);

      // Backward compatibility: إذا كان مخزن Array قديم
      if (Array.isArray(item)) return item;

      if (!item?.expiry || Date.now() > item.expiry) {
        localStorage.removeItem(CART_KEY);
        return [];
      }

      return Array.isArray(item.value) ? item.value : [];
    } catch {
      localStorage.removeItem(CART_KEY);
      return [];
    }
  }

  // Load cart from localStorage
  useEffect(() => {
    setCart(getCartWithExpiry());
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    if (cart.length > 0) {
      setCartWithExpiry(cart, 30);
    } else {
      localStorage.removeItem(CART_KEY);
    }
  }, [cart]);

  // Filter and sort products
  const getFilteredProducts = () => {
    let filtered = menuItems;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (item) =>
          item.name_ar.includes(searchQuery) ||
          item.description_ar.includes(searchQuery)
      );
    }

    // Category filter
    if (selectedCategory !== "الكل") {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    // Spicy level filter
    if (filters.spicyLevel !== null) {
      filtered = filtered.filter(
        (item) => item.spicyLevel === filters.spicyLevel
      );
    }

    // Best seller filter
    if (filters.bestSeller) {
      filtered = filtered.filter((item) => item.isBestSeller);
    }

    if (sortBy === "price-asc") {
      filtered = [...filtered].sort((a, b) => {
        const priceA = a.hasVariants
          ? a.variants[0].price.newCurrency
          : a.price.newCurrency;
        const priceB = b.hasVariants
          ? b.variants[0].price.newCurrency
          : b.price.newCurrency;
        return priceA - priceB;
      });
    } else if (sortBy === "price-desc") {
      filtered = [...filtered].sort((a, b) => {
        const priceA = a.hasVariants
          ? a.variants[0].price.newCurrency
          : a.price.newCurrency;
        const priceB = b.hasVariants
          ? b.variants[0].price.newCurrency
          : b.price.newCurrency;
        return priceB - priceA;
      });
    } else if (sortBy === "name") {
      filtered = [...filtered].sort((a, b) =>
        a.name_ar.localeCompare(b.name_ar, "ar")
      );
    }

    return filtered;
  };

  const filteredProducts = getFilteredProducts();

  const addToCart = (product, quantity = 1, notes = "") => {
    setCart((prevCart) => {
      const cartItemId = product.hasVariants
        ? `${product.id}-${product.selectedVariant.id}`
        : product.id;

      const existingItem = prevCart.find((item) => {
        const itemCartId = item.hasVariants
          ? `${item.id}-${item.selectedVariant.id}`
          : item.id;
        return itemCartId === cartItemId && item.notes === notes;
      });

      if (existingItem) {
        return prevCart.map((item) => {
          const itemCartId = item.hasVariants
            ? `${item.id}-${item.selectedVariant.id}`
            : item.id;
          return itemCartId === cartItemId && item.notes === notes
            ? { ...item, quantity: item.quantity + quantity }
            : item;
        });
      }

      return [...prevCart, { ...product, quantity, notes, cartItemId }];
    });
  };

  const updateCartItemQuantity = (itemId, notes, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId, notes);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.cartItemId === itemId && item.notes === notes
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (itemId, notes) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => !(item.cartItemId === itemId && item.notes === notes)
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalPrice = () => {
    return (
      cart &&
      cart.reduce((total, item) => {
        const price = item.hasVariants
          ? item.price.newCurrency
          : item.price.newCurrency;
        return total + price * item.quantity;
      }, 0)
    );
  };

  const getTotalOldPrice = () => {
    return (
      cart &&
      cart.reduce((total, item) => {
        const price = item.hasVariants
          ? item.price.oldCurrency
          : item.price.oldCurrency;
        return total + price * item.quantity;
      }, 0)
    );
  };

  const getTotalItems = () => {
    const safeCart = Array.isArray(cart) ? cart : [];
    return safeCart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Carousel */}
      <Carousel />

      {/* Search */}
      <div className="container-padding mt-4 sm:mt-6">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>

      {/* Category Chips */}
      <CategoryChips
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Filter & Sort */}
      <div className="container-padding mt-3 sm:mt-4">
        <FilterSortBar
          filters={filters}
          setFilters={setFilters}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>

      {/* Products Grid */}
      <div className="container-padding mt-4 sm:mt-6 pb-32">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-base sm:text-lg">
              لم يتم العثور على منتجات
            </p>
          </div>
        )}
      </div>

      <Footer />

      {/* Cart Button */}
      {cart.length > 0 && (
        <CartButton
          itemCount={getTotalItems()}
          onClick={() => setIsCartOpen(true)}
        />
      )}

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateCartItemQuantity}
        onRemove={removeFromCart}
        onClear={clearCart}
        totalPrice={getTotalPrice()}
        totalOldPrice={getTotalOldPrice()}
        onViewOrder={() => {
          setIsCartOpen(false);
          setIsOrderSummaryOpen(true);
        }}
      />

      {/* Order Summary Modal */}
      <OrderSummaryModal
        isOpen={isOrderSummaryOpen}
        onClose={() => setIsOrderSummaryOpen(false)}
        cart={cart}
        totalPrice={getTotalPrice()}
      />
    </div>
  );
}
