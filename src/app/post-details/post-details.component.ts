import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { CommentComponent } from "../comment/comment.component";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss',
  standalone: true,
  imports: [JsonPipe, CommentComponent]
})
export class PostDetailsComponent implements OnInit{
  id:any;
  postDetails:any

  constructor(private apiService:ApiService, private activatedRoute:ActivatedRoute){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getPostDetails();
  }

  getPostDetails(){
    this.apiService.getPostDetails(this.id).subscribe((data) => {
      console.log(data);
      this.postDetails = data;
    })
  }
}
