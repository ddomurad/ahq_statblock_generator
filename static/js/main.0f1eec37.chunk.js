(this.webpackJsonpahq_statblock_generator=this.webpackJsonpahq_statblock_generator||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(1),a=n.n(o),l=n(7),c=n.n(l),i=n(2),d=n(8),s=n(6);n(14);var S=function(e){var t,n,a,l,c,i=e.options,S=e.labels,u=e.stats,h=function(e,t,n){return Object(r.jsx)("rect",{x:j(e[0]),y:j(e[1]),width:j(t[0]),height:j(t[1]),strokeWidth:j(n),stroke:i.borderColor,fill:"none"})},b=function(e,t,n,o){return Object(r.jsx)("rect",{x:j(e[0]),y:j(e[1]),width:j(t[0]),height:j(t[1]),strokeWidth:j(n),stroke:i.borderColor,fill:o})},f=function(e,t,n,o,a){return Object(r.jsx)("line",{x1:j(e),y1:j(t),x2:j(e),y2:j(t+n),strokeWidth:j(o),stroke:i.borderColor},a)},x=function(e,t,n,o,a){return Object(r.jsx)("line",{x1:j(e),y1:j(t),x2:j(e+n),y2:j(t),strokeWidth:j(o),stroke:i.borderColor},a)},m=function(e,t,n,r,a,l){return Object(o.createElement)("text",Object(s.a)(Object(s.a)({x:j(e[0],t[0]),y:j(e[1],t[1]),textAnchor:"middle"},r),{},{style:{fontSize:j(n),fontFamily:r.fontFamily},key:l}),a)},g=function(e,t,n,r,o,a){return a.split("\n").map((function(a,l){return m([e[0],e[1]+l*r],t,n,o,a,l)}))},k=function(e,t){return Object(d.a)(Array(e)).map((function(e,n){return t(n)}))},j=function(e,t){return t?e*i.scale+t*i.scale:e*i.scale},p={fill:i.textColor,stroke:i.textBorder,strokeWidth:j(i.textStroke),fontFamily:i.textFont},C={fill:i.headerColor1,stroke:i.headerBorder1,strokeWidth:j(i.headerStroke1),fontFamily:i.headerFont},y={fill:i.headerColor2,stroke:i.headerBorder2,strokeWidth:j(i.headerStroke2),fontFamily:i.headerFont},O={fill:i.nameColor,stroke:i.nameBorder,strokeWidth:j(i.nameStroke),fontFamily:i.headerFont},B=u.type&&""!==u.type,F=u.handToHand.fumble||u.handToHand.critical,v=u.rangeStats.fumble||u.rangeStats.critical;return Object(r.jsxs)("svg",{width:j(100,2),height:j(80,2),className:"stats",children:[b([1,1],[90,80],i.borderStroke1,i.bgColor),b([1,1],[90,10],i.borderStroke1,i.nameBgColor),B&&b([91,1],[10,80],i.borderStroke1,i.typeBgColor),b([1,11],[90,8],0,i.headerBgColor),F&&b([1,27],[56.25,6],0,i.headerBgColor),!F&&b([1,27],[90,6],0,i.headerBgColor),F&&b([68.25,27],[11.25,6],0,i.headerBgColor),v&&b([1,45],[56.25,6],0,i.headerBgColor),!v&&b([1,45],[90,6],0,i.headerBgColor),v&&b([68.25,45],[11.25,6],0,i.headerBgColor),b([1,63],[90,6],0,i.headerBgColor),h([1,11],[90,16],i.borderStroke1),h([1,27],[90,18],i.borderStroke1),h([1,45],[90,18],i.borderStroke1),h([1,63],[90,18],i.borderStroke1),k(8,(function(e){return f(10*(e+1)+1,11,16,i.borderStroke2,e)})),x(1,19,90,i.borderStroke2),x(1,33,90,i.borderStroke2),x(1,39,90,i.borderStroke2),F&&f(46,27,6,i.borderStroke2),F&&f(57.25,27,6,i.borderStroke2),F&&f(68.5,27,6,i.borderStroke2),F&&f(79.75,27,6,i.borderStroke2),k(13,(function(e){return f(5.625*e+12.25,33,12,i.borderStroke2,e)})),x(1,51,90,i.borderStroke2),x(1,57,90,i.borderStroke2),v&&f(46,45,6,i.borderStroke2),v&&f(57.25,45,6,i.borderStroke2),v&&f(68.5,45,6,i.borderStroke2),v&&f(79.75,45,6,i.borderStroke2),k(7,(function(e){return f(11.25*e+12.25,51,12,i.borderStroke2,e)})),x(1,69,90,i.borderStroke2),m([45,5],[1,3*i.textScale1],5*i.textScale1,O,u.name),S.chars.map((function(e,t){return m([10*t+5,15],[1,2.1],4*i.textScale1,C,e,t)})),u.chars.map((function(e,t){return m([10*t+5,22],[1,2.1],4*i.textScale1,p,e,t)})),F&&m([23,29.5],[1,2*i.textScale1],4*i.textScale1,C,S.handToHand.handToHand),!F&&m([45,29.5],[1,2*i.textScale1],4*i.textScale1,C,S.handToHand.handToHand),F&&m([50.625,29.5],[1,1.8],2.8*i.textScale2,y,S.handToHand.fumble),F&&m([61.875,29.5],[1,2.1],4*i.textScale3,p,u.handToHand.fumble),F&&m([73.125,29.5],[1,1.8],2.4*i.textScale2,y,S.handToHand.critical),F&&m([84.625,29.5],[1,2.1],4*i.textScale3,p,u.handToHand.critical),g([5.625,34],[1,2],3*i.textScale2,2.5*i.textScale2,p,S.handToHand.targetWs),g([5.625,39.8],[1,2],3*i.textScale2,2.5*i.textScale2,p,S.handToHand.hitRoll),g([84.375,34],[1,2],3*i.textScale2,2.5*i.textScale2,p,S.handToHand.damageDice),k(12,(function(e){return m([5.625*e+14.25,36],[1,2],4*i.textScale3,p,e+1,e)})),u.handToHand.hitRolls.map((function(e,t){return m([5.625*t+14.25,41.5],[1,2],4*i.textScale3,p,e,t)})),m([84.375,41.5],[1,2.1],4*i.textScale3,p,u.handToHand.damageDice),v&&m([23,47.4],[1,2*i.textScale1],4*i.textScale1,C,S.rangeStats.rangeStats),!v&&m([45,47.4],[1,2*i.textScale1],4*i.textScale1,C,S.rangeStats.rangeStats),v&&m([50.625,47.4],[1,1.8],2.8*i.textScale2,y,S.rangeStats.fumble),v&&m([61.875,47.4],[1,2.1],4*i.textScale3,p,u.rangeStats.fumble),v&&m([73.125,47.4],[1,1.8],2.4*i.textScale2,y,S.rangeStats.critical),m([84.625,47.4],[1,2.1],4*i.textScale3,p,u.rangeStats.critical),g([5.625,53],[1,2],3*i.textScale2,2.5*i.textScale2,p,S.rangeStats.range),g([5.625,57.8],[1,2],3*i.textScale2,2.5*i.textScale2,p,S.rangeStats.hitRoll),g([73.125,52],[1,2],3*i.textScale2,2.5*i.textScale2,p,S.rangeStats.maxRange),g([84.375,52],[1,2],3*i.textScale2,2.5*i.textScale2,p,S.rangeStats.damageDice),u.rangeStats.hitRanges.map((function(e,t){return m([11.25*t+16.875,53],[1,2],3*i.textScale3,p,e,t)})),u.rangeStats.hitRolls.map((function(e,t){return m([11.25*t+16.875,59],[1,2],3*i.textScale3,p,e,t)})),m([73.125,59],[1,2.1],3*i.textScale3,p,u.rangeStats.maxRange),m([84.375,59],[1,2.1],3*i.textScale3,p,u.rangeStats.damageDice),m([45,65],[1,2.5*i.textScale1],4*i.textScale1,C,S.notes),(t=[2,70.5],n=[1,2],a=3.5*i.textScale3,l=3.5*i.textScale3,c=u.notes,c.map((function(e,o){return function(e,t,n,o,a){return Object(r.jsx)("text",{x:j(e[0],t[0]),y:j(e[1],t[1]),fill:i.notesColor,stroke:i.notesBorder,strokeWidth:i.notesStroke,style:{fontSize:j(n),fontFamily:i.notesFont},children:o},a)}([t[0],t[1]+o*l],n,a,e,o)}))),B&&Object(r.jsx)("text",{textAnchor:"middle",style:{fontSize:j(6*i.textScale1),fontFamily:i.headerFont},transform:"rotate(90) translate(".concat(j(40),", ").concat(j(-94),")"),fill:i.typeColor,strokeWidth:j(i.typeStroke),stroke:i.typeBorder,children:u.type})]})},u="@: Template monster\nsp,ws,bs,s,t,w,br,int,pv\ndmg\n4,5,6,7,8,9,10,10,10,10,10,10\nrange, dmg\n1-3, 4-12, 13-24, 25-36, 37+\n8, 10, 11, MISS, MISS\nnote line 1\nnote line 2\nnote line 3\n\n",h="@: Template monster, Optional Text\nsp,ws,bs,s,t,w,br,int,pv\ndmg, fum, crit\n4,5,6,7,8,9,10,10,10,10,10,10\nrange, dmg, fum, crit\n1-3, 4-12, 13-24, 25-36, 37+\n8, 10, 11, MISS, MISS\nnote line 1\nnote line 2\nnote line 3\n\n",b='{\n    "scale": 3.3,\n    \n    "bgColor": "#fff",\n    "nameBgColor": "#fff",\n    "typeBgColor": "#000",\n    "headerBgColor": "#000",\n    \n    "nameColor": "#000",\n    "typeColor": "#fff",\n    "textColor": "#000",\n    "headerColor1": "#fff",\n    "headerColor2": "#fff",\n    "notesColor": "#000",\n\n    "borderColor": "#000",\n    "nameBorder": "#000",\n    "typeBorder": "",\n    "headerBorder1": "",\n    "headerBorder2": "",\n    "textBorder": "",\n    "notesBorder": "#000",\n\n    "borderStroke1": "1",\n    "borderStroke2": "0.5",\n    "nameStroke": "0.3",\n    "typeStroke": "",\n    "headerStroke1": "",\n    "headerStroke2": "",\n    "textStroke": "",\n    "notesStroke": "0.2",\n\n    "headerFont": "Frijole",\n    "textFont": "Frijole",\n    "notesFont": "Indie Flower",\n\n    "textScale1": 1,\n    "textScale2": 0.7,\n    "textScale3": 0.9\n}',f='{\n    "scale": 3.3,\n    \n    "bgColor": "#ff0",\n    "nameBgColor": "#fff",\n    "typeBgColor": "#000",\n    "headerBgColor": "#000",\n    \n    "nameColor": "#ff0",\n    "typeColor": "#550",\n    "textColor": "#000",\n    "headerColor1": "#550",\n    "headerColor2": "#ff0",\n    "notesColor": "#000",\n\n    "borderColor": "#000",\n    "nameBorder": "#000",\n    "typeBorder": "#ff0",\n    "headerBorder1": "#ff0",\n    "headerBorder2": "",\n    "textBorder": "",\n    "notesBorder": "",\n\n    "borderStroke1": "1",\n    "borderStroke2": "0.5",\n    "nameStroke": "0.3",\n    "typeStroke": "0.1",\n    "headerStroke1": "0.2",\n    "headerStroke2": "",\n    "textStroke": "",\n    "notesStroke": "",\n\n    "headerFont": "Shojumaru",\n    "textFont": "Shojumaru",\n    "notesFont": "Langar",\n    "textScale1": 1,\n    "textScale2": 0.7,\n    "textScale3": 0.9\n}',x='{\n    "scale": 5,\n    \n    "bgColor": "red",\n    "nameBgColor": "orange",\n    "typeBgColor": "olive",\n    "headerBgColor": "green",\n    \n    "nameColor": "black",\n    "typeColor": "white",\n    "textColor": "yellow",\n    "headerColor1": "orange",\n    "headerColor2": "red",\n    "notesColor": "white",\n\n    "borderColor": "pink",\n    "nameBorder": "white",\n    "typeBorder": "black",\n    "headerBorder1": "blue",\n    "headerBorder2": "black",\n    "textBorder": "black",\n    "notesBorder": "black",\n\n    "borderStroke1": "1",\n    "borderStroke2": "0.5",\n    "nameStroke": "0.5",\n    "typeStroke": "0.7",\n    "headerStroke1": "0.2",\n    "headerStroke2": "0.2",\n    "textStroke": "0.2",\n    "notesStroke": "1",\n\n    "headerFont": "UnifrakturCook",\n    "textFont": "UnifrakturCook",\n    "notesFont": "Ramaraja",\n\n    "textScale1": 1.2,\n    "textScale2": 1,\n    "textScale3": 1\n}',m='{\n    "scale": 3.3,\n    \n    "bgColor": "#fff",\n    "nameBgColor": "#fff",\n    "typeBgColor": "#000",\n    "headerBgColor": "#000",\n    \n    "nameColor": "#000",\n    "typeColor": "#fff",\n    "textColor": "#000",\n    "headerColor1": "#fff",\n    "headerColor2": "#fff",\n    "notesColor": "#000",\n\n    "borderColor": "#000",\n    "nameBorder": "#000",\n    "typeBorder": "",\n    "headerBorder1": "",\n    "headerBorder2": "",\n    "textBorder": "",\n    "notesBorder": "",\n\n    "borderStroke1": "1",\n    "borderStroke2": "0.5",\n    "nameStroke": "0.3",\n    "typeStroke": "",\n    "headerStroke1": "",\n    "headerStroke2": "",\n    "textStroke": "",\n    "notesStroke": "",\n\n    "headerFont": "HeroQuest",\n    "textFont": "HeroQuest",\n    "notesFont": "HeroQuest",\n\n    "textScale1": 1,\n    "textScale2": 1,\n    "textScale3": 1\n}',g='{\n    "chars": ["Sp", "WS", "BS", "S", "T", "W", "Br", "Int","PV" ],\n    "handToHand": {\n        "handToHand": "Hand To Hand",\n        "fumble": "Fumble",\n        "critical": "Critical",\n        "targetWs": "Target\\nWs",\n        "hitRoll": "Hit\\nRoll",\n        "damageDice": "Dmg\\nDice"\n    },\n    "rangeStats": {\n        "rangeStats": "Ranged",\n        "fumble": "Fumble",\n        "critical": "Critical",\n        "range": "Range",\n        "maxRange": "Max\\nRange",\n        "damageDice": "Dmg\\nDice",\n        "hitRoll": "Hit\\nRoll"\n    },\n    "notes": "Equipment & Notes"\n}',k=function(e){try{return e.split("@:").map((function(e){return e.trim()})).filter((function(e){return""!==e})).map((function(e){return function(e){var t=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return e&&e.length>t?e[t]:n},n=e.split("\n"),r=t(n,0).split(","),o=t(n,2).split(",").map((function(e){return e.trim()})),a=t(n,4).split(",").map((function(e){return e.trim()}));return{name:t(r,0).trim(),type:t(r,1).trim(),chars:t(n,1).split(",").map((function(e){return e.trim()})),handToHand:{damageDice:t(o,0),fumble:t(o,1),critical:t(o,2),hitRolls:t(n,3).split(",").map((function(e){return e.trim()}))},rangeStats:{maxRange:t(a,0),damageDice:t(a,1),fumble:t(a,2),critical:t(a,3),hitRanges:t(n,5).split(",").map((function(e){return e.trim()})),hitRolls:t(n,6).split(",").map((function(e){return e.trim()}))},notes:n.slice(7,10)}}(e)}))}catch(t){return console.error(t),[]}},j=function(e){return JSON.parse(e)},p=function(e){return JSON.parse(e)},C=(n(15),["Frijole","Shojumaru","Ruslan Display","Lemon","Staatliches","Langar","UnifrakturCook","Ramaraja","Caveat","Indie Flower","Shadows Into Light"]);var y=function(){var e=Object(o.useState)({editStats:!0,editStyle:!1,editLabels:!1}),t=Object(i.a)(e,2),n=t[0],a=t[1],l=Object(o.useState)((function(){return localStorage.getItem("stats")||u})),c=Object(i.a)(l,2),d=c[0],s=c[1],y=Object(o.useState)((function(){return localStorage.getItem("style")||b})),O=Object(i.a)(y,2),B=O[0],F=O[1],v=Object(o.useState)((function(){return localStorage.getItem("labels")||g})),H=Object(i.a)(v,2),T=H[0],R=H[1],I=Object(o.useState)((function(){return k(localStorage.getItem("stats")||u)})),L=Object(i.a)(I,2),w=L[0],W=L[1],D=Object(o.useState)((function(){return j(localStorage.getItem("style")||b)})),N=Object(i.a)(D,2),M=N[0],E=N[1],J=Object(o.useState)((function(){return p(localStorage.getItem("labels")||g)})),Q=Object(i.a)(J,2),_=Q[0],q=Q[1],z=function(e){s(e);try{W(k(e)),localStorage.setItem("stats",e)}catch(t){console.error(t),W([])}},A=function(e){F(e);try{E(j(e)),localStorage.setItem("style",e)}catch(t){E(j(b))}},U=function(e){R(e);try{q(p(e)),localStorage.setItem("labels",e)}catch(t){q(p(g))}},P=function(e){return function(){return z(d+e)}},V=function(e){return function(){return A(e)}},G=function(){return w.map((function(e,t){return Object(r.jsx)(S,{options:M,labels:_,stats:e},t)}))};return Object(r.jsxs)("div",{className:"app",children:[Object(r.jsxs)("div",{className:"app-header-controls no-print",children:[Object(r.jsx)("input",{type:"checkbox",checked:n.editStats,onChange:function(){return a({editStats:!n.editStats,editStyle:!1,editLabels:!1})}}),Object(r.jsx)("span",{children:"Stats editor"}),Object(r.jsx)("input",{type:"checkbox",checked:n.editStyle,onChange:function(){return a({editStats:!1,editStyle:!n.editStyle,editLabels:!1})}}),Object(r.jsx)("span",{children:"Style editor"}),Object(r.jsx)("input",{type:"checkbox",checked:n.editLabels,onChange:function(){return a({editStats:!1,editStyle:!1,editLabels:!n.editLabels})}}),Object(r.jsx)("span",{children:"Labels editor"}),Object(r.jsx)("button",{onClick:function(){a({editStats:!1,editStyle:!1,editLabels:!1}),setTimeout((function(){return window.print()}),250)},children:"Print"})]}),(n.editStats||n.editStyle||n.editLabels)&&Object(r.jsxs)("div",{className:"app-container",children:[n.editStats&&Object(r.jsxs)("div",{className:"app-editor no-print",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:P(u),children:"Insert template"}),Object(r.jsx)("button",{onClick:P(h),children:"Insert template (alternate)"})]}),Object(r.jsx)("textarea",{value:d,onChange:function(e){return z(e.target.value)}})]}),n.editStyle&&Object(r.jsxs)("div",{className:"app-editor no-print",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:V(b),children:"Load default style"}),Object(r.jsx)("button",{onClick:V(f),children:"Load example style"}),Object(r.jsx)("button",{onClick:V(x),children:"Load ugly style"}),Object(r.jsx)("button",{onClick:V(m),children:"Load HeroQuest style"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"Embeded fonts:"}),Object(r.jsx)("ul",{children:C.map((function(e){return Object(r.jsx)("li",{style:{fontFamily:e},children:e})}))})]}),Object(r.jsx)("textarea",{value:B,onChange:function(e){return A(e.target.value)}})]}),n.editLabels&&Object(r.jsxs)("div",{className:"app-editor no-print",children:[Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:function(){return U(g)},children:"Load default labels"})}),Object(r.jsx)("textarea",{value:T,onChange:function(e){return U(e.target.value)}})]}),Object(r.jsx)("div",{className:"app-live-stats",children:G()})]}),!(n.editStats||n.editStyle||n.editLabels)&&G()]})};c.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(y,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0f1eec37.chunk.js.map