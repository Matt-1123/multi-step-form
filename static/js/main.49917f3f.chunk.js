(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},238:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),i=a.n(l),c=(a(101),a(12)),o=a(13),s=a(15),u=a(14),p=a(16),m=(a(102),a(95)),h=a(22),y=a.n(h),f=a(23),b=a.n(f),d=a(25),E=a.n(d),v=a(24),x=a.n(v),g=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return r.a.createElement(y.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{title:"Enter User Details",style:O.appbar}),r.a.createElement(E.a,{hintText:"Enter first name",floatingLabelText:"First Name",onChange:a("firstName"),defaultValue:t.firstName,style:O.textfield}),r.a.createElement(E.a,{hintText:"Enter last name",floatingLabelText:"Last Name",onChange:a("lastName"),defaultValue:t.lastName,style:O.textfield}),r.a.createElement(E.a,{hintText:"Enter your email",floatingLabelText:"Email",onChange:a("email"),defaultValue:t.email,style:O.textfield}),r.a.createElement("br",null),r.a.createElement(x.a,{label:"Continue",primary:!0,style:O.button,onClick:this.continue})))}}]),t}(n.Component),O={button:{margin:"0 auto",display:"block",width:125},appbar:{textAlign:"center"},textfield:{margin:"0 auto",display:"block"}},j=g,C=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a.back=function(e){e.preventDefault(),a.props.prevStep()},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return r.a.createElement(y.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{title:"Enter Personal Details",style:k.appbar}),r.a.createElement(E.a,{hintText:"Enter your occupation",floatingLabelText:"Occupation",onChange:a("occupation"),defaultValue:t.occupation,style:k.textfield}),r.a.createElement(E.a,{hintText:"Enter your city",floatingLabelText:"City",onChange:a("city"),defaultValue:t.city,style:k.textfield}),r.a.createElement(E.a,{hintText:"Enter your bio",floatingLabelText:"Bio",onChange:a("bio"),defaultValue:t.bio,style:k.textfield}),r.a.createElement("br",null),r.a.createElement(x.a,{label:"Continue",primary:!0,style:k.button,onClick:this.continue}),r.a.createElement(x.a,{label:"Back",primary:!1,style:k.button,onClick:this.back})))}}]),t}(n.Component),k={button:{margin:"0 auto",display:"block",width:125},appbar:{textAlign:"center"},textfield:{margin:"0 auto",display:"block"}},T=C,w=a(26),S=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a.back=function(e){e.preventDefault(),a.props.prevStep()},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.values,t=e.firstName,a=e.lastName,n=e.email,l=e.occupation,i=e.city,c=e.bio;return r.a.createElement(y.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{title:"Confirm User Data",style:L.center}),r.a.createElement(w.List,null,r.a.createElement(w.ListItem,{primaryText:"First name",secondaryText:t,style:L.center}),r.a.createElement(w.ListItem,{primaryText:"Last name",secondaryText:a,style:L.center}),r.a.createElement(w.ListItem,{primaryText:"Email",secondaryText:n,style:L.center}),r.a.createElement(w.ListItem,{primaryText:"Occupation",secondaryText:l,style:L.center}),r.a.createElement(w.ListItem,{primaryText:"City",secondaryText:i,style:L.center}),r.a.createElement(w.ListItem,{primaryText:"Bio",secondaryText:c,style:L.center})),r.a.createElement("br",null),r.a.createElement(x.a,{label:"Confirm",primary:!0,style:L.button,onClick:this.continue}),r.a.createElement(x.a,{label:"Back",primary:!1,style:L.button,onClick:this.back})))}}]),t}(n.Component),L={button:{margin:"0 auto",display:"block",width:125},center:{textAlign:"center"},textfield:{margin:"0 auto",display:"block"}},N=S,A=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a.back=function(e){e.preventDefault(),a.props.prevStep()},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{title:"Success",style:D.center}),r.a.createElement("h1",{style:D.center},"Thank you for your submission"),r.a.createElement("p",{style:D.center},"You will get an email from us shortly with further instructions.")))}}]),t}(n.Component),D={center:{textAlign:"center"}},I=A,B=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={step:1,firstName:"",lastName:"",email:"",occupation:"",city:"",bio:""},a.nextStep=function(){var e=a.state.step;a.setState({step:e+1})},a.prevStep=function(){var e=a.state.step;a.setState({step:e-1})},a.handleChange=function(e){return function(t){a.setState(Object(m.a)({},e,t.target.value))}},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.step,t=this.state,a={firstName:t.firstName,lastName:t.lastName,email:t.email,occupation:t.occupation,city:t.city,bio:t.bio};switch(e){case 1:return r.a.createElement(j,{nextStep:this.nextStep,handleChange:this.handleChange,values:a});case 2:return r.a.createElement(T,{nextStep:this.nextStep,prevStep:this.prevStep,handleChange:this.handleChange,values:a});case 3:return r.a.createElement(N,{nextStep:this.nextStep,prevStep:this.prevStep,values:a});case 4:return r.a.createElement(I,null)}}}]),t}(n.Component),F=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App>"},r.a.createElement(B,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},96:function(e,t,a){e.exports=a(238)}},[[96,1,2]]]);
//# sourceMappingURL=main.49917f3f.chunk.js.map