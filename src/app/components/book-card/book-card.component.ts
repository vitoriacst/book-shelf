import { Component } from '@angular/core';

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

  book = {
    title: "É assim que acaba",
    authorship:"Collen Hover",
    image: "https://m.media-amazon.com/images/I/81jqGtBE2qL._AC_UF1000,1000_QL80_.jpg",
    isFavorite: true
  }
}
