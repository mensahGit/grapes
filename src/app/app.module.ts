import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireModule} from 'angularfire2';

import { AppComponent } from './app.component';


// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyD3ErQzSwDD7sE2LuavYGk5mj3JCBFMemk",
  authDomain: "grapes-be493.firebaseapp.com",
  databaseURL: "https://grapes-be493.firebaseio.com",
  storageBucket: "grapes-be493.appspot.com"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
