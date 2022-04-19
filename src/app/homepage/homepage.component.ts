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

  gridColumns = 2;

  constructor() { }

  ngOnInit(): void {
  }

  openRandomRecipe(index:number){
    
  }

}
