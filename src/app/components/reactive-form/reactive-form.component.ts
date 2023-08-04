import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  userForm = new FormGroup({
    name: new FormControl(''),
    gender: new FormControl(''),
    email: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl(''),
    hobbies: new FormControl(''),
    address1: new FormControl(''),
    address2: new FormControl(''),
  });
  onSubmit(): void {
    console.log(this.userForm.value);
  }
}
