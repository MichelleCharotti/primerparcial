import{a as it,b as ut}from"./chunk-N4DDGNBN.js";import{a as mt}from"./chunk-CV2L5HDL.js";import{$ as Ze,A as p,Aa as fe,B as s,C as i,D as r,Da as Q,E as m,Ea as he,F as D,Fa as ge,G as g,Ga as at,H as V,Ha as lt,I as We,Ia as st,J as a,K as L,L as ae,M as je,N as qe,Na as ct,O as Be,Oa as be,P as v,S as ze,T as le,U as y,V as b,W as se,X as Je,Y as He,Z as Qe,_ as ce,a as Le,aa as Ke,ba as C,ca as Xe,d as Te,da as G,ea as c,f as Ue,fa as I,ga as E,h as T,ha as Ye,i as te,ia as et,j as F,ja as A,k as M,ka as tt,l as h,la as w,ma as R,na as j,o as oe,oa as q,p as ne,pa as B,q as $,qa as ot,r as O,ra as nt,s as re,sa as rt,t as W,ta as k,u as ie,ua as S,va as P,wa as me,x as J,xa as ue,y as l,ya as de,z as f,za as pe}from"./chunk-NQT3YSUQ.js";import{E as H,G as ve,H as Ge,d as De}from"./chunk-BDKUWUDW.js";var Ce=class e{constructor(o){this.http=o}git="https://api.github.com/users/michellecharotti";obtenerInfoGit(){return this.http.get(this.git)}static \u0275fac=function(n){return new(n||e)(F(se))};static \u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"})};var Se=class e{constructor(o){this.git=o}data=null;ngOnInit(){this.git.obtenerInfoGit().subscribe(o=>{this.data=JSON.parse(JSON.stringify(o))})}static \u0275fac=function(n){return new(n||e)(f(Ce))};static \u0275cmp=h({type:e,selectors:[["app-bienvenida"]],standalone:!0,features:[v],decls:17,vars:5,consts:[[1,"about-me"],[1,"doble"],["alt","",1,"img",3,"src"],[1,"col"]],template:function(n,t){n&1&&(i(0,"div",0)(1,"div",1),m(2,"img",2),i(3,"div",3),m(4,"br")(5,"br"),i(6,"h3"),a(7),r(),i(8,"h3"),a(9,"Materia: Lab 4"),r(),m(10,"br"),i(11,"p"),a(12),r(),i(13,"p"),a(14),r(),i(15,"p"),a(16),r()()()()),n&2&&(l(2),We("src",t.data.avatar_url,J),l(5),L(t.data.name),l(5),ae("Seguidores: ",t.data.followers,""),l(2),ae("Siguiendo: ",t.data.following,""),l(2),ae("Repositorios: ",t.data.public_repos,""))},dependencies:[b],styles:['@font-face{font-family:Poppins;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrJJnecmNE.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrJJfecg.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}[_nghost-%COMP%]{display:flex;justify-content:center;align-items:stretch}.about-me[_ngcontent-%COMP%]{margin-top:20px;display:flex;flex-direction:column;align-items:center;background-color:#f8f8f8;padding:20px;border-radius:5px;box-shadow:0 0 10px #0003;margin-bottom:20px}.about-me[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#38204c;font-size:36px;font-weight:700;margin-bottom:10px}.about-me[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#38204c;font-size:24px;margin-bottom:20px}.about-me[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:50vh;height:auto;margin:0 40px 20px;padding:5px;border-radius:50px;border:2px solid #ccc;width:100%;max-width:300px}.about-me[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#38204c;font-size:18px;margin-bottom:20px}.doble[_ngcontent-%COMP%]{display:flex}']})};var Z=class{name;flag;constructor(o,n){this.name=o,this.flag=n}toJson(){return{name:this.name,flag:this.flag}}};var _e=class e{constructor(o){this.http=o}getPaisesAmericano(){return this.http.get("https://restcountries.com/v3.1/region/America")}getPaisesEuropeos(){return this.http.get("https://restcountries.com/v3.1/region/europe")}static \u0275fac=function(n){return new(n||e)(F(se))};static \u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"})};function Vt(e,o){if(e&1){let n=D();i(0,"li",8)(1,"button",9),g("click",function(){let d=$(n).$implicit,u=V(2);return O(u.enviarEventoPaisSeleccionado(d))}),i(2,"div")(3,"h6",10),a(4),r(),m(5,"img",11),r()()()}if(e&2){let n=o.$implicit;l(4),L(n.name),l(),s("src",n.flag,J)}}function Nt(e,o){if(e&1&&(i(0,"div")(1,"ul",6)(2,"div"),p(3,Vt,6,2,"li",7),r()()()),e&2){let n=V();l(3),s("ngForOf",n.auxPaisesAmericano)}}function Tt(e,o){if(e&1){let n=D();i(0,"li",8)(1,"button",9),g("click",function(){let d=$(n).$implicit,u=V(2);return O(u.enviarEventoPaisSeleccionado(d))}),i(2,"div")(3,"h6",10),a(4),r(),m(5,"img",12),r()()()}if(e&2){let n=o.$implicit;l(4),L(n.name),l(),s("src",n.flag,J)}}function Gt(e,o){if(e&1&&(i(0,"div")(1,"ul",6)(2,"div"),p(3,Tt,6,2,"li",7),r()()()),e&2){let n=V();l(3),s("ngForOf",n.auxPaisesEuropeos)}}var ye=class e{constructor(o){this.apiService=o}eventoPaisSeleccionado=new W;auxPaisesAmericano=[];auxPaisesEuropeos=[];listaPaisesAmericano=[];listaPaisesEuropeos=[];continente;europeo=!1;americano=!1;ngOnInit(){this.apiService.getPaisesAmericano().subscribe(o=>{this.listaPaisesAmericano=JSON.parse(JSON.stringify(o))}),this.apiService.getPaisesEuropeos().subscribe(o=>{this.listaPaisesEuropeos=JSON.parse(JSON.stringify(o))})}continenteSeleccionado(){this.continente=="Americano"?(this.listaPaisesAmericano.length!=0&&(this.cargarListaPaisesAmericano(),this.europeo=!1,this.americano=!0),this.europeo=!1,this.americano=!0):(this.listaPaisesEuropeos.length!=0&&(this.cargarListaPaisesEuropeos(),this.americano=!1,this.europeo=!0),this.americano=!1,this.europeo=!0)}enviarEventoPaisSeleccionado(o){this.eventoPaisSeleccionado.emit(o)}cargarListaPaisesAmericano(){let o=this.listaPaisesAmericano.filter(n=>n.name.common==="Argentina"||n.name.common==="Colombia"||n.name.common==="Costa Rica"||n.name.common==="Uruguay"||n.name.common==="Chile");this.auxPaisesAmericano=[],o.forEach(n=>{this.auxPaisesAmericano.push(new Z(n.name.common,n.flags.png))})}cargarListaPaisesEuropeos(){let o=this.listaPaisesEuropeos.filter(n=>n.name.common==="Italy"||n.name.common==="Poland"||n.name.common==="France"||n.name.common==="Germany"||n.name.common==="Spain");this.auxPaisesEuropeos=[],o.forEach(n=>{this.auxPaisesEuropeos.push(new Z(n.name.common,n.flags.png))})}static \u0275fac=function(n){return new(n||e)(f(_e))};static \u0275cmp=h({type:e,selectors:[["app-tabla-paises"]],outputs:{eventoPaisSeleccionado:"eventoPaisSeleccionado"},standalone:!0,features:[v],decls:10,vars:3,consts:[[1,"d-flex","justify-content-between","align-items-center","mb-3"],[1,"color"],["name","miselect",3,"ngModelChange","change","ngModel"],["value","Americano"],["value","Europeo"],[4,"ngIf"],[1,"list-group","mb-3"],["class","d-flex justify-content-between lh-condensed",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-between","lh-condensed"],[1,"btn","btn-light",3,"click"],[1,"my-0"],["width","80","height","50","alt","",3,"src"],["width","80","height","50",3,"src"]],template:function(n,t){n&1&&(i(0,"h4",0)(1,"span",1),a(2,"Seleccione Continente"),r()(),i(3,"select",2),Be("ngModelChange",function(u){return qe(t.continente,u)||(t.continente=u),u}),g("change",function(){return t.continenteSeleccionado()}),i(4,"option",3),a(5,"Americano"),r(),i(6,"option",4),a(7,"Europeo"),r()(),p(8,Nt,4,1,"div",5)(9,Gt,4,1,"div",5)),n&2&&(l(3),je("ngModel",t.continente),l(5),s("ngIf",t.americano&&!t.europeo),l(),s("ngIf",!t.americano&&t.europeo))},dependencies:[C,b,le,y,S,q,B,j,I,et,P],styles:[".color[_ngcontent-%COMP%]{color:#38204c}"]})};var dt=De(it());function wt(e,o){e&1&&(i(0,"small",27),a(1,"El dni es requerido"),r())}function Rt(e,o){e&1&&(i(0,"small",27),a(1,"Solo numeros"),r())}function kt(e,o){e&1&&(i(0,"small",28),a(1," Debe ser 8 "),r())}function $t(e,o){e&1&&(i(0,"small",28),a(1," Debe ser min8 "),r())}function Ot(e,o){e&1&&(i(0,"small",27),a(1,"El nombre es requerido"),r())}function Dt(e,o){e&1&&(i(0,"small",27),a(1,"solo letras"),r())}function Lt(e,o){e&1&&(i(0,"small",27),a(1,"el edad es requerida"),r())}function Ut(e,o){e&1&&(i(0,"small",28),a(1," debe ser mayor a 18 "),r())}function Wt(e,o){e&1&&(i(0,"small",28),a(1," debe ser menor a 50 "),r())}function jt(e,o){e&1&&(i(0,"small",27),a(1,"El nro de Licencia es requerido"),r())}function qt(e,o){e&1&&(i(0,"small",28),a(1," debe ser minimo 7 "),r())}function Bt(e,o){e&1&&(i(0,"small",27),a(1,"Solo numeros"),r())}var Ie=class e{constructor(o,n){this.formBuilder=o;this.service=n}formGroup;paisSeleccionado;chofer;ngOnInit(){this.formGroup=this.formBuilder.group({nombre:["",[c.required,c.pattern(/^[A-Za-z\s\xF1\xD1]+$/)]],dni:["",[c.required,,c.minLength(8),c.maxLength(8),c.pattern(/^([0-9])*$/)]],edad:["",[c.required,c.min(18),c.max(50)]],nroLicencia:["",[c.required,c.minLength(7),c.maxLength(20),c.pattern(/^([0-9])*$/)]],licenciaProfesional:[!1],pais:["",c.required]})}altaChofer(){let o=this.formGroup.controls.nombre.value,n=this.formGroup.controls.dni.value,t=this.formGroup.controls.edad.value,d=this.formGroup.controls.nroLicencia.value,u=this.formGroup.controls.licenciaProfesional.value;this.popUpMensaje("success","Chofer creado!!!",!1),this.formGroup.reset(),this.service.guardarChofer(o,n,t,d,u,this.paisSeleccionado)}cargarPaisSeleccionado(o){this.formGroup.controls.pais.setValue(o.name),this.paisSeleccionado=o}popUpMensaje(o,n,t){dt.default.fire(o,n,t?"error":"success")}static \u0275fac=function(n){return new(n||e)(f(k),f(mt))};static \u0275cmp=h({type:e,selectors:[["app-alta-chofer"]],standalone:!0,features:[v],decls:49,vars:14,consts:[[1,"container"],[1,"py-3","text-center","border-bottom"],[1,"py-3"],[1,"row"],[1,"col-md-4","order-md-2","mb-4"],[3,"eventoPaisSeleccionado"],[1,"col-md-8","order-md-1"],[1,"needs-validation",3,"ngSubmit","formGroup"],[1,"col-md-6","mb-3"],["for","dni"],["type","text","id","dni","formControlName","dni","maxLength","8","minLenght","8",1,"form-control"],["class","invalid text-danger warningForm",4,"ngIf"],["class","text-danger warningForm",4,"ngIf"],["for","firstName"],["type","text","id","firstName","formControlName","nombre",1,"form-control"],[1,"mb-3"],["for","edad"],["type","number","id","edad","formControlName","edad","min","18","max","50",1,"form-control"],["for","nroLicencia"],["type","text","id","nroLicencia","formControlName","nroLicencia","minlength","7",1,"form-control"],[1,"form-check","mt-3"],["type","checkbox","id","licenciaProfesional","formControlName","licenciaProfesional",1,"form-check-input"],["for","licenciaProfesional",1,"form-check-label"],["for","country"],["type","text","readonly","","id","address2","formControlName","pais",1,"form-control"],[1,"mb-4"],["type","submit",1,"btn","btn-primary","login-button",3,"disabled"],[1,"invalid","text-danger","warningForm"],[1,"text-danger","warningForm"]],template:function(n,t){n&1&&(i(0,"div",0)(1,"div",1)(2,"h2",2),a(3,"Alta Producto"),r()(),i(4,"div",3)(5,"div",4)(6,"app-tabla-paises",5),g("eventoPaisSeleccionado",function(u){return t.cargarPaisSeleccionado(u)}),r()(),i(7,"div",6)(8,"form",7),g("ngSubmit",function(){return t.altaChofer()}),i(9,"div",3)(10,"div",8)(11,"label",9),a(12,"dni"),r(),m(13,"input",10),p(14,wt,2,0,"small",11)(15,Rt,2,0,"small",11)(16,kt,2,0,"small",12)(17,$t,2,0,"small",12),r(),i(18,"div",8)(19,"label",13),a(20,"nombre"),r(),m(21,"input",14),p(22,Ot,2,0,"small",11)(23,Dt,2,0,"small",11),r()(),i(24,"div",15)(25,"label",16),a(26,"edad"),r(),m(27,"input",17),p(28,Lt,2,0,"small",11)(29,Ut,2,0,"small",12)(30,Wt,2,0,"small",12),r(),i(31,"div",15)(32,"label",18),a(33,"nroLicencia"),r(),m(34,"input",19),p(35,jt,2,0,"small",11)(36,qt,2,0,"small",12)(37,Bt,2,0,"small",11),r(),i(38,"div",20),m(39,"input",21),i(40,"label",22),a(41," Tiene Licencia Profesional?"),r()(),i(42,"div",15)(43,"label",23),a(44,"Pais"),r(),m(45,"input",24),r(),m(46,"hr",25),i(47,"button",26),a(48,"Crear Chofer"),r()()()()()),n&2&&(l(8),s("formGroup",t.formGroup),l(6),s("ngIf",(t.formGroup.controls.dni.errors==null?null:t.formGroup.controls.dni.errors.required)&&t.formGroup.controls.dni.touched),l(),s("ngIf",t.formGroup.controls.dni.errors==null?null:t.formGroup.controls.dni.errors.pattern),l(),s("ngIf",t.formGroup.controls.dni.errors==null?null:t.formGroup.controls.dni.errors.maxLength),l(),s("ngIf",t.formGroup.controls.dni.errors==null?null:t.formGroup.controls.dni.errors.minLenght),l(5),s("ngIf",(t.formGroup.controls.nombre.errors==null?null:t.formGroup.controls.nombre.errors.required)&&t.formGroup.controls.nombre.touched),l(),s("ngIf",t.formGroup.controls.nombre.errors==null?null:t.formGroup.controls.nombre.errors.pattern),l(5),s("ngIf",(t.formGroup.controls.edad.errors==null?null:t.formGroup.controls.edad.errors.required)&&t.formGroup.controls.edad.touched),l(),s("ngIf",t.formGroup.controls.edad.errors==null?null:t.formGroup.controls.edad.errors.min),l(),s("ngIf",t.formGroup.controls.edad.errors==null?null:t.formGroup.controls.edad.errors.max),l(5),s("ngIf",(t.formGroup.controls.nroLicencia.errors==null?null:t.formGroup.controls.nroLicencia.errors.required)&&t.formGroup.controls.nroLicencia.touched),l(),s("ngIf",t.formGroup.controls.nroLicencia.errors==null?null:t.formGroup.controls.nroLicencia.errors.minlength),l(),s("ngIf",t.formGroup.controls.nroLicencia.errors==null?null:t.formGroup.controls.nroLicencia.errors.pattern),l(10),s("disabled",t.formGroup.invalid))},dependencies:[C,b,y,S,A,G,tt,Xe,I,E,rt,nt,ot,ye,P,w,R],styles:["button[_ngcontent-%COMP%]{width:212px;margin:2px 25px;padding:10px;border:none;border-radius:5px;font-size:1rem;font-weight:700;cursor:pointer}.login-button[_ngcontent-%COMP%]{background-color:#7c7698;color:#fff}.login-button[_ngcontent-%COMP%]:hover, .register-button[_ngcontent-%COMP%]:hover{background-color:#b2acbd}.login-button[_ngcontent-%COMP%]:disabled{background-color:#7c7698;cursor:default}"]})};function ht(e){return new Le(function(o){var n=ve(e,o.next.bind(o),o.error.bind(o),o.complete.bind(o));return{unsubscribe:n}})}var gt="auth",U=class{constructor(o){return o}},Y=class{constructor(){return de(gt)}};var we=new te("angularfire2.auth-instances");function jo(e,o){let n=ue(gt,e,o);return n&&new U(n)}function qo(e){return(o,n)=>{let t=o.runOutsideAngular(()=>e(n));return new U(t)}}var Bo={provide:Y,deps:[[new M,we]]},zo={provide:U,useFactory:jo,deps:[[new M,we],he]};function vt(e,...o){return H("angularfire",me.full,"auth"),oe([zo,Bo,{provide:we,useFactory:qo(e),multi:!0,deps:[ie,re,fe,ge,[new M,pe],...o]}])}var bt=Q(ht,!0);var Ct=Q(Ge,!0);var Qo=Te(e=>!!e),Re=(()=>{class e{router;auth;constructor(n,t){this.router=n,this.auth=t}canActivate=(n,t)=>{let d=n.data.authGuardPipe||(()=>Qo);return bt(this.auth).pipe(Ue(1),d(n,t),Te(u=>typeof u=="boolean"?u:Array.isArray(u)?this.router.createUrlTree(u):this.router.parseUrl(u)))};static \u0275fac=function(t){return new(t||e)(F(ce),F(U))};static \u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"any"})}return e})();var z=class{id;nombre;tipo;cantRueda;capacidad;constructor(o,n,t,d,u){this.id=o,this.nombre=n,this.tipo=t,this.cantRueda=d,this.capacidad=u}toJson(){return{id:this.id,nombre:this.nombre,tipo:this.tipo,cantRueda:this.cantRueda,capacidad:this.capacidad}}};var St=De(it());var x=class e{constructor(o){this.angularF=o;this.vehiculoColeccion=this.angularF.collection(this.dbPath),this.vehiculos=this.vehiculoColeccion.valueChanges(this.dbPath)}dbPath="/vehiculo";vehiculoColeccion;vehiculos;vehiculo;guardar(o){this.angularF.collection(this.dbPath).doc(o.id).set(o.toJson())}modificar(o){this.angularF.collection(this.dbPath).doc(o.id.toString()).update(o.toJson())}borrar(o){this.angularF.collection(this.dbPath).doc(o.id.toString()).delete()}obtenerVehiculo(){return this.vehiculoColeccion.valueChanges()}popUpMensaje(o,n,t){St.default.fire(o,n,t?"error":"success")}static \u0275fac=function(n){return new(n||e)(F(be))};static \u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"})};function Ko(e,o){e&1&&(i(0,"small",20),a(1,"El nombre es requerido"),r())}function Xo(e,o){e&1&&(i(0,"small",20),a(1,"solo letras"),r())}function Yo(e,o){e&1&&(i(0,"small",20),a(1,"Debe seleccionar una opcion."),r())}function en(e,o){e&1&&(i(0,"small",20),a(1,"La cantidad de rueda es requerido"),r())}function tn(e,o){e&1&&(i(0,"small",21),a(1," Debe ser max 6 "),r())}function on(e,o){e&1&&(i(0,"small",21),a(1,"Solo numeros"),r())}function nn(e,o){e&1&&(i(0,"small",20),a(1,"La capacidad es requerido"),r())}function rn(e,o){e&1&&(i(0,"small",21),a(1," Debe ser mayor a 2 "),r())}function an(e,o){e&1&&(i(0,"small",21),a(1," Debe ser menor a 100 "),r())}function ln(e,o){e&1&&(i(0,"small",21),a(1," Solo numeros"),r())}var Ae=class e{constructor(o,n,t){this.formBuilder=o;this.service=n;this.angularF=t}eventoVehiculoSeleccionado=new W;formGroup;vehiculo;ngOnInit(){this.formGroup=this.formBuilder.group({nombre:["",[c.required,c.pattern(/^[A-Za-z\s\xF1\xD1]+$/)]],tipo:["",[c.required]],cantRueda:["",[c.required,c.max(6),c.pattern(/^([0-9])*$/)]],capacidad:["",[c.required,c.min(2),c.max(100),c.pattern(/^([0-9])*$/)]]})}alta(){let o=this.formGroup.controls.nombre.value,n=this.formGroup.controls.tipo.value,t=this.formGroup.controls.cantRueda.value,d=this.formGroup.controls.capacidad.value;this.service.popUpMensaje("success","Vehiculo creado!!!",!1),this.formGroup.reset();let u=this.angularF.createId();this.eventoVehiculoSeleccionado.emit(this.vehiculo);let Pt=new z(u,o,n,t,d);this.service.guardar(Pt)}static \u0275fac=function(n){return new(n||e)(f(k),f(x),f(be))};static \u0275cmp=h({type:e,selectors:[["app-alta-vehiculo"]],outputs:{eventoVehiculoSeleccionado:"eventoVehiculoSeleccionado"},standalone:!0,features:[v],decls:41,vars:12,consts:[[1,"card","mb-4","rounded-3","shadow-sm"],[1,"card-header","py-3"],[1,"my-0","fw-normal"],[1,"card-body"],[1,"needs-validation",3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-14","mb-3"],["for","firstName"],["type","text","id","firstName","formControlName","nombre",1,"form-control"],["class","invalid text-danger warningForm",4,"ngIf"],[1,"mb-3","col-md-14"],["for","formFile",1,"form-label"],["aria-label","Default select example","formControlName","tipo",1,"form-select"],["value","terrestre"],["value","aereo"],["value","maritimo"],["type","text","id","firstName","formControlName","cantRueda","max","6",1,"form-control"],["class","text-danger warningForm",4,"ngIf"],["type","text","id","firstName","formControlName","capacidad","min","2","max","100",1,"form-control"],["type","submit",1,"btn","btn-lg","btn-block","login-button",3,"disabled"],[1,"invalid","text-danger","warningForm"],[1,"text-danger","warningForm"]],template:function(n,t){n&1&&(i(0,"div",0)(1,"div",1)(2,"h4",2),a(3,"Alta"),r()(),i(4,"div",3)(5,"form",4),g("ngSubmit",function(){return t.alta()}),i(6,"div",5)(7,"div",6)(8,"label",7),a(9,"Nombre"),r(),m(10,"input",8),p(11,Ko,2,0,"small",9)(12,Xo,2,0,"small",9),r(),i(13,"div",10)(14,"label",11),a(15,"tipo"),r(),i(16,"select",12)(17,"option",13),a(18,"Terrestre"),r(),i(19,"option",14),a(20,"Aereo"),r(),i(21,"option",15),a(22,"Maritimo"),r()(),p(23,Yo,2,0,"small",9),r()(),i(24,"div",6)(25,"label",7),a(26,"Cantidad de Ruedas"),r(),m(27,"input",16),p(28,en,2,0,"small",9)(29,tn,2,0,"small",17)(30,on,2,0,"small",17),r(),i(31,"div",6)(32,"label",7),a(33,"Capacidad"),r(),m(34,"input",18),p(35,nn,2,0,"small",9)(36,rn,2,0,"small",17)(37,an,2,0,"small",17)(38,ln,2,0,"small",17),r(),i(39,"button",19),a(40,"Crear"),r()()()()),n&2&&(l(5),s("formGroup",t.formGroup),l(6),s("ngIf",(t.formGroup.controls.nombre.errors==null?null:t.formGroup.controls.nombre.errors.required)&&t.formGroup.controls.nombre.touched),l(),s("ngIf",t.formGroup.controls.nombre.errors==null?null:t.formGroup.controls.nombre.errors.pattern),l(11),s("ngIf",(t.formGroup.controls.tipo.errors==null?null:t.formGroup.controls.tipo.errors.required)&&t.formGroup.controls.tipo.touched),l(5),s("ngIf",(t.formGroup.controls.cantRueda.errors==null?null:t.formGroup.controls.cantRueda.errors.required)&&t.formGroup.controls.cantRueda.touched),l(),s("ngIf",t.formGroup.controls.cantRueda.errors==null?null:t.formGroup.controls.cantRueda.errors.max),l(),s("ngIf",t.formGroup.controls.cantRueda.errors==null?null:t.formGroup.controls.cantRueda.errors.pattern),l(5),s("ngIf",(t.formGroup.controls.capacidad.errors==null?null:t.formGroup.controls.capacidad.errors.required)&&t.formGroup.controls.capacidad.touched),l(),s("ngIf",t.formGroup.controls.capacidad.errors==null?null:t.formGroup.controls.capacidad.errors.min),l(),s("ngIf",t.formGroup.controls.capacidad.errors==null?null:t.formGroup.controls.capacidad.errors.max),l(),s("ngIf",t.formGroup.controls.capacidad.errors==null?null:t.formGroup.controls.capacidad.errors.pattern),l(),s("disabled",t.formGroup.invalid))},dependencies:[C,b,y,S,A,q,B,G,j,I,E,P,w,R],styles:[".login-button[_ngcontent-%COMP%]{background-color:#7c7698;color:#fff}.login-button[_ngcontent-%COMP%]:hover, .register-button[_ngcontent-%COMP%]:hover{background-color:#b2acbd}.login-button[_ngcontent-%COMP%]:disabled{background-color:#7c7698;cursor:default}"]})};function sn(e,o){e&1&&(i(0,"small",18),a(1,"Debe seleccionar una opcion."),r())}function cn(e,o){e&1&&(i(0,"small",18),a(1,"La cantidad de ruedas es requerido"),r())}function mn(e,o){e&1&&(i(0,"small",19),a(1," Debe ser max 6 "),r())}function un(e,o){e&1&&(i(0,"small",18),a(1,"Solo numeros"),r())}function dn(e,o){e&1&&(i(0,"small",18),a(1,"La capacidad es requerido"),r())}function pn(e,o){e&1&&(i(0,"small",19),a(1," debe ser mayor a 2 "),r())}function fn(e,o){e&1&&(i(0,"small",19),a(1," debe ser menor a 100 "),r())}function hn(e,o){e&1&&(i(0,"small",18),a(1,"Solo numeros"),r())}var Pe=class e{constructor(o,n){this.formBuilder=o;this.service=n}formGroup;inputVehiculoSeleccionado;ngOnInit(){this.formGroup=this.formBuilder.group({nombre:[""],tipo:["",[c.required]],cantRueda:["",[c.required,c.max(6),c.pattern(/^([0-9])*$/)]],capacidad:["",[c.required,c.min(2),c.max(100),c.pattern(/^([0-9])*$/)]]})}ngOnChanges(){this.formGroup.controls.nombre.setValue(this.inputVehiculoSeleccionado.nombre),this.formGroup.controls.tipo.setValue(this.inputVehiculoSeleccionado.tipo),this.formGroup.controls.cantRueda.setValue(this.inputVehiculoSeleccionado.cantRueda),this.formGroup.controls.capacidad.setValue(this.inputVehiculoSeleccionado.capacidad)}modificar(){let o=this.formGroup.controls.tipo.value,n=this.formGroup.controls.cantRueda.value,t=this.formGroup.controls.capacidad.value,d=new z(this.inputVehiculoSeleccionado.id,this.inputVehiculoSeleccionado.nombre,o,n,t);this.service.popUpMensaje("success","Vehiculo modificado!!!",!1),this.service.modificar(d),this.formGroup.reset()}static \u0275fac=function(n){return new(n||e)(f(k),f(x))};static \u0275cmp=h({type:e,selectors:[["app-modificacion-vehiculo"]],inputs:{inputVehiculoSeleccionado:"inputVehiculoSeleccionado"},standalone:!0,features:[ne,v],decls:38,vars:10,consts:[[1,"card","mb-4","rounded-3","shadow-sm"],[1,"card-header","py-3"],[1,"my-0","fw-normal"],[1,"card-body"],[1,"needs-validation",3,"ngSubmit","formGroup"],[1,"col-md-14","mb-3"],["for","firstName"],["type","text","id","firstName","formControlName","nombre","readonly","",1,"form-control"],["for","firstName",1,"form-label"],["aria-label","Default select example","id","firstName","formControlName","tipo",1,"form-select"],["value","terrestre"],["value","aereo"],["value","maritimo"],["class","invalid text-danger warningForm",4,"ngIf"],["type","text","id","firstName","formControlName","cantRueda","max","6",1,"form-control"],["class","text-danger warningForm",4,"ngIf"],["type","text","id","firstName","formControlName","capacidad","min","2","max","100",1,"form-control"],["type","submit",1,"btn","btn-lg","btn-block","login-button",3,"disabled"],[1,"invalid","text-danger","warningForm"],[1,"text-danger","warningForm"]],template:function(n,t){n&1&&(i(0,"div",0)(1,"div",1)(2,"h4",2),a(3,"Modificacion"),r()(),i(4,"div",3)(5,"form",4),g("ngSubmit",function(){return t.modificar()}),i(6,"div",5)(7,"label",6),a(8,"Nombre"),r(),m(9,"input",7),r(),i(10,"div",5)(11,"label",8),a(12,"tipo"),r(),i(13,"select",9)(14,"option",10),a(15,"Terrestre"),r(),i(16,"option",11),a(17,"Aereo"),r(),i(18,"option",12),a(19,"Maritimo"),r()(),p(20,sn,2,0,"small",13),r(),i(21,"div",5)(22,"label",6),a(23,"Cantidad de Ruedas"),r(),m(24,"input",14),p(25,cn,2,0,"small",13)(26,mn,2,0,"small",15)(27,un,2,0,"small",13),r(),i(28,"div",5)(29,"label",6),a(30,"Capacidad"),r(),m(31,"input",16),p(32,dn,2,0,"small",13)(33,pn,2,0,"small",15)(34,fn,2,0,"small",15)(35,hn,2,0,"small",13),r(),i(36,"button",17),a(37,"Modificar"),r()()()()),n&2&&(l(5),s("formGroup",t.formGroup),l(15),s("ngIf",(t.formGroup.controls.tipo.errors==null?null:t.formGroup.controls.tipo.errors.required)&&t.formGroup.controls.tipo.touched),l(5),s("ngIf",(t.formGroup.controls.cantRueda.errors==null?null:t.formGroup.controls.cantRueda.errors.required)&&t.formGroup.controls.cantRueda.touched),l(),s("ngIf",t.formGroup.controls.cantRueda.errors==null?null:t.formGroup.controls.cantRueda.errors.max),l(),s("ngIf",t.formGroup.controls.cantRueda.errors==null?null:t.formGroup.controls.cantRueda.errors.pattern),l(5),s("ngIf",(t.formGroup.controls.capacidad.errors==null?null:t.formGroup.controls.capacidad.errors.required)&&t.formGroup.controls.capacidad.touched),l(),s("ngIf",t.formGroup.controls.capacidad.errors==null?null:t.formGroup.controls.capacidad.errors.min),l(),s("ngIf",t.formGroup.controls.capacidad.errors==null?null:t.formGroup.controls.capacidad.errors.max),l(),s("ngIf",t.formGroup.controls.capacidad.errors==null?null:t.formGroup.controls.capacidad.errors.pattern),l(),s("disabled",t.formGroup.invalid))},dependencies:[C,b,y,S,A,q,B,G,j,I,E,P,w,R],styles:[".login-button[_ngcontent-%COMP%]{background-color:#7c7698;color:#fff}.login-button[_ngcontent-%COMP%]:hover, .register-button[_ngcontent-%COMP%]:hover{background-color:#b2acbd}.login-button[_ngcontent-%COMP%]:disabled{background-color:#7c7698;cursor:default}"]})};var xe=class e{constructor(o,n){this.formBuilder=o;this.service=n}formGroup;inputVehiculoSeleccionado;ngOnInit(){this.formGroup=this.formBuilder.group({nombre:["",[c.required]],tipo:["",[c.required]],cantRueda:["",[c.required]],capacidad:["",c.required]})}ngOnChanges(){this.formGroup.controls.nombre.setValue(this.inputVehiculoSeleccionado.nombre),this.formGroup.controls.tipo.setValue(this.inputVehiculoSeleccionado.tipo),this.formGroup.controls.cantRueda.setValue(this.inputVehiculoSeleccionado.cantRueda),this.formGroup.controls.capacidad.setValue(this.inputVehiculoSeleccionado.capacidad)}borrar(){this.service.popUpMensaje("success","Vehiculo Borrado!!!",!1),this.service.borrar(this.inputVehiculoSeleccionado),this.formGroup.reset()}static \u0275fac=function(n){return new(n||e)(f(k),f(x))};static \u0275cmp=h({type:e,selectors:[["app-baja-vehiculo"]],inputs:{inputVehiculoSeleccionado:"inputVehiculoSeleccionado"},standalone:!0,features:[ne,v],decls:24,vars:2,consts:[[1,"card","mb-4","rounded-3","shadow-sm"],[1,"card-header","py-3"],[1,"my-0","fw-normal"],[1,"card-body"],[1,"needs-validation",3,"ngSubmit","formGroup"],[1,"col-md-14","mb-3"],["for","firstName"],["type","text","id","firstName","formControlName","nombre","readonly","",1,"form-control"],["for","firstName",1,"form-label"],["type","text","id","firstName","formControlName","tipo","readonly","",1,"form-control"],["type","text","id","firstName","formControlName","cantRueda","readonly","",1,"form-control"],["type","text","id","firstName","formControlName","capacidad","readonly","",1,"form-control"],["type","submit",1,"btn","btn-lg","btn-block","login-button",3,"disabled"]],template:function(n,t){n&1&&(i(0,"div",0)(1,"div",1)(2,"h4",2),a(3,"Baja"),r()(),i(4,"div",3)(5,"form",4),g("ngSubmit",function(){return t.borrar()}),i(6,"div",5)(7,"label",6),a(8,"Nombre"),r(),m(9,"input",7),r(),i(10,"div",5)(11,"label",8),a(12,"tipo"),r(),m(13,"input",9),r(),i(14,"div",5)(15,"label",6),a(16,"Cantidad de Ruedas"),r(),m(17,"input",10),r(),i(18,"div",5)(19,"label",6),a(20,"Capacidad"),r(),m(21,"input",11),r(),i(22,"button",12),a(23,"Borrar"),r()()()()),n&2&&(l(5),s("formGroup",t.formGroup),l(17),s("disabled",t.formGroup.invalid))},dependencies:[C,b,S,A,G,I,E,P,w,R],styles:[".login-button[_ngcontent-%COMP%]{background-color:#7c7698;color:#fff}.login-button[_ngcontent-%COMP%]:hover, .register-button[_ngcontent-%COMP%]:hover{background-color:#b2acbd}.login-button[_ngcontent-%COMP%]:disabled{background-color:#7c7698;cursor:default}"]})};function gn(e,o){if(e&1){let n=D();i(0,"li",1)(1,"button",3),g("click",function(){let d=$(n).$implicit,u=V();return O(u.seleccionarVehiculoEvento(d))}),i(2,"h6",4),a(3),r()()()}if(e&2){let n=o.$implicit;l(3),L(n.nombre+" "+n.tipo)}}var Fe=class e{constructor(o){this.service=o;this.service.obtenerVehiculo().subscribe(n=>{n!=null&&(this.vehiculos=n)})}eventoVehiculoSeleccionado=new W;vehiculos;ngOnInit(){}seleccionarVehiculoEvento(o){this.eventoVehiculoSeleccionado.emit(o)}static \u0275fac=function(n){return new(n||e)(f(x))};static \u0275cmp=h({type:e,selectors:[["app-tabla-vehiculo"]],outputs:{eventoVehiculoSeleccionado:"eventoVehiculoSeleccionado"},standalone:!0,features:[v],decls:5,vars:1,consts:[[1,"list-group","mb-3"],[1,"list-group-item","d-flex","justify-content-between","lh-condensed"],["class","list-group-item d-flex justify-content-between lh-condensed",4,"ngFor","ngForOf"],[1,"btn","btn-light",3,"click"],[1,"my-0"]],template:function(n,t){n&1&&(i(0,"div")(1,"ul",0)(2,"li",1),a(3,"Nombre \xA0\xA0\xA0\xA0\xA0\xA0\xA0Tipo"),r(),p(4,gn,4,1,"li",2),r()()),n&2&&(l(4),s("ngForOf",t.vehiculos))},dependencies:[C,b,le,S]})};var Me=class e{vehiculoSeleccionado;constructor(){}ngOnInit(){}cargarVehiculo(o){this.vehiculoSeleccionado=o}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=h({type:e,selectors:[["app-vehiculo"]],standalone:!0,features:[v],decls:14,vars:2,consts:[[1,"container","py-3"],[1,"align-items-center","pb-3","mb-4","border-bottom"],[1,"py-3","text-center"],[3,"eventoVehiculoSeleccionado"],[1,"row","row-cols-1","row-cols-md-3","mb-3","text-center"],[1,"col"],[3,"inputVehiculoSeleccionado"]],template:function(n,t){n&1&&(i(0,"div",0)(1,"header")(2,"div",1)(3,"h2",2),a(4,"Lista de Vehiculos"),r()(),i(5,"app-tabla-vehiculo",3),g("eventoVehiculoSeleccionado",function(u){return t.cargarVehiculo(u)}),r()(),i(6,"main")(7,"div",4)(8,"div",5)(9,"app-alta-vehiculo",3),g("eventoVehiculoSeleccionado",function(u){return t.cargarVehiculo(u)}),r()(),i(10,"div",5),m(11,"app-modificacion-vehiculo",6),r(),i(12,"div",5),m(13,"app-baja-vehiculo",6),r()()()()),n&2&&(l(11),s("inputVehiculoSeleccionado",t.vehiculoSeleccionado),l(2),s("inputVehiculoSeleccionado",t.vehiculoSeleccionado))},dependencies:[C,b,S,Fe,Ae,Pe,xe],styles:["body[_ngcontent-%COMP%]{background-image:linear-gradient(180deg,#eee,#fff 100px,#fff)}.container[_ngcontent-%COMP%]{max-width:960px}.pricing-header[_ngcontent-%COMP%]{max-width:700px}"]})};var _t=[{path:"bienvenida",component:Se},{path:"",redirectTo:"/bienvenida",pathMatch:"full"},{path:"login",loadComponent:()=>import("./chunk-XXH6BQJV.js").then(e=>e.LoginComponent)},{path:"registro",loadComponent:()=>import("./chunk-DXEHQV2S.js").then(e=>e.RegistroComponent)},{path:"altaChofer",component:Ie},{path:"detalleChofer",loadComponent:()=>import("./chunk-4DXDXHRW.js").then(e=>e.DetalleChoferComponent),canActivate:[Re]},{path:"vehiculo",component:Me,canActivate:[Re]}];var ee=class{constructor(o){return o}},yt="firestore",ke=class{constructor(){return de(yt)}};var $e=new te("angularfire2.firestore-instances");function vn(e,o){let n=ue(yt,e,o);return n&&new ee(n)}function bn(e){return(o,n)=>{let t=o.runOutsideAngular(()=>e(n));return new ee(t)}}var Cn={provide:ke,deps:[[new M,$e]]},Sn={provide:ee,useFactory:vn,deps:[[new M,$e],he]};function It(e,...o){return H("angularfire",me.full,"fst"),oe([Sn,Cn,{provide:$e,useFactory:bn(e),multi:!0,deps:[ie,re,fe,ge,[new M,Y],[new M,pe],...o]}])}var Et=Q(ct,!0);var Oe={projectId:"primerparcial-7c3b1",appId:"1:648226539185:web:181ad543068d6cf30d8490",storageBucket:"primerparcial-7c3b1.appspot.com",apiKey:"AIzaSyAweIu_LqGtFMxw1s_WyF2ufnT2efCo20o",authDomain:"primerparcial-7c3b1.firebaseapp.com",messagingSenderId:"648226539185"};var At={providers:[ze({eventCoalescing:!0}),Ke(_t),at(()=>lt(Oe)),vt(()=>Ct()),It(()=>Et()),Je(),{provide:st,useValue:Oe}]};function _n(e,o){e&1&&(i(0,"a",17),a(1,"ListadoChofer"),r())}function yn(e,o){e&1&&(i(0,"a",18),a(1,"Vehiculos"),r())}function In(e,o){e&1&&(i(0,"a",19),a(1,"Login"),r())}function En(e,o){if(e&1){let n=D();i(0,"button",20),g("click",function(){$(n);let d=V();return O(d.cerrarSesion())}),a(1,"CerrarSesion"),r()}}var Ve=class e{constructor(o,n){this.usuarioService=o;this.router=n}ngOnInit(){}cerrarSesion(){this.usuarioService.cerrarSesion(),this.router.navigate(["/"])}static \u0275fac=function(n){return new(n||e)(f(ut),f(ce))};static \u0275cmp=h({type:e,selectors:[["app-navbar"]],standalone:!0,features:[v],decls:24,vars:4,consts:[[1,"navbar","navbar-expand-md","navbar-dark"],[1,"container-fluid"],[1,"left","mb-2"],["src","../../../assets/icono.png","alt",""],["routerLink","/",1,"navbar-brand","left"],["type","button","data-bs-toggle","collapse","data-bs-target","/navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","right"],[1,"navbar-nav","me-auto","mb-2","mb-md-0"],[1,"nav-item"],["aria-current","page","routerLink","/bienvenida",1,"nav-link","active"],["aria-current","page","routerLink","/altaChofer",1,"nav-link","active"],["class","nav-link active","aria-current","page","routerLink","/detalleChofer",4,"ngIf"],["class","nav-link active","aria-current","page","routerLink","/vehiculo",4,"ngIf"],["class","nav-link","routerLink","/login",4,"ngIf"],[1,"d-flex"],["class","btn btn-outline-success","type","submit",3,"click",4,"ngIf"],["aria-current","page","routerLink","/detalleChofer",1,"nav-link","active"],["aria-current","page","routerLink","/vehiculo",1,"nav-link","active"],["routerLink","/login",1,"nav-link"],["type","submit",1,"btn","btn-outline-success",3,"click"]],template:function(n,t){n&1&&(i(0,"nav",0)(1,"div",1)(2,"div",2),m(3,"img",3),i(4,"a",4),a(5,"Laboratorio 4"),r()(),i(6,"button",5),m(7,"span",6),r(),i(8,"div",7)(9,"ul",8)(10,"li",9)(11,"a",10),a(12,"Home"),r()(),i(13,"li",9)(14,"a",11),a(15,"AltaChofer"),r()(),i(16,"li",9),p(17,_n,2,0,"a",12),r(),i(18,"li",9),p(19,yn,2,0,"a",13),r(),i(20,"li",9),p(21,In,2,0,"a",14),r()(),i(22,"form",15),p(23,En,2,0,"button",16),r()()()()),n&2&&(l(17),s("ngIf",t.usuarioService.estaLogueado()),l(2),s("ngIf",t.usuarioService.estaLogueado()&&t.usuarioService.isAdmin()),l(2),s("ngIf",!t.usuarioService.estaLogueado()),l(2),s("ngIf",t.usuarioService.estaLogueado()))},dependencies:[Ze,C,b,y,S,A,E,Ye],styles:["nav[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;background-color:#7c7698;padding:10px;height:80px}.left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;color:#fff;font-size:30px}.left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:50px}.right[_ngcontent-%COMP%]{display:flex;gap:10px;font-size:25px}.right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#fff;border:none;color:#7c7698;padding:10px 20px;font-size:18px;border-radius:5px;min-width:125px;cursor:pointer}.right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#d3d3d3}.right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#b2acbd}strong[_ngcontent-%COMP%]{text-justify:auto;text-align:center;background-color:transparent;text-decoration:underline;color:#fff;margin-right:10px;padding:10px 20px;font-size:25px}@media (max-width: 1400px){strong[_ngcontent-%COMP%]{display:none}}"]})};var Ne=class e{title="primerparcial";static \u0275fac=function(n){return new(n||e)};static \u0275cmp=h({type:e,selectors:[["app-root"]],standalone:!0,features:[v],decls:3,vars:0,consts:[["outlet","outlet"]],template:function(n,t){n&1&&m(0,"app-navbar")(1,"router-outlet",null,0)},dependencies:[Qe,C,b,Ve]})};He(Ne,At).catch(e=>console.error(e));