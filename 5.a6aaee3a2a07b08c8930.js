(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{IjoJ:function(n,t,c){"use strict";c.r(t),c.d(t,"GenresFilmsModule",function(){return M});var e=c("ofXK"),i=c("tyNb"),o=c("fXoL"),r=c("eV5+"),b=c("bTqV"),a=c("STbY"),s=c("Wp6s");function l(n,t){1&n&&(o.Ob(0,"h1"),o.lc(1,"\u0424\u0438\u043b\u044c\u043c\u043e\u0432 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"),o.Nb())}function m(n,t){if(1&n&&(o.Ob(0,"mat-card-title"),o.lc(1),o.Nb()),2&n){const n=o.Xb().$implicit;o.zb(1),o.mc(n.nameRu)}}function u(n,t){if(1&n&&(o.Ob(0,"mat-card-title"),o.lc(1),o.Nb()),2&n){const n=o.Xb().$implicit;o.zb(1),o.mc(n.nameEn)}}function f(n,t){if(1&n&&(o.Ob(0,"p"),o.lc(1),o.Nb()),2&n){const n=o.Xb().$implicit;o.zb(1),o.nc(" \u0420\u0435\u0439\u0442\u0438\u043d\u0433: ",n.rating," ")}}function p(n,t){1&n&&(o.Ob(0,"p"),o.lc(1," \u0420\u0435\u0439\u0442\u0438\u043d\u0433: ... "),o.Nb())}function g(n,t){if(1&n&&(o.Ob(0,"mat-card"),o.Ob(1,"mat-card-header"),o.kc(2,m,2,1,"mat-card-title",5),o.kc(3,u,2,1,"mat-card-title",5),o.Nb(),o.Kb(4,"img",7),o.Ob(5,"mat-card-content"),o.kc(6,f,2,1,"p",5),o.kc(7,p,2,0,"p",5),o.Ob(8,"p"),o.lc(9),o.Nb(),o.Nb(),o.Ob(10,"mat-card-actions"),o.Ob(11,"button",8),o.lc(12,"ABOUT"),o.Nb(),o.Nb(),o.Nb()),2&n){const n=t.$implicit;o.zb(2),o.ac("ngIf",n.nameRu),o.zb(1),o.ac("ngIf",!n.nameRu),o.zb(1),o.bc("src",n.posterUrl,o.fc),o.zb(2),o.ac("ngIf",n.rating),o.zb(1),o.ac("ngIf",!n.rating),o.zb(2),o.nc(" \u0413\u043e\u0434: ",n.year," ")}}const O=[{path:"",component:(()=>{class n{constructor(n){this.movieService=n,this.page=1,this.response={films:[],pagesCount:0},this.films=[]}ngOnInit(){}searchMovies(n){this.movieService.searchMoviesByGenre(n,this.page).subscribe(n=>{this.response=n,this.films=this.response.films})}}return n.\u0275fac=function(t){return new(t||n)(o.Jb(r.a))},n.\u0275cmp=o.Db({type:n,selectors:[["app-genres-films"]],decls:27,vars:3,consts:[[1,"search-block"],["mat-button","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"content"],[4,"ngIf"],[4,"ngFor","ngForOf"],["mat-card-image","","alt","Poster",3,"src"],["mat-button",""]],template:function(n,t){if(1&n&&(o.Ob(0,"main"),o.Ob(1,"div",0),o.Ob(2,"h1"),o.lc(3,"Search movies by genres"),o.Nb(),o.Ob(4,"button",1),o.lc(5,"Genres"),o.Nb(),o.Ob(6,"mat-menu",null,2),o.Ob(8,"button",3),o.Vb("click",function(){return t.searchMovies(3)}),o.lc(9,"Action"),o.Nb(),o.Ob(10,"button",3),o.Vb("click",function(){return t.searchMovies(14)}),o.lc(11,"Cartoon"),o.Nb(),o.Ob(12,"button",3),o.Vb("click",function(){return t.searchMovies(10)}),o.lc(13,"Adventure"),o.Nb(),o.Ob(14,"button",3),o.Vb("click",function(){return t.searchMovies(1)}),o.lc(15,"Horror"),o.Nb(),o.Ob(16,"button",3),o.Vb("click",function(){return t.searchMovies(17)}),o.lc(17,"Detective"),o.Nb(),o.Ob(18,"button",3),o.Vb("click",function(){return t.searchMovies(12)}),o.lc(19,"Documentary"),o.Nb(),o.Ob(20,"button",3),o.Vb("click",function(){return t.searchMovies(6)}),o.lc(21,"Comedy"),o.Nb(),o.Ob(22,"button",3),o.Vb("click",function(){return t.searchMovies(5)}),o.lc(23,"Fantasy"),o.Nb(),o.Nb(),o.Nb(),o.Ob(24,"div",4),o.kc(25,l,2,0,"h1",5),o.kc(26,g,13,6,"mat-card",6),o.Nb(),o.Nb()),2&n){const n=o.dc(7);o.zb(4),o.ac("matMenuTriggerFor",n),o.zb(21),o.ac("ngIf",0===t.films.length&&t.response.keyword),o.zb(1),o.ac("ngForOf",t.films)}},directives:[b.a,a.d,a.a,a.b,e.j,e.i,s.a,s.d,s.e,s.c,s.b,s.g],styles:["main[_ngcontent-%COMP%]{align-items:center}main[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .search-block[_ngcontent-%COMP%]{display:flex;flex-direction:column}main[_ngcontent-%COMP%]   .search-block[_ngcontent-%COMP%]{margin-top:20px}.content[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .search-block[_ngcontent-%COMP%]{justify-content:space-between}.content[_ngcontent-%COMP%]{margin:40px;display:flex;flex-wrap:wrap}.mat-card[_ngcontent-%COMP%]{width:300px;height:550px;margin-bottom:20px}.mat-card-image[_ngcontent-%COMP%]{height:350px;object-fit:cover}"]}),n})()}];let h=(()=>{class n{}return n.\u0275mod=o.Hb({type:n}),n.\u0275inj=o.Gb({factory:function(t){return new(t||n)},imports:[[i.b.forChild(O)],i.b]}),n})();var d=c("7of8");let M=(()=>{class n{}return n.\u0275mod=o.Hb({type:n}),n.\u0275inj=o.Gb({factory:function(t){return new(t||n)},imports:[[e.b,h,d.a]]}),n})()}}]);