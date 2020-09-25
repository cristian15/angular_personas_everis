import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionGuard } from './guards/session.guard';
import { IngresoPersonaComponent } from './ingreso-persona/ingreso-persona.component';
import { LoginComponent } from './login/login.component';
import { PersonaComponent } from './persona/persona.component';
import { PersonasComponent } from './personas/personas.component';


const routes: Routes = [
  { path: 'personas', component: PersonasComponent, canActivate:[ SessionGuard] },
  { path: 'ingreso', component: IngresoPersonaComponent, canActivate:[ SessionGuard] },
  { path: 'persona/:id', component: PersonaComponent, canActivate:[ SessionGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', component: IngresoPersonaComponent , canActivate:[ SessionGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
