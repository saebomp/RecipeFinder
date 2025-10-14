import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
  // 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=53016';
  constructor(private http: HttpClient) {}

  getRecipes(ingredient: string): Observable<any> {
    const url = `${this.apiUrl}${ingredient}`;
    return this.http.get<any>(url);
  }
  getRecipeById(id: string): Observable<any> {
    return this.http.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
  }
}
