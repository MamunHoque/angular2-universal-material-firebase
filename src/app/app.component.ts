import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2 Universal Material Firebase';

  goToGithub() {
    window.location.href = 'https://github.com/leonlovett/angular2-universal-material-firebase';
  }
}
