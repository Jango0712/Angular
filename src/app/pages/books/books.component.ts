import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/book';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
public books: Book[];
constructor(){
this.books = [
  new Book('El Principito', 'Aventuras', 'José Carlos', 99, 'https://m.media-amazon.com/images/I/81E-RNGwAIL._AC_UF1000,1000_QL80_.jpg'),
 
]
}
add(title:string, type:string, author:string, price:number, photo:string, id_book:number, id_user:number){
this.books.push(new Book(title, type, author,price, photo, id_book, id_user))
}

delete(id_book:number){
  this.books = this.books.filter(book => book.id_book != id_book)
}
}
