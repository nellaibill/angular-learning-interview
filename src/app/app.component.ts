import { Component, OnInit, ViewChild } from '@angular/core';
import { SharableService } from './service/sharable.service';
import { ChildComponent } from './child/child.component';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-interview-questions';
  pageNumber =1;
  databinding : string="data binding sample";
  twoWayDatabinding : string="two data binding sample";

  /**
   *
   */
  constructor(private sharableService: SharableService,
              private userService: UserService) {
    console.log("App Component",this.sharableService.currentPage);

  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe((users)=>{
      console.log("users",users);
    },
    (error)=>{
      console.log(error);
    }
    );
  }
  notifyParent(value : number) : void{
    this.title="Notify Parent Clicked" + value;
  }

  @ViewChild(ChildComponent) child:any;

  viewChildClick():void{
    this.title =this.child.childProperty;
  }
  changeTextData(event :Event): void{
    this.databinding ="text box value changed on keyup";
  }
}
