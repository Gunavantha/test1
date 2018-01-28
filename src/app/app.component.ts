import { Component } from '@angular/core';
import { HEROES } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  heroes =HEROES;
  master='Master';
}
