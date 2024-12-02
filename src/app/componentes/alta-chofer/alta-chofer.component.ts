import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { Pais } from '../../clases/pais';
import { Chofer } from '../../clases/chofer';
import { ChoferService } from '../../servicios/chofer.service';
import { TablaPaisesComponent } from "../tabla-paises/tabla-paises.component";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-chofer',
  standalone: true,
  imports: [ RouterModule, CommonModule, FormsModule, TablaPaisesComponent, ReactiveFormsModule],
  templateUrl: './alta-chofer.component.html',
  styleUrl: './alta-chofer.component.scss'
})
export class AltaChoferComponent implements OnInit {
  formGroup !: FormGroup;
  paisSeleccionado !: Pais;
  chofer !: Chofer;

  constructor(private formBuilder : FormBuilder,private service : ChoferService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      'nombre' : ['',[Validators.required,Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/)]],
      'dni' : ['',[Validators.required,,Validators.minLength(8),Validators.maxLength(8),Validators.pattern(/^([0-9])*$/)]],
      'edad' : ['',[Validators.required,Validators.min(18),Validators.max(50)]],
      'nroLicencia' : ['',[Validators.required,Validators.minLength(7),Validators.maxLength(20),Validators.pattern(/^([0-9])*$/)]],
      'licenciaProfesional' : [false],
      'pais' : ['',Validators.required],
    });
  }

  altaChofer(){
    const nombre = this.formGroup.controls['nombre'].value;
    const dni = this.formGroup.controls['dni'].value;
    const edad = this.formGroup.controls['edad'].value;
    const nroLicencia = this.formGroup.controls['nroLicencia'].value;
    const licenciaProfesional = this.formGroup.controls['licenciaProfesional'].value;
    
    this.popUpMensaje('success','Chofer creado!!!',false);
    this.formGroup.reset();
    this.service.guardarChofer(nombre,dni,edad,nroLicencia,licenciaProfesional,this.paisSeleccionado);
  }

  cargarPaisSeleccionado(pais: Pais){
    this.formGroup.controls['pais'].setValue(pais.name);
    this.paisSeleccionado = pais;
  }

  popUpMensaje(titulo : string,mensaje : string,error : boolean){
    Swal.fire(
       titulo,
       mensaje,
       error ? 'error' : 'success'
    )
  }
}
