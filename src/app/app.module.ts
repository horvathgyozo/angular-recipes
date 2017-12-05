import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoutingModule } from './routing/routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { FilterTextComponent } from './filter-text/filter-text.component';
import { RecipeService } from './recipe.service';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeFormComponent,
    RecipeDetailComponent,
    FilterTextComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [RecipeService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
