import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;

  constructor(private postData: PostsService) { }

  ngOnInit(): void {
    this.postData.getPosts().subscribe((result) => {
      console.log ('result', result);
      this.data = result;
    });
  }

}
