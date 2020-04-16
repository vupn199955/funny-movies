(window["webpackJsonpfront-end-site"]=window["webpackJsonpfront-end-site"]||[]).push([[0],{118:function(e,t,a){e.exports=a(303)},123:function(e,t,a){},300:function(e,t,a){},303:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(41),s=a.n(o),c=(a(123),a(14)),i=a(15),l=a(17),u=a(16),m=a(18),d=a(11),g=a(64),p=a.n(g),b=a(109),h=window.location.origin+"/api/",f=function(){var e=Object(b.a)(p.a.mark(function e(t,a,n){var r,o;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),e.next=3,fetch(h+a,{method:t,body:JSON.stringify(n),headers:{"Content-Type":"application/json; charset=utf-8",Authorization:r}});case 3:if(404!==(o=e.sent).status){e.next=7;break}return localStorage.removeItem("token"),e.abrupt("return",Promise.reject());case 7:return e.next=9,o.json();case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}(),v=function(e){return f("post","users/login",e)},E=function(e){return f("get","movies/share/"+e)},y=a(24),O=a(31),L=a(110),N=(a(131),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).login=function(){var e=a.state,t=e.username,n=e.password;if(!t||!n)return alert("Missing field!");a.props.showLoading(),v({username:t,password:n}).finally(function(){a.props.hideLoading()}).then(function(e){e.token&&(localStorage.setItem("token",e.token),a.props.login(e.username))}).catch(function(e){alert("Login fail! Please check your info.")})},a.onChangeUsername=function(e){a.setState({username:e.target.value})},a.onChangePassword=function(e){a.setState({password:e.target.value})},a.logout=function(){a.props.logout()},a.state={username:"",password:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;localStorage.getItem("token")&&(this.props.showLoading(),f("get","users/access-info").finally(function(){e.props.hideLoading()}).then(function(t){t.username&&e.props.login(t.username)}))}},{key:"render",value:function(){var e=this.props,t=e.isLogin,a=e.username;return r.a.createElement("div",{className:"App"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(y.b,{className:"navbar-brand",to:"/"},r.a.createElement(O.a,{icon:L.a}),r.a.createElement("span",{className:"ml-2"},"Funny Movies")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},r.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"}),t?r.a.createElement("div",{className:"form-inline my-2 my-lg-0"},r.a.createElement("label",{className:"label mr-5"}," Welcome ",a),r.a.createElement(y.b,{className:"btn btn-outline-success my-2 my-sm-0 mr-5",to:"/share-movie"},"Share a movie"),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",onClick:this.logout},"Logout")):r.a.createElement("div",{className:"form-inline my-2 my-lg-0"},r.a.createElement("input",{className:"form-control mr-sm-2",value:this.state.username,onChange:this.onChangeUsername,type:"username",placeholder:"Username"}),r.a.createElement("input",{className:"form-control mr-sm-2",value:this.state.password,onChange:this.onChangePassword,type:"password",placeholder:"Password"}),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",onClick:this.login},"Login/Register")))))}}]),t}(r.a.Component)),j=Object(d.b)(function(e,t){return{username:e.user.username,isLogin:e.user.isLogin}},function(e,t){return{logout:function(){return e({type:"LOGOUT"})},login:function(t){return e({type:"LOGIN",data:t})},showLoading:function(){return e({type:"SHOW_LOADING"})},hideLoading:function(){return e({type:"HIDE_LOADING"})}}})(N),w=a(112),k=a(68),S=a(43),C=a.n(S),I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).setLoading=function(e){a.setState({isLoading:e})},a.renderLoading=function(){if(a.state.isLoading)return r.a.createElement("div",{className:"loading-bar"},r.a.createElement(C.a,{type:"ThreeDots",color:"#00BFFF",className:"loading"}))},a.renderMovies=function(){var e={height:"360",width:"100%",playerVars:{autoplay:0},origin:"http://localhost:3000"|Object({NODE_ENV:"production",PUBLIC_URL:""}).APP_URL};return a.state.movies.map(function(t,a){return r.a.createElement("div",{className:"row mt-3",key:a},r.a.createElement("div",{className:"col-md-6"},r.a.createElement(w.a,{videoId:t.videoId,opts:e})),r.a.createElement("div",{className:"col-md-6 movie-item"},r.a.createElement("label",{className:"col"},r.a.createElement("span",{className:"badge badge-danger movie-title"},t.title)),r.a.createElement("label",{className:"col"},"Share by: ",t.user.username),r.a.createElement("div",{className:"col"},r.a.createElement("label",{className:"mr-3"},r.a.createElement("span",{className:"badge badge-primary"},t.likeCount," ",r.a.createElement(O.a,{icon:k.b}))),r.a.createElement("label",null,r.a.createElement("span",{className:"badge badge-secondary"},t.dislikeCount," ",r.a.createElement(O.a,{icon:k.a})))),r.a.createElement("label",{className:"col"},"Description:"),r.a.createElement("label",{className:"col"},t.description)))})},a.state={movies:[],isLoading:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.setLoading(!0),f("get","movies").then(function(t){e.setState({movies:t})}).finally(function(){e.setLoading(!1)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container movies-list"},this.renderMovies(),this.renderLoading())}}]),t}(r.a.Component),D=a(117),P=a(19),U=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onChangeUrl=function(e){a.setState({url:e.target.value})},a.shareMovie=function(e){a.props.showLoading(),E(e).finally(function(){a.props.hideLoading()}).then(function(){a.setState({gotoHome:!0})}).catch(function(){a.setState({url:""}),alert("Cannot find your video. Please check it and retry!")})},a.onShare=function(){try{var e=a.state.url.match(/(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/),t=Object(D.a)(e,2)[1];if(!t)throw new Error;a.shareMovie(t)}catch(n){a.setState({url:""}),alert("Cannot find your video id. Please check it and retry!")}},a.state={url:"",gotoHome:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.gotoHome?r.a.createElement(P.a,{to:"/"}):r.a.createElement("div",{className:"container mt-5 border border-dark rounded col-md-8 col-md-offset-2"},r.a.createElement("h2",null,"Share a youtube movie"),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-2 col-form-label"},"Youtube URL"),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Youtube URL",value:this.state.url,onChange:this.onChangeUrl}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-2 col-form-label"}),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("button",{className:"col btn btn-success",onClick:this.onShare},"Share"))))}}]),t}(r.a.Component),A=Object(d.b)(function(e,t){return{isLogin:e.user.isLogin}},function(e,t){return{showLoading:function(){return e({type:"SHOW_LOADING"})},hideLoading:function(){return e({type:"HIDE_LOADING"})}}})(U),G=a(115);var _=Object(d.b)(function(e,t){return{isLogin:e.user.isLogin}})(function(e){var t=e.component,a=Object(G.a)(e,["component"]),n=a.isLogin;return r.a.createElement(P.b,Object.assign({},a,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(P.a,{to:{pathname:"/",state:{from:e.location}}})}}))}),x=(a(300),function(e){function t(e){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.isLoading;return r.a.createElement(y.a,null,e?r.a.createElement("div",{className:"loading-bar"},r.a.createElement(C.a,{type:"Rings",color:"#00BFFF",className:"loading"})):"",r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement(P.b,{exact:!0,path:"/",component:I}),r.a.createElement(_,{path:"/share-movie",component:A})))}}]),t}(r.a.Component)),H=Object(d.b)(function(e,t){return{isLoading:e.loadingBar.isLoading}})(x);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(301),a(302);var M=a(26),T=a(116);function W(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(a,!0).forEach(function(t){Object(T.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var F=Object(M.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLogin:!1,username:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return B({},e,{username:t.data,isLogin:!0});case"LOGOUT":return localStorage.removeItem("token"),B({},e,{username:"",isLogin:!1});default:return e}},loadingBar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_LOADING":return B({},e,{isLoading:!0});case"HIDE_LOADING":return B({},e,{isLoading:!1});default:return e}}}),R=Object(M.c)(F);s.a.render(r.a.createElement(d.a,{store:R},r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[118,1,2]]]);
//# sourceMappingURL=main.82cf4956.chunk.js.map