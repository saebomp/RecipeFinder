import { Component, Input } from '@angular/core';
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
  @Input() ingredient: string = '';

  constructor(private apiService: ApiService) {}

  ngOnChanges() {
    //@Input()으로 받은 값이 바뀔 때마다 자동으로 실행
    if (this.ingredient) {
      this.apiService.getRecipes(this.ingredient).subscribe({
        next: (res: any) => {
          this.recipes = res.meals || [];
        },
      });
    }
  }
}
