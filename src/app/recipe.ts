export interface Recipe {
    id: number;
    name: string;
    prepTime: number;
    imageLink: string;
    categories: [];
    ingredients: Ingredient[];
    steps: string[];
}

export interface Ingredient {
    item: string,
    quantity: string
}



