import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { SharableService } from './service/sharable.service';
import { FormsModule } from '@angular/forms';
import { UserService } from './service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { CoursesPipesComponent } from './courses-pipes.component';
import { BasicConcepts1Component } from './basic-concepts1/basic-concepts1.component';
import { CustomPipe } from './custom-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    CoursesPipesComponent,
    BasicConcepts1Component,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SharableService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
