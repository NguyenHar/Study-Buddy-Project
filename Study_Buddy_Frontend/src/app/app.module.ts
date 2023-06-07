import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PromptsComponent } from './prompts/prompts.component';

const routes : Route[] = [
  { path:'', component:UserComponent },
  { path:'favorites', component:FavoritesComponent },
  { path:'prompts', component:PromptsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FavoritesComponent,
    PromptsComponent
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
