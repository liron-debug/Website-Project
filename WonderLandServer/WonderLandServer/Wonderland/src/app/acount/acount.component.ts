import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-acount',
  templateUrl: './acount.component.html',
  styleUrls: ['./acount.component.css']
})
export class AcountComponent implements OnInit {

  signinForm: FormGroup;
  logInMessage : string ;
  redirectUrl : string ;

  constructor(private fb: FormBuilder, private crud: CrudService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.redirectUrl = this.route.snapshot.queryParamMap.get('redirectUrl') ;
    console.log(this.redirectUrl);
    
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit(){
    // console.warn(this.signinForm.value);
    let result : boolean = this.crud.Login(this.signinForm.value);
    if (result) {
      this.logInMessage = 'You Are Logged In succefully' ;

      if (this.redirectUrl) this.router.navigateByUrl(this.redirectUrl) ;
    }
    else {
      alert(this.logInMessage = 'User dosent exist') ;
    }
  }

}
