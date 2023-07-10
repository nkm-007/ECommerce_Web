import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,  Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GaurdService implements CanActivate{
  
  constructor(private as: AuthService, private router : Router) { }

  path: import("@angular/router").ActivatedRouteSnapshot[] = [];
  route: import("@angular/router").ActivatedRouteSnapshot = new ActivatedRouteSnapshot;
  
  canActivate(path: any , route: any): boolean  | Observable<boolean> |  Promise<boolean> {
    return new Promise(resolve =>{
      this.as.user.subscribe(user =>{
        if(user) resolve(true)
        else
         this.router.navigate(['/login'])
      })
    })
  }
}
