import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { ClienteComponent } from './cliente/cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
