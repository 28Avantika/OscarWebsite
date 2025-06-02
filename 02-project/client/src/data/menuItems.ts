// src/data/menuItems.ts
export interface MenuOption {
    id: number;
    name: string;
    half?: string; // Price for half portion
    full: string; // Price for full portion
    description?: string;
    
}

export interface MenuSubcategory {
    subcategory_id: number;
    subcategory_name: string;
    image: string;
    options: MenuOption[];
}

export interface MenuCategory {
    category_id: number;
    category_name: string;
    icon: string;
    items: MenuSubcategory[]; // Changed from 'subcategories' to 'items' to match your data
}


export const menuData: MenuCategory[] = [
  {
    "category_id": 1,
    "category_name": "COFFEE",
    "icon": "☕",
    "items": [
      {
        "subcategory_id": 101,
        "subcategory_name": "Delicious Coffee",
        "image": "/images/menuItems/coldCoffee.png",
        "options": [
          {"id": 1011, "name": "Oscar Special Thick Cold Coffee", "half": "45", "full": "65"},
          {"id": 1012, "name": "Oscar Special Cold Coffee With Crush", "half": "55", "full": "75"},
          {"id": 1013, "name": "Chocolate delight cold coffee", "half": "-", "full": "65"},
          {"id": 1014, "name": "Cold Chocolate", "half": "-", "full": "60"},
          {"id": 1015, "name": "Cold Chocolate With Crush", "half": "-", "full": "70"},
          {"id": 1016, "name": "Oscar Special cold coffee (chocolate+crush)", "half": "-", "full": "70"}
        ]
      }
    ]
  },
  {
    "category_id": 2,
    "category_name": "BURGER",
    "icon": "🍔",
    "items": [
      {
        "subcategory_id": 201,
        "subcategory_name": "Veg Burger",
        "image": "/images/menuItems/burger.png",
        "options": [
          {"id": 2011, "name": "Veg Burger", "half": "-", "full": "80"},
          {"id": 2012, "name": "Veg Cheese Burger", "half": "-", "full": "90"},
          {"id": 2013, "name": "Veg Cheese Tandoor Burger", "half": "-", "full": "110"},
          {"id": 2014, "name": "Cheese Chipotle Burger", "half": "-", "full": "110"},
          {"id": 2015, "name": "Veg Cheese Makhani Burger", "half": "-", "full": "110"},
          {"id": 2016, "name": "The Double Decker Burger", "half": "-", "full": "130"},
          {"id": 2017, "name": "Cheese Overloaded Burger", "half": "-", "full": "130"},
          {"id": 2018, "name": "Oscar Special Burger", "half": "-", "full": "130"},
          {"id": 2019, "name": "Spacial Cheese Tandoor Burger", "half": "-", "full": "150"},
          {"id": 2020, "name": "Peri Peri Cheese Burger", "half": "-", "full": "110"}
        ]
      }
    ]
  },
  {
    "category_id": 3,
    "category_name": "PIZZA",
    "icon": "🍕",
    "items": [
      {
        "subcategory_id": 301,
        "subcategory_name": "Cheese Pizza",
        "image": "/images/menuItems/pizza.png",
        "options": [
          {"id": 3011, "name": "Cheese Pizza", "half": "100", "full": "170"},
          {"id": 3012, "name": "Double Cheese Pizza", "half": "130", "full": "210"},
          {"id": 3013, "name": "Margarita pizza", "half": "110", "full": "180"},
          {"id": 3014, "name": "Cheese Chilli Pizza", "half": "110", "full": "180"},
          {"id": 3015, "name": "Cheese Chilli Classic Veggie Pizza", "half": "130", "full": "210"},
          {"id": 3016, "name": "Classic Veggie Cheese Pizza", "half": "120", "full": "210"},
          {"id": 3017, "name": "Cheese Veggie Delight pizza", "half": "120", "full": "210"},
          {"id": 3018, "name": "Cheese Corn Pizza", "half": "130", "full": "210"},
          {"id": 3019, "name": "Cheese Corn Mushroom Pizza", "half": "140", "full": "220"},
          {"id": 3020, "name": "Cheese Olive Corn Pizza", "half": "140", "full": "220"},
          {"id": 3021, "name": "Cheese Corn jalapeno pizza", "half": "140", "full": "220"},
          {"id": 3022, "name": "Cheese Paneer Corn Pizza", "half": "130", "full": "210"},
          {"id": 3023, "name": "Cheese Veggie Paneer Pizza", "half": "130", "full": "210"},
          {"id": 3024, "name": "Cheese Pepy paneer pizza", "half": "130", "full": "210"},
          {"id": 3025, "name": "Cheese Olive Paneer Pizza", "half": "130", "full": "220"},
          {"id": 3026, "name": "Cheese Paneer Chilli Pizza", "half": "130", "full": "220"},
          {"id": 3027, "name": "Cheese Mushroom Pizza", "half": "140", "full": "220"},
          {"id": 3028, "name": "Cheese Paneer Mushroom Pizza", "half": "140", "full": "220"},
          {"id": 3029, "name": "Cheese Peri Peri Paneer Pizza", "half": "150", "full": "220"},
          {"id": 3030, "name": "Cheese Barbecue Paneer Pizza", "half": "150", "full": "220"},
          {"id": 3031, "name": "Cheese Tandoor Paneer Pizza", "half": "150", "full": "230"},
          {"id": 3032, "name": "Peri peri paneer pizza", "half": "150", "full": "230"},
          {"id": 3033, "name": "Tandoori paneer pizza", "half": "130", "full": "210"},
          {"id": 3034, "name": "Oscar Special Cheese pizza", "half": "130", "full": "210"},
          {"id": 3035, "name": "Cheese Makhani Paneer Pizza", "half": "140", "full": "220"}
        ]
      }
    ]
  },
  {
    "category_id": 4,
    "category_name": "WARM DELIGHTS",
    "icon": "🔥",
    "items": [
      {
        "subcategory_id": 401,
        "subcategory_name": "Hot Drinks",
        "image": "/images/menuItems/hotCoffee.png",
        "options": [
          {"id": 4011, "name": "Hot Coffee", "half": "-", "full": "30"},
          {"id": 4012, "name": "Hot chocolate", "half": "-", "full": "30"},
          {"id": 4013, "name": "Bournvita", "half": "-", "full": "40"},
          {"id": 4014, "name": "Boost", "half": "-", "full": "40"}
        ]
      }
    ]
  },
  {
    "category_id": 5,
    "category_name": "FRIES & SIDES",
    "icon": "🍟",
    "items": [
      {
        "subcategory_id": 501,
        "subcategory_name": "Fried Items",
        "image": "/images/menuItems/fries.png",
        "options": [
          {"id": 5011, "name": "Salted French Fries", "half": "-", "full": "80"},
          {"id": 5012, "name": "Peri Peri Fries", "half": "-", "full": "90"},
          {"id": 5013, "name": "Salted Cheese Fries", "half": "-", "full": "100"},
          {"id": 5014, "name": "Chipotle Fries", "half": "-", "full": "100"},
          {"id": 5015, "name": "Mexican Fries", "half": "-", "full": "100"},
          {"id": 5016, "name": "Cheese Potato Shots", "half": "-", "full": "100"},
          {"id": 5017, "name": "Potato Veggies", "half": "-", "full": "100"},
          {"id": 5018, "name": "Veggie Nuggets", "half": "-", "full": "100"},
          {"id": 5019, "name": "Peri Peri Cheese Fries", "half": "-", "full": "110"},
          {"id": 5020, "name": "Garlic Potato Shots", "half": "-", "full": "110"},
          {"id": 5021, "name": "Cheese Chipotle Fries", "half": "-", "full": "120"},
          {"id": 5022, "name": "Oscar Special Fries", "half": "-", "full": "120"}
        ]
      }
    ]
  },
  {
    "category_id": 6,
    "category_name": "MOJITO",
    "icon": "🍹",
    "items": [
      {
        "subcategory_id": 601,
        "subcategory_name": "Virgin Mojito",
        "image": "/images/menuItems/mojito.png",
        "options": [
          {"id": 6011, "name": "Virgin Mojito", "half": "-", "full": "70"},
          {"id": 6012, "name": "Green Apple", "half": "-", "full": "70"},
          {"id": 6013, "name": "Lime Mint", "half": "-", "full": "70"},
          {"id": 6014, "name": "Blue Lagoon", "half": "-", "full": "70"},
          {"id": 6015, "name": "Lime Iced Tea", "half": "-", "full": "70"},
          {"id": 6016, "name": "Watermelon", "half": "-", "full": "80"},
          {"id": 6017, "name": "Kala Khatta", "half": "-", "full": "80"},
          {"id": 6018, "name": "Litchi", "half": "-", "full": "80"}
        ]
      }
    ]
  },
  {
    "category_id": 7,
    "category_name": "PASTA",
    "icon": "🍝",
    "items": [
      {
        "subcategory_id": 701,
        "subcategory_name": "Pasta Varieties",
        "image": "/images/menuItems/pasta.png",
        "options": [
          {"id": 7011, "name": "White sauce pasta", "half": "-", "full": "120"},
          {"id": 7012, "name": "Red sauce pasta", "half": "-", "full": "130"},
          {"id": 7013, "name": "Pink sauce pasta", "half": "-", "full": "120"},
          {"id": 7014, "name": "Paneer pasta", "half": "-", "full": "140"},
          {"id": 7015, "name": "Oscar Special Pasta", "half": "-", "full": "150"},
          {"id": 7016, "name": "Red sauce paneer pasta", "half": "-", "full": "160"}
        ]
      }
    ]
  },
  {
    "category_id": 8,
    "category_name": "TOASTY TREATS",
    "icon": "🍞",
    "items": [
      {
        "subcategory_id": 801,
        "subcategory_name": "Cheese Toasts",
        "image": "/images/menuItems/toast.png",
        "options": [
          {"id": 8011, "name": "Plain Cheese Toast", "half": "-", "full": "80"},
          {"id": 8012, "name": "Cheese Chilli Toast", "half": "-", "full": "90"},
          {"id": 8013, "name": "Cheese Chilli Potato Toast", "half": "-", "full": "100"},
          {"id": 8014, "name": "Cheese Garlic Toast", "half": "-", "full": "100"},
          {"id": 8015, "name": "Cheese Corn Toast", "half": "-", "full": "110"},
          {"id": 8016, "name": "Cheese Chilli Corn Toast", "half": "-", "full": "110"},
          {"id": 8017, "name": "Cheese Corn Garlic Chilli Toast", "half": "-", "full": "120"},
          {"id": 8018, "name": "Garlic Cheese Chilli Paneer toast", "half": "-", "full": "120"},
          {"id": 8019, "name": "Cheese Chilli Garlic Toast", "half": "-", "full": "110"}
        ]
      }
    ]
  },
  {
    "category_id": 9,
    "category_name": "SANDWICH",
    "icon": "🥪",
    "items": [
      {
        "subcategory_id": 901,
        "subcategory_name": "4-LAYER JUMBO SANDWICHES",
        "image": "/images/menuItems/sandwich.png",
        "options": [
          {"id": 9011, "name": "Veg Cheese Jumbo Grill", "half": "-", "full": "120"},
          {"id": 9012, "name": "Cheese Corn Jumbo Grill", "half": "-", "full": "120"},
          {"id": 9013, "name": "Cheese Chilli Milli Jumbo Grill", "half": "-", "full": "130"},
          {"id": 9014, "name": "Nutella Chocolate Jumbo Grill", "half": "-", "full": "130"},
          {"id": 9015, "name": "Cheese Paneer Jumbo Grill", "half": "-", "full": "140"},
          {"id": 9016, "name": "Cheese Tandoor Paneer Jumbo Grill", "half": "-", "full": "140"},
          {"id": 9017, "name": "Oscar Special Jumbo Grill Sandwich", "half": "-", "full": "160"}
        ]
      },
      {
        "subcategory_id": 902,
        "subcategory_name": "REGULAR SANDWICHES",
        "image": "/images/menuItems/sandwich.png",
        "options": [
          {"id": 9021, "name": "Bread Jam", "half": "-", "full": "40"},
          {"id": 9022, "name": "Plain Cheese Sandwich", "half": "-", "full": "60"},
          {"id": 9023, "name": "Plain Chocolate Sandwich", "half": "-", "full": "60"},
          {"id": 9024, "name": "Plain Chocolate Cheese Sandwich", "half": "-", "full": "70"},
          {"id": 9025, "name": "Club Cheese Sandwich", "half": "-", "full": "80"},
          {"id": 9026, "name": "Loaded Cheese Sandwich", "half": "-", "full": "100"}
        ]
      },
      {
        "subcategory_id": 903,
        "subcategory_name": "3-LAYER GRILL SANDWICHES",
        "image": "/images/menuItems/sandwich.png",
        "options": [
          {"id": 9031, "name": "Veg Grill Sandwich", "half": "-", "full": "80"},
          {"id": 9032, "name": "Veg Cheese Grill", "half": "-", "full": "90"},
          {"id": 9033, "name": "Chocolate Grill Sandwich", "half": "-", "full": "80"},
          {"id": 9034, "name": "Nutella Chocolate Grill", "half": "-", "full": "100"},
          {"id": 9035, "name": "Pahadi paneer grill", "half": "-", "full": "100"},
          {"id": 9036, "name": "Mushroom masala grill", "half": "-", "full": "100"},
          {"id": 9037, "name": "Cheese Corn Grill", "half": "-", "full": "90"},
          {"id": 9038, "name": "Cheese Chilli Milli Grill", "half": "-", "full": "90"},
          {"id": 9039, "name": "Cheese Mayo Potato Grill", "half": "-", "full": "90"},
          {"id": 9040, "name": "Cheese Chatpata Aloo Grill", "half": "-", "full": "90"},
          {"id": 9041, "name": "Cheese Chilli Corn Grill", "half": "-", "full": "90"},
          {"id": 9042, "name": "Cheese Olive Corn Grill", "half": "-", "full": "90"},
          {"id": 9043, "name": "Cheese Corn Jalapeno", "half": "-", "full": "90"},
          {"id": 9044, "name": "Cheese Cabbage Corn Grill", "half": "-", "full": "90"},
          {"id": 9045, "name": "Cheese Mushroom Corn Grill", "half": "-", "full": "90"},
          {"id": 9046, "name": "Cheese Chocolate Grill", "half": "-", "full": "90"},
          {"id": 9047, "name": "Cheese Corn Paneer Grill", "half": "-", "full": "100"},
          {"id": 9048, "name": "Cheese Paneer Grill", "half": "-", "full": "100"},
          {"id": 9049, "name": "Cheese Paneer Chilli Grill", "half": "-", "full": "110"},
          {"id": 9050, "name": "Cheese Peri Peri Paneer Grill", "half": "-", "full": "110"},
          {"id": 9051, "name": "Cheese Mushroom Masala Grill", "half": "-", "full": "110"},
          {"id": 9052, "name": "Cheese Olive Paneer Grill", "half": "-", "full": "110"},
          {"id": 9053, "name": "Cheese Nutella Chocolate Grill", "half": "-", "full": "110"},
          {"id": 9054, "name": "Cheese Tandoor Paneer Grill", "half": "-", "full": "110"}
        ]
      }
    ]
  },
  {
    "category_id": 10,
    "category_name": "OSCAR'S Special",
    "icon": "🌟",
    "items": [
      {
        "subcategory_id": 1001,
        "subcategory_name": "SPECIAL SANDWICH",
        "image": "/images/menuItems/sandwich.png",
        "options": [
          {"id": 10011, "name": "Oscar special grill", "half": "-", "full": "130"},
          {"id": 10012, "name": "Cheese mexican grill", "half": "-", "full": "120"},
          {"id": 10013, "name": "Cheese Italian grill", "half": "-", "full": "120"},
          {"id": 10014, "name": "Cheese russian grill", "half": "-", "full": "120"},
          {"id": 10015, "name": "Bombay masala grill", "half": "-", "full": "120"},
          {"id": 10016, "name": "Cheese pahadi paneer grill", "half": "-", "full": "120"},
          {"id": 10017, "name": "Tandoor paneer grill", "half": "-", "full": "100"}
        ]
      },
      {
        "subcategory_id": 1002,
        "subcategory_name": "SPECIAL PIZZA",
        "image": "images/menuItems/pizza.png",
        "options": [
          {"id": 10021, "name": "Oscar special pizza", "half": "130", "full": "210"},
          {"id": 10022, "name": "Peri peri paneer pizza", "half": "150", "full": "250"},
          {"id": 10023, "name": "Tandoori paneer pizza", "half": "150", "full": "250"},
          {"id": 10024, "name": "Cheese makhani paneer pizza", "half": "140", "full": "220"},
          {"id": 10025, "name": "Cheese corn pizza", "half": "130", "full": "210"}
        ]
      },
      {
        "subcategory_id": 1003,
        "subcategory_name": "SPECIAL BURGER",
        "image": "/images/menuItems/burger.png",
        "options": [
          {"id": 10031, "name": "Oscar Special burger", "half": "-", "full": "130"},
          {"id": 10032, "name": "Special cheese tandoor burger", "half": "-", "full": "150"},
          {"id": 10033, "name": "Peri peri cheese burger", "half": "-", "full": "110"}
        ]
      }
    ]
  },
  {
    "category_id": 11,
    "category_name": "CHINESE (VEG)",
    "icon": "🥢",
    "items": [
      {
        "subcategory_id": 1101,
        "subcategory_name": "SOUP",
        "image": "/images/menuItems/noodles.png",
        "options": [
          {"id": 11011, "name": "Veg manchow", "half": "-", "full": "80"},
          {"id": 11012, "name": "Veg clear soup", "half": "-", "full": "80"},
          {"id": 11013, "name": "Hot and sour soup", "half": "-", "full": "80"},
          {"id": 11014, "name": "Veg noodle soup", "half": "-", "full": "90"}
        ]
      },
      {
        "subcategory_id": 1102,
        "subcategory_name": "STARTER",
        "image": "/images/abouBg.avif",
        "options": [
          {"id": 11021, "name": "Mushroom Chilli", "half": "-", "full": "120"},
          {"id": 11022, "name": "Manchurian Dry", "half": "-", "full": "120"},
          {"id": 11023, "name": "Shezwan Dry", "half": "-", "full": "130"},
          {"id": 11024, "name": "Crispy Dry", "half": "-", "full": "140"},
          {"id": 11025, "name": "Manchurian with Gravy", "half": "-", "full": "150"},
          {"id": 11026, "name": "Paneer Chilli", "half": "-", "full": "160"}
        ]
      },
      {
        "subcategory_id": 1103,
        "subcategory_name": "RICE",
        "image": "/images/abouBg.avif",
        "options": [
          {"id": 11031, "name": "Veg fried rice", "half": "90", "full": "130"},
          {"id": 11032, "name": "Shejwan fried rice", "half": "100", "full": "140"},
          {"id": 11033, "name": "Singapore rice", "half": "100", "full": "140"},
          {"id": 11034, "name": "Manchurian rice", "half": "110", "full": "150"},
          {"id": 11035, "name": "Shejwan mix rice", "half": "110", "full": "150"},
          {"id": 11036, "name": "Triple rice", "half": "120", "full": "160"},
          {"id": 11037, "name": "Triple rice with gravy", "half": "-", "full": "180"}
        ]
      },
      {
        "subcategory_id": 1104,
        "subcategory_name": "MAGGIE",
        "image": "/images/abouBg.avif",
        "options": [
          {"id": 11041, "name": "Plain maggie", "half": "-", "full": "60"},
          {"id": 11042, "name": "Plain cheese Maggie", "half": "-", "full": "70"},
          {"id": 11043, "name": "Masala Maggie", "half": "-", "full": "70"},
          {"id": 11044, "name": "Masala cheese Maggie", "half": "-", "full": "80"},
          {"id": 11045, "name": "Veggie masala maggie", "half": "-", "full": "80"},
          {"id": 11046, "name": "Veggie masala cheese Maggie", "half": "-", "full": "90"},
          {"id": 11047, "name": "Egg Maggie", "half": "-", "full": "100"},
          {"id": 11048, "name": "Chicken Maggie", "half": "-", "full": "120"}
        ]
      },
      {
        "subcategory_id": 1105,
        "subcategory_name": "CHOWPSY CHOWPSY",
        "image": "/images/abouBg.avif",
        "options": [
          {"id": 11051, "name": "American", "half": "-", "full": "120"},
          {"id": 11052, "name": "Shejwan", "half": "-", "full": "120"},
          {"id": 11053, "name": "Chinese", "half": "-", "full": "120"}
        ]
      },
      {
        "subcategory_id": 1106,
        "subcategory_name": "NOODLES",
        "image": "/images/abouBg.avif",
        "options": [
          {"id": 11061, "name": "Hakka noodle", "half": "90", "full": "130"},
          {"id": 11062, "name": "Shejwan noodle", "half": "100", "full": "140"},
          {"id": 11063, "name": "Singapore noodle", "half": "100", "full": "140"},
          {"id": 11064, "name": "Manchurian noodles", "half": "120", "full": "150"},
          {"id": 11065, "name": "Triple noodle plus gravy", "half": "-", "full": "180"}
        ]
      },
      {
        "subcategory_id": 1107,
        "subcategory_name": "BHURJI",
        "image": "/images/bhurji-banner.jpg",
        "options": [
          {"id": 11071, "name": "Anda Bhurji", "half": "-", "full": "80"},
          {"id": 11072, "name": "Egg Omelette", "half": "-", "full": "40"},
          {"id": 11073, "name": "Extra paav", "half": "-", "full": "5"}
        ]
      }
    ]
  }
];