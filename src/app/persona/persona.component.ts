import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Persona } from '../dto/Persona';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  persona: Persona = new Persona();

  constructor(private perService: PersonaService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params)=>{  // obtiene el parametro de la ruta
      this.perService.getById(params.id).subscribe((res)=>{
        this.persona = res;
        
      },(error)=>{
        console.log(error);
      });
    });
  }

  
}
