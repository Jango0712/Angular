import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

private books: Book[]

  constructor() { 
    this.books = [ new Book('El Principito', 'Aventuras', 'José Carlos', 99, 'https://m.media-amazon.com/images/I/81E-RNGwAIL._AC_UF1000,1000_QL80_.jpg', 99, 99),
  new Book('El Nombre del viento', 'Aventuras', 'Patrick Roffus', 120, 'https://i0.wp.com/saltodeeje.ideal.es/wp-content/uploads/2014/07/nombre-viento-portada.jpg?fit=650%2C366&ssl=1', 85, 85)]
  }

getAll():Book[]{
  return this.books
}

getOne(id_book:number):Book{
  return this.books.find(book => book.id_book == id_book);
 }


addBook(title:string, type:string, author:string, price:number, photo:string, id_book:number, id_user:number){
  this.books.push(new Book(title, type, author,price, photo, id_book, id_user))
  }

deleteBook(id_book:number):boolean{
    let eliminar = this.books.findIndex(val => val.id_book != id_book);
    if(eliminar !== -1){
      this.books.filter(val => val.id_book == id_book);
      return true;

    }else{
      return false;
    }
  }

 edit(book:Book):boolean{
  let modificar = this.books.findIndex(val => val.id_book == book.id_book);
  if(modificar !== -1){
    this.books[modificar] = book;
    return true;
  } return false;
};
 } 

