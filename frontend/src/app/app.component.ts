import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private http:HttpClient){}
  title = 'frontend';
  httpdata;

  ngOnInit(){
    this.http.get('http://localhost:8080/cities')
    .subscribe((data)=>this.displaydata(data));
  }
  displaydata(data){this.httpdata = data;}

}

