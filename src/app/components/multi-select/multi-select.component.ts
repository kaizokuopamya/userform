import { Component } from '@angular/core';
import { HOBBIES } from './Hobbies';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css'],
})
export class MultiSelectComponent {
  showHobbies: boolean = false;
  hobbies: any[] = [];

  constructor() {}

  ngOnInit() {
    this.hobbies = HOBBIES;
  }

  checkedHobbies(hobby: any) {
    
  }
}
