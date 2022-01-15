import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: CrudService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    var logged = false ;
    this.auth.getUser().subscribe(user => { if (user) logged = true;  }) ;
    if (logged == false) this.router.navigate(['/acount'],  {queryParams: {redirectUrl: state.url} , queryParamsHandling: 'merge'})
    return logged ;
  }
}
