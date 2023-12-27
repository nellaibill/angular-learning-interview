import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any;
  constructor(private service: PostService) {}
  ngOnInit(): void {
    this.service.getPosts().subscribe(
      (response) => {
        this.posts = response;
      },
      (error) => {
        alert('An unexpected error occured');
      }
    );
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    this.service.createPost(post).subscribe(
      (response: any) => {
        post.id = response.id;
        this.posts.splice(0, 0, post);
        console.log(response);
      },
      (error) => {
        alert('An unexpected error occured');
      }
    );
  }
  updatePost(post: any) {
    this.service.updatePost(post).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        alert('An unexpected error occured');
      }
    );
  }
  deletePost(post: any) {
    this.service.deletePost(post.id).subscribe(
      (response) => {
        console.log(response);
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error) => {
        alert('An unexpected error occured');
      }
    );
  }
}
