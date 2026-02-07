import { Component } from '@angular/core';
import { BooksListComponent } from './components/books-list/books-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';


@Component({
  selector: 'app-root',
  imports: [ HeaderComponent, FooterComponent, BooksListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'book-shelf';
}
