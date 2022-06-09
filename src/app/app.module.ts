import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips'
import { MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MyrecipesComponent } from './myrecipes/myrecipes.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    ToolbarComponent,
    MyrecipesComponent,
    FavoritesComponent,
    HomepageComponent,
    RecipeCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDividerModule,
    MatChipsModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
