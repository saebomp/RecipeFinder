import { Routes } from '@angular/router';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { SearchPageComponent } from './components/search-page/search-page.component';

export const routes: Routes = [
  { path: '', component: SearchPageComponent },
  { path: 'recipe/:id', component: RecipeDetailComponent },
];
