import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  userForm = this.fb.group({
    name: [''],
    gender: [''],
    email: ['', Validators.email],
    city: [''],
    state: [''],
    country: [''],
    hobbies: [''],
    address1: [''],
    address2: [''],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    console.log(this.userForm.value);
  }
}
