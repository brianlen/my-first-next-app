export interface FoodItem {
    name: string;
    emoji: string;
    reason?: string; // avoid only — 2–3 words max
}

export interface FoodCategory {
    category: string;
    items: FoodItem[];
}

export const eatFoods: FoodCategory[] = [
    {
        category: "Proteins",
        items: [
            { name: "Eggs", emoji: "🥚" },
            { name: "Chicken", emoji: "🍗" },
            { name: "Turkey", emoji: "🍗" },
            { name: "Salmon", emoji: "🐟" },
            { name: "Mackerel", emoji: "🐟" },
            { name: "Tuna", emoji: "🐟" },
            { name: "Sardines", emoji: "🐠" },
            { name: "Shrimp", emoji: "🦐" },
            { name: "Tempeh", emoji: "🌱" },
            { name: "Tofu", emoji: "🌱" },
            { name: "Edamame", emoji: "🥬" },
            { name: "Quinoa", emoji: "🌾" },
            { name: "Chickpeas", emoji: "🫘" },
            { name: "Black Beans", emoji: "🫘" },
            { name: "Black Lentils", emoji: "🫘" },
            { name: "Pumpkin Seeds", emoji: "🌰" },
            { name: "Greek Yogurt", emoji: "🥛" },
        ],
    },
    {
        category: "Vegetables",
        items: [
            { name: "Brussels Sprouts", emoji: "🥦" },
            { name: "Broccoli", emoji: "🥦" },
            { name: "Cauliflower", emoji: "🌸" },
            { name: "Mushrooms", emoji: "🍄" },
            { name: "Garlic", emoji: "🧄" },
            { name: "Ginger", emoji: "🫚" },
            { name: "Watercress", emoji: "🥬" },
            { name: "Chard", emoji: "🥬" },
            { name: "Spinach", emoji: "🥬" },
            { name: "Kale", emoji: "🥬" },
            { name: "Bok Choy", emoji: "🥬" },
            { name: "Sweet Potato", emoji: "🍠" },
            { name: "Beets", emoji: "🥕" },
            { name: "Carrots", emoji: "🥕" },
            { name: "Bell Peppers", emoji: "🫑" },
            { name: "Tomatoes", emoji: "🍅" },
            { name: "Onions", emoji: "🧅" },
        ],
    },
    {
        category: "Healthy Fats",
        items: [
            { name: "Avocado", emoji: "🥑" },
            { name: "Extra Virgin Olive Oil", emoji: "🫒" },
            { name: "Walnuts", emoji: "🌰" },
            { name: "Flaxseeds", emoji: "🌾" },
        ],
    },
    {
        category: "Fruits & Grains",
        items: [
            { name: "Blueberries", emoji: "🫐" },
            { name: "Apples", emoji: "🍎" },
            { name: "Bananas", emoji: "🍌" },
            { name: "Mixed Berries", emoji: "🍓" },
            { name: "Oatmeal", emoji: "🥣" },
            { name: "Brown Rice", emoji: "🍚" },
        ],
    },
    {
        category: "Beverages",
        items: [
            { name: "Water", emoji: "💧" },
            { name: "Green Tea (early)", emoji: "🍵" },
        ],
    },
];

export const avoidFoods: FoodCategory[] = [
    {
        category: "Sugars & Sweets",
        items: [
            { name: "Processed Sugar", emoji: "🍬", reason: "Spikes glucose" },
            { name: "Candy & Pastries", emoji: "🍩", reason: "Empty calories" },
            { name: "Soda", emoji: "🥤", reason: "Liquid sugar" },
            { name: "Fruit Juice", emoji: "🧃", reason: "High fructose" },
        ],
    },
    {
        category: "Refined Carbs",
        items: [
            { name: "White Bread", emoji: "🍞", reason: "Low nutrient density" },
            { name: "Pasta (refined)", emoji: "🍝", reason: "Rapid glucose spike" },
            { name: "Crackers / Chips", emoji: "🍟", reason: "Processed starch" },
        ],
    },
    {
        category: "Harmful Proteins",
        items: [
            { name: "Processed Meat", emoji: "🌭", reason: "Pro-inflammatory" },
            { name: "High-Mercury Fish", emoji: "🐡", reason: "Neurotoxic buildup" },
            { name: "Factory Deli Meats", emoji: "🥩", reason: "Nitrate-loaded" },
        ],
    },
    {
        category: "Dairy & Fermented",
        items: [
            { name: "Unpasteurized Cheese", emoji: "🧀", reason: "Pathogen risk" },
            { name: "Sugary Yogurt", emoji: "🍦", reason: "Hidden sugars" },
        ],
    },
    {
        category: "Beverages",
        items: [
            { name: "Alcohol", emoji: "🍺", reason: "Raises HR, disrupts sleep" },
            { name: "Late-day Caffeine", emoji: "☕", reason: "6-hr half-life" },
            { name: "Energy Drinks", emoji: "⚡", reason: "Sugar + stimulants" },
        ],
    },
    {
        category: "Ultra-Processed",
        items: [
            { name: "Fast Food", emoji: "🍔", reason: "Trans fats, additives" },
            { name: "Packaged Snacks", emoji: "🛒", reason: "Preservatives" },
            { name: "MSG-heavy Broths", emoji: "🍜", reason: "Excess sodium" },
            { name: "Frozen Meals", emoji: "🥡", reason: "High sodium, fillers" },
        ],
    },
];
