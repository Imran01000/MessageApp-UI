import { Component, OnInit } from '@angular/core';
import {  FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor() { }
  
  form = new FormGroup({
    firstName: new FormControl('',[Validators.required , Validators.pattern('[A-Z][a-z]*')]),
    lastName: new FormControl('',[Validators.required , Validators.pattern('[A-Z][a-z]*')]),
    email: new FormControl('',[Validators.required , Validators.email]),
    password:  new FormControl('',[Validators.required , Validators.minLength(6)]),
  });
  ngOnInit() {
  }

}
