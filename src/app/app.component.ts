import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-interview-questions';
  pageNumber =1;

  notifyParent() : void{
    this.title="Notify Parent Clicked";
  }
}
