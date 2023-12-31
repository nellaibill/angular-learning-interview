import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any;
  constructor(
    private service: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    let comb = combineLatest([this.route.paramMap, this.route.queryParamMap]);

    comb.subscribe((params) => {
      console.log(params[0].get('id'));
      console.log(params[1].get('page'));
    });
    this.service.getAll().subscribe((response) => {
      this.posts = response;
    });
  }
  navigate(): void {
    this.router.navigate(['/home']);
  }
  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    this.service.create(post).subscribe((response: any) => {
      post.id = response.id;
      this.posts.splice(0, 0, post);
      console.log(response);
    });
  }
  updatePost(post: any) {
    this.service.update(post).subscribe((response) => {
      console.log(response);
    });
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
