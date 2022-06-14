import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiPaths, environment } from 'src/environments/environment';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor(private route:ActivatedRoute, private http:HttpClient) { }
  search = "";
  searchResult = ""
  public recipes: Recipe[] = [];
  sortedRecipes: Recipe[] = [];

  meals =["Breakfast", "Lunch", "Dinner", "Dessert", "Brunch"];
  main_ingredients = ["Chicken", "Beef", "Pasta", "Seafood", "Pork", "Egg"];  //Some sample data
  categories = ["BBQ", "Risotto", "Stew", "Cocktails", "Drinks", "Baking"];

  columns: number = 4;

  category = new FormControl('');
  meal = new FormControl('');
  ingredient = new FormControl('');

  selectedMeals = [];
  selectedIngredients =[];
  selectedCategories = [];

  totalFilters = [];

  @ViewChild('box', {static: false}) box: ElementRef;

  searchUrl = environment.baseUrl + ApiPaths.RecipeByName

  ngOnInit(): void {
    this.search = this.route.snapshot.paramMap.get('search')!;
    this.getRecipesByName(this.search);
    this.setColumns();
  }

  //populates the recipes table
  getRecipesByName(name: string){
    if(name != "" && name != null){
      this.http.get<Recipe[]>(environment.baseUrl + ApiPaths.RecipeByName + name).subscribe(data =>{
        this.searchResult = name;
        this.recipes = data;
        this.sortedRecipes = data;
      })
    }else{
      this.http.get<Recipe[]>(environment.baseUrl + ApiPaths.Recipes).subscribe(data =>{
        this.recipes = data;
        this.sortedRecipes = data;
      })
    }
    console.log(this.recipes);
  }

  filtersUpdated(){
    this.selectedCategories = this.category.value;
    this.selectedMeals = this.meal.value;
    this.selectedIngredients = this.ingredient.value;
    this.totalFilters.concat(this.selectedCategories).concat(this.selectedIngredients).concat(this.selectedMeals);
    console.log(this.totalFilters);
    this.recipes.forEach( (element) =>{
      if(this.totalFilters.some(v => element.categories.includes(v))){
        this.sortedRecipes.push(element);
      }
    })
  }

  clearFilters(){
    this.sortedRecipes = this.recipes;
    this.selectedCategories = [];
    this.selectedIngredients = [];
    this.selectedMeals = [];
    this.category.reset();
    this.meal.reset();
    this.ingredient.reset();
  }

  setColumns() {
    this.columns = Math.floor(window.innerWidth / 300);
  }

}
