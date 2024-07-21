import { Component } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  log(modelProperties: any) {
    console.log(modelProperties);
  }
  submit(f : any){
    console.log(f);
  }
}
