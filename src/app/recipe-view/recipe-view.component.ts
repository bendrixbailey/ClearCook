import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiPaths, environment } from 'src/environments/environment';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.css']
})
export class RecipeViewComponent implements OnInit {

  public name: string;

  public recipe: Recipe;
  recipeLoaded: Promise<boolean>;

  constructor(route: ActivatedRoute, private http: HttpClient, private renderer: Renderer2, private elRef: ElementRef) {
    route.params.subscribe((params) => {
      this.name = window.decodeURIComponent(params["name"]);
      this.http.get<Recipe>(environment.baseUrl + ApiPaths.RecipesByNameFull + this.name).subscribe(data =>{
        this.recipe = data;
        this.recipeLoaded = Promise.resolve(true);
        console.log(this.recipe.rating.stars);
        this.updateRatingStars();
      })
    });
  }

  ngOnInit(): void {
  }

  updateRatingStars(){
    let star1 = document.getElementById("r1");
    let star2 = document.getElementById("r2");
    let star3 = document.getElementById("r3");
    let star4 = document.getElementById("r4");
    let star5 = document.getElementById("r5");

    console.log(star1);

    if(this.recipe.rating.stars < 2){
      star1!.style.color = "orange";
    }
    if(this.recipe.rating.stars < 3){
      star1!.style.color = "orange";
      star2!.style.color = "orange";
    }
    if(this.recipe.rating.stars < 4){
      star1!.style.color = "orange";
      star2!.style.color = "orange";
      star3!.style.color = "orange";
    }
    if(this.recipe.rating.stars < 5){
      star1!.style.color = "orange";
      star2!.style.color = "orange";
      star3!.style.color = "orange";
      star4!.style.color = "orange";
    }
    if(this.recipe.rating.stars == 5){
      star1!.style.color = "orange";
      star2!.style.color = "orange";
      star3!.style.color = "orange";
      star4!.style.color = "orange";
      star5!.style.color = "orange";
    }
  }

  formatSteps(step: string): string{
    if(step.includes("TODO")){
      return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu nisi eu tortor bibendum dictum. Integer mattis massa ex, vitae feugiat dolor egestas quis. Aenean purus massa, tincidunt ac elit et, sodales rutrum ante. Nulla id dolor arcu. Donec ut blandit magna. Aenean sem nulla, fermentum non gravida id, fringilla ut orci.";
    }
    return "";
  }

  reviewRecipe(rating: string){
    console.log("Rating for " + this.recipe.name + "is " + rating);
  }

}
