import { Component, OnInit } from '@angular/core';
import { Persona } from '../dto/Persona';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-menu-personas',
  templateUrl: './menu-personas.component.html',
  styleUrls: ['./menu-personas.component.scss']
})
export class MenuPersonasComponent implements OnInit {

  personas: Persona[] = [];
  constructor(private perService: PersonaService) { }

  ngOnInit(): void {

    this.perService.getAll().subscribe((res) => {
      this.personas = res;


    }, (error) => {
        console.log(error);
      }
    );
  }

}
