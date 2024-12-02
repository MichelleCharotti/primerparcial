import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pais } from '../../clases/pais';
import { ApiService } from '../../servicios/api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tabla-paises',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './tabla-paises.component.html',
  styleUrl: './tabla-paises.component.scss'
})
export class TablaPaisesComponent implements OnInit{
  @Output() eventoPaisSeleccionado : EventEmitter<any> = new EventEmitter<any>();

  auxPaisesAmericano : Array<any> = [];
  auxPaisesEuropeos : Array<any> = [];
  listaPaisesAmericano : Array<any> = [];
  listaPaisesEuropeos : Array<any> = [];
  continente!:any;
  europeo:boolean = false;
  americano:boolean = false;

  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    this.apiService.getPaisesAmericano().subscribe(ref=>{
      this.listaPaisesAmericano = (JSON.parse(JSON.stringify(ref)));
    });
    this.apiService.getPaisesEuropeos().subscribe(ref=>{
      this.listaPaisesEuropeos = (JSON.parse(JSON.stringify(ref)));
    });
  }

  continenteSeleccionado(){
    if(this.continente == "Americano"){
      if(this.listaPaisesAmericano.length != 0){
        this.cargarListaPaisesAmericano();
        this.europeo = false;
        this.americano = true;
      }
      this.europeo = false;
      this.americano = true;
    }else{
      if(this.listaPaisesEuropeos.length != 0){
        this.cargarListaPaisesEuropeos();
        this.americano = false;
        this.europeo = true;
      }
      this.americano = false;
      this.europeo = true;
    }
  }

  enviarEventoPaisSeleccionado(pais : Pais){
    this.eventoPaisSeleccionado.emit(pais);
  }

  private cargarListaPaisesAmericano(){
    let aux = this.listaPaisesAmericano.filter( (pais) =>{
      return(pais.name.common === "Argentina" || pais.name.common === "Colombia" || pais.name.common === "Costa Rica" || pais.name.common === "Uruguay" ||
      pais.name.common === "Chile");
    });
    this.auxPaisesAmericano = [];
    aux.forEach(element => {
        this.auxPaisesAmericano.push(new Pais(element.name.common,element.flags.png));
    });
  }

  private cargarListaPaisesEuropeos(){
    let aux = this.listaPaisesEuropeos.filter( (pais) =>{
      return(pais.name.common === "Italy" || pais.name.common === "Poland" || pais.name.common === "France" || pais.name.common === "Germany" ||
      pais.name.common === "Spain");
    });
    this.auxPaisesEuropeos = [];
    aux.forEach(element => {
      this.auxPaisesEuropeos.push(new Pais(element.name.common,element.flags.png));
    });
  }


}
