export const environment = {
  production: true,
  baseUrl: "https://clearcook-api.azurewebsites.net/",
  auth0: {
    domain: 'dev-map2rm8b.us.auth0.com',
    clientId: 'YzHIzTIhHV16X7vh2kTeJniyPAWy0jNk',
    redirectUri: 'http://localhost:4200/',
  },
  
};

export enum ApiPaths{
  Home = '/home',
  Recipes = '/recipes',
  RecipeByName = "/recipes/name/",
  RecipesByNameFull="/recipe/name/",
  RecipeById = "/recipes/"
}
