import { Component, OnInit } from '@angular/core';

import { PedidoService } from '../pedido.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Pedido } from '../pedido';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  pedido: Pedido;
  form: FormGroup;

  constructor(
    public pedidoService: PedidoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idPedido'];
    this.pedidoService.find(this.id).subscribe((data: Pedido)=>{
      this.pedido = data;
    });

    this.form = new FormGroup({
      fecha:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      codigo: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      cliente_id: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ])
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    this.pedidoService.update(this.id, this.form.value).subscribe(res => {
         this.router.navigateByUrl('pedido/index');
    })
  }

}
