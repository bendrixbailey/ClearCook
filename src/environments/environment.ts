// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: "http://127.0.0.1:5000",
  auth0: {
    domain: 'dev-map2rm8b.us.auth0.com',
    clientId: 'YzHIzTIhHV16X7vh2kTeJniyPAWy0jNk',
    redirectUri: 'http://localhost:4200',
    secret: "tMeEIC2Y63lWIBLUNU-TLG_N3lQuTjHHuDmuYJLomv3wRcvdn8q1gZjkDSgzNVb2",
  },
  userUpdateUri: "https://dev-map2rm8b.us.auth0.com/"
};

export enum ApiPaths{
  Home = '/home',
  Recipes = '/recipes',
  RecipeByName = "/recipes/name/",
  RecipesByNameFull="/recipe/name/",
  RecipeById = "/recipes/"
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
