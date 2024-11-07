import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { JsonPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [JsonPipe, FormsModule, ReactiveFormsModule, RouterModule]
})
export class HomeComponent implements OnInit{
  searchData:any
  constructor(private apiService:ApiService, private route:Router){}

  ngOnInit(): void {
  }

  getList(event:any){
    this.apiService.getSearchList(event.target.value).subscribe((data) => {
      this.searchData = data;
    });
  }

  navigateToPostDetail(id:any){
    this.route.navigate(['/post-details']);
  }
}
