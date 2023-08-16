import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  postId: any;
  

  constructor(private http: HttpClient) {  }
  ngOnInit(): void {
    
  }
  
}
