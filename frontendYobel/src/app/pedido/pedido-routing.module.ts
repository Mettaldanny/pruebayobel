import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'pedido', redirectTo: 'pedido/index', pathMatch: 'full'},
  { path: 'pedido/index', component: IndexComponent },
  { path: 'pedido/create', component: CreateComponent },
  { path: 'pedido/edit/:idPedido', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }
