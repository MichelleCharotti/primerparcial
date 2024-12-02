export class Vehiculo {
    id !: string;
    nombre !: string;
    tipo !: string;
    cantRueda !: number;
    capacidad !: number;

    constructor(id:string,nombre:string,tipo:string,cantRueda:number,capacidad:number){
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.cantRueda= cantRueda;
        this.capacidad = capacidad;
    }

    toJson() : any{
        const json ={
            id : this.id,
            nombre : this.nombre,
            tipo : this.tipo,
            cantRueda: this.cantRueda,
            capacidad : this.capacidad,
        };
        return json;
    }
}
