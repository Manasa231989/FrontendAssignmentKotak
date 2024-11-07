import { JsonPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
  standalone: true,
  imports: [JsonPipe]
})
export class CommentComponent implements OnInit{
  @Input() comments:any;

  ngOnInit(): void {
    console.log(this.comments, 'comments')
  }
}
