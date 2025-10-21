import { Routes } from '@angular/router';
import { RecipeDetailComponent } from './components/recipedetail/recipedetail.component';
import { SearchPageComponent } from './components/searchpage/searchpage.component';

export const routes: Routes = [
  { path: '', component: SearchPageComponent },
  { path: 'recipe/:id', component: RecipeDetailComponent },
];
