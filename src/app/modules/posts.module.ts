import { NgModule } from '@angular/core';
import { PostsComponent } from './posts.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';

@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PostsComponent, canActivate: [AuthGuard] },
    ]),
  ],
  exports: [PostsComponent],
})
export class PostsModule {}
