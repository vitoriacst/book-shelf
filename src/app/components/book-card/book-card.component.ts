import { Component, input } from '@angular/core';
import { Book } from '../interfaces/book';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {

   book = input.required<Book>();

  constructor(){}

  onHandleSwitchFavorite(){
    this.book().isFavorite = !this.book().isFavorite
  }
}
