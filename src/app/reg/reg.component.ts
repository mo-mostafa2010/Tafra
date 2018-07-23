import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import{FormsModule, ReactiveFormsModule ,NgForm} from '@angular/forms'
@Component({
  selector: 'reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  @ViewChild('f') signupForm:NgForm;
  select="es";
  constructor(private router: Router) { }
  ngOnInit() {
    }
  }

