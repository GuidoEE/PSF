import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { ConfirmacionComponent } from './pages/confirmacion/confirmacion.component';
import { CatequesisFamiliarComponent } from './pages/catequesis-familiar/catequesis-familiar.component';
import { PrimraComunionComponent } from './pages/primra-comunion/primra-comunion.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent }, 
  { path: 'acercade', component: AcercadeComponent }, 
  { path: 'confirmacion', component: ConfirmacionComponent },
  { path: 'catequesis familiar', component: CatequesisFamiliarComponent },
  { path: 'primera comunion', component: PrimraComunionComponent },
  { path: '**', component: InicioComponent },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
