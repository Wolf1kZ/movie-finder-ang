(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{chAe:function(e,t,i){"use strict";i.r(t),i.d(t,"AboutFilmModule",function(){return W});var n=i("ofXK"),a=i("tyNb"),s=i("fXoL"),r=i("eV5+"),o=i("bTqV"),c=i("XNiG"),l=i("2Vo4"),h=i("LRne"),d=i("HDdC"),p=i("DH7j"),b=i("n6bG"),g=i("lJxs");function u(e,t,i){return i?u(e,t).pipe(Object(g.a)(e=>Object(p.a)(e)?i(...e):i(e))):new d.a(i=>{const n=(...e)=>i.next(1===e.length?e[0]:e);let a;try{a=e(n)}catch(s){return void i.error(s)}if(Object(b.a)(t))return()=>t(n,a)})}var y=i("itXk"),_=i("mCNh"),m=i("VRyK"),v=i("IzEk"),f=i("JX91"),O=i("vkgz"),P=i("1G5W"),w=i("oB13"),C=i("eIep"),S=i("5+tZ"),x=i("l7GE"),j=i("ZUHj");function k(...e){return t=>{let i;return"function"==typeof e[e.length-1]&&(i=e.pop()),t.lift(new M(e,i))}}class M{constructor(e,t){this.observables=e,this.project=t}call(e,t){return t.subscribe(new I(e,this.observables,this.project))}}class I extends x.a{constructor(e,t,i){super(e),this.observables=t,this.project=i,this.toRespond=[];const n=t.length;this.values=new Array(n);for(let a=0;a<n;a++)this.toRespond.push(a);for(let a=0;a<n;a++){let e=t[a];this.add(Object(j.a)(this,e,void 0,a))}}notifyNext(e,t,i){this.values[i]=t;const n=this.toRespond;if(n.length>0){const e=n.indexOf(i);-1!==e&&n.splice(e,1)}}notifyComplete(){}_next(e){if(0===this.toRespond.length){const t=[e,...this.values];this.project?this._tryProject(t):this.destination.next(t)}}_tryProject(e){let t;try{t=this.project.apply(this,e)}catch(i){return void this.destination.error(i)}this.destination.next(t)}}var V=i("Kqap"),N=i("/uUt"),R=i("Cfvw"),z=i("7o/Q");class L{constructor(e){this.predicate=e}call(e,t){return t.subscribe(new A(e,this.predicate))}}class A extends z.a{constructor(e,t){super(e),this.predicate=t,this.skipping=!0,this.index=0}_next(e){const t=this.destination;this.skipping&&this.tryCallPredicate(e),this.skipping||t.next(e)}tryCallPredicate(e){try{const t=this.predicate(e,this.index++);this.skipping=Boolean(t)}catch(t){this.destination.error(t)}}}var E=i("pLZG");const Q=["youtubeContainer"];let T=(()=>{class e{constructor(e,t){this._ngZone=e,this._youtubeContainer=new c.a,this._destroyed=new c.a,this._playerChanges=new l.a(void 0),this._videoId=new l.a(void 0),this._height=new l.a(390),this._width=new l.a(640),this._startSeconds=new l.a(void 0),this._endSeconds=new l.a(void 0),this._suggestedQuality=new l.a(void 0),this._playerVars=new l.a(void 0),this.ready=this._getLazyEmitter("onReady"),this.stateChange=this._getLazyEmitter("onStateChange"),this.error=this._getLazyEmitter("onError"),this.apiChange=this._getLazyEmitter("onApiChange"),this.playbackQualityChange=this._getLazyEmitter("onPlaybackQualityChange"),this.playbackRateChange=this._getLazyEmitter("onPlaybackRateChange"),this._isBrowser=Object(n.p)(t)}get videoId(){return this._videoId.value}set videoId(e){this._videoId.next(e)}get height(){return this._height.value}set height(e){this._height.next(e||390)}get width(){return this._width.value}set width(e){this._width.next(e||640)}set startSeconds(e){this._startSeconds.next(e)}set endSeconds(e){this._endSeconds.next(e)}set suggestedQuality(e){this._suggestedQuality.next(e)}get playerVars(){return this._playerVars.value}set playerVars(e){this._playerVars.next(e)}ngOnInit(){if(!this._isBrowser)return;let e=Object(h.a)(!0);if(!window.YT||!window.YT.Player){const t=new c.a;this._existingApiReadyCallback=window.onYouTubeIframeAPIReady,window.onYouTubeIframeAPIReady=()=>{this._existingApiReadyCallback&&this._existingApiReadyCallback(),this._ngZone.run(()=>t.next(!0))},e=t.pipe(Object(v.a)(1),Object(f.a)(!1))}const t=function(e,t,i,n,a,s,r){const o=Object(y.b)([t,s]).pipe(k(Object(y.b)([n,a])),Object(g.a)(([e,t])=>{const[i,n]=e,[a,s]=t;return i?{videoId:i,playerVars:n,width:a,height:s}:void 0}));return Object(y.b)([e,o,Object(h.a)(r)]).pipe((c=i,Object(_.a)(function(...e){let t=null;return"function"==typeof e[e.length-1]&&(t=e.pop()),1===e.length&&Object(p.a)(e[0])&&(e=e[0].slice()),i=>i.lift.call(Object(R.a)([i,...e]),new y.a(t))}(c),(l=([e,t])=>!t,e=>e.lift(new L(l))),Object(g.a)(([e])=>e))),Object(V.a)(B,void 0),Object(N.a)());var c,l}(this._youtubeContainer,this._videoId,e,this._width,this._height,this._playerVars,this._ngZone).pipe(Object(O.a)(e=>{this._playerChanges.next(e)}),(i=e=>{D(e)||e.destroy()},Object(S.a)(e=>e?D(e)?Object(h.a)(e):new d.a(t=>{let n=!1,a=!1;const s=e=>{a=!0,n||(e.target.removeEventListener("onReady",s),t.next(e.target))};return e.addEventListener("onReady",s),()=>{n=!0,a||i(e)}}).pipe(Object(v.a)(1),Object(f.a)(void 0)):Object(h.a)(void 0))),Object(P.a)(this._destroyed),Object(w.a)(new c.a));var i;t.subscribe(e=>{this._player=e,e&&this._pendingPlayerState&&this._initializePlayer(e,this._pendingPlayerState),this._pendingPlayerState=void 0}),function(e,t,i){Object(y.b)([e,t,i]).subscribe(([e,t,i])=>e&&e.setSize(t,i))}(t,this._width,this._height),function(e,t){Object(y.b)([e,t]).subscribe(([e,t])=>e&&t&&e.setPlaybackQuality(t))}(t,this._suggestedQuality),function(e,t,i,n,a,s){const r=Object(y.b)([i,n]).pipe(Object(g.a)(([e,t])=>({startSeconds:e,endSeconds:t}))),o=r.pipe(H(e,e=>!!e&&!function(e){const t=e.getPlayerState();return-1!==t&&5!==t}(e))),c=t.pipe(H(e,(e,t)=>!!e&&e.videoId!==t)),l=e.pipe(H(Object(y.b)([t,r]),([e,t],i)=>!(!i||e==i.videoId&&!t.startSeconds&&!t.endSeconds)));Object(m.a)(l,c,o).pipe(k(Object(y.b)([e,t,r,a])),Object(g.a)(([e,t])=>t),Object(P.a)(s)).subscribe(([e,t,i,n])=>{t&&e&&(e.videoId=t,e.cueVideoById(Object.assign({videoId:t,suggestedQuality:n},i)))})}(t,this._videoId,this._startSeconds,this._endSeconds,this._suggestedQuality,this._destroyed),t.connect()}createEventsBoundInZone(){return{}}ngAfterViewInit(){this._youtubeContainer.next(this.youtubeContainer.nativeElement)}ngOnDestroy(){this._player&&(this._player.destroy(),window.onYouTubeIframeAPIReady=this._existingApiReadyCallback),this._playerChanges.complete(),this._videoId.complete(),this._height.complete(),this._width.complete(),this._startSeconds.complete(),this._endSeconds.complete(),this._suggestedQuality.complete(),this._youtubeContainer.complete(),this._playerVars.complete(),this._destroyed.next(),this._destroyed.complete()}playVideo(){this._player?this._player.playVideo():this._getPendingState().playbackState=1}pauseVideo(){this._player?this._player.pauseVideo():this._getPendingState().playbackState=2}stopVideo(){this._player?this._player.stopVideo():this._getPendingState().playbackState=5}seekTo(e,t){this._player?this._player.seekTo(e,t):this._getPendingState().seek={seconds:e,allowSeekAhead:t}}mute(){this._player?this._player.mute():this._getPendingState().muted=!0}unMute(){this._player?this._player.unMute():this._getPendingState().muted=!1}isMuted(){return this._player?this._player.isMuted():!!this._pendingPlayerState&&!!this._pendingPlayerState.muted}setVolume(e){this._player?this._player.setVolume(e):this._getPendingState().volume=e}getVolume(){return this._player?this._player.getVolume():this._pendingPlayerState&&null!=this._pendingPlayerState.volume?this._pendingPlayerState.volume:0}setPlaybackRate(e){if(this._player)return this._player.setPlaybackRate(e);this._getPendingState().playbackRate=e}getPlaybackRate(){return this._player?this._player.getPlaybackRate():this._pendingPlayerState&&null!=this._pendingPlayerState.playbackRate?this._pendingPlayerState.playbackRate:0}getAvailablePlaybackRates(){return this._player?this._player.getAvailablePlaybackRates():[]}getVideoLoadedFraction(){return this._player?this._player.getVideoLoadedFraction():0}getPlayerState(){if(this._isBrowser&&window.YT)return this._player?this._player.getPlayerState():this._pendingPlayerState&&null!=this._pendingPlayerState.playbackState?this._pendingPlayerState.playbackState:-1}getCurrentTime(){return this._player?this._player.getCurrentTime():this._pendingPlayerState&&this._pendingPlayerState.seek?this._pendingPlayerState.seek.seconds:0}getPlaybackQuality(){return this._player?this._player.getPlaybackQuality():"default"}getAvailableQualityLevels(){return this._player?this._player.getAvailableQualityLevels():[]}getDuration(){return this._player?this._player.getDuration():0}getVideoUrl(){return this._player?this._player.getVideoUrl():""}getVideoEmbedCode(){return this._player?this._player.getVideoEmbedCode():""}_getPendingState(){return this._pendingPlayerState||(this._pendingPlayerState={}),this._pendingPlayerState}_initializePlayer(e,t){const{playbackState:i,playbackRate:n,volume:a,muted:s,seek:r}=t;switch(i){case 1:e.playVideo();break;case 2:e.pauseVideo();break;case 5:e.stopVideo()}null!=n&&e.setPlaybackRate(n),null!=a&&e.setVolume(a),null!=s&&(s?e.mute():e.unMute()),null!=r&&e.seekTo(r.seconds,r.allowSeekAhead)}_getLazyEmitter(e){return this._playerChanges.pipe(Object(C.a)(t=>t?u(i=>{t.addEventListener(e,i)},i=>{try{t.removeEventListener&&t.removeEventListener(e,i)}catch(n){}}):Object(h.a)()),e=>new d.a(t=>e.subscribe({next:e=>this._ngZone.run(()=>t.next(e)),error:e=>t.error(e),complete:()=>t.complete()})),Object(P.a)(this._destroyed))}}return e.\u0275fac=function(t){return new(t||e)(s.Jb(s.z),s.Jb(s.B))},e.\u0275cmp=s.Db({type:e,selectors:[["youtube-player"]],viewQuery:function(e,t){if(1&e&&s.pc(Q,!0),2&e){let e;s.cc(e=s.Wb())&&(t.youtubeContainer=e.first)}},inputs:{videoId:"videoId",height:"height",width:"width",startSeconds:"startSeconds",endSeconds:"endSeconds",suggestedQuality:"suggestedQuality",playerVars:"playerVars",showBeforeIframeApiLoads:"showBeforeIframeApiLoads"},outputs:{ready:"ready",stateChange:"stateChange",error:"error",apiChange:"apiChange",playbackQualityChange:"playbackQualityChange",playbackRateChange:"playbackRateChange"},decls:2,vars:0,consts:[["youtubeContainer",""]],template:function(e,t){1&e&&s.Kb(0,"div",null,0)},encapsulation:2,changeDetection:0}),e})();function B(e,[t,i,n]){if(e&&i&&e.playerVars!==i.playerVars)e.destroy();else{if(!i)return void(e&&e.destroy());if(e)return e}const a=n.runOutsideAngular(()=>new YT.Player(t,i));return a.videoId=i.videoId,a.playerVars=i.playerVars,a}function D(e){return"getPlayerStatus"in e}function H(e,t){return Object(_.a)(k(e),Object(E.a)(([e,i])=>t(i,e)),Object(g.a)(([e])=>e))}let G=(()=>{class e{}return e.\u0275mod=s.Hb({type:e}),e.\u0275inj=s.Gb({factory:function(t){return new(t||e)}}),e})();function J(e,t){if(1&e&&(s.Ob(0,"h1"),s.lc(1),s.Nb()),2&e){const e=s.Xb();s.zb(1),s.mc(e.movie.data.nameRu)}}function X(e,t){if(1&e&&(s.Ob(0,"h1"),s.lc(1),s.Nb()),2&e){const e=s.Xb();s.zb(1),s.mc(e.movie.data.nameEn)}}function Z(e,t){if(1&e&&(s.Ob(0,"li"),s.lc(1),s.Nb()),2&e){const e=t.$implicit;s.zb(1),s.mc(e.genre)}}function Y(e,t){if(1&e&&s.Kb(0,"youtube-player",17),2&e){const e=s.Xb();s.ac("height",500)("width",850)("videoId",e.videoId)}}const F=[{path:"",component:(()=>{class e{constructor(e,t){this.route=e,this.movieService=t,this.movie={data:{},rating:{}},this.lengthMovieH="",this.lengthMovieM="",this.videoId="",this.id=Number(this.route.snapshot.paramMap.get("id")),this.movieService.getInformationAboutMovie(this.id).subscribe(e=>{this.movie=e,this.lengthMovieH=this.movie.data.filmLength.split(":")[0],this.lengthMovieM=this.movie.data.filmLength.split(":")[1]}),this.movieService.getMovieVideos(this.id).subscribe(e=>{this.movieVideos=e,this.videoId=this.movieVideos.trailers[0].url.split("=")[1]})}ngOnInit(){const e=document.createElement("script");e.src="https://www.youtube.com/iframe_api",document.body.appendChild(e)}}return e.\u0275fac=function(t){return new(t||e)(s.Jb(a.a),s.Jb(r.a))},e.\u0275cmp=s.Db({type:e,selectors:[["app-about"]],decls:47,vars:15,consts:[[1,"container"],[4,"ngIf"],[1,"movie-slogan"],[1,"movie"],["alt","Poster",3,"src"],[1,"movie-info"],[1,"description"],[1,"premier-date"],[1,"russian"],[1,"world"],[1,"movie-genres"],[4,"ngFor","ngForOf"],[1,"other-info"],[1,"rating"],[1,"container-trailer"],[3,"height","width","videoId",4,"ngIf"],["mat-raised-button","","color","primary","target","_blank",3,"href"],[3,"height","width","videoId"]],template:function(e,t){1&e&&(s.Ob(0,"main"),s.Ob(1,"div",0),s.kc(2,J,2,1,"h1",1),s.kc(3,X,2,1,"h1",1),s.Ob(4,"h2",2),s.lc(5),s.Nb(),s.Ob(6,"div",3),s.Kb(7,"img",4),s.Ob(8,"div",5),s.Ob(9,"div",6),s.Ob(10,"h2"),s.lc(11,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),s.Nb(),s.Ob(12,"p"),s.lc(13),s.Nb(),s.Nb(),s.Ob(14,"h2"),s.lc(15,"\u0414\u0430\u0442\u044b \u043f\u0440\u0435\u043c\u044c\u0435\u0440"),s.Nb(),s.Ob(16,"div",7),s.Ob(17,"div",8),s.Ob(18,"h3"),s.lc(19),s.Nb(),s.Nb(),s.Ob(20,"div",9),s.Ob(21,"h3"),s.lc(22),s.Nb(),s.Nb(),s.Nb(),s.Ob(23,"h2"),s.lc(24,"\u0416\u0430\u043d\u0440\u044b"),s.Nb(),s.Ob(25,"ul",10),s.kc(26,Z,2,1,"li",11),s.Nb(),s.Ob(27,"h2"),s.lc(28,"\u0414\u0440\u0443\u0433\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"),s.Nb(),s.Ob(29,"div",12),s.Ob(30,"h3"),s.lc(31),s.Nb(),s.Ob(32,"h3"),s.lc(33),s.Nb(),s.Nb(),s.Ob(34,"h2"),s.lc(35,"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"),s.Nb(),s.Ob(36,"div",13),s.Ob(37,"h3"),s.lc(38),s.Nb(),s.Ob(39,"h3"),s.lc(40),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Ob(41,"div",14),s.Ob(42,"h2"),s.lc(43,"\u0422\u0440\u0435\u0439\u043b\u0435\u0440"),s.Nb(),s.kc(44,Y,1,3,"youtube-player",15),s.Nb(),s.Ob(45,"a",16),s.lc(46,"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043d\u0430 \u043a\u0438\u043d\u043e\u043f\u043e\u0438\u0441\u043a\u0435"),s.Nb(),s.Nb(),s.Nb()),2&e&&(s.zb(2),s.ac("ngIf",t.movie.data.nameRu),s.zb(1),s.ac("ngIf",!t.movie.data.nameRu),s.zb(2),s.mc(t.movie.data.slogan),s.zb(2),s.bc("src",t.movie.data.posterUrl,s.fc),s.zb(6),s.mc(t.movie.data.description),s.zb(6),s.nc("\u041f\u0440\u0435\u043c\u044c\u0435\u0440\u0430 \u0432 \u0420\u043e\u0441\u0441\u0438\u0438: ",t.movie.data.premiereRu,""),s.zb(3),s.nc("\u041f\u0440\u0435\u043c\u044c\u0435\u0440\u0430 \u0432 \u043c\u0438\u0440\u0435: ",t.movie.data.premiereWorld,""),s.zb(4),s.ac("ngForOf",t.movie.data.genres),s.zb(5),s.oc("\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0444\u0438\u043b\u044c\u043c\u0430: ",t.lengthMovieH," \u0447. ",t.lengthMovieM," \u043c."),s.zb(2),s.nc("\u0412\u043e\u0437\u0432\u0440\u0430\u0441\u0442\u043d\u044b\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f: ",t.movie.data.ratingAgeLimits,"+"),s.zb(5),s.nc("\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043d\u0430 \u043a\u0438\u043d\u043e\u043f\u043e\u0438\u0441\u043a\u0435: ",t.movie.rating.rating,""),s.zb(2),s.nc("\u0420\u0435\u0439\u0442\u0438\u043d\u0433 IMDb: ",t.movie.rating.ratingImdb,""),s.zb(4),s.ac("ngIf",t.videoId),s.zb(1),s.bc("href",t.movie.data.webUrl,s.fc))},directives:[n.j,n.i,o.a,T],styles:[".container[_ngcontent-%COMP%]{padding:20px;text-align:center}.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:40px}.container[_ngcontent-%COMP%]   .movie-slogan[_ngcontent-%COMP%]{font-style:italic;font-size:16px;color:grey;margin-bottom:40px}.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:400px;height:600px;border-radius:10px;object-fit:cover}.movie[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:40px}.movie-info[_ngcontent-%COMP%]{text-align:center;flex-grow:4;margin-left:10px;background-color:#fff;border-radius:15px;padding:10px}.movie-info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{margin-bottom:40px}.movie-info[_ngcontent-%COMP%]   .premier-date[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:20px}.movie-info[_ngcontent-%COMP%]   .premier-date[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-right:25px}.movie-info[_ngcontent-%COMP%]   .movie-genres[_ngcontent-%COMP%]{list-style:none;display:flex;flex-wrap:wrap;justify-content:center;margin-bottom:40px}.movie-info[_ngcontent-%COMP%]   .movie-genres[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:15px;font-size:16px}.movie-info[_ngcontent-%COMP%]   .other-info[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:20px}.movie-info[_ngcontent-%COMP%]   .other-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-right:25px}.movie-info[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]{display:flex;flex-direction:column}.movie-info[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0}.container-trailer[_ngcontent-%COMP%]{padding:20px;background-color:#fff;border-radius:15px;margin-bottom:40px}"]}),e})()}];let K=(()=>{class e{}return e.\u0275mod=s.Hb({type:e}),e.\u0275inj=s.Gb({factory:function(t){return new(t||e)},imports:[[a.c.forChild(F)],a.c]}),e})();var U=i("7of8");let W=(()=>{class e{}return e.\u0275mod=s.Hb({type:e}),e.\u0275inj=s.Gb({factory:function(t){return new(t||e)},imports:[[n.b,K,G,U.a]]}),e})()}}]);