import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url = 'https://xcjsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {}

  getPosts() {
    return this.httpClient.get(this.url);
  }
  createPost(post: any) {
    return this.httpClient.post(this.url, JSON.stringify(post));
  }
  updatePost(post: any) {
    return this.httpClient.patch(
      this.url + '/' + post.id,
      JSON.stringify({ title: 'test' })
    );
  }
  deletePost(id:any){
   return  this.httpClient.delete(this.url + '/' + id)
  }
}
