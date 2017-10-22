import { Injectable } from '@angular/core';
import { Headers, Response } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Recipe } from '../models/recipe';
import { API_URL } from '../urls/urls';
import { AuthService } from '../services/auth.service';

import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService {

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient,
    private authService: AuthService
  ) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${API_URL}/api/recipes`);
  }

  getOneRecipe(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${API_URL}/api/onerecipe`,
    {
      params: new HttpParams().set('id', id),
    });
  }

  getRecipesByMain(main: string): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${API_URL}/api/recipesbymain`, {
      params: new HttpParams().set('main', main),
    });
  }

  getRecipesByType(type: string): Observable<Recipe[]> {
    console.log(type);
    return this.http.get<Recipe[]>(`${API_URL}/api/recipesbytype`, {
      params: new HttpParams().set('type', type),
    });
  }

  getRecipesByCuisine(cuisine: string): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${API_URL}/api/recipesbycuisine`, {
      params: new HttpParams().set('cuisine', cuisine),
    });
  }

  addRecipe(recipe: Recipe) {
    return this.http.post(`${API_URL}/api/recipes`, recipe)
      .subscribe(
      (response) => console.log(response),
      (error) => console.error(error)
      );
  }
}

