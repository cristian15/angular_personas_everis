import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginObject } from '../dto/LoginObject';
import { Session } from '../dto/Session';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(loginObj: LoginObject): Observable<any>{
    return this.http.post('http://localhost:8000/login', loginObj);
  }

  setSession(session: Session){
    localStorage.setItem('token', session.token);
  }

  isActiveSession(): boolean{
    return localStorage.getItem('token') != null;
  }
}
