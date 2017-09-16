# Angular Universal with Material and Firebase Server Side Rendering

### Current status: Server rendering is working locally with all material components. Need to create Firebase Cloud Function that serves the application.
To do:

* ~~Create base application using Angular-Cli~~

* ~~Convert base application to work with Universal~~

* ~~Add server.js file to serve rendered application to client~~
* ~~Add Material components.~~
* ~~Add functionality to handle multiple server-rendered routes.~~
* Convert server.js file to work with Cloud Functions for Firebase.

The goal of this project is to have a good starting point to begin working with Angular, Material, Universal and server side rendering using Cloud Functions for Firebase.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

This options is good for development, but it does not generate a server rendered application.

## Getting Started
```
git clone https://github.com/leonlovett/angular2-universal-material-firebase.git
cd angular2-universal-material-firebase
npm install
npm run build-all
npm run server
```

## Connecting the app to your FireBase project

* Create a new project in Firebase
* On the project overview page, choose "Add Firebase to your web app"

![firebase hosting](https://firebasestorage.googleapis.com/v0/b/angular-universal-material.appspot.com/o/Capture.PNG?alt=media)
* Copy and paste the firebase config code in to the `/build/firebaseConfig.js` file as a string.

![firebase config](https://firebasestorage.googleapis.com/v0/b/angular-universal-material.appspot.com/o/firebaseconfig.jpg?alt=media)

* Initialize a firebase app in your local environment using [these instructions](https://firebase.google.com/docs/hosting/deploying)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
