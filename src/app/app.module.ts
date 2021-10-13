import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PortadaComponent } from './portada/portada.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { PerfilComponent } from './perfil/perfil.component'; 
import { HeaderComponent } from './header/header.component';
import { HabitacionComponent } from './habitacion/habitacion.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { CrudComponent} from './crud/crud.component';

@NgModule({
  declarations: [
    AppComponent,
    HabitacionesComponent,
    HabitacionComponent,
    RestauranteComponent,
    PortadaComponent,
    HeaderComponent,
    PerfilComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }