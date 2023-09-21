import { Component } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  constructor(private servicioLibros : BooksService){
  }

  public modificar(title:string, type:string, author:string, price:number, photo:string, id_book:number, id_user:number):void{
 this.servicioLibros.edit(new Book(title, type, author, price, photo, id_book, id_user))
  }

}
