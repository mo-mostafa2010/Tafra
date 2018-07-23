import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http' ;
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  req : any;
  public href: string = "";
  data : any;
  ndata : any;
  constructor(private http: Http, private router: Router) { }
  ngOnInit() {
    this.req = this.http.get('assets/json/back.json').subscribe(data => {
      this.data = data.json();
       this.href = this.router.url;
    })
  }
  ngOnDestroy(){
    this.req.unsubscribe();
  }

}

