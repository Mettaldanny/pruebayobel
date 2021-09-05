import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: 'clientes', redirectTo : 'clientes/index', pathMatch: 'full'},
  { path: 'clientes/index', component: IndexComponent},
  { path: 'clientes/create', component: CreateComponent},
  { path: 'clientes/edit/:idCliente', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
