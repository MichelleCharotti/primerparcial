import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChoferService } from '../../servicios/chofer.service';
import { Chofer } from '../../clases/chofer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tabla-chofer',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterModule,RouterLinkActive,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './tabla-chofer.component.html',
  styleUrl: './tabla-chofer.component.scss'
})
export class TablaChoferComponent implements OnInit{
  listaChofer : any;
  @Output() eventoChoferSeleccionado : EventEmitter<any> = new EventEmitter<any>();

  constructor(private service : ChoferService) { 
    this.listaChofer = this.service.obtenerChofer();
  }

  ngOnInit(): void {
  }

  seleccionarChoferEvento(chofer : Chofer){
    this.eventoChoferSeleccionado.emit(chofer);
  }
}
