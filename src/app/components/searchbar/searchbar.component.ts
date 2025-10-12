import { Component, EventEmitter, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css',
})
export class SearchbarComponent {
  faMagnifyingGlass = faMagnifyingGlass;
  searchInput: string = '';

  //부모에게 이벤트 전달함
  @Output() searchEvent = new EventEmitter<string>();

  searchRecipes() {
    this.searchEvent.emit(this.searchInput.trim());
  }
}
