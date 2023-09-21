import { Component } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {


  constructor(private servicioLibros : BooksService){
  }

  public add(title:string, type:string, author:string, price:number, photo:string, id_book:number, id_user:number):void{
 this.servicioLibros.addBook(title, type, author, price, photo, id_book, id_user)
  }
}
