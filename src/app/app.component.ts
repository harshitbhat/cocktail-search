import { Component } from '@angular/core';
import { CocktailService } from './services/cocktail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private cocktail: CocktailService) {}

  search(query: string) {
    console.log(query);
  }
}
