import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClientesModule } from './clientes/clientes.module';
import { PedidoModule } from './pedido/pedido.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ClientesModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule, PedidoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
