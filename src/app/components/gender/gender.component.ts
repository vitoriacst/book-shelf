import { Component, input } from '@angular/core';
import { BookCardComponent } from '../book-card/book-card.component';
import { Gender } from '../interfaces';

@Component({
  selector: 'app-gender',
  imports: [BookCardComponent],
  templateUrl: './gender.component.html',
  styleUrl: './gender.component.css'
})
export class GenderComponent {
  gender = input.required<Gender>()
}
