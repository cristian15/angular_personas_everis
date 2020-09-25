import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor(private router: Router, private logService: LoginService){}
  canActivate(): boolean {
    
    if(!this.logService.isActiveSession()){
      alert('No Loggeado!!');
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
  
}
