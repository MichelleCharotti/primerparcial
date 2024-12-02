import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Vehiculo } from '../../../clases/vehiculo';
import { VehiculoService } from '../../../servicios/vehiculo.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-alta-vehiculo',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './alta-vehiculo.component.html',
  styleUrl: './alta-vehiculo.component.scss'
})
export class AltaVehiculoComponent implements OnInit {
  @Output() eventoVehiculoSeleccionado : EventEmitter<any> = new EventEmitter<any>();

  formGroup !: FormGroup;
  vehiculo !: Vehiculo;

  constructor(private formBuilder : FormBuilder,private service : VehiculoService,private angularF: AngularFirestore)
   { }
   ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      'nombre' : ['',[Validators.required,Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/)]],
      'tipo' : ['',[Validators.required]],
      'cantRueda' : ['',[Validators.required,Validators.max(6),Validators.pattern(/^([0-9])*$/)]],
      'capacidad' : ['',[Validators.required,Validators.min(2),Validators.max(100),Validators.pattern(/^([0-9])*$/)]]
    });
  }

  alta(){
    const nombre = this.formGroup.controls['nombre'].value;
    const tipo = this.formGroup.controls['tipo'].value;
    const cantRueda = this.formGroup.controls['cantRueda'].value;
    const capacidad = this.formGroup.controls['capacidad'].value;
    
    this.service.popUpMensaje('success','Vehiculo creado!!!',false);

    this.formGroup.reset();
    const id = this.angularF.createId();
    this.eventoVehiculoSeleccionado.emit(this.vehiculo)
    let vehiculo = new Vehiculo(id,nombre,tipo,cantRueda,capacidad);
    this.service.guardar(vehiculo);

  }
}
