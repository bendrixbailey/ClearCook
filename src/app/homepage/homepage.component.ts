import { Component, OnInit } from '@angular/core';
import { beefStew, chickenRisotto, Recipe } from '../recipe';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public randomRecipes = [
    beefStew, chickenRisotto, beefStew, chickenRisotto
  ];

  public categories = [
    "Grilling",
    "Drinks",
    "Breads",
    "Baking",
    "Pasta",
    "Desserts",
    "Gourmet",
    "French",
    "Veggies",
    "Burgers"
  ]

  public randomTitleImages = [
    "https://embed.widencdn.net/img/cambriausa/xqejgzkmty/1500x1000px/JSD%20Lakeside_02737036dea-1614-4646-b951-00b90f03dcdd.jpeg?keep=c&crop=yes&u=kdpb2n",
    "https://www.solakitchens.com/wp-content/uploads/2019/08/island-front-landscape-1.jpg",
    
  ]

  gridColumns = 2;

  constructor() { }

  ngOnInit(): void {
  }

  openRecipe(recipeId:number){
    
  }

  saveRecipe(recipeId: number){

  }

}
