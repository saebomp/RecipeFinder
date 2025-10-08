import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-searchresult',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './searchresult.component.html',
  styleUrl: './searchresult.component.css',
})
export class SearchresultComponent {
  recipes: any[] = [];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getRecipes().subscribe({
      next: (data) => {
        console.log('API response:', data);
        this.recipes = data.meals;
      },
      error: (err) => {
        console.error('API error:', err);
      },
      complete: () => {
        console.log('API call completed');
      },
    });
  }
}
