import { Component, OnInit,ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import{FormsModule, ReactiveFormsModule ,NgForm} from '@angular/forms'

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  @ViewChild('s') signinForm:NgForm;
  onSubmit(){
    console.log(this.signinForm);
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
