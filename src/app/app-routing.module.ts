import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { MyrecipesComponent } from './myrecipes/myrecipes.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RecipeViewComponent } from './recipe-view/recipe-view.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {path: 'recipes', component: RecipesComponent},
  {path: 'recipes/:name', component: RecipeViewComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'myrecipes', component: MyrecipesComponent},
  {path: 'profile/:name', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: '', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  // constructor(router:Router){
  //   router.navigate(['/home']);
  // }
}
