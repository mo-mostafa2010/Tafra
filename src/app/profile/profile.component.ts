import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http' ;
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	private req: any;
	data :any;
  public href: string =  "";
  constructor(private http:Http, private router:Router) {
  	this.req = this.http.get('assets/json/back.json').subscribe(data => {
  		this.data = data.json();
      this.href = this.router.url;
       console.log(this.router.url)
  	})
   }

  ngOnInit() {
  }

}
