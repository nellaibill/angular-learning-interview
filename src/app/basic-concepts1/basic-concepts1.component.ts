import { Component, OnInit, ViewChild } from '@angular/core';
import { SharableService } from '../services/sharable.service';
import { ChildComponent } from '../child/child.component';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-basic-concepts1',
  templateUrl: './basic-concepts1.component.html',
  styleUrls: ['./basic-concepts1.component.css']
})
export class BasicConcepts1Component implements OnInit{
  title = 'angular-interview-questions';
  pageNumber =1;
  databinding : string="data binding sample";
  twoWayDatabinding : string="two data binding sample";
  authors=["Author1","Author2"];

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

  divClick():void{
    console.log("div is clicked");
  }
  nameClick(name:string){
    console.log(name);

  }
  saveClick($event:any){
  $event.stopPropagation();
    console.log("save is clicked");
  }
  onKeyUp(){
    console.log("Key Enter is presse");

  }
}
