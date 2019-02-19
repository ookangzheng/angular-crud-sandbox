import { User } from '../models/User';
import { Injectable } from '@angular/core';
import { Observable, observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'a@gmail.com',
        hide: false,
        isActive: true,
        registered: new Date('01/01/2018 08:30:00'),
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        email: 'a@gmail.com',
        hide: true,
        isActive: true,
        registered: new Date('04/01/2018 08:30:00'),
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        email: 'a@gmail.com',
        hide: true,
        isActive: true,
        registered: new Date('05/01/2018 08:30:00'),
      }
    ];
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);
      setTimeout(() => {
        observer.next(3);
      }, 3000);
      setTimeout(() => {
        observer.next({name: 'oz'});
      }, 4000);
    });

    return this.data;
  }
getUsers(): Observable<User[]> {
  return of(this.users);
}

addUser(user: User) {
  this.users.unshift(user);
}

}
