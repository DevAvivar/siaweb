// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // api: 'http://localhost:8081/api',
  api: 'http://siaemailsignature-env-1.eba-ezei4jza.us-east-1.elasticbeanstalk.com/api',
  ws: 'ws://localhost:8081/websocket',
  reports:'http://192.168.0.19:8080/siaaptrelatorio/api'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
