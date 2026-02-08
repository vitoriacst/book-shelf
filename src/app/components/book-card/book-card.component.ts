import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Book } from '../interfaces/book';

@Component({
  selector: 'app-book-card',
  imports: [CommonModule],
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
