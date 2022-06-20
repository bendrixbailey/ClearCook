import { NumberValueAccessor } from "@angular/forms";

export interface Recipe {
    id: number;
    name: string;
    prepTime: number;
    imageLink: string;
    categories: [];
    ingredients: Ingredient[];
    steps: string[];
    rating: {
        stars: number;
        ratings: number;
    }
}

export interface Ingredient {
    item: string,
    quantity: string
}



