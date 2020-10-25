import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class User {
  url = 'https://jsonplaceholder.typicode.com/posts';
  private http: any;
  constructor(public id: number,
              public firstname: string,
              public lastname: string,
              public email: string,
              public country: string) {
  }
  getPosts(): void{
    return this.http.get(this.url);
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  home: User[];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(): void{
    this.httpClient.get<any>('https://jsonplaceholder.typicode.com/posts').subscribe(
      response => {
        console.log(response);
        this.getUsers = response;
      });

  }
}
