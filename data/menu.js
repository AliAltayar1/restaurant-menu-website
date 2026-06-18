export const carouselImages = [
  {
    id: 1,
    url: "/broastedCH.jpg",
    alt: "عرض مميز 1",
  },
  {
    id: 2,
    url: "/crispyMEAL.jpg",
    alt: "عرض مميز 2",
  },
  {
    id: 3,
    url: "/shawrma.jpg",
    alt: "عرض مميز 3",
  },
  {
    id: 4,
    url: "/shawrmaMEATAR.jpg",
    alt: "عرض مميز 4",
  },
];

export const categories = [
  "الكل",
  "بروستد",
  "شاورما",
  "سندويش",
  "وجبات",
  "برغر",
  "المشروبات",
  "مقبلات",
];

export const menuItems = [
  {
    id: 3121,
    name_ar: "بروستد دبابيس",
    description_ar: "بروستد دبابيس",
    category: "بروستد",
    price: {
      oldCurrency: 55000,
      newCurrency: 550,
    },
    imageUrl: "وجبة دبوس.jpeg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 1,
    name_ar: "فروج بروستد",
    description_ar: "فروج بروستد",
    category: "بروستد",
    imageUrl: "بروستد-1.jpeg",
    isBestSeller: true,
    spicyLevel: 0,
    hasVariants: true,
    variants: [
      {
        id: "1a",
        name_ar: "نص فروج",
        price: {
          oldCurrency: 60000,
          newCurrency: 600,
        },
      },
      {
        id: "1b",
        name_ar: "فروج كامل",
        price: {
          oldCurrency: 120000,
          newCurrency: 1200,
        },
      },
    ],
  },

  {
    id: 2,
    name_ar: "فروج بروستد حار",
    description_ar: "فروج بروستد حار",
    category: "بروستد",
    imageUrl: "بروستد-1.jpeg",
    isBestSeller: true,
    spicyLevel: 3,
    hasVariants: true,
    variants: [
      {
        id: "2a",
        name_ar: "نص فروج",
        price: {
          oldCurrency: 65000,
          newCurrency: 650,
        },
      },
      {
        id: "2b",
        name_ar: "فروج كامل",
        price: {
          oldCurrency: 130000,
          newCurrency: 1300,
        },
      },
    ],
  },

  {
    id: 701,
    name_ar: "طوشكا لحم",
    description_ar: "خبزة مع قطعة لحم+ موزاريلا",
    category: "وجبات",
    price: {
      oldCurrency: 0,
      newCurrency: 0,
    },
    imageUrl: "toshkaV.jpeg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 702,
    name_ar: "فتة شاورما",
    description_ar: "شاورما + رز + خبز مقلي+ صوص الفتة",
    category: "شاورما",
    price: {
      oldCurrency: 0,
      newCurrency: 0,
    },
    imageUrl: "fatteh_shawarma.png",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 3,
    name_ar: "سندويش شاورما",
    description_ar: "سندويش شاورما",
    category: "شاورما",
    imageUrl: "سندويش شاورما دجاج.jpeg",
    isBestSeller: false,
    spicyLevel: 0,
    hasVariants: true,
    variants: [
      {
        id: "3a",
        name_ar: "سندويش شاورما",
        price: {
          oldCurrency: 20000,
          newCurrency: 200,
        },
      },
      {
        id: "3b",
        name_ar: "سندويش شاورما دبل",
        price: {
          oldCurrency: 25000,
          newCurrency: 250,
        },
      },
    ],
  },

  {
    id: 4,
    name_ar: "وجبة شاورما عربي",
    description_ar: "وجبة شاورما عربي",
    category: "شاورما",
    imageUrl: "شاورما عربي.jpeg",
    isBestSeller: false,
    spicyLevel: 0,
    hasVariants: true,
    variants: [
      {
        id: "4a",
        name_ar: "وجبة شاورما عربي",
        price: {
          oldCurrency: 32000,
          newCurrency: 320,
        },
      },
      {
        id: "4b",
        name_ar: "وجبة شاورما عربي دبل",
        price: {
          oldCurrency: 65000,
          newCurrency: 650,
        },
      },
    ],
  },

  {
    id: 5,
    name_ar: "سندويش شاورما فرنسي",
    description_ar: "صمون+شاورما + بصل وفليفلة +موزاريلا",
    category: "شاورما",
    price: {
      oldCurrency: 35000,
      newCurrency: 350,
    },
    imageUrl: "shawrmaFR.jpg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 6,
    name_ar: "سندويش شاورما صاروخ",
    description_ar: "سندويش شاورما صاروخ",
    category: "شاورما",
    price: {
      oldCurrency: 30000,
      newCurrency: 300,
    },
    imageUrl: "shawrmaROCKET.jpg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 7,
    name_ar: "طوشكا شاورما خضار",
    description_ar: "خبزة مع شاورما وخضار",
    category: "شاورما",
    price: {
      oldCurrency: 55000,
      newCurrency: 550,
    },
    imageUrl: "ايطالي.jpeg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 8,
    name_ar: "طوشكا شاورما جبنة",
    description_ar: "خبزة مع شاورما وموزاريلا",
    category: "شاورما",
    price: {
      oldCurrency: 60000,
      newCurrency: 600,
    },
    imageUrl: "ايطالي.jpeg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 9,
    name_ar: " شاورما دجاج بالوزن",
    description_ar: " شاورما دجاج بالوزن",
    category: "شاورما",
    imageUrl: "shawrmaFREE.jpg",
    isBestSeller: false,
    spicyLevel: 0,
    hasVariants: true,
    variants: [
      {
        id: "9a",
        name_ar: "ربع كيلو",
        price: {
          oldCurrency: 45000,
          newCurrency: 450,
        },
      },
      {
        id: "9b",
        name_ar: "نص كيلو",
        price: {
          oldCurrency: 60000,
          newCurrency: 600,
        },
      },
      {
        id: "16c",
        name_ar: "كيلو",
        price: {
          oldCurrency: 120000,
          newCurrency: 1200,
        },
      },
    ],
  },

  {
    id: 10,
    name_ar: "وجبة شاورما إيطالي",
    description_ar: "صمون مدور+شاورما +موزاريلا +بصل وفليفلة",
    category: "شاورما",
    price: {
      oldCurrency: 70000,
      newCurrency: 700,
    },
    imageUrl: "إيطالييي.jpeg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 12,
    name_ar: "شاورما يبرق دجاج",
    description_ar: "شاورما يبرق دجاج",
    category: "شاورما",
    price: {
      oldCurrency: 13000,
      newCurrency: 130,
    },
    imageUrl: "shawrmaFINGERS.png",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 15,
    name_ar: "شاورما لحم يبرق",
    description_ar: "يوم الخميس فقط",
    category: "شاورما",
    price: {
      oldCurrency: 25000,
      newCurrency: 250,
    },
    imageUrl: "shawrmaFINGERS.png",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 16,
    name_ar: "شاورما لحم بالوزن",
    description_ar: "يوم الخميس فقط",
    category: "شاورما",
    imageUrl: "shawrmaMEATFREE.jpg",
    isBestSeller: false,
    spicyLevel: 0,
    hasVariants: true,
    variants: [
      {
        id: "16a",
        name_ar: "ربع كيلو",
        price: {
          oldCurrency: 75000,
          newCurrency: 750,
        },
      },
      {
        id: "16b",
        name_ar: "نص كيلو",
        price: {
          oldCurrency: 150000,
          newCurrency: 1500,
        },
      },
    ],
  },

  {
    id: 17,
    name_ar: "سندويش شاورما لحم",
    description_ar: "يوم الخميس فقط",
    category: "شاورما",
    imageUrl: "شاورما لحم.jpeg",
    isBestSeller: false,
    spicyLevel: 0,
    hasVariants: true,
    variants: [
      {
        id: "17a",
        name_ar: "سندويش شاورما لحم عادي",
        price: {
          oldCurrency: 40000,
          newCurrency: 400,
        },
      },
      {
        id: "17b",
        name_ar: "سندويش شاورما لحم اكسترا",
        price: {
          oldCurrency: 55000,
          newCurrency: 550,
        },
      },
    ],
  },

  {
    id: 18,
    name_ar: "وجبة شاورما لحم",
    description_ar: "يوم الخميس فقط",
    category: "شاورما",
    imageUrl: "shawrmaMEAT.jpg",
    isBestSeller: false,
    spicyLevel: 0,
    hasVariants: true,
    variants: [
      {
        id: "18a",
        name_ar: "وجبة شاورما لحم",
        price: {
          oldCurrency: 60000,
          newCurrency: 600,
        },
      },
      {
        id: "18b",
        name_ar: "وجبة شاورما لحم اكسترا",
        price: {
          oldCurrency: 100000,
          newCurrency: 1000,
        },
      },
    ],
  },

  {
    id: 19,
    name_ar: "وجبة شاورما ذاهوك",
    description_ar: "بقجة شاورما محشية موزاريلا",
    category: "شاورما",
    price: {
      oldCurrency: 50000,
      newCurrency: 500,
    },
    imageUrl: "shawrmaTHEHOOK.jpg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 21,
    name_ar: "وجبة شاورما بانيه",
    description_ar: "صندويشة شاورما مقلية محشية موزاريلا",
    category: "شاورما",
    price: {
      oldCurrency: 40000,
      newCurrency: 400,
    },
    imageUrl: "shawrmaBANEH.jpg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 704,
    name_ar: "سندويشة شيش فرنسي",
    description_ar: "قطع جاج مشوي+بطاطا+سلطة روسية+موزاريلا وذرة",
    category: "سندويش",
    price: {
      oldCurrency: 0,
      newCurrency: 0,
    },
    imageUrl: "shish_french.png",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 2232322,
    name_ar: "كوبينهاغن",
    description_ar: "قطع جاج مشوي بصوص ذا هووك+بصل وفليفلة + موزاريلا +فطر",
    category: "سندويش",
    price: {
      oldCurrency: 55000,
      newCurrency: 550,
    },
    imageUrl: "copenhagen_meal.png",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 22222,
    name_ar: "فيليه",
    description_ar: "قطعة جاج بانيه محشية موزاريلا+بطاطا+سلطة روسية",
    category: "سندويش",
    price: {
      oldCurrency: 55000,
      newCurrency: 550,
    },
    imageUrl: "fillet_meal.png",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 12221,
    name_ar: "كرانش بوكس",
    description_ar: "قطعة جاج مقلي+بطاطا",
    category: "سندويش",
    price: {
      oldCurrency: 55000,
      newCurrency: 550,
    },
    imageUrl: "crunch_box.png",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 1031,
    name_ar: "مكسيكانو",
    description_ar: "قطع جاج مشوي بصوص حار+بصل وفليفلة+فطر",
    category: "سندويش",
    price: {
      oldCurrency: 55000,
      newCurrency: 550,
    },
    imageUrl: "mexicano_meal.png",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 10201,
    name_ar: "دجاج بالكاري",
    description_ar: "قطع جاج مشوي بصوص الكاري+بصل وفليفلة+موزاريلا+فطر",
    category: "سندويش",
    price: {
      oldCurrency: 55000,
      newCurrency: 550,
    },
    imageUrl: "curry_chicken.png",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 10001,
    name_ar: "سترغنوف",
    description_ar: "قطع جاج مشوي بصوص خاص+بصل وفليفلة+موزاريلا+فطر",
    category: "سندويش",
    price: {
      oldCurrency: 55000,
      newCurrency: 550,
    },
    imageUrl: "stroganoff_chicken.png",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 48,
    name_ar: "سندويش سبايسي",
    description_ar: "فتايل جاج مقلي حار+بطاطا+سلطة روسية",
    category: "سندويش",
    price: {
      oldCurrency: 30000,
      newCurrency: 300,
    },
    imageUrl: "sandwichSPICY.png",
    isBestSeller: false,
    spicyLevel: 3,
  },

  {
    id: 49,
    name_ar: "سندويش كريسبي",
    description_ar: "فتايل جاج مقلي+بطاطا+سلطة روسية",
    category: "سندويش",
    price: {
      oldCurrency: 30000,
      newCurrency: 300,
    },
    imageUrl: "كريسبيي (1).jpeg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 50,
    name_ar: "سندويش زنجر",
    description_ar: "فتايل جاج مقلي حار+موزاريلا+بطاطا+هالبينو+خس",
    category: "سندويش",
    price: {
      oldCurrency: 35000,
      newCurrency: 350,
    },
    imageUrl: "زنجر.jpeg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 51,
    name_ar: "سندويش شيش",
    description_ar: "قطع جاج مشوي+بطاطا+سلطة روسية",
    category: "سندويش",
    price: {
      oldCurrency: 30000,
      newCurrency: 300,
    },
    imageUrl: "شيش (1).jpeg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 520,
    name_ar: "سندويش فاهيتا",
    description_ar: "قطع جاج مشوي+فليفلة وبصل+موزاريلا +فطر+ذرة",
    category: "سندويش",
    price: {
      oldCurrency: 35000,
      newCurrency: 350,
    },
    imageUrl: "sandwichFAJITA.jpg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 52,
    name_ar: "سندويش بطاطا",
    description_ar: "سندويش بطاطا",
    category: "سندويش",
    imageUrl: "بطاطاا سندويش.jpeg",
    isBestSeller: false,
    spicyLevel: 0,
    hasVariants: true,
    variants: [
      {
        id: "52a",
        name_ar: "سندويش بطاطا عادي",
        price: {
          oldCurrency: 13000,
          newCurrency: 130,
        },
      },
      {
        id: "52b",
        name_ar: "سندويش بطاطا دبل",
        price: {
          oldCurrency: 16000,
          newCurrency: 160,
        },
      },
      {
        id: "52c",
        name_ar: "سندويش بطاطا صمون",
        price: {
          oldCurrency: 18000,
          newCurrency: 180,
        },
      },
      {
        id: "52d",
        name_ar: "سندويش بطاطا تشيز خبز",
        price: {
          oldCurrency: 20000,
          newCurrency: 200,
        },
      },
      {
        id: "52e",
        name_ar: "سندويش بطاطا تشيز صمون",
        price: {
          oldCurrency: 23000,
          newCurrency: 230,
        },
      },
    ],
  },

  {
    id: 511,
    name_ar: "سندويش كريزي كريسبي",
    description_ar: "تورتيلا +فتايل جاج مقلي+موزاريلا +خس",
    category: "سندويش",
    price: {
      oldCurrency: 37000,
      newCurrency: 370,
    },
    imageUrl: "sandwichCRAZY.png",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 510,
    name_ar: "سندويش زنجر ذاهوك ",
    description_ar: "فتايل جاج مقلي حار+موزاريلا+بطاطا+هالبينو+خس+لحوم باردة",
    category: "سندويش",
    price: {
      oldCurrency: 40000,
      newCurrency: 400,
    },
    imageUrl: "thehookZINGER.jpg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 703,
    name_ar: "وجبة اسكالوب",
    description_ar: "شريحة صدر بانيه +بطاطا+سلطة روسية",
    category: "وجبات",
    price: {
      oldCurrency: 0,
      newCurrency: 0,
    },
    imageUrl: "escalope_meal.png",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 705,
    name_ar: "وجبة مكسيكانو",
    description_ar: "قطع جاج مشوي بصوص حار+بصل وفليفلة+فطر",
    category: "وجبات",
    price: {
      oldCurrency: 0,
      newCurrency: 0,
    },
    imageUrl: "mexicano_meal.png",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 706,
    name_ar: "وجبة شيش فرنسي",
    description_ar: "قطع جاج مشوي+بطاطا+سلطة روسية+موزاريلا وذرة",
    category: "وجبات",
    price: {
      oldCurrency: 0,
      newCurrency: 0,
    },
    imageUrl: "shish_french.png",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 707,
    name_ar: "وجبة سترغنوف",
    description_ar: "قطع جاج مشوي بصوص خاص+بصل وفليفلة+موزاريلا+فطر",
    category: "وجبات",
    price: {
      oldCurrency: 0,
      newCurrency: 0,
    },
    imageUrl: "stroganoff_chicken.png",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 708,
    name_ar: "وجبة دجاج بالكاري",
    description_ar: "قطع جاج مشوي بصوص الكاري+بصل وفليفلة+موزاريلا+فطر",
    category: "وجبات",
    price: {
      oldCurrency: 0,
      newCurrency: 0,
    },
    imageUrl: "curry_chicken.png",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 709,
    name_ar: "وجبة كوبينهاغن",
    description_ar: "قطع جاج مشوي بصوص ذا هووك+بصل وفليفلة + موزاريلا +فطر",
    category: "وجبات",
    price: {
      oldCurrency: 0,
      newCurrency: 0,
    },
    imageUrl: "copenhagen_meal.png",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 710,
    name_ar: "وجبة فيليه",
    description_ar: "قطعة جاج بانيه محشية موزاريلا+بطاطا+سلطة روسية",
    category: "وجبات",
    price: {
      oldCurrency: 0,
      newCurrency: 0,
    },
    imageUrl: "fillet_meal.png",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 58,
    name_ar: "وجبة كريسبي  ",
    description_ar: "فتايل جاج مقلي+بطاطا+سلطة روسية",
    category: "وجبات",
    imageUrl: "crispyMEAL.jpg",
    isBestSeller: false,
    spicyLevel: 0,
    hasVariants: true,
    variants: [
      {
        id: "58a",
        name_ar: "وجبة كريسبي 5 قطع",
        price: {
          oldCurrency: 50000,
          newCurrency: 500,
        },
      },
      {
        id: "58b",
        name_ar: "وجبة كريسبي 8 قطع",
        price: {
          oldCurrency: 75000,
          newCurrency: 750,
        },
      },
      {
        id: "58c",
        name_ar: "وجبة كريسبي 12 قطع",
        price: {
          oldCurrency: 125000,
          newCurrency: 1250,
        },
      },
      {
        id: "58d",
        name_ar: "وجبة كريسبي 18 قطع",
        price: {
          oldCurrency: 175000,
          newCurrency: 1750,
        },
      },
      {
        id: "58e",
        name_ar: "وجبة كريسبي 24 قطع",
        price: {
          oldCurrency: 240000,
          newCurrency: 2400,
        },
      },
    ],
  },

  {
    id: 59,
    name_ar: "وجبة زنجر  ",
    description_ar: "فتايل جاج مقلي حار+موزاريلا+بطاطا+هالبينو+خس",
    category: "وجبات",
    imageUrl: "zingerMEAL.jpg",
    isBestSeller: false,
    spicyLevel: 0,
    hasVariants: true,
    variants: [
      {
        id: "59a",
        name_ar: "وجبة زنجر 5 قطع",
        price: {
          oldCurrency: 55000,
          newCurrency: 550,
        },
      },
      {
        id: "59b",
        name_ar: "وجبة زنجر 8 قطع",
        price: {
          oldCurrency: 85000,
          newCurrency: 850,
        },
      },
    ],
  },

  {
    id: 60,
    name_ar: " وجبة زنجر ذاهوك ",
    description_ar:
      "فتايل جاج مقلي حار + موزاريلا+بطاطا + هالبينو+خس + لحوم باردة",
    category: "وجبات",
    price: {
      oldCurrency: 75000,
      newCurrency: 750,
    },
    imageUrl: "thehookZINGERMEAL.jpg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 61,
    name_ar: " وجبة فاهيتا ",
    description_ar: "قطع جاج مشوي+فليفلة وبصل+موزاريلا +فطر+ذرة",
    category: "وجبات",
    price: {
      oldCurrency: 55000,
      newCurrency: 550,
    },
    imageUrl: "fajitaMEAL.jfif",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 62,
    name_ar: " وجبة شيش ",
    description_ar: "قطع جاج مشوي+بطاطا+سلطة روسية",
    category: "وجبات",
    imageUrl: "sheeshMEAL.jpg",
    isBestSeller: false,
    spicyLevel: 0,
    hasVariants: true,
    variants: [
      {
        id: "62a",
        name_ar: "وجبة شيش عادي",
        price: {
          oldCurrency: 45000,
          newCurrency: 450,
        },
      },
      {
        id: "62b",
        name_ar: "وجبة شيش دبل",
        price: {
          oldCurrency: 50000,
          newCurrency: 500,
        },
      },
    ],
  },

  {
    id: 63,
    name_ar: " وجبة شيش مع جبنة ",
    description_ar: "وجبة شيش مع جبنة",
    category: "وجبات",
    price: {
      oldCurrency: 55000,
      newCurrency: 550,
    },
    imageUrl: "sheeshMEALCHEE.jfif",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 640,
    name_ar: "وجبة سبايسي",
    description_ar: "فتايل جاج مقلي حار+بطاطا+سلطة روسية",
    category: "وجبات",
    price: {
      oldCurrency: 50000,
      newCurrency: 500,
    },
    imageUrl: "spicyMEAL.jpg",
    isBestSeller: false,
    spicyLevel: 3,
  },

  {
    id: 64,
    name_ar: "وجبة روليكس",
    description_ar:
      "رول مع كريسبي وصوصات ملفوفة بخبز تورتيلا ملكوكة بكعك خشن ومقلية",
    category: "وجبات",
    price: {
      oldCurrency: 45000,
      newCurrency: 450,
    },
    imageUrl: "rolex.jpg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 65,
    name_ar: "وجبة دبابيس",
    description_ar: "5 دبابيس متبلة بالتتبيلة الخاصة المميزة مع بطاطا وصوصات",
    category: "وجبات",
    price: {
      oldCurrency: 55000,
      newCurrency: 550,
    },
    imageUrl: "dbabees.jpg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 66,
    name_ar: "وجبة جناحات",
    description_ar: "6 جناحات متبلة بالتتبيلة الخاصة المميزة مع وصوصات",
    category: "وجبات",
    price: {
      oldCurrency: 50000,
      newCurrency: 500,
    },
    imageUrl: "wings.jpg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 21212121,
    name_ar: "تشيز برجر",
    description_ar: "قطعة جاج مشوية+موزاريلا وتشيدر+خس وبندورة",
    category: "برغر",
    price: {
      oldCurrency: 0,
      newCurrency: 0,
    },
    imageUrl: "cheese_burger.png",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 10331,
    name_ar: "برجر هالك",
    description_ar: "قطعتين من الجاج محشية موزاريلا وفطر",
    category: "برغر",
    price: {
      oldCurrency: 0,
      newCurrency: 0,
    },
    imageUrl: "hulk_burger.png",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 521,
    name_ar: "برغر دجاج كلاسيك ",
    description_ar: "شريحة صدر مشوي+موزاريلا+بندورة وخس ومخلل",
    category: "برغر",
    price: {
      oldCurrency: 33000,
      newCurrency: 330,
    },
    imageUrl: "برغر جاج.jpeg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 53,
    name_ar: "برغر لحم كلاسيك ",
    description_ar: "قطعة لحم مشوي+تشيدر+بندورةوخس",
    category: "برغر",
    price: {
      oldCurrency: 45000,
      newCurrency: 450,
    },
    imageUrl: "اصناف برغر.jpeg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 54,
    name_ar: "برغر لحم ذاهوك ",
    description_ar: "قطعة لحم مشوي+تشيدر+صوص سبيشل+لحوم باردة+خس",
    category: "برغر",
    price: {
      oldCurrency: 55000,
      newCurrency: 550,
    },
    imageUrl: "thehookBURGER.jpg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 55,
    name_ar: "برغر لحم سويس و مشروم ",
    description_ar: "قطعة لحم مشوي+تشيدر+فطر+خس",
    category: "برغر",
    price: {
      oldCurrency: 55000,
      newCurrency: 550,
    },
    imageUrl: "meatBURGERSWIS.jfif",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 56,
    name_ar: "برغر دجاج كرانش  ",
    description_ar: "شريحة صدر مقلية+موزاريلا وتشيدر+بندورة وخس",
    category: "برغر",
    price: {
      oldCurrency: 40000,
      newCurrency: 400,
    },
    imageUrl: "kranshBURGER.jpeg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 57,
    name_ar: "برغر دجاج سموكي تشيز  ",
    description_ar:
      "شريحة صدر مقلية +باربيكيو +لحوم باردة+موزاريلا وتشيدر+هالبينو+خس",
    category: "برغر",
    price: {
      oldCurrency: 44000,
      newCurrency: 440,
    },
    imageUrl: "smookiBURGER.jpg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 32,
    name_ar: "بيبسي لتر",
    description_ar: "بيبسي لتر",
    category: "المشروبات",
    price: {
      oldCurrency: 10000,
      newCurrency: 100,
    },
    imageUrl: "pepsi1L.jpg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 33,
    name_ar: "بيبسي عائلي",
    description_ar: "بيبسي عائلي",
    category: "المشروبات",
    price: {
      oldCurrency: 17000,
      newCurrency: 170,
    },
    imageUrl: "pepsi2L.jpg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 34,
    name_ar: "بيبسي تنك كبيرة",
    description_ar: "بيبسي تنك كبيرة",
    category: "المشروبات",
    price: {
      oldCurrency: 7000,
      newCurrency: 70,
    },
    imageUrl: "pepsiIRON.jpg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 35,
    name_ar: "بيبسي تنك صغيرة",
    description_ar: "بيبسي تنك صغيرة",
    category: "المشروبات",
    price: {
      oldCurrency: 3000,
      newCurrency: 30,
    },
    imageUrl: "pepsiSMALL.png",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 36,
    name_ar: "كولا طبوش",
    description_ar: "كولا طبوش",
    category: "المشروبات",
    price: {
      oldCurrency: 5000,
      newCurrency: 50,
    },
    imageUrl: "taboosh.jpg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 37,
    name_ar: "لبن عيران",
    description_ar: "لبن عيران",
    category: "المشروبات",
    price: {
      oldCurrency: 5000,
      newCurrency: 50,
    },
    imageUrl: "airan.jpg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 38,
    name_ar: "مياه كبيرة",
    description_ar: "مياه كبيرة",
    category: "المشروبات",
    price: {
      oldCurrency: 5000,
      newCurrency: 50,
    },
    imageUrl: "waterBOTTLE.jpg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 39,
    name_ar: "مياه صغيرة",
    description_ar: "مياه صغيرة",
    category: "المشروبات",
    price: {
      oldCurrency: 3000,
      newCurrency: 30,
    },
    imageUrl: "wateSMALLBOTTLE.jpg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 40,
    name_ar: "ميرندا تفاح لتر",
    description_ar: "ميرندا تفاح لتر",
    category: "المشروبات",
    price: {
      oldCurrency: 10000,
      newCurrency: 100,
    },
    imageUrl: "mirinda1L.png",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 41,
    name_ar: "زويا بلورية غازية",
    description_ar: "زويا بلورية غازية",
    category: "المشروبات",
    price: {
      oldCurrency: 7000,
      newCurrency: 700,
    },
    imageUrl: "zoya.jfif",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 42,
    name_ar: "ماتركس",
    description_ar: "ماتركس",
    category: "المشروبات",
    price: {
      oldCurrency: 5000,
      newCurrency: 500,
    },
    imageUrl: "matrix.png",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 43,
    name_ar: "سفن اب لتر",
    description_ar: "سفن اب لتر",
    category: "المشروبات",
    price: {
      oldCurrency: 10000,
      newCurrency: 100,
    },
    imageUrl: "7up1L.jpg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 44,
    name_ar: "فانتا لتر",
    description_ar: "فانتا لتر",
    category: "المشروبات",
    price: {
      oldCurrency: 10000,
      newCurrency: 100,
    },
    imageUrl: "fanta1L.png",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 45,
    name_ar: "سبرايت لتر",
    description_ar: "سبرايت لتر",
    category: "المشروبات",
    price: {
      oldCurrency: 10000,
      newCurrency: 100,
    },
    imageUrl: "sprite1L.png",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 46,
    name_ar: "فانتا عائلي",
    description_ar: "فانتا عائلي",
    category: "المشروبات",
    price: {
      oldCurrency: 140000,
      newCurrency: 140,
    },
    imageUrl: "fanta1L.png",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 47,
    name_ar: "كوكاكولا عائلي",
    description_ar: "كوكاكولا عائلي",
    category: "المشروبات",
    price: {
      oldCurrency: 14000,
      newCurrency: 140,
    },
    imageUrl: "cocacola.jfif",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 470,
    name_ar: "ميرندا تفاح عائلي",
    description_ar: "ميرندا تغاح عائلي",
    category: "المشروبات",
    price: {
      oldCurrency: 17000,
      newCurrency: 170,
    },
    imageUrl: "mirinda1L.png",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 22,
    name_ar: "ربطة خبز سياحي",
    description_ar: "ربطة خبز سياحي",
    category: "مقبلات",
    price: {
      oldCurrency: 11000,
      newCurrency: 110,
    },
    imageUrl: "bread.jpg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 23,
    name_ar: "علبة ثوم",
    description_ar: "علبة ثوم",
    category: "مقبلات",
    price: {
      oldCurrency: 5000,
      newCurrency: 50,
    },
    imageUrl: "thoom.jpg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 24,
    name_ar: "كريم ثوم بالوزن",
    description_ar: "كريم ثوم بالوزن",
    category: "مقبلات",
    imageUrl: "thoomFREE.jpg",
    isBestSeller: false,
    spicyLevel: 0,
    hasVariants: true,
    variants: [
      {
        id: "24a",
        name_ar: "نص كيلو",
        price: {
          oldCurrency: 20000,
          newCurrency: 200,
        },
      },
      {
        id: "24b",
        name_ar: "كيلو",
        price: {
          oldCurrency: 40000,
          newCurrency: 400,
        },
      },
    ],
  },

  {
    id: 25,
    name_ar: "علبة شطة",
    description_ar: "علبة شطة",
    category: "مقبلات",
    price: {
      oldCurrency: 2500,
      newCurrency: 25,
    },
    imageUrl: "spicy.png",
    isBestSeller: false,
    spicyLevel: 3,
  },

  {
    id: 26,
    name_ar: "علبة دبس",
    description_ar: "علبة دبس",
    category: "مقبلات",
    price: {
      oldCurrency: 2500,
      newCurrency: 25,
    },
    imageUrl: "dbs.png",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 27,
    name_ar: "علبة سلطة روسية",
    description_ar: "علبة سلطة روسية",
    category: "مقبلات",
    price: {
      oldCurrency: 4000,
      newCurrency: 40,
    },
    imageUrl: "russiaSALAD.jpg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 28,
    name_ar: "صحن سرفيس",
    description_ar: "صحن سرفيس",
    category: "مقبلات",
    price: {
      oldCurrency: 10000,
      newCurrency: 100,
    },
    imageUrl: "service.jpg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 29,
    name_ar: "علبة مخلل",
    description_ar: "علبة مخلل",
    category: "مقبلات",
    price: {
      oldCurrency: 5000,
      newCurrency: 50,
    },
    imageUrl: "mokhll.jpg",
    isBestSeller: false,
    spicyLevel: 0,
  },

  {
    id: 30,
    name_ar: "صحن بطاطا",
    description_ar: "صحن بطاطا",
    category: "مقبلات",
    imageUrl: "botato.jpg",
    isBestSeller: false,
    spicyLevel: 0,
    hasVariants: true,
    variants: [
      {
        id: "30a",
        name_ar: "صحن بطاطا صغير",
        price: {
          oldCurrency: 15000,
          newCurrency: 150,
        },
      },
      {
        id: "30b",
        name_ar: "صحن بطاطا وسط",
        price: {
          oldCurrency: 20000,
          newCurrency: 200,
        },
      },
      {
        id: "30c",
        name_ar: "صحن بطاطا كبير",
        price: {
          oldCurrency: 25000,
          newCurrency: 250,
        },
      },
    ],
  },

  {
    id: 31,
    name_ar: "كاسة بطاطا",
    description_ar: "كاسة بطاطا",
    category: "مقبلات",
    imageUrl: "botatoGLASS.jpg",
    isBestSeller: false,
    spicyLevel: 0,
    hasVariants: true,
    variants: [
      {
        id: "31a",
        name_ar: "كاسة بطاطا وسط",
        price: {
          oldCurrency: 15000,
          newCurrency: 150,
        },
      },
      {
        id: "31b",
        name_ar: "كاسة بطاطا كبيرة",
        price: {
          oldCurrency: 20000,
          newCurrency: 200,
        },
      },
    ],
  },

  {
    id: 311,
    name_ar: "علبة صوص شيدر",
    description_ar: "علبة صوص شيدر",
    category: "مقبلات",
    price: {
      oldCurrency: 5000,
      newCurrency: 50,
    },
    imageUrl: "cheedr.jpg",
    isBestSeller: false,
    spicyLevel: 0,
  },
];
