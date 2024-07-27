import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharableService } from '../services/sharable.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input() pageNumber?:number;
@Output() notifyParent = new EventEmitter<number>();
childProperty="This is from child component";

/**
 *
 */
constructor(private sharableService:SharableService) {
  console.log("Child Component " , this.sharableService.currentPage);

}
}
