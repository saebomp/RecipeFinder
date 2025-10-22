import { Component, Input } from '@angular/core';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';

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

  ngOnInit() {
    this.loadRandomRecipes();
  }

  ngOnChanges() {
    //@Input()으로 받은 값이 바뀔 때마다 자동으로 실행
    if (this.ingredient) {
      this.hasSearched = true;
      this.isLoading = true;

      this.apiService.getRecipes(this.ingredient).subscribe({
        next: (res: any) => {
          console.log('res.meals', res.meals);

          if (res.meals === null) {
            this.recipes = [];
          } else {
            this.recipes = res.meals;
          }
          this.isLoading = false;
        },
        error: (err) => {
          console.error('API error:', err);
          this.recipes = [];
          this.isLoading = false;
        },
      });
    }
  }
  loadRandomRecipes() {
    this.isLoading = true;
    const randomCalls = Array.from({ length: 6 }, () =>
      this.apiService.getRandomRecipe()
    );

    forkJoin(randomCalls).subscribe({
      next: (results: any[]) => {
        this.recipes = results.map((res) => res.meals[0]);
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Random API error:', err);
        this.isLoading = false;
      },
    });
  }

  openRecipe(id: string) {
    this.router.navigate(['/recipe', id]);
  }
}
