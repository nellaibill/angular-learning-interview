import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { SharableService } from './services/sharable.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CoursesPipesComponent } from './courses-pipes.component';
import { BasicConcepts1Component } from './basic-concepts1/basic-concepts1.component';
import { CustomPipe } from './custom-pipe.component';
import { BasicConcepts2Component } from './basic-concepts2/basic-concepts2.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostsComponent } from './modules/posts.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-hander';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AuthInterceptorService } from './services/auth-interceptor-service';
import { AuthComponent } from './auth/auth-component';
import { LoadingSpinnerComponent } from './shared/loading-spinner.component';
import { AuthTokenInterceptorService } from './services/auth-token-interceptor.service';
import { AuthGuard } from './guard/auth.guard';
import { PostsModule } from './modules/posts.module';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    CoursesPipesComponent,
    BasicConcepts1Component,
    CustomPipe,
    BasicConcepts2Component,
    ContactFormComponent,
    SignupFormComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent,
    AuthComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PostsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'posts/:id',
        component: PostsComponent,
      },
      {
        path: 'auth',
        component: AuthComponent,
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
      {
        path: 'posts',
        loadChildren: () =>
          import('../app/modules/posts.module').then((m) => m.PostsModule),
      },
    ]),
  ],
  providers: [
    SharableService,
    UserService,
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
