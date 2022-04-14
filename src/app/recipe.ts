export interface Recipe {
    id: number;
    name: string;
    imageLink: string;
    ingredients: Ingredient[];
    body: string;
}

export interface Ingredient {
    item: string,
    quantity: string
}

const beefStew:Recipe = {
    id: 0,
    name: "Beef Stew",
    imageLink: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cookingclassy.com%2Fbeef-stew%2F&psig=AOvVaw3PKOsYytZy44urdNRjcqrf&ust=1649989591730000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPjgosDAkvcCFQAAAAAdAAAAABAD",
    ingredients: [
        {item: "Beef", quantity: "1 lb"},
        {item: "Onions", quantity: "1"},
        {item: "Carrots", quantity: "4"},
        {item: "Red Potatoes", quantity: "4"},
        {item: "Beef Stock", quantity: "2 tbsp"},
        {item: "Salt", quantity: "1 tsp"},
        {item: "Bay Leaves", quantity: "8 leaves"},
        {item: "Oregano", quantity: "2 tbsp"},
    ],
    body: ""
}