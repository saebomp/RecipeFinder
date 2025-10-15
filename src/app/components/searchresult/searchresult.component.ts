import { Component, Input } from '@angular/core';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchresult',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './searchresult.component.html',
  styleUrl: './searchresult.component.css',
})
export class SearchresultComponent {
  recipes: any[] = [];
  @Input() ingredient: string = '';
  isLoading = false;
  hasSearched = false;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnChanges() {
    //@Input()으로 받은 값이 바뀔 때마다 자동으로 실행
    if (this.ingredient) {
      this.hasSearched = true;
      this.isLoading = true;

      this.apiService.getRecipes(this.ingredient).subscribe({
        next: (res: any) => {
          this.recipes = res.meals || [];
          this.isLoading = false;
        },
        error: (err) => {
          console.error('API error:', err);
          this.isLoading = false;
        },
      });
    }
  }
  getRecipeDetails(id: string) {
    this.apiService.getRecipeById(id).subscribe((data: any) => {
      console.log('recipe detail', data.meals[0]);
    });
  }
  openRecipe(id: string) {
    this.router.navigate(['/recipe', id]);
  }
}
