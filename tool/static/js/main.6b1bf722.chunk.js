(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(5),r=n.n(i),u=(n(16),n(6)),c=n(1),o=n(2),s=n(8),d=n(7),m=n(3),h=n(9),b=function(){function e(){Object(c.a)(this,e)}return Object(o.a)(e,null,[{key:"l_levels",value:function(e,t){return t/(6380*Math.pow(Math.cos(e),2))}}]),e}(),p=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={lattitude:"",altitude:""},n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"update",value:function(e){var t=this;return function(n){return t.setState(Object(u.a)({},e,n.currentTarget.value))}}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=b.l_levels(this.state.lattitude,this.state.altitude).toString(),n=document.getElementById("final");n.innerHTML="",n.innerHTML+=t,t>=1.5&&t<=2.5?(console.log(t),n.innerHTML+="<br/> You are located within the 1st Van Allen Belt!"):t>=4&&t<=5&&(n.innerHTML+="<br/> You are located within the 2nd Van Allen Belt!")}},{key:"render",value:function(){return l.a.createElement("div",{className:"background"},l.a.createElement("div",{className:"window"},l.a.createElement("form",null,l.a.createElement("div",{className:"labels"},l.a.createElement("label",{className:"inputs"},"Lattitude:",l.a.createElement("input",{type:"text",name:"lattitude",onChange:this.update("lattitude")})),l.a.createElement("br",null),l.a.createElement("label",{className:"inputs"},"Altitude:",l.a.createElement("input",{type:"text",name:"altitude",onChange:this.update("altitude")}))),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Submit",onClick:this.handleSubmit}),l.a.createElement("br",null))),l.a.createElement("div",{id:"final"}))}}]),t}(l.a.Component);n(17);var v=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(p,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.6b1bf722.chunk.js.map