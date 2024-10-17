import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Chofer } from '../clases/chofer';
import { Observable } from 'rxjs';
import { Pais } from '../clases/pais';

@Injectable({
  providedIn: 'root'
})
export class ChoferService {
  dbPath : string = "/chofer";
  private productoColeccion !: AngularFirestoreCollection<Chofer>;
  choferes : Observable<Chofer[]>;
  chofer !: Observable<Chofer>;

  constructor(private angularF: AngularFirestore) { 
    this.productoColeccion = this.angularF.collection<Chofer>(this.dbPath);
    this.choferes = this.productoColeccion.valueChanges(this.dbPath);
  }

  guardarChofer(dni:number,edad:number,nombre:string,nroLicencia:number,licenciaProfecional:boolean,pais : Pais){
    const id = this.angularF.createId();
    let producto = new Chofer(id,dni,edad,nombre,nroLicencia,pais,licenciaProfecional);
    this.angularF.collection(this.dbPath).doc(id).set(producto.toJson());
  }

  obtenerProductos(){
    let aux : Array<Chofer> = [];
    this.choferes.forEach(element => {
      element.forEach(res => {
              aux.push(res);
      });
    });
    return aux;
  }
}
