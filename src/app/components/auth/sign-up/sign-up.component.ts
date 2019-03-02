import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  
  onSignUp(form: NgForm) {
    const email = form.value.email
    const password = form.value.password
    console.log(email,password);
    
    this.authService.signUp(email,password)
  }

}
