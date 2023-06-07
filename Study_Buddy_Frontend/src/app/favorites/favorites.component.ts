import { Component, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  @Input() user:User = {} as User;
}
