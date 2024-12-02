import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Vehiculo } from '../../../clases/vehiculo';
import { VehiculoService } from '../../../servicios/vehiculo.service';

@Component({
  selector: 'app-baja-vehiculo',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './baja-vehiculo.component.html',
  styleUrl: './baja-vehiculo.component.scss'
})
export class BajaVehiculoComponent implements OnInit,OnChanges{
  formGroup !: FormGroup;
  @Input() inputVehiculoSeleccionado !: Vehiculo;

  constructor(private formBuilder : FormBuilder,private service : VehiculoService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      'nombre' : ['',[Validators.required]],
      'tipo' : ['',[Validators.required]],
      'cantRueda' : ['',[Validators.required]],
      'capacidad' : ['',Validators.required]
    });
  }

  ngOnChanges(){
    this.formGroup.controls['nombre'].setValue(this.inputVehiculoSeleccionado.nombre);
    this.formGroup.controls['tipo'].setValue(this.inputVehiculoSeleccionado.tipo);
    this.formGroup.controls['cantRueda'].setValue(this.inputVehiculoSeleccionado.cantRueda);
    this.formGroup.controls['capacidad'].setValue(this.inputVehiculoSeleccionado.capacidad);
 }

 borrar(){
  this.service.popUpMensaje('success','Vehiculo Borrado!!!',false);
  this.service.borrar(this.inputVehiculoSeleccionado);
  this.formGroup.reset();
}


}
