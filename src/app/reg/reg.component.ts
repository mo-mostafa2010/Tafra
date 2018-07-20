import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgModule } from '@angular/core';


@Component({
  selector: 'reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
@NgModule({
  declarations: [
    RegComponent
  ],
  imports: [
    MatFormFieldModule
  ]
})
export class RegComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
