import { Component, OnInit } from '@angular/core';
import { LoginObject } from '../dto/LoginObject';
import { Session } from '../dto/Session';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = new LoginObject();
  session = new Session();
  constructor(private logService: LoginService) { }

  ngOnInit(): void {
  }

  loggear(){
    this.logService.login(this.login).subscribe(res=>{
      this.session = res;
      this.logService.setSession(this.session);
    }, error=>{console.log(error)})
  }
}
