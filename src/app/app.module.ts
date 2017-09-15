import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {
  MdSidenavModule,
  MdButtonModule,
  MdToolbarModule,
  MdIconModule,
  MdListModule,
  MdCardModule,
  MdCheckboxModule,
  MdInputModule,
  MdRadioModule
} from '@angular/material';

import { HomeComponent } from './home/home.component';
import { ExamplesComponent } from './examples/examples.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExamplesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'app-root'
    }),
    BrowserAnimationsModule,
    MdSidenavModule,
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,
    MdListModule,
    MdCardModule,
    MdCheckboxModule,
    MdInputModule,
    MdRadioModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'examples',
        component: ExamplesComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: HomeComponent
      }
    ]),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
