import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { Pedido } from '../pedido';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  pedidos: Pedido[] = [];

  constructor(public pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.pedidoService.index().subscribe((data: Pedido[])=>{
      this.pedidos = data;
      console.log(this.pedidos);
    })
  }
}
