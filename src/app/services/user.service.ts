import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private dataUrl = 'assets/userInfo.json';

  constructor(private http: HttpClient) {}

  getUserData(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }

  saveUserDataToLocalStorage(data: any) {
    localStorage.setItem('userData', JSON.stringify(data));
  }

  getUserDataFromLocalStorage() {
    localStorage.getItem('userData');
  }
}
