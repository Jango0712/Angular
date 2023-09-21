import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
public books: Book[];
constructor(private servicioLibros : BooksService){
this.books = this.servicioLibros.getAll();
}



delete(id_book:number){
  let borrar = this.servicioLibros.deleteBook(id_book)
  if(borrar === true){
    this.books = this.books.filter(book => book.id_book != id_book);
  }
}

buscar(id_book:number){
  if(id_book){
    this.books = [(this.servicioLibros.getOne(id_book))];
  }else{ this.books = this.servicioLibros.getAll()};
}
}

