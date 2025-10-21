import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './recipedetail.component.html',
  styleUrl: './recipedetail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  recipes: any;
  faCircleArrowLeft = faCircleArrowLeft;
  ingredients: { ingredient: string; measure: string }[] = [];
  recipe: any;
  instructionLines: string[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getRecipeById(id).subscribe((data: any) => {
        this.recipes = data.meals;
        console.log(this.recipes);

        const meal = this.recipes[0]; // meals 배열에서 첫 번째 요리만 사용
        this.ingredients = Object.keys(meal)
          .filter((key) => key.startsWith('strIngredient'))
          .map((key) => {
            const index = key.replace('strIngredient', ''); //대응하는 strMeasureX를 찾기 위해 strIngredient삭제후 번호만 남김
            const ingredient = meal[key];
            const measure = meal[`strMeasure${index}`];
            return {
              ingredient: ingredient ? ingredient.trim() : '', //null, undefined, 공백이 아닌 경우만 남김
              measure: measure ? measure.trim() : '',
            };
          })
          .filter((item) => item.ingredient); // 빈 값 제거

        console.log('list of ingredients:', this.ingredients);
      });
    }
  }
}
