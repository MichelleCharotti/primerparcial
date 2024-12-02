import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Vehiculo } from '../../../clases/vehiculo';
import { VehiculoService } from '../../../servicios/vehiculo.service';

@Component({
  selector: 'app-modificacion-vehiculo',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './modificacion-vehiculo.component.html',
  styleUrl: './modificacion-vehiculo.component.scss'
})
export class ModificacionVehiculoComponent implements OnInit,OnChanges{
  formGroup !: FormGroup;
  @Input() inputVehiculoSeleccionado !: Vehiculo;

  constructor(private formBuilder : FormBuilder,private service : VehiculoService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      'nombre' : [''],
      'tipo' : ['',[Validators.required]],
      'cantRueda' : ['',[Validators.required,Validators.max(6),Validators.pattern(/^([0-9])*$/)]],
      'capacidad' : ['',[Validators.required,Validators.min(2),Validators.max(100),Validators.pattern(/^([0-9])*$/)]]
    });
  }

  ngOnChanges(){
    this.formGroup.controls['nombre'].setValue(this.inputVehiculoSeleccionado.nombre);
    this.formGroup.controls['tipo'].setValue(this.inputVehiculoSeleccionado.tipo);
    this.formGroup.controls['cantRueda'].setValue(this.inputVehiculoSeleccionado.cantRueda);
    this.formGroup.controls['capacidad'].setValue(this.inputVehiculoSeleccionado.capacidad);
  }

  modificar(){
    const tipo = this.formGroup.controls['tipo'].value;
    const cantRueda = this.formGroup.controls['cantRueda'].value;
    const capacidad = this.formGroup.controls['capacidad'].value;
    let aux : Vehiculo = new Vehiculo(this.inputVehiculoSeleccionado.id,this.inputVehiculoSeleccionado.nombre,tipo,cantRueda,capacidad);
    this.service.popUpMensaje('success','Vehiculo modificado!!!',false);
    this.service.modificar(aux);
    this.formGroup.reset();
  }

}
