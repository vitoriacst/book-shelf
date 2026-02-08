import { Component, OnInit } from '@angular/core';
import { books } from '../../../mock';
import { GenderComponent } from '../gender/gender.component';
import { Book, Gender } from '../interfaces/book';

@Component({
  selector: 'app-books-list',
  imports: [GenderComponent],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent implements OnInit {
   genders: Gender[] = []

   booksByGender: Map<string, Book[]> = new Map()

   ngOnInit(){
    this.booksByGender = new Map()

    books.forEach((book)=>{
     const genderId =  book.gender.id
     if(!this.booksByGender.has(genderId)){
      this.booksByGender.set(genderId, [])
     }
     this.booksByGender.get(genderId)?.push(book)

     console.log(this.booksByGender)
    })

    this.genders = [
      {
        id: 'romance',
        value: 'romance',
        books: this.booksByGender.get('romance') ?? []
      },
       {
        id: 'misterio',
        value: 'Mistério',
        books: this.booksByGender.get("mistério") ?? []
    },
    {
        id: 'fantasia',
        value: 'Fantasia',
        books: this.booksByGender.get("fantasia") ?? []
    },
    {
        id: 'ficcao-cientifica',
        value: 'Ficção Científica',
        books: this.booksByGender.get("ficcao-cientifica") ?? []
    },
    {
        id: 'tecnicos',
        value: 'Técnicos',
        books: this.booksByGender.get("tecnicos") ?? []
    },
    ]
   }
}
