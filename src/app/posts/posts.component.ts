import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any;
  constructor(private service: PostService) {}
  ngOnInit(): void {
    this.service.getAll().subscribe(
      (response) => {
        this.posts = response;
      }
    );
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    this.service.create(post).subscribe(
      (response: any) => {
        post.id = response.id;
        this.posts.splice(0, 0, post);
        console.log(response);
      }
    );
  }
  updatePost(post: any) {
    this.service.update(post).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }
  deletePost(post: any) {
    this.service.delete(1325).subscribe(
      (response) => {
        console.log(response);
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: Response) => {
        if (error.status === 404) {
          alert('Id not exist');
        }
      }
    );
  }
}
