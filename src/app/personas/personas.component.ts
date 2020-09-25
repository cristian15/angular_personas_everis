import { Component, OnInit } from '@angular/core';
import { Persona } from '../dto/Persona';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {

  constructor(private perService: PersonaService) { }

  personas: Persona[] = [];
  ngOnInit(): void {

    this.perService.getAll().subscribe(res=>{
      this.personas = res;
    });
  }

}
