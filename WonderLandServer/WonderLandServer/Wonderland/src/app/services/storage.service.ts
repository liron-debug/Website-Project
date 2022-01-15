import { Injectable } from '@angular/core';
import { UserModel } from '../models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private userSubject = new BehaviorSubject(null) ;
  userData = this.userSubject.asObservable() ;


  private usersSubject = new BehaviorSubject([{
    username: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
}]) ;
  usersData = this.usersSubject.asObservable() ;

  constructor() { }

  updateCurrentUser(user: UserModel) {
    this.userSubject.next(user) ;
  }

  updateUsersList(usersList: UserModel[]) {
    this.usersSubject.next(usersList) ;
  }
}
