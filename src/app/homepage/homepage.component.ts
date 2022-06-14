import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment, ApiPaths } from 'src/environments/environment';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public randomRecipes : Recipe[] = [];
  public db_connection = true;

  public categories = [
    {name: "Grilling", img: "https://thumbor.thedailymeal.com/LApuqqddU-6acE3pJVcGdCe1eSo=/774x516/filters:focal(300x240:301x241):format(webp)/https://www.thedailymeal.com/sites/default/files/2015/09/08/mainshutterstock_grilledste.jpg"},
    {name: "Drinks", img: "https://www.thespruceeats.com/thmb/U1-_TK2lUN9ZWKMxmLfIjIQTmKA=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/negroni-cocktail-recipe-759327-hero-01-3e157f628ade43f1969793447c5ff51d.jpg"},
    {name: "Breads", img: "https://www.seriouseats.com/thmb/KgEDqab_YPR1uKunnno7RfN8Ktc=/880x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2011__06__20200419-no-knead-bread-vicky-wasik2-a20f97803cb349e38c2c3fad18f767b5.jpg"},
    {name: "Baking", img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/triple-chocolate-peanut-butter-layer-cake-2-06eee24.jpg?quality=90&webp=true&resize=375,341"},
    {name: "Pasta", img: ""},
    {name: "Desserts", img: ""},
    {name: "Fruits", img: ""},
    {name: "French", img: ""},
    {name: "Veggies", img: ""},
    {name: "Burgers", img: ""},
  ]

  public randomTitleImages = [
    "https://embed.widencdn.net/img/cambriausa/xqejgzkmty/1500x1000px/JSD%20Lakeside_02737036dea-1614-4646-b951-00b90f03dcdd.jpeg?keep=c&crop=yes&u=kdpb2n",
    "https://www.solakitchens.com/wp-content/uploads/2019/08/island-front-landscape-1.jpg",
  ]

  gridColumns = 2;
  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let url = `${this.baseUrl}${ApiPaths.Home}`
    this.http.get<Recipe[]>(url).subscribe(data =>{
      this.randomRecipes = data;
    })

    if(this.randomRecipes.length = 0){
      this.db_connection=false;
    }else{
      this.db_connection=true;
    }
  }

  openRecipe(recipeId:number){
    
  }

  saveRecipe(recipeId: number){

  }

  goToLink(url: string){
    window.open(url, '_blank');
  }

}
