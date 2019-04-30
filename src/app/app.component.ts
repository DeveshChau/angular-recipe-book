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
      apiKey: "AIzaSyCvDlNKC5fiyFUCIAQe9A40ZtbFJx2OYR8",
      authDomain: "angular-recipe-book-39895.firebaseio.com"
    })
  }
}
