import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PromptsComponent } from './prompts/prompts.component';
import { PromptListComponent } from './prompt-list/prompt-list.component';
import { AddPromptComponent } from './add-prompt/add-prompt.component';


const routes : Route[] = [
  { path:'', component:UserComponent, pathMatch: 'full' },
  { path:'favorites', component:FavoritesComponent },
  { path:'prompts', component:PromptsComponent },
  {path:'questionlist',component:PromptListComponent},
 
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FavoritesComponent,
    PromptsComponent,
    PromptListComponent,
    AddPromptComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
