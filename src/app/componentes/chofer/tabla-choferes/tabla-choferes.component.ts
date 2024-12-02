import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DniFormatoPipe } from '../../../pipe/dni-formato.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChoferService } from '../../../servicios/chofer.service';
import { Chofer } from '../../../clases/chofer';

@Component({
  selector: 'app-tabla-choferes',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule,ReactiveFormsModule,DniFormatoPipe],
  templateUrl: './tabla-choferes.component.html',
  styleUrl: './tabla-choferes.component.scss'
})
export class TablaChoferesComponent implements OnInit{
  @Output() eventoChoferSeleccionado : EventEmitter<any> = new EventEmitter<any>();

  listaChofer : any;

  constructor(private service : ChoferService) { 
    this.listaChofer = this.service.obtenerChofer();
  }

  ngOnInit(): void {
  }

  seleccionarChoferEvento(chofer : Chofer){
    this.eventoChoferSeleccionado.emit(chofer);
  }
}
