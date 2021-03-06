import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../../interfaces/cliente.interface';

@Component({
  selector: 'app-card-cliente',
  templateUrl: './card-cliente.component.html',
  styles:[`
  .dropdown-toggle::after {
    display: none;
}`]
})
export class CardClienteComponent implements OnInit {

  @Input() cliente!:Cliente;

  constructor() { }

  ngOnInit(): void {
  }

}
