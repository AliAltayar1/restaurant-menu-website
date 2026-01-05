export const menuItems = [
  // السندويشات (Sandwiches)
  {
    id: 1,
    name_ar: "سندويش كريسبي",
    description_ar: "دجاج مقرمش مع خس طازج وصوص خاص",
    category: "السندويشات",
    price: {
      oldCurrency: 25000,
      newCurrency: 250,
    },
    imageUrl: "/crispy-chicken-sandwich.png",
    isBestSeller: true,
    spicyLevel: 1,
    hasVariants: false,
  },
  {
    id: 2,
    name_ar: "سندويش برغر لحم",
    description_ar: "برغر لحم طازج مع الجبن والخضار",
    category: "السندويشات",
    price: {
      oldCurrency: 30000,
      newCurrency: 300,
    },
    imageUrl: "/beef-burger.png",
    isBestSeller: true,
    spicyLevel: 0,
    hasVariants: false,
  },
  {
    id: 3,
    name_ar: "سندويش زنجر حار",
    description_ar: "دجاج حار مع صوص مايونيز وخضار",
    category: "السندويشات",
    price: {
      oldCurrency: 35000,
      newCurrency: 350,
    },
    imageUrl: "/spicy-zinger-chicken-sandwich.jpg",
    isBestSeller: false,
    spicyLevel: 3,
    hasVariants: false,
  },
  {
    id: 4,
    name_ar: "سندويش فلافل",
    description_ar: "فلافل مقرمش مع طحينة وخضار طازجة",
    category: "السندويشات",
    price: {
      oldCurrency: 15000,
      newCurrency: 150,
    },
    imageUrl: "/falafel-sandwich.jpg",
    isBestSeller: false,
    spicyLevel: 0,
    hasVariants: false,
  },

  // الوجبات (Meals)
  {
    id: 5,
    name_ar: "وجبة كريسبي كبيرة",
    description_ar: "دجاج كريسبي مع بطاطس ومشروب كبير",
    category: "الوجبات",
    price: {
      oldCurrency: 45000,
      newCurrency: 450,
    },
    imageUrl: "/crispy-chicken-meal-with-fries.jpg",
    isBestSeller: true,
    spicyLevel: 1,
    hasVariants: false,
  },
  {
    id: 6,
    name_ar: "وجبة برغر عائلية",
    description_ar: "4 برغرات مع بطاطس كبيرة ومشروبات",
    category: "الوجبات",
    price: {
      oldCurrency: 95000,
      newCurrency: 950,
    },
    imageUrl: "/family-burger-meal.jpg",
    isBestSeller: true,
    spicyLevel: 0,
    hasVariants: false,
  },
  {
    id: 7,
    name_ar: "وجبة أجنحة الدجاج",
    description_ar: "8 قطع أجنحة دجاج مع صوص خاص",
    category: "الوجبات",
    price: {
      oldCurrency: 38000,
      newCurrency: 380,
    },
    imageUrl: "/chicken-wings-meal.jpg",
    isBestSeller: false,
    spicyLevel: 2,
    hasVariants: false,
  },
  {
    id: 15,
    name_ar: "بروستد دجاج",
    description_ar: "دجاج بروستد طازج ومقرمش",
    category: "الوجبات",
    imageUrl: "/broasted-chicken.jpg",
    isBestSeller: true,
    spicyLevel: 1,
    hasVariants: true,
    variants: [
      {
        id: "15a",
        name_ar: "8 قطع",
        price: {
          oldCurrency: 80000,
          newCurrency: 800,
        },
      },
      {
        id: "15b",
        name_ar: "12 قطعة",
        price: {
          oldCurrency: 100000,
          newCurrency: 1000,
        },
      },
    ],
  },

  // المشروبات (Drinks)
  {
    id: 8,
    name_ar: "كوكاكولا",
    description_ar: "مشروب غازي بارد - حجم كبير",
    category: "المشروبات",
    price: {
      oldCurrency: 5000,
      newCurrency: 50,
    },
    imageUrl: "/refreshing-cola.png",
    isBestSeller: false,
    spicyLevel: 0,
    hasVariants: false,
  },
  {
    id: 9,
    name_ar: "عصير برتقال طازج",
    description_ar: "عصير برتقال طبيعي 100%",
    category: "المشروبات",
    price: {
      oldCurrency: 12000,
      newCurrency: 120,
    },
    imageUrl: "/fresh-orange-juice.png",
    isBestSeller: true,
    spicyLevel: 0,
    hasVariants: false,
  },
  {
    id: 10,
    name_ar: "ماء معدني",
    description_ar: "زجاجة ماء معدني صغيرة",
    category: "المشروبات",
    price: {
      oldCurrency: 3000,
      newCurrency: 30,
    },
    imageUrl: "/mineral-water-bottle.jpg",
    isBestSeller: false,
    spicyLevel: 0,
    hasVariants: false,
  },

  // الإضافات (Extras)
  {
    id: 11,
    name_ar: "بطاطس مقلية كبيرة",
    description_ar: "بطاطس مقرمشة مع ملح وتوابل",
    category: "الإضافات",
    price: {
      oldCurrency: 10000,
      newCurrency: 100,
    },
    imageUrl: "/large-french-fries.jpg",
    isBestSeller: true,
    spicyLevel: 0,
    hasVariants: false,
  },
  {
    id: 12,
    name_ar: "حلقات البصل",
    description_ar: "حلقات بصل مقرمشة",
    category: "الإضافات",
    price: {
      oldCurrency: 12000,
      newCurrency: 120,
    },
    imageUrl: "/crispy-onion-rings.png",
    isBestSeller: false,
    spicyLevel: 0,
    hasVariants: false,
  },
  {
    id: 13,
    name_ar: "صوص إضافي",
    description_ar: "اختر من بين أنواع الصوص المختلفة",
    category: "الإضافات",
    price: {
      oldCurrency: 2000,
      newCurrency: 20,
    },
    imageUrl: "/sauce-cups.jpg",
    isBestSeller: false,
    spicyLevel: 0,
    hasVariants: false,
  },
  {
    id: 14,
    name_ar: "سلطة كول سلو",
    description_ar: "سلطة كرنب طازجة مع صوص خاص",
    category: "الإضافات",
    price: {
      oldCurrency: 8000,
      newCurrency: 80,
    },
    imageUrl: "/coleslaw-salad.jpg",
    isBestSeller: false,
    spicyLevel: 0,
    hasVariants: false,
  },
];

export const categories = [
  "الكل",
  "السندويشات",
  "الوجبات",
  "المشروبات",
  "الإضافات",
];

export const carouselImages = [
  {
    id: 1,
    url: "/restaurant-food-banner-crispy-chicken.jpg",
    alt: "عرض مميز 1",
  },
  {
    id: 2,
    url: "/placeholder.svg?height=400&width=800",
    alt: "عرض مميز 2",
  },
  {
    id: 3,
    url: "/placeholder.svg?height=400&width=800",
    alt: "عرض مميز 3",
  },
  {
    id: 4,
    url: "/placeholder.svg?height=400&width=800",
    alt: "عرض مميز 4",
  },
];
