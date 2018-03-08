import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/services.firebase';
import {Book} from './Book';
import {Author} from './Author';
//import {Content} from './Content';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent implements OnInit  {
  title = 'app works!';
  
  books:Book[];
  authors:Author[];
  // contents:Content[];
  //blurbs=[];

  appState: string;
  
  activeKey: string;

  activeTheme: string;
  activeIssueDate: string;
  activeMonth: string;
  activeYear: string;
  activeCoverImage: string;
  activeObjective: string;
  activeSummary: string;
  activeFirstName: string;
  activeLastName: string;
  activeAuthorImage: number;
  activeAuthorBio: string;

        activeOneFineDay: string;
        activeChileVocab: string;
        activeJapanPhrase: string;
        activeNotes: string;
        activePersonOfInterest: string;
        activeProverb: string;
        activeArticleType: string;
        activeFlavorColor: string;
        activeKanji: string;
        activeQuote: string;
        activeFrontCoverPhoto: string;
        activeBackCoverPhoto: string;
        activeEverydayChilePhoto: string;
        activeStoryA: string;
        activeStoryB: string;
        activeStoryC: string;
        activeStoryBlender: string;
        activeStoryLive: string;
        activeStoryAftereffects: string;

   constructor(private _fs:FirebaseService) {
    
      }

      ngOnInit(){
//this.appState = 'default';

        //GET BOOKS FEED
        this._fs.getBooks().subscribe(books => {
        this.books = books;
      });
        //GET AUTHORS FEED
        this._fs.getAuthors().subscribe(authors => {
        this.authors = authors;
      });
        //GET CONTENTS FEED
        //this._fs.getContents().subscribe(contents => {
       // this.contents = contents;
      //});

        //GET BLURBS FEED
       // this._fs.getBlurbs().subscribe(blurbs => {
       // this.blurbs = blurbs;
      //});
    }
      changeState(state, key){
        console.log('Changing STATE to:'+state);
        if(key){
          console.log('Changing KEY to:'+key);
          this.activeKey = key;
        }
        this.appState = state;
  }

      filterTheme(book){
        this._fs.getBooks(book).subscribe(books => {
          this.books = books;
         console.log(book);
      });
  }



      /*getBooks(){
          console.log(this.books);
          console.log(this.authors);
          console.log(this.contents);
          console.log(this.blurbs);
      }*/


  addBook(
    theme:string,
    issuedate:string,
    month:string,
    year:string,
    coverimg:string,
    objective:string,
    summary:string,
    bio:string,
    firstname:string,
    lastname:string,
    img:string,
    chilevocab:string,
    japanphrases:string,
    notes:string,
    pois:string,
    proverbs:string,
    articletypes:string,
    flavorcolors:string,
    kanjis:string,
    quotes:string,
    bcphotos:string,
    ecpphotos:string,
    fcphotos:string,
    ofdphotos:string,
    storya:string,
    storyb:string,
    storyc:string,
    storybl:string,
    storyli:string,
    storyaf:string){

      var created_at = new Date().toString();

      var newBook = {
        issuedate:issuedate,
        theme:theme,
        month:month,
        year:year,
        coverimg:coverimg,
        objective:objective,
        summary:summary,
        bio:bio,
        firstname:firstname,
        lastname:lastname,
        img:img,
        chilevocab:chilevocab,
    japanphrases:japanphrases,
    notes:notes,
    pois:pois,
    proverbs:proverbs,
    articletypes:articletypes,
    flavorcolors:flavorcolors,
    kanjis:kanjis,
    quotes:quotes,
    bcphotos:bcphotos,
    ecpphotos:ecpphotos,
    fcphotos:fcphotos,
    ofdphotos:ofdphotos,
    storya:storya,
    storyb:storyb,
    storyc:storyc,
    storybl:storybl,
    storyli:storyli,
    storyaf:storyaf,
        created_at:created_at
        }

        console.log(newBook);
        this._fs.addBook(newBook);

        this.changeState('default', null);
  }

      showEdit(book){
        this.changeState('edit', book.$key);
        this.activeIssueDate =          book.issuedate;
        this.activeTheme =              book.theme;
        this.activeMonth =              book.month;
        this.activeYear =               book.year;
        this.activeCoverImage =         book.coverimg;
        this.activeObjective =          book.objective;
        this.activeSummary =            book.summary;
        this.activeAuthorBio =          book.bio;
        this.activeFirstName =          book.firstname;
        this.activeLastName =           book.lastname;
        this.activeAuthorImage =        book.img;
        this.activeOneFineDay=          book.ofdphotos;
        this.activeChileVocab=          book.chilevocab;
        this.activeJapanPhrase=         book.japanphrases;
        this.activeNotes=               book.notes;
        this.activePersonOfInterest=    book.pois;
        this.activeProverb=             book.proverbs;
        this.activeArticleType=         book.articletypes;
        this.activeFlavorColor=         book.flavorcolors;
        this.activeKanji=               book.kanjis;
        this.activeQuote=               book.quotes;
        this.activeFrontCoverPhoto=     book.fcphotos;
        this.activeBackCoverPhoto=      book.bcphotos;
        this.activeEverydayChilePhoto=  book.ecpphotos;
        this.activeStoryA=              book.storya;
        this.activeStoryB=              book.storyb;
        this.activeStoryC=              book.storyc;
        this.activeStoryBlender=        book.storybl;
        this.activeStoryLive=           book.storyli;
        this.activeStoryAftereffects=   book.storyaf;

      }

      updateBook(){
        var updBook = {
          theme:this.activeTheme,
          issuedate:this.activeIssueDate,
          month:this.activeMonth,
          year:this.activeYear,
          coverimg:this.activeCoverImage,
          objective:this.activeObjective,
          summary:this.activeSummary,
          bio:this.activeAuthorBio,
          firstname:this.activeFirstName,
          lastname:this.activeLastName,
          img:this.activeAuthorImage,

        ofdphotos:this.activeOneFineDay,
        chilevocab:this.activeChileVocab,
        japanphrases:this.activeJapanPhrase,
        notes:this.activeNotes,
        pois:this.activePersonOfInterest,
        proverbs:this.activeProverb,
        articletypes:this.activeArticleType,
        flavorcolors:this.activeFlavorColor,
        kanjis:this.activeKanji,
        quotes:this.activeQuote,
        fcphotos:this.activeFrontCoverPhoto,
        bcphotos:this.activeBackCoverPhoto,
        ecpphotos:this.activeEverydayChilePhoto,
        storya:this.activeStoryA,
        storyb:this.activeStoryB,
        storyc:this.activeStoryC,
        storybl:this.activeStoryBlender,
        storyli:this.activeStoryLive,
        storyaf:this.activeStoryAftereffects,

        }
        this._fs.updateBook(this.activeKey, updBook);

        this.changeState('default', null);
      }

      deleteBook(key){
       this._fs.deleteBook(key);

        this.changeState('default', null);
      }

}
