import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment, ApiPaths } from 'src/environments/environment';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private http:HttpClient, private route:ActivatedRoute, private router:Router) { }
  search = "";
  searchUrl = environment.baseUrl + ApiPaths.RecipeByName;

  ngOnInit(): void {
  }

  searchRecipes(text: string){
    this.router.navigate(['/recipes', {search: text}]);
  }

}
