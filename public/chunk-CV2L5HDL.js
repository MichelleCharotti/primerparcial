import{Oa as f,h,j as l}from"./chunk-NQT3YSUQ.js";var n=class{id;nombre;dni;edad;nroLicencia;licenciaProfesional;pais;constructor(r,e,i,s,a,c,t){this.id=r,this.nombre=e,this.dni=i,this.edad=s,this.nroLicencia=a,this.licenciaProfesional=c,this.pais=t}toJson(){return{id:this.id,nombre:this.nombre,dni:this.dni,edad:this.edad,nroLicencia:this.nroLicencia,licenciaProfesional:this.licenciaProfesional,pais:this.pais.toJson()}}};var b=class o{constructor(r){this.angularF=r;this.choferColeccion=this.angularF.collection(this.dbPath),this.choferes=this.choferColeccion.valueChanges(this.dbPath)}dbPath="/chofer";choferColeccion;choferes;chofer;guardarChofer(r,e,i,s,a,c){let t=this.angularF.createId(),m=new n(t,r,e,i,s,a,c);this.angularF.collection(this.dbPath).doc(t).set(m.toJson())}obtenerChofer(){let r=[];return this.choferes.forEach(e=>{e.forEach(i=>{r.push(i)})}),r}static \u0275fac=function(e){return new(e||o)(l(f))};static \u0275prov=h({token:o,factory:o.\u0275fac,providedIn:"root"})};export{b as a};
