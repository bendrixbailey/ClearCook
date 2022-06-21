export const environment = {
  production: true,
  baseUrl: "https://clearcook-api.azurewebsites.net/"
};

export enum ApiPaths{
  Home = '/home',
  Recipes = '/recipes',
  RecipeByName = "/recipes/name/",
  RecipesByNameFull="/recipe/name/",
  RecipeById = "/recipes/"
}
