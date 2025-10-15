import { Component } from '@angular/core';
import { SearchresultComponent } from '../searchresult/searchresult.component';
import { SearchbarComponent } from '../searchbar/searchbar.component';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [SearchbarComponent, SearchresultComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css',
})
export class SearchPageComponent {
  selectedIngredient = '';

  onSearch(ingredient: string) {
    this.selectedIngredient = ingredient;
  }
}
