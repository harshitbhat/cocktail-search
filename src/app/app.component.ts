import { Component } from '@angular/core';
import { CocktailService } from './services/cocktail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  drinks = [];
  query = '';

  constructor(private cocktail: CocktailService) {}

  search(query: string) {
    this.query = query;
    this.cocktail.search(query).subscribe((res: any) => {
      this.drinks = res.drinks;
    });
  }
}
