import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-basic-concepts2',
  templateUrl: './basic-concepts2.component.html',
  styleUrls: ['./basic-concepts2.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class BasicConcepts2Component {
  @Input() name : string | undefined;
  @Output() childChange = new EventEmitter<string>();

  onChildClick():void{
    this.childChange.emit('Data sent From Child');
  }
}
