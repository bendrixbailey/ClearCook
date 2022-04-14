import { Component, OnInit } from '@angular/core';
import { beefStew, chickenRisotto, Recipe } from '../recipe';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public randomRecipes = [
    beefStew, chickenRisotto, 6, 8, 10
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
