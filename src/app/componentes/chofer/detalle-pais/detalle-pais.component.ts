import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Chofer } from '../../../clases/chofer';

@Component({
  selector: 'app-detalle-pais',
  standalone: true,
  imports: [RouterModule, CommonModule,FormsModule],
  templateUrl: './detalle-pais.component.html',
  styleUrl: './detalle-pais.component.scss'
})
export class DetallePaisComponent implements OnInit{
  @Input() inputDetalleChofer!: Chofer;

  constructor() { }

  ngOnInit(): void {
  }
}
