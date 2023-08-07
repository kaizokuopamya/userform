import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  public buttonText: String = 'Submit';
  selectedHobbies: string = '';
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      //hobbies: ['', Validators.required],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.userService.Data().subscribe((user) => {
      this.userForm.reset();
      if (user && user['type'] === 'edit') {
        this.buttonText = 'Update';
        this.userForm.patchValue(user['data']);
      }
      this.buttonText = 'Submit';
    });
  }

  onSubmit(): void {
    let formData = this.userForm.value;
    if (this.buttonText.toLowerCase() === 'update') {
      let userData: any = localStorage.getItem('userData');
      let user: any[] = (userData = JSON.parse(userData));
      user
        .filter((data) => data.id == formData['id'])
        .map((opt) => {
          Object.assign(opt, user);
        });
      localStorage.setItem('userData', JSON.stringify(user));
      this.router.navigateByUrl('/');
    } else {
      formData.id = Math.floor(Math.random() * 999 + 1);
      let userData: any = localStorage.getItem('userData');
      let user: any[] = (userData = JSON.parse(userData));
      user.push(formData);
      localStorage.setItem('userData', JSON.stringify(user));
      this.router.navigateByUrl('/');
    }
  }
}
