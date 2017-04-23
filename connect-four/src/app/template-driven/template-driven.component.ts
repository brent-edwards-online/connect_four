import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"
@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  emailRegEx ="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
  user = {
    username: 'Brent',
    email: 'brent@brent.com',
    password: 'password',
    gender: 'none'
  }

  gender = [
    'none',
    'male',
    'female',
    'decline'
  ]
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form.value);
  }
}
