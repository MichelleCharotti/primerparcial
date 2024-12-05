import { Injectable } from '@angular/core';
import { Vehiculo } from '../clases/vehiculo';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  dbPath : string = "/vehiculo";
  private vehiculoColeccion !: AngularFirestoreCollection<Vehiculo>;
  vehiculos : Observable<Vehiculo[]>;
  vehiculo !: Observable<Vehiculo>;


 constructor(private angularF: AngularFirestore) { 
    this.vehiculoColeccion = this.angularF.collection<Vehiculo>(this.dbPath);
    this.vehiculos = this.vehiculoColeccion.valueChanges(this.dbPath);
  }

  guardar(vehiculo : Vehiculo){
    this.angularF.collection(this.dbPath).doc(vehiculo.id).set(vehiculo.toJson());
  }

  modificar(vehiculo : Vehiculo){
    this.angularF.collection(this.dbPath).doc(vehiculo.id.toString()).update(vehiculo.toJson());
  }
 
   borrar(vehiculo : Vehiculo){
     this.angularF.collection(this.dbPath).doc(vehiculo.id.toString()).delete();
   }

   obtenerVehiculo(){
  

    return this.vehiculoColeccion.valueChanges();

  }

  popUpMensaje(titulo : string,mensaje : string,error : boolean){
    Swal.fire(
       titulo,
       mensaje,
       error ? 'error' : 'success'
    )
  }

}
