import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup;

  constructor(
    public pedidoService: PedidoService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      fecha:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      codigo: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      cliente: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ])
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.pedidoService.create(this.form.value).subscribe(res => {
         this.router.navigateByUrl('pedido/index');
    })
  }

}
