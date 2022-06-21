import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment, ApiPaths } from 'src/environments/environment';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private http:HttpClient, 
              public auth:AuthService, 
              private router:Router, 
              @Inject(DOCUMENT) public document: Document) { }
  search = "";
  searchUrl = environment.baseUrl + ApiPaths.RecipeByName;
  public screenWidth = window.innerWidth;

  ngOnInit(): void {
  }

  searchRecipes(text: string){
    this.router.navigate(['/recipes', {search: text}]);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }

}
