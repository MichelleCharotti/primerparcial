import{A as t,B as C,C as k,D as g,E as v,G as i,H as N,I as p,Ja as z,M as d,O as H,P as b,Q as f,Y as s,k as m,m as w,n as F,o as R,oa as u,p as O,pa as S,r as T,u as L,v as r,w as P,x as h,y as c,z as o}from"./chunk-36OYQSM7.js";import"./chunk-UUEULNQS.js";function j(n,a){if(n&1&&(o(0,"div",2)(1,"h2"),i(2,"Pais del Producto"),t(),o(3,"p"),i(4),t(),C(5,"img",3),t()),n&2){let e=v();r(4),p("nombre: ",e.inputDetalleChofer.pais.name," "),r(),c("src",e.inputDetalleChofer.pais.flag,L)}}var x=class n{inputDetalleChofer;constructor(){}ngOnInit(){}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=m({type:n,selectors:[["app-pais-seleccionado"]],inputs:{inputDetalleChofer:"inputDetalleChofer"},standalone:!0,features:[d],decls:2,vars:1,consts:[[1,"col-md-4"],["class","h-100 p-5 bg-light border rounded-3",4,"ngIf"],[1,"h-100","p-5","bg-light","border","rounded-3"],["width","50","height","50",3,"src"]],template:function(e,l){e&1&&(o(0,"div",0),h(1,j,6,2,"div",1),t()),e&2&&(r(),c("ngIf",l.inputDetalleChofer))},dependencies:[s,f,b,u]})};function B(n,a){if(n&1){let e=k();o(0,"li",5)(1,"button",6),g("click",function(){let y=w(e).$implicit,I=v();return F(I.seleccionarChoferEvento(y))}),o(2,"div")(3,"h6",7),i(4),t()()()()}if(n&2){let e=a.$implicit;r(4),N(e.dni+" "+e.nombre)}}var D=class n{constructor(a){this.service=a;this.listaChofer=this.service.obtenerChofer()}listaChofer;eventoChoferSeleccionado=new T;ngOnInit(){}seleccionarChoferEvento(a){this.eventoChoferSeleccionado.emit(a)}static \u0275fac=function(e){return new(e||n)(P(z))};static \u0275cmp=m({type:n,selectors:[["app-tabla-chofer"]],outputs:{eventoChoferSeleccionado:"eventoChoferSeleccionado"},standalone:!0,features:[d],decls:9,vars:1,consts:[[1,"d-flex","justify-content-between","align-items-center","mb-3"],[1,"text-primary"],[1,"list-group","mb-3"],[1,"text-muted"],["class","list-group-item d-flex justify-content-between lh-condensed",4,"ngFor","ngForOf"],[1,"list-group-item","d-flex","justify-content-between","lh-condensed"],[1,"btn","btn-light",3,"click"],[1,"my-0"]],template:function(e,l){e&1&&(o(0,"h4",0)(1,"span",1),i(2,"Seleccione un chofer"),t()(),o(3,"div")(4,"ul",2)(5,"div")(6,"span",3),i(7,"Listado de choferes"),t(),h(8,B,5,1,"li",4),t()()()),e&2&&(r(8),c("ngForOf",l.listaChofer))},dependencies:[s,f,H,u,S]})};function $(n,a){if(n&1&&(o(0,"div",2)(1,"h2"),i(2,"Detalle Chofer"),t(),o(3,"p"),i(4),t(),o(5,"p"),i(6),t(),o(7,"p"),i(8),t(),o(9,"p"),i(10),t(),o(11,"p"),i(12),t()()),n&2){let e=v();r(4),p("dni: ",e.inputDetalleChofer.dni," "),r(2),p("nombre: ",e.inputDetalleChofer.nombre," "),r(2),p("edad: ",e.inputDetalleChofer.edad," "),r(2),p("nroLicencia: ",e.inputDetalleChofer.nroLicencia," "),r(2),p("licenciaProfecional: ",e.inputDetalleChofer.licenciaProfecional," ")}}var E=class n{inputDetalleChofer;constructor(){}ngOnInit(){}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=m({type:n,selectors:[["app-chofer-seleccionado"]],inputs:{inputDetalleChofer:"inputDetalleChofer"},standalone:!0,features:[d],decls:2,vars:1,consts:[[1,"col-md-4"],["class","h-100 p-5 bg-light border rounded-3",4,"ngIf"],[1,"h-100","p-5","bg-light","border","rounded-3"]],template:function(e,l){e&1&&(o(0,"div",0),h(1,$,13,5,"div",1),t()),e&2&&(r(),c("ngIf",l.inputDetalleChofer))},dependencies:[s,f,b,u,S]})};var V=class n{choferSeleccionado;constructor(){}ngOnInit(){}cargarEventoChoferSeleccionado(a){this.choferSeleccionado=a}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=m({type:n,selectors:[["app-detalle-chofer"]],standalone:!0,features:[d],decls:18,vars:2,consts:[[1,"container","py-4"],[1,"pb-3","mb-4","border-bottom"],["href","/",1,"d-flex","align-items-center","text-dark","text-decoration-none"],["xmlns","http://www.w3.org/2000/svg","width","40","height","32","viewBox","0 0 118 94","role","img",1,"me-2"],["fill-rule","evenodd","clip-rule","evenodd","d","M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z","fill","currentColor"],[1,"fs-4"],[3,"eventoChoferSeleccionado"],[1,"row","align-items-md-stretch"],[1,"col-md-6"],[3,"inputDetalleChofer"],[1,"pt-3","mt-4","text-muted","border-top"]],template:function(e,l){e&1&&(o(0,"main")(1,"div",0)(2,"header",1)(3,"a",2),R(),o(4,"svg",3)(5,"title"),i(6,"Bootstrap"),t(),C(7,"path",4),t(),O(),o(8,"span",5),i(9,"Listado chofer"),t()()(),o(10,"app-tabla-chofer",6),g("eventoChoferSeleccionado",function(I){return l.cargarEventoChoferSeleccionado(I)}),t(),o(11,"div",7)(12,"div",8),C(13,"app-chofer-seleccionado",9),t(),o(14,"div",8),C(15,"app-pais-seleccionado",9),t()(),o(16,"footer",10),i(17," \xA9 2024 "),t()()()),e&2&&(r(13),c("inputDetalleChofer",l.choferSeleccionado),r(2),c("inputDetalleChofer",l.choferSeleccionado))},dependencies:[x,s,f,u,S,D,E]})};export{V as DetalleChoferComponent};
