"use strict";(self.webpackChunkinicioAngular=self.webpackChunkinicioAngular||[]).push([[768],{6768:(re,C,s)=>{s.r(C),s.d(C,{PaisesModule:()=>ie});var c=s(6814),h=s(601),e=s(4946),v=s(6306),b=s(2096),A=s(7398),l=s(9397),S=s(9862);let g=(()=>{class n{constructor(t){this.http=t,this.apiUrl="https://restcountries.com/v3.1",this.cacheStore={byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegion:{region:"",countries:[]}},this.loadFromLocalStorage()}saveToLocalStorage(){localStorage.setItem("cacheStore",JSON.stringify(this.cacheStore))}loadFromLocalStorage(){localStorage.getItem("cacheStore")&&(this.cacheStore=JSON.parse(localStorage.getItem("cacheStore")))}getCountriesRequest(t){return this.http.get(t).pipe((0,v.K)(o=>(0,b.of)([])))}searchCountryByAlphaCode(t){return this.http.get(`${this.apiUrl}/alpha/${t}`).pipe((0,A.U)(r=>r.length>0?r[0]:null),(0,v.K)(r=>(0,b.of)(null)))}searchCapital(t){return this.getCountriesRequest(`${this.apiUrl}/capital/${t}`).pipe((0,l.b)(r=>this.cacheStore.byCapital={term:t,countries:r}),(0,l.b)(()=>this.saveToLocalStorage()))}searchCountry(t){return this.getCountriesRequest(`${this.apiUrl}/name/${t}`).pipe((0,l.b)(r=>this.cacheStore.byCountries={term:t,countries:r}),(0,l.b)(()=>this.saveToLocalStorage()))}searchRegion(t){return this.getCountriesRequest(`${this.apiUrl}/region/${t}`).pipe((0,l.b)(r=>this.cacheStore.byRegion={region:t,countries:r}),(0,l.b)(()=>this.saveToLocalStorage()))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(S.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),f=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["shared-loading-spinner"]],decls:15,vars:0,consts:[[1,"spinner-container"],["width","45","height","45","viewBox","0 0 45 45","xmlns","http://www.w3.org/2000/svg","stroke","#fff"],["fill","none","fill-rule","evenodd","transform","translate(1 1)","stroke-width","2"],["cx","22","cy","22","r","6","stroke-opacity","0"],["attributeName","r","begin","1.5s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","1.5s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","1.5s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["attributeName","r","begin","3s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","3s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","3s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["cx","22","cy","22","r","8"],["attributeName","r","begin","0s","dur","1.5s","values","6;1;2;3;4;5;6","calcMode","linear","repeatCount","indefinite"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"span"),e._uU(2,"Buscando"),e.qZA(),e.O4$(),e.TgZ(3,"svg",1)(4,"g",2)(5,"circle",3),e._UZ(6,"animate",4)(7,"animate",5)(8,"animate",6),e.qZA(),e.TgZ(9,"circle",3),e._UZ(10,"animate",7)(11,"animate",8)(12,"animate",9),e.qZA(),e.TgZ(13,"circle",10),e._UZ(14,"animate",11),e.qZA()()()())},styles:[".spinner-container[_ngcontent-%COMP%]{align-items:center;background:#000;border-radius:20px;bottom:15px;color:#fff;display:flex;padding:1px 10px;position:fixed;right:15px;box-shadow:0 3px 5px #0003}span[_ngcontent-%COMP%]{margin-left:5px}"]}),n})();var U=s(8645),w=s(7394);class P extends w.w0{constructor(i,t){super()}schedule(i,t=0){return this}}const m={setInterval(n,i,...t){const{delegate:o}=m;return o?.setInterval?o.setInterval(n,i,...t):setInterval(n,i,...t)},clearInterval(n){const{delegate:i}=m;return(i?.clearInterval||clearInterval)(n)},delegate:void 0};var I=s(9039);const Z={now:()=>(Z.delegate||Date).now(),delegate:void 0};class d{constructor(i,t=d.now){this.schedulerActionCtor=i,this.now=t}schedule(i,t=0,o){return new this.schedulerActionCtor(this,i).schedule(o,t)}}d.now=Z.now;const L=new class B extends d{constructor(i,t=d.now){super(i,t),this.actions=[],this._active=!1}flush(i){const{actions:t}=this;if(this._active)return void t.push(i);let o;this._active=!0;do{if(o=i.execute(i.state,i.delay))break}while(i=t.shift());if(this._active=!1,o){for(;i=t.shift();)i.unsubscribe();throw o}}}(class q extends P{constructor(i,t){super(i,t),this.scheduler=i,this.work=t,this.pending=!1}schedule(i,t=0){var o;if(this.closed)return this;this.state=i;const r=this.id,a=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(a,r,t)),this.pending=!0,this.delay=t,this.id=null!==(o=this.id)&&void 0!==o?o:this.requestAsyncId(a,this.id,t),this}requestAsyncId(i,t,o=0){return m.setInterval(i.flush.bind(i,this),o)}recycleAsyncId(i,t,o=0){if(null!=o&&this.delay===o&&!1===this.pending)return t;null!=t&&m.clearInterval(t)}execute(i,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const o=this._execute(i,t);if(o)return o;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(i,t){let r,o=!1;try{this.work(i)}catch(a){o=!0,r=a||new Error("Scheduled action threw falsy error")}if(o)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){const{id:i,scheduler:t}=this,{actions:o}=t;this.work=this.state=this.scheduler=null,this.pending=!1,(0,I.P)(o,this),null!=i&&(this.id=this.recycleAsyncId(t,i,null)),this.delay=null,super.unsubscribe()}}});var J=s(9360),R=s(8251);let _=(()=>{class n{constructor(){this.debouncer=new U.x,this.placeholder="",this.initialValue="",this.onValue=new e.vpe,this.onDebounce=new e.vpe}ngOnInit(){this.debouncerSuscription=this.debouncer.pipe(function F(n,i=L){return(0,J.e)((t,o)=>{let r=null,a=null,u=null;const x=()=>{if(r){r.unsubscribe(),r=null;const p=a;a=null,o.next(p)}};function oe(){const p=u+n,T=i.now();if(T<p)return r=this.schedule(void 0,p-T),void o.add(r);x()}t.subscribe((0,R.x)(o,p=>{a=p,u=i.now(),r||(r=i.schedule(oe,n),o.add(r))},()=>{x(),o.complete()},void 0,()=>{a=r=null}))})}(500)).subscribe(t=>{this.onDebounce.emit(t)})}ngOnDestroy(){this.debouncerSuscription?.unsubscribe()}emitValue(t){this.onValue.emit(t)}onKeyPres(t){this.debouncer.next(t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["shared-search-box"]],inputs:{placeholder:"placeholder",initialValue:"initialValue"},outputs:{onValue:"onValue",onDebounce:"onDebounce"},decls:2,vars:2,consts:[["type","text",1,"form-control",3,"placeholder","value","keyup"],["txtInput",""]],template:function(t,o){if(1&t){const r=e.EpF();e.TgZ(0,"input",0,1),e.NdJ("keyup",function(){e.CHM(r);const u=e.MAs(1);return e.KtG(o.onKeyPres(u.value))}),e.qZA()}2&t&&e.Q6J("placeholder",o.placeholder)("value",o.initialValue)},encapsulation:2}),n})();function N(n,i){1&n&&(e.TgZ(0,"div",2),e._uU(1," No hay paises que mostrar\n"),e.qZA())}const O=function(n){return["/countries/by",n]};function V(n,i){if(1&n&&(e.TgZ(0,"tr")(1,"th",6),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._UZ(6,"img",7),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.ALo(13,"number"),e.qZA(),e.TgZ(14,"td")(15,"a",8),e._uU(16,"Info"),e.qZA()()()),2&n){const t=i.$implicit,o=i.index;e.xp6(2),e.hij(" ",o+1," "),e.xp6(2),e.hij(" ",t.flag," "),e.xp6(2),e.Q6J("src",t.flags.svg,e.LSH)("alt",t.name.common),e.xp6(2),e.hij(" ",t.name.common,""),e.xp6(2),e.hij(" ",t.capital,""),e.xp6(2),e.hij(" ",e.lcZ(13,8,t.population)," "),e.xp6(3),e.Q6J("routerLink",e.VKq(10,O,t.cca3))}}function M(n,i){if(1&n&&(e.TgZ(0,"table",3)(1,"thead")(2,"tr")(3,"th",4),e._uU(4,"#"),e.qZA(),e.TgZ(5,"th",4),e._uU(6,"\xcdcono"),e.qZA(),e.TgZ(7,"th",4),e._uU(8,"Bandera"),e.qZA(),e.TgZ(9,"th",4),e._uU(10,"Nombre"),e.qZA(),e.TgZ(11,"th",4),e._uU(12,"Capital"),e.qZA(),e.TgZ(13,"th",4),e._uU(14,"Poblaci\xf3n"),e.qZA(),e._UZ(15,"th",4),e.qZA()(),e.TgZ(16,"tbody"),e.YNc(17,V,17,12,"tr",5),e.qZA()()),2&n){const t=e.oxw();e.xp6(17),e.Q6J("ngForOf",t.countries)}}let y=(()=>{class n{constructor(){this.countries=[]}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["countries-country-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning","text-center"],[1,"table"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],[3,"src","alt"],[1,"link-primary","link-offset-2","link-underline-opacity-25","link-underline-opacity-100-hover",3,"routerLink"]],template:function(t,o){if(1&t&&(e.YNc(0,N,2,0,"div",0),e.YNc(1,M,18,1,"ng-template",null,1,e.W1O)),2&t){const r=e.MAs(2);e.Q6J("ngIf",0===o.countries.length)("ngIfElse",r)}},dependencies:[c.sg,c.O5,h.rH,c.JJ],styles:["img[_ngcontent-%COMP%]{width:25px}"]}),n})();function j(n,i){1&n&&e._UZ(0,"shared-loading-spinner")}let Q=(()=>{class n{constructor(t){this.countriesService=t,this.countries=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCapital.countries,this.initialValue=this.countriesService.cacheStore.byCapital.term}searchByCapital(t){this.isLoading=!0,this.countriesService.searchCapital(t).subscribe(o=>{this.countries=o,this.isLoading=!1})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-by-capital-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por capital",3,"initialValue","onDebounce"],[4,"ngIf"],[3,"countries"]],template:function(t,o){1&t&&(e.TgZ(0,"h2"),e._uU(1,"Por Capital:"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),e.NdJ("onDebounce",function(a){return o.searchByCapital(a)}),e.qZA()()(),e.TgZ(6,"div",0)(7,"div",1),e._UZ(8,"hr"),e.YNc(9,j,1,0,"shared-loading-spinner",3),e._UZ(10,"countries-country-table",4),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("initialValue",o.initialValue),e.xp6(4),e.Q6J("ngIf",o.isLoading),e.xp6(1),e.Q6J("countries",o.countries))},dependencies:[c.O5,f,_,y],encapsulation:2}),n})();function k(n,i){1&n&&e._UZ(0,"shared-loading-spinner")}let Y=(()=>{class n{constructor(t){this.countriesService=t,this.countries=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCountries.countries,this.initialValue=this.countriesService.cacheStore.byCountries.term}searchByCountry(t){this.isLoading=!0,this.countriesService.searchCountry(t).subscribe(o=>{this.countries=o,this.isLoading=!1})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-by-country-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por pa\xeds",3,"initialValue","onDebounce"],[4,"ngIf"],[3,"countries"]],template:function(t,o){1&t&&(e.TgZ(0,"h2"),e._uU(1,"Por Pa\xeds:"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),e.NdJ("onDebounce",function(a){return o.searchByCountry(a)}),e.qZA()()(),e.TgZ(6,"div",0)(7,"div",1),e._UZ(8,"hr"),e.YNc(9,k,1,0,"shared-loading-spinner",3),e._UZ(10,"countries-country-table",4),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("initialValue",o.initialValue),e.xp6(4),e.Q6J("ngIf",o.isLoading),e.xp6(1),e.Q6J("countries",o.countries))},dependencies:[c.O5,f,_,y],encapsulation:2}),n})();const D=function(n){return{"btn-outline-primary":n}};function E(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){const a=e.CHM(t).$implicit,u=e.oxw();return e.KtG(u.searchByRegion(a))}),e._uU(1),e.qZA()}if(2&n){const t=i.$implicit,o=e.oxw();e.Q6J("ngClass",e.VKq(2,D,o.selectedRegion===t)),e.xp6(1),e.hij(" ",t," ")}}function $(n,i){1&n&&e._UZ(0,"shared-loading-spinner")}let K=(()=>{class n{constructor(t){this.countriesService=t,this.countries=[],this.regions=["Africa","America","Europe","Asia","Oceania"],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byRegion.countries,this.selectedRegion=this.countriesService.cacheStore.byRegion.region}searchByRegion(t){this.isLoading=!0,this.selectedRegion=t,this.countriesService.searchRegion(t).subscribe(o=>{this.countries=o,this.isLoading=!1})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-by-region-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col","text-center"],["class","btn mx-2",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[4,"ngIf"],[3,"countries"],[1,"btn","mx-2",3,"ngClass","click"]],template:function(t,o){1&t&&(e.TgZ(0,"h2"),e._uU(1,"Por Regi\xf3n:"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1),e.YNc(5,E,2,4,"button",2),e.qZA()(),e.TgZ(6,"div",0)(7,"div",3),e._UZ(8,"hr"),e.YNc(9,$,1,0,"shared-loading-spinner",4),e._UZ(10,"countries-country-table",5),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("ngForOf",o.regions),e.xp6(4),e.Q6J("ngIf",o.isLoading),e.xp6(1),e.Q6J("countries",o.countries))},dependencies:[c.mk,c.sg,c.O5,f,y],encapsulation:2}),n})();var X=s(4664);function H(n,i){1&n&&(e.TgZ(0,"div",2),e._uU(1," Espere por favor "),e.qZA())}function z(n,i){1&n&&e._UZ(0,"img",20)}const G=function(n){return{display:n}};function W(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),e._uU(4,"Pa\xeds: "),e.TgZ(5,"strong"),e._uU(6),e.qZA()()()(),e.TgZ(7,"div",3)(8,"div",5)(9,"img",6),e.NdJ("load",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.onLoad())}),e.qZA(),e.YNc(10,z,1,0,"img",7),e.qZA(),e.TgZ(11,"div",8)(12,"h3"),e._uU(13,"Informaci\xf3n:"),e.qZA(),e.TgZ(14,"ul",9)(15,"li",10)(16,"strong"),e._uU(17,"Poblaci\xf3n:"),e.qZA(),e._uU(18),e.ALo(19,"number"),e.qZA(),e.TgZ(20,"li",10)(21,"strong"),e._uU(22,"C\xf3digo:"),e.qZA(),e._uU(23),e.qZA()()()(),e.TgZ(24,"div",11)(25,"div",8),e._UZ(26,"hr"),e.TgZ(27,"h3"),e._uU(28,"Traducciones:"),e.qZA(),e.TgZ(29,"div",12)(30,"span",13),e._uU(31),e.qZA(),e.TgZ(32,"span",14),e._uU(33),e.qZA(),e.TgZ(34,"span",15),e._uU(35),e.qZA(),e.TgZ(36,"span",16),e._uU(37),e.qZA(),e.TgZ(38,"span",17),e._uU(39),e.qZA(),e.TgZ(40,"span",18),e._uU(41),e.qZA(),e.TgZ(42,"span",19),e._uU(43),e.qZA(),e.TgZ(44,"span",13),e._uU(45),e.qZA()()()()()}if(2&n){const t=e.oxw();e.xp6(6),e.hij(" ",t.country.name.common," "),e.xp6(3),e.Q6J("src",t.country.flags.svg,e.LSH)("alt",t.country.name.common)("ngStyle",e.VKq(17,G,t.hasLoaded?"":"none")),e.xp6(1),e.Q6J("ngIf",!t.hasLoaded),e.xp6(8),e.hij(" ",e.lcZ(19,15,t.country.population)," "),e.xp6(5),e.hij(" ",t.country.cca3," "),e.xp6(8),e.hij(" ",t.country.translations.ara.common," "),e.xp6(2),e.hij(" ",t.country.translations.spa.common," "),e.xp6(2),e.hij(" ",t.country.translations.ces.common," "),e.xp6(2),e.hij(" ",t.country.translations.cym.common," "),e.xp6(2),e.hij(" ",t.country.translations.deu.common," "),e.xp6(2),e.hij(" ",t.country.translations.est.common," "),e.xp6(2),e.hij(" ",t.country.translations.fin.common," "),e.xp6(2),e.hij(" ",t.country.translations.fra.common," ")}}const ee=[{path:"by-capital",component:Q},{path:"by-country",component:Y},{path:"by-region",component:K},{path:"by/:id",component:(()=>{class n{constructor(t,o,r){this.activatedRoute=t,this.router=o,this.countriesService=r,this.hasLoaded=!1}ngOnInit(){this.activatedRoute.params.pipe((0,X.w)(({id:t})=>this.countriesService.searchCountryByAlphaCode(t))).subscribe(t=>t?this.country=t:this.router.navigateByUrl(""))}onLoad(){this.hasLoaded=!0}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h.gz),e.Y36(h.F0),e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4","d-flex","justify-content-center"],[1,"img-thumbnail",3,"src","alt","ngStyle","load"],["src","assets/loader.svg","height","35","width","35","class","mt-5",4,"ngIf"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","mx-1","mb-2"],[1,"badge","bg-secondary","mx-1","mb-2"],[1,"badge","bg-success","mx-1","mb-2"],[1,"badge","bg-danger","mx-1","mb-2"],[1,"badge","bg-info","mx-1","mb-2"],[1,"badge","bg-dark","mx-1","mb-2"],[1,"badge","bg-warning","mx-1","mb-2"],["src","assets/loader.svg","height","35","width","35",1,"mt-5"]],template:function(t,o){if(1&t&&(e.YNc(0,H,2,0,"ng-template",null,0,e.W1O),e.YNc(2,W,46,19,"div",1)),2&t){const r=e.MAs(1);e.xp6(2),e.Q6J("ngIf",o.country)("ngIfElse",r)}},dependencies:[c.O5,c.PC,c.JJ],encapsulation:2}),n})()},{path:"**",redirectTo:"by-capital"}];let te=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[h.Bz.forChild(ee)]}),n})();var ne=s(6208);let ie=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,te,ne.m,h.Bz]}),n})()}}]);