import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { SharableService } from './service/sharable.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { CoursesPipesComponent } from './courses-pipes.component';
import { BasicConcepts1Component } from './basic-concepts1/basic-concepts1.component';
import { CustomPipe } from './custom-pipe.component';
import { BasicConcepts2Component } from './basic-concepts2/basic-concepts2.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    CoursesPipesComponent,
    BasicConcepts1Component,
    CustomPipe,
    BasicConcepts2Component,
    ContactFormComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [SharableService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
