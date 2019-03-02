import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project01RecipeBook';
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyBfZu8CN4gchp8cq5fbWjknKIrRDWXSSaY",
      authDomain: "angular-recipe-book-1b0ca.firebaseapp.com"
    })
  }
}
