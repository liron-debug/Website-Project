import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { passwordsMissmatch } from '../services/validation.service';
import { CrudService } from '../services/crud.service';
import { UserModel } from '../models/user';
import { MatDialog } from '@angular/material/dialog';
import { CreatAccountDialogComponent } from '../creat-account-dialog/creat-account-dialog.component';



@Component({
  selector: 'app-creat-acount',
  templateUrl: './creat-acount.component.html',
  styleUrls: ['./creat-acount.component.css']
})
export class CreatAcountComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private crudService: CrudService, public dialog: MatDialog) {}

  ngOnInit(){
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validators: passwordsMissmatch });
  }


  onSubmit() {
  console.warn(this.signupForm);
  var user : UserModel = {
    username: this.signupForm.get('username').value,
    email: this.signupForm.get('email').value,
    password: this.signupForm.get('password').value
  }
  this.crudService.addNewUser(user);

  const dialogRef =this.dialog.open(CreatAccountDialogComponent, {
    width: '400px',
    data: user.username
  });

  }



}
