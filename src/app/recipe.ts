export interface Recipe {
    id: number;
    name: string;
    prepTime: number;
    imageLink: string;
    ingredients: Ingredient[];
    steps: string[];
}

export interface Ingredient {
    item: string,
    quantity: string
}

export const beefStew:Recipe = {
    id: 0,
    name: "Beef Stew",
    prepTime: 200,
    imageLink: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cookingclassy.com%2Fbeef-stew%2F&psig=AOvVaw3PKOsYytZy44urdNRjcqrf&ust=1649989591730000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPjgosDAkvcCFQAAAAAdAAAAABAD",
    ingredients: [
        {item: "Beef", quantity: "1 lb"},
        {item: "Onions", quantity: "1"},
        {item: "Carrots", quantity: "4"},
        {item: "Red Potatoes", quantity: "4"},
        {item: "Beef Stock", quantity: "2 tbsp"},
        {item: "Salt", quantity: "1 tbsp"},
        {item: "Pepper", quantity: "1 tbsp"},
        {item: "Flour", quantity: "1/4 cup"},
        {item: "Bay Leaves", quantity: "8 leaves"},
        {item: "Oregano", quantity: "2 tbsp"},
    ],
    steps: [
        "Combine the flour and pepper in a bowl, add the beef and toss to coat well. Heat 3 teaspoons of the oil in a large pot. Add the beef a few pieces at a time; do not overcrowd. Cook, turning the pieces until beef is browned on all sides, about 5 minutes per batch; add more oil as needed between batches.",
        "Remove the beef from the pot and add the vinegar and wine. Cook over medium-high heat, scraping the pan with a wooden spoon to loosen any browned bits. Add the beef, beef broth and bay leaves. Bring to a boil, then reduce to a slow simmer.",
        "Cover and cook, skimming broth from time to time, until the beef is tender, about 1 1/2 hours. Add the onions and carrots and simmer, covered, for 10 minutes. Add the potatoes and simmer until vegetables are tender, about 30 minutes more. Add broth or water if the stew is dry. Season with salt and pepper to taste. Ladle among 4 bowls and serve."
    ]
}

export const chickenRisotto:Recipe = {
    id: 1,
    name: "Chicken & Parmesan Risotto",
    prepTime: 45,
    imageLink: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cookingclassy.com%2Fbeef-stew%2F&psig=AOvVaw3PKOsYytZy44urdNRjcqrf&ust=1649989591730000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPjgosDAkvcCFQAAAAAdAAAAABAD",
    ingredients: [
        {item: "Grilled Chicken", quantity: "1 lb"},
        {item: "Onions", quantity: "1/2"},
        {item: "Frozen Peas", quantity: "1/2 cup"},
        {item: "Arborio Rice", quantity: "2 cups"},
        {item: "Chicken Stock", quantity: "2-3 cups"},
        {item: "Salt", quantity: "1 tsp"},
        {item: "Pepper", quantity: "1 tsp"},
        {item: "Parmesan Cheese (Grated)", quantity: "1/2 cup"},
        {item: "Garlic", quantity: "2 cloves"},
        {item: "Oregano", quantity: "2 tbsp"},
    ],
    steps: [
        "Add chopped onions and garlic to pan with 2 tsp of olive oil. Cook until garlic is fragrant. Then add rice and toast till most kernels are slightly browned.",
        "Add chicken stock to rice until rice is fully submerged. Wait for water to cook off. Add more chicken stock and repeat again until rice is cooked. Make sure to stir occasionally so rice doesnt burn.",
        "While rice is cooking, cook your chicken breasts in a pan or on the grill until done. Be sure to season the chicken with a little bit of salt and pepper. Then, slice them into strips, or cube them to your liking. ",
        "Time it so the rice is just about finished cooking as the last of the chicken stock is cooking off. Then add seasoning, cheese, peas (microwave them so they arent frozen) and stir. When stirred thoroughly, add chopped chicken and stir again, seasoning to taste."
    ]
}