import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { Pais } from '../../clases/pais';
import { Chofer } from '../../clases/chofer';
import { ChoferService } from '../../servicios/chofer.service';
import { TablaPaisesComponent } from "../tabla-paises/tabla-paises.component";

@Component({
  selector: 'app-alta-chofer',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterModule, RouterLinkActive, CommonModule, FormsModule, TablaPaisesComponent,ReactiveFormsModule],
  templateUrl: './alta-chofer.component.html',
  styleUrl: './alta-chofer.component.scss'
})
export class AltaChoferComponent implements OnInit {
  formGroup !: FormGroup;
  paisSeleccionado !: Pais;
  actor !: Chofer;

  constructor(private formBuilder : FormBuilder,private service : ChoferService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      'dni' : ['',[Validators.required,Validators.maxLength(8)]],
      'edad' : ['',[Validators.required,Validators.min(18),Validators.max(50)]],
      'nombre' : ['',[Validators.required]],
      'nroLicencia' : ['',[Validators.required,Validators.pattern('^[0-7]{1,7}$')]],
      'pais' : ['',Validators.required],
      'licenciaProfecional' : ['',Validators.required],
    });
  }

  altaChofer(){
    const dni = this.formGroup.controls['dni'].value;
    const edad = this.formGroup.controls['edad'].value;
    const nombre = this.formGroup.controls['nombre'].value;
    const nroLicencia = this.formGroup.controls['nroLicencia'].value;
    const licenciaProfecional = this.formGroup.controls['licenciaProfecional'].value;
    alert('chofer creado!');
    this.formGroup.reset();
    this.service.guardarChofer(dni,nombre,nroLicencia,edad,licenciaProfecional,this.paisSeleccionado);
  }

  cargarPaisSeleccionado(pais: Pais){
    this.formGroup.controls['pais'].setValue(pais.name);
    this.paisSeleccionado = pais;
  }
}
