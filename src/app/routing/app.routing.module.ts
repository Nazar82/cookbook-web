import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesListComponent } from '../page/recipes-list/recipes-list.component';
import { AboutComponent } from '../page/about/about.component';
import { RegisterComponent } from '../page/register/register.component';
import { LoginComponent } from '../page/login/login.component';
import { FullRecipeComponent } from '../page/full-recipe/full-recipe.component';
import { AddRecipeComponent } from '../page/add-recipe/add-recipe.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'add', component: AddRecipeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'full-recipe', component: FullRecipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }