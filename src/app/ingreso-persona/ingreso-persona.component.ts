import { Component, OnInit } from '@angular/core';
import { Persona } from '../dto/Persona';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-ingreso-persona',
  templateUrl: './ingreso-persona.component.html',
  styleUrls: ['./ingreso-persona.component.scss']
})
export class IngresoPersonaComponent implements OnInit {

  
  persona = new Persona();
  constructor(private perService: PersonaService) { }

  ngOnInit(): void {
    if(history.state.data){
      this.persona = history.state.data;
    }
  }
  guardarPersona(){
    this.perService.guardar(this.persona).subscribe(res=>{
      alert('Ingresado Correctamente!!');
      this.persona = new Persona();
      location.reload();
    }, (error)=>{
      console.log(error);
    });
  }

}
