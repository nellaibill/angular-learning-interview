import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { UserNameValidators } from './usernameValidators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent {

  form: any;
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      account: fb.group({
        username: [
          '',
          [Validators.required, UserNameValidators.cannotContainSpace],
          UserNameValidators.shouldBeUnique,
        ],
        password: ['', Validators.required],
      }),
    });
  }

/*
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl(
        '',
        [Validators.required, UserNameValidators.cannotContainSpace],
        UserNameValidators.shouldBeUnique
      ),
      password: new FormControl('', Validators.required),
    }),
  });
  */
  coursesForm = new FormGroup({
    topics : new FormArray([])
  });

  get username() {
    return this.form.get('account.username');
  }
  get topics(){
    return this.coursesForm.get('topics') as FormArray

  }
  loginForm() {
    this.form.setErrors({
      invalidLogin: true,
    });
  }

  addTopic(topic :HTMLInputElement){
    this.topics.push(new FormControl(topic.value))
    topic.value='';
  }
}
