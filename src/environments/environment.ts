// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCfruEz0HHvnoUBv_HGYqO6R9wHjqlJpII",
    authDomain: "novlin-scratch.firebaseapp.com",
    databaseURL: "https://novlin-scratch.firebaseio.com",
    projectId: "novlin-scratch",
    storageBucket: "novlin-scratch.appspot.com",
    messagingSenderId: "710099850782"
  },
  backendURL: `http://localhost:5000/novlin-scratch/us-central1/`
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
