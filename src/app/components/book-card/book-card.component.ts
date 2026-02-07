import { Component } from '@angular/core';
import { Book } from '../book/book';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {

  onHandleSwitchFavorite(){
    this.book.isFavorite = !this.book.isFavorite

  }

  book: Book = {
    title: "É assim que acaba",
    authorship:"Collen Hover",
    image: "https://m.media-amazon.com/images/I/81jqGtBE2qL._AC_UF1000,1000_QL80_.jpg",
    gender:'Romance',
    isFavorite: true
  }
}
