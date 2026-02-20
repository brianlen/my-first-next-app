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




export const supplementsArray = [
    {
        what: "Caffeine + L-Theanine",
        how: "Boosts alertness via adenosine blockade; L-Theanine promotes calm focus by increasing alpha waves and GABA",
        when: "Morning with breakfast",
        why: "Wake up your brain without jitters for better concentration during work or study"
    },
    {
        what: "Lion's Mane Mushroom",
        how: "Stimulates nerve growth factor (NGF) for neuron growth and branching",
        when: "Morning with food",
        why: "Grow new brain cell branches to boost memory, like fertilizing your neural garden"
    },
    {
        what: "Ashwagandha",
        how: "Lowers cortisol, enhances working memory and attention via adaptogenic effects",
        when: "Evening with food",
        why: "Cut stress to think clearer and remember better without burnout"
    },
    {
        what: "Ginkgo Biloba",
        how: "Improves cerebral blood flow, antioxidant protection, supports neurotransmitter activity",
        when: "Morning with breakfast",
        why: "Boost focus and memory by ramping up brain blood flow like opening highways"
    },
    {
        what: "Creatine",
        how: "Boosts brain ATP energy, acts as neurotransmitter buffer",
        when: "Post-workout",
        why: "Power up brain energy for quicker thinking, great for vegetarians"
    },
    {
        what: "Vitamin D",
        how: "Supports neuroprotection, calcium regulation, reduces inflammation in brain",
        when: "Morning with fatty food",
        why: "Prevent brain fog from deficiency, aids learning and mood"
    },
    {
        what: "Whey Protein",
        how: "Provides amino acids for BDNF production and neurotransmitter synthesis",
        when: "Post-workout",
        why: "Fuel brain growth factors for better focus and memory"
    },
    {
        what: "Omega-3 Fish Oil",
        how: "Supports brain cell membranes, reduces inflammation",
        when: "With meals",
        why: "Protect against decline with essential fats for sharp thinking"
    },
    {
        what: "Liposomal NAD+",
        how: "Boosts NAD+ for energy metabolism, DNA repair, sirtuin activation",
        when: "Morning with food",
        why: "Recharge aging cells for more energy and longevity"
    },
    {
        what: "Nitric Oxide",
        how: "Increases blood flow to brain via vasodilation, supports neuroplasticity",
        when: "Post-workout or 30-60 min before focus tasks",
        why: "Deliver more oxygen/nutrients to brain for better cognition"
    },
    {
        what: "Multivitamin",
        how: "Fills nutrient gaps for neurotransmitter synthesis, antioxidant support",
        when: "Morning with breakfast",
        why: "Cover basics to prevent cognitive dips from deficiencies"
    },
    {
        what: "Magnesium",
        how: "Supports synaptic function, reduces NMDA overexcitation, calms nerves",
        when: "Evening for sleep",
        why: "Relax brain overactivity for clearer thinking and rest"
    },
    {
        what: "Korean Panax Ginseng",
        how: "Active ginsenosides boost cerebral blood flow, protect neurons from oxidative damage, and support neurotransmitter balance",
        when: "Morning with food",
        why: "Sharpen mental energy and slow brain aging like a daily tune-up for your neurons"
    },
    {
        what: "5-HTP",
        how: "Direct serotonin precursor that raises brain serotonin levels; converts to melatonin at night",
        when: "Evening for sleep",
        why: "Give your brain the raw material for its feel-good chemical to lift mood and ease anxiety"
    },
    {
        what: "St. John's Wort",
        how: "Slows reabsorption of serotonin, dopamine, and norepinephrine, keeping mood-lifting chemicals active longer",
        when: "Morning with food; effects build over 2-4 weeks",
        why: "Natural mood support that keeps your brain's happiness chemicals from fading too fast"
    },
];
