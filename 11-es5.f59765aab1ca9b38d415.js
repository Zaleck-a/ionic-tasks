!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{uMfO:function(n,r,a){"use strict";a.r(r),a.d(r,"Tab1PageModule",(function(){return w}));var o,i,c,l=a("TEn/"),s=a("ofXK"),u=a("3Pt+"),b=a("HGan"),f=a("tyNb"),d=a("mrSG"),p=a("fXoL"),h=a("Z16M"),g=a("VnTo"),m=[{path:"",component:(o=function(){function n(e,r,a){t(this,n),this.deseosService=e,this.router=r,this.alertCtrl=a}var r,a,o;return r=n,(a=[{key:"agregarLista",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertCtrl.create({header:"Nueva lista",inputs:[{name:"titulo",type:"text",placeholder:"Nombre de la lista"}],buttons:[{text:"Cancelar",role:"cancel",handler:function(){console.log("cancelar")}},{text:"Crear",handler:function(t){if(console.log(t),0!==t.titulo.length){var e=n.deseosService.crearLista(t.titulo);n.router.navigateByUrl("/tabs/tab1/agregar/"+e)}}}]});case 2:return e=t.sent,t.next=5,e.present();case 5:case"end":return t.stop()}}),t,this)})))}}])&&e(r.prototype,a),o&&e(r,o),n}(),o.\u0275fac=function(t){return new(t||o)(p.Hb(h.a),p.Hb(f.g),p.Hb(l.a))},o.\u0275cmp=p.Bb({type:o,selectors:[["app-tab1"]],decls:9,vars:1,consts:[[1,"ion-no-border"],["color","dark"],[3,"terminada"],["vertical","bottom","horizontal","end","slot","fixed"],["color","tertiary",3,"click"],["name","add"]],template:function(t,e){1&t&&(p.Kb(0,"ion-header",0),p.Kb(1,"ion-toolbar",1),p.Kb(2,"ion-title"),p.fc(3," Pendientes "),p.Jb(),p.Jb(),p.Jb(),p.Kb(4,"ion-content",1),p.Ib(5,"app-listas",2),p.Kb(6,"ion-fab",3),p.Kb(7,"ion-fab-button",4),p.Sb("click",(function(){return e.agregarLista()})),p.Ib(8,"ion-icon",5),p.Jb(),p.Jb(),p.Jb()),2&t&&(p.xb(5),p.Zb("terminada",!1))},directives:[l.k,l.A,l.z,l.h,g.a,l.i,l.j,l.l],styles:[""]}),o)},{path:"agregar/:listaId",loadChildren:function(){return a.e(2).then(a.bind(null,"PNSq")).then((function(t){return t.AgregarPageModule}))}}],v=((i=function e(){t(this,e)}).\u0275mod=p.Fb({type:i}),i.\u0275inj=p.Eb({factory:function(t){return new(t||i)},imports:[[f.i.forChild(m)],f.i]}),i),y=a("j1ZV"),w=((c=function e(){t(this,e)}).\u0275mod=p.Fb({type:c}),c.\u0275inj=p.Eb({factory:function(t){return new(t||c)},imports:[[l.B,s.b,u.a,b.a,v,y.a]]}),c)}}])}();