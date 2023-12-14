import { Component, ViewChild } from '@angular/core';
import { SharableService } from './service/sharable.service';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-interview-questions';
  pageNumber =1;

  /**
   *
   */
  constructor(private sharableService: SharableService) {
    console.log("App Component",this.sharableService.currentPage);

  }
  notifyParent(value : number) : void{
    this.title="Notify Parent Clicked" + value;
  }

  @ViewChild(ChildComponent) child:any;

  viewChildClick():void{
    this.title =this.child.childProperty;
  }
}
