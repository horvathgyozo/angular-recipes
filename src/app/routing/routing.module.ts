import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeListComponent } from "../recipe-list/recipe-list.component";
import { RecipeFormComponent } from '../recipe-form/recipe-form.component';
import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    component: RecipeListComponent
  },
  {
    path: 'recipes/new',
    component: RecipeFormComponent
  },
  {
    path: 'recipes/:id',
    component: RecipeDetailComponent
  },
  {
    path: 'recipes/:id/edit',
    component: RecipeFormComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
