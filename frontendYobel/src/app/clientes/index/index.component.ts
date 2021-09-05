import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor( public clienteService: ClienteService) { }

  ngOnInit(): void {

    this.clienteService.getAll().subscribe((data: Cliente[])=>{
      this.clientes = data;
      console.log(this.clientes);
    } )
  }

  deleteCliente(id){
    this.clienteService.delete(id).subscribe(res => {
      this.clientes = this.clientes.filter(item => item.id !== id);
    })
  }
}
