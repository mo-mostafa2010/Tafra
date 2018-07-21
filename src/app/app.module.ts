import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnDestroy } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material'
import{FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { RegComponent } from './reg/reg.component';
import { CardComponent } from './card/card.component';
import {HttpModule} from '@angular/http'
import {RouterModule, Router} from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
const appRoutes : Routes = [
    {
        path:"register",
        component:RegComponent,
        
    },
    {
        path:"card",
        component:CardComponent,
    },   
    {
        path:":slug",
        component:ProfileComponent,
        
    },
]
@NgModule({
  declarations: [
    AppComponent,
    RegComponent,
    CardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    RouterModule.forRoot(
        appRoutes),
    ReactiveFormsModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }
