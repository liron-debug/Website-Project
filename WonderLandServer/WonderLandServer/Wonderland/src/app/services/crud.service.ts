import { Injectable } from '@angular/core';
import { UserModel } from '../models/user';
import { StorageService } from './storage.service';
import { LoggedUser } from '../models/loggedUser';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private usersList: UserModel[];

  constructor(private storageService: StorageService) { 
    this.storageService.usersData.subscribe(users => this.usersList = users);
  }

  // Get the Current loged in user
  getUser() : Observable<UserModel> {
    return this.storageService.userData;
  }

  Login(user: LoggedUser) : boolean {
    let userExist : boolean = false;
    for (let u of this.usersList) {
      if ((user.email === u.email)&&(user.password === u.password)) {
        userExist = true;
        var fullUser : UserModel = u ;
      }
    }

    if (userExist) {
      
      this.storageService.updateCurrentUser(fullUser) ;
      return true ;
    }
    return false ;
  }

  LogOut() {
    this.storageService.updateCurrentUser(null) ;
  }

  addNewUser(user: UserModel) {
    this.usersList.push(user);
    this.storageService.updateUsersList(this.usersList); // should replace by updating database
  }
  
}
