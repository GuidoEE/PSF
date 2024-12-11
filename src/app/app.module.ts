import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConfirmacionComponent } from './pages/confirmacion/confirmacion.component';
import { CatequesisFamiliarComponent } from './pages/catequesis-familiar/catequesis-familiar.component';
import { PrimraComunionComponent } from './pages/primra-comunion/primra-comunion.component';
import { MisasComponent } from './pages/misas/misas.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercadeComponent,
    InicioComponent,
    NavbarComponent,
    ConfirmacionComponent,
    CatequesisFamiliarComponent,
    PrimraComunionComponent,
    MisasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
