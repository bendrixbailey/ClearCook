import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {

  @Input() 
  public recipe: Recipe;



  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  openRecipe(){
    this.router.navigate(['/recipes', this.recipe.name]);
  }

  saveRecipe(){

  }

}
