export interface FoodItem {
    name: string;
    emoji: string;
    tooltip?: string; // avoid only — 2–3 words max
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
            { name: "Processed Sugar", emoji: "🍬", tooltip: "Spikes glucose" },
            { name: "Candy & Pastries", emoji: "🍩", tooltip: "Empty calories" },
            { name: "Soda", emoji: "🥤", tooltip: "Liquid sugar" },
            { name: "Fruit Juice", emoji: "🧃", tooltip: "High fructose" },
        ],
    },
    {
        category: "Refined Carbs",
        items: [
            { name: "White Bread", emoji: "🍞", tooltip: "Low nutrient density" },
            { name: "Pasta (refined)", emoji: "🍝", tooltip: "Rapid glucose spike" },
            { name: "Crackers / Chips", emoji: "🍟", tooltip: "Processed starch" },
        ],
    },
    {
        category: "Harmful Proteins",
        items: [
            { name: "Processed Meat", emoji: "🌭", tooltip: "Pro-inflammatory" },
            { name: "High-Mercury Fish", emoji: "🐡", tooltip: "Neurotoxic buildup" },
            { name: "Factory Deli Meats", emoji: "🥩", tooltip: "Nitrate-loaded" },
        ],
    },
    {
        category: "Dairy & Fermented",
        items: [
            { name: "Unpasteurized Cheese", emoji: "🧀", tooltip: "Pathogen risk" },
            { name: "Sugary Yogurt", emoji: "🍦", tooltip: "Hidden sugars" },
        ],
    },
    {
        category: "Beverages",
        items: [
            { name: "Alcohol", emoji: "🍺", tooltip: "Raises HR, disrupts sleep" },
            { name: "Late-day Caffeine", emoji: "☕", tooltip: "6-hr half-life" },
            { name: "Energy Drinks", emoji: "⚡", tooltip: "Sugar + stimulants" },
        ],
    },
    {
        category: "Ultra-Processed",
        items: [
            { name: "Fast Food", emoji: "🍔", tooltip: "Trans fats, additives" },
            { name: "Packaged Snacks", emoji: "🛒", tooltip: "Preservatives" },
            { name: "MSG-heavy Broths", emoji: "🍜", tooltip: "Excess sodium" },
            { name: "Frozen Meals", emoji: "🥡", tooltip: "High sodium, fillers" },
        ],
    },
];






export const focusEnhancers = {
    category: "Focus, Energy & Motivation Enhancers",
    items: [
        { name: "Caffeine + L-Theanine", emoji: "☕", tooltip: "Boosts alertness without jitters for calm focus" },
        { name: "Ginkgo Biloba", emoji: "🧠", tooltip: "Improves cerebral blood flow for focus and memory" },
        { name: "Korean Panax Ginseng", emoji: "🌱", tooltip: "Sustains cognitive energy and neuroprotection" },
        { name: "Nitric Oxide", emoji: "💨", tooltip: "Increases blood flow for mental stamina and cognition" },
        { name: "Creatine", emoji: "💪", tooltip: "Boosts cellular energy for quicker thinking" },
        { name: "Whey Protein", emoji: "🥛", tooltip: "Amino acids for neurotransmitter synthesis post-workout" },
    ],
};

export const longevitySupplements = {
    category: "Neurogenesis & Cognitive Longevity",
    items: [
        { name: "Lion's Mane", emoji: "🍄", tooltip: "Stimulates nerve growth factor and boosts memory" },
        { name: "Liposomal NAD+", emoji: "⚡", tooltip: "Enhances mitochondrial DNA repair for longevity" },
        { name: "Omega-3", emoji: "🐟", tooltip: "Maintains neural membranes and reduces inflammation" },
        { name: "Vitamin-D", emoji: "☀️", tooltip: "Supports neuroprotection and mood enhancement" },
        { name: "Multivitamin", emoji: "🥦", tooltip: "Fills micronutrient gaps" },
    ],
};

export const moodRegulators = {
    category: "Mood & Stress Regulation",
    items: [
        { name: "5-HTP", emoji: "🌙", tooltip: "Boosts serotonin and melatonin for mood and sleep" },
        { name: "Ashwagandha", emoji: "🌿", tooltip: "Lowers cortisol to reduce stress and enhance memory" },
        { name: "St. John's Wort", emoji: "🌼", tooltip: "Increases serotonin, dopamine, norepinephrine" },
        { name: "Magnesium", emoji: "🧲", tooltip: "Calms neural activity for clearer thinking and rest" },
    ],
};
