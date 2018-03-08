import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import  'rxjs/add/operator/map';

import {Author} from '../Author';
import {Book} from '../Book';
//import {Content} from '../Content';


@Injectable()

export class FirebaseService{
authors:FirebaseListObservable<Author[]>;
books:FirebaseListObservable<Book[]>;
//contents:FirebaseListObservable<Content[]>;
//blurbs:FirebaseListObservable<Content[]>;


constructor(private _fs:AngularFire){}

      getBooks(book:string = null){
      if(book != null){
        this.books = this._fs.database.list('/books', {
          query: {
          orderByChild: 'theme',
          equalTo: book
        }
      }) as
        FirebaseListObservable<Book[]>
      } else {
        this.books = this._fs.database.list('/books') as
        FirebaseListObservable<Book[]>
      }

      return this.books;
    }

    getAuthors(){
      this.authors = this._fs.database.list('/authors') as
      FirebaseListObservable<Author[]>
      return this.authors;
    }

    // getContents(){
    //   this.contents = this._fs.database.list('/contents') as
    //   FirebaseListObservable<Content[]>
    //   return this.contents;
    // }

    // getBlurbs(){
    //   this.blurbs = this._fs.database.list('/contents' +'/0'+ '/blurbs') as
    //   FirebaseListObservable<Content[]>
    //   return this.blurbs;
    // }

    addBook(newBook){
      return this.books.push(newBook);
    }

    updateBook(key, updBook){
      return this.books.update(key, updBook);
    }

    deleteBook(key){
      return this.books.remove(key);
    }
     

}