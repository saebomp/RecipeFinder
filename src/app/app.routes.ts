import { Routes } from '@angular/router';
import { SearchresultComponent } from './components/searchresult/searchresult.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';

export const routes: Routes = [
  { path: '', component: SearchresultComponent },
  { path: 'recipe:id', component: RecipeDetailComponent },
];
