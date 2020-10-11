import { Component } from '@angular/core';
import {  FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  form = new FormGroup({
    email: new FormControl('',[Validators.required , Validators.email]),
    password:  new FormControl('',[Validators.required , Validators.minLength(6)]),
  });

}
