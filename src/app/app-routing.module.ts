import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { MyrecipesComponent } from './myrecipes/myrecipes.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: 'recipes', component: RecipesComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'myrecipes', component: MyrecipesComponent},
  {path: 'home', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
