# Angular Universal with Material and Firebase Server Side Rendering

### Current status: application is working. See the server rendered Angular 2/4 with material [here](https://angular-universal-material.firebaseapp.com)

The goal of this project is to have a good starting point to begin working with Angular, Material, Universal and server side rendering using Cloud Functions for Firebase.

## Getting Started
```
git clone https://github.com/leonlovett/angular2-universal-material-firebase.git
cd angular2-universal-material-firebase
npm install
npm run build-all
npm run server
copy the `dist` and `dist-server` folders to the functions directory
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

This option is good for development, but it does not generate a server rendered application.



## Connecting the app to your FireBase project

* Create a new project in Firebase
* On the project overview page, choose "Add Firebase to your web app"

![firebase hosting](https://firebasestorage.googleapis.com/v0/b/angular-universal-material.appspot.com/o/Capture.PNG?alt=media)
* Copy and paste the firebase config code in to the `/build/firebaseConfig.js` file as a string.

![firebase config](https://firebasestorage.googleapis.com/v0/b/angular-universal-material.appspot.com/o/firebaseconfig.jpg?alt=media)

* Initialize a firebase app in your local environment using [these instructions](https://firebase.google.com/docs/hosting/deploying)

* After you deploy, you can visit the url in your firebase hosting account to see the server rendered version.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
