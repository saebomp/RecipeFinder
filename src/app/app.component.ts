import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SearchresultComponent } from './components/searchresult/searchresult.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchbarComponent, SearchresultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'recipe-angular';
}

// https://www.youtube.com/watch?v=opikz5x_1ak
