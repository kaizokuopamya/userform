import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userData } from './userData.model';
import { UserService } from 'src/app/services/user.service';
declare var $: any;

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent {
  users: userData[] = [];

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    let userInfo: any = this.userService.getUserDataFromLocalStorage();
    if (!userInfo) {
      this.userService.getUserData().subscribe((users) => {
        this.userService.saveUserDataToLocalStorage(users.data);
        this.users = users.data;
      });
    }
    this.users = JSON.parse(userInfo);
  }

  ngAfterViewInit(): void {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  editUser(data: userData, id: number) {}

  viewUser(data: userData, id: number) {}

  deleteUser(data: userData, id: number) {
    this.users = this.users.filter((user) => user != data);
    localStorage.setItem('userData', JSON.stringify(this.users));
  }
}
