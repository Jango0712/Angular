export class Book {


    constructor(
        public title: string,
        public type: string,
        public author: string,
        public price: number,
        public photo: string,
        public id_book: number = 0,
        public id_user: number = 0){
            this.id_book = id_book;
            this.id_user = id_user
        }
}
