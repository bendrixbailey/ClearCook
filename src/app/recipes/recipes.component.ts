import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  columns: number = 4;

  @ViewChild('box', {static: false}) box: ElementRef;

  searchUrl = environment.baseUrl + ApiPaths.RecipeByName

  ngOnInit(): void {
    this.search = this.route.snapshot.paramMap.get('search')!;
    this.getRecipesByName(this.search);
    this.setColumns();
  }

  getRecipesByName(name: string){
    if(name != "" && name != null){
      this.http.get<Recipe[]>(environment.baseUrl + ApiPaths.RecipeByName + name).subscribe(data =>{
        this.searchResult = name;
        this.recipes = data;
      })
    }else{
      this.http.get<Recipe[]>(environment.baseUrl + ApiPaths.Recipes).subscribe(data =>{
        this.recipes = data;
      })
    }
    console.log(this.recipes);
  }

  setColumns() {
    this.columns = Math.floor(window.innerWidth / 300);
  }

}
