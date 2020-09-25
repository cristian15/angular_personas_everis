import { Injectable } from '@angular/core';
import { Persona } from '../dto/Persona';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  guardar(persona: Persona): Observable<any>{
    return this.http.post('http://localhost:8000/save', persona);
  }
  getAll(): Observable<any>{
    return this.http.get('http://localhost:8000/all');
  }

  getById(id): Observable<any>{
    return this.http.get('http://localhost:8000/find/'+id);
  }
}
