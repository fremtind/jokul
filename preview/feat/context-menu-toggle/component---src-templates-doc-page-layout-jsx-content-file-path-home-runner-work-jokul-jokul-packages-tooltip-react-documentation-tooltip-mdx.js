"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[464],{59976:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return P},Head:function(){return _},default:function(){return F}});var r=n(47160),l=n(70079),a=n(42913),o=n(57579),i=n(84256),s=n(26893),c=n(61808),p=n(3438),m=n(26372),u=n.n(m),f=n(48365),d=n(89300);const k=e=>{let{content:t,initialPlacement:n="top",className:r}=e;const a=(0,p.M)("jkl-tooltip"),{0:m,1:k}=(0,l.useState)(!1),{0:g,1:E}=(0,l.useState)(!1),v=(0,l.useRef)(null),{x:b,y:h,refs:j,placement:y,strategy:x,context:w,isPositioned:N,middlewareData:{arrow:{x:_,y:P}={}}}=(0,o.YF)({open:m,onOpenChange:k,placement:n,middleware:[(0,i.cv)(16),(0,i.RR)(),(0,i.uY)({padding:16}),(0,s.x7)({element:v,padding:20})]}),{getReferenceProps:F,getFloatingProps:O}=(0,o.NI)([(0,o.eS)(w),(0,o.bQ)(w,{referencePress:!1}),(0,o.KK)(w,{enabled:m}),(0,o.qs)(w,{role:"tooltip"})]);return l.createElement("span",{className:u()("jkl-tooltip",r)},l.createElement("span",{className:"jkl-tooltip__wrapper"},l.createElement("button",Object.assign({"aria-expanded":m,"aria-controls":a,type:"button",className:"jkl-tooltip__button"},F({ref:j.setReference,onFocus:()=>E(!0),onBlur:()=>E(!1),onMouseOver:()=>E(!0),onMouseLeave:()=>E(!1)})),l.createElement(c.U,{bold:g}),l.createElement("span",{className:"jkl-sr-only"},(m?"Skjul":"Vis")+" hjelpetekst")),l.createElement(f.M,null,m&&l.createElement(d.E.span,Object.assign({initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{ease:"easeIn",duration:.1},"data-placement":y,"aria-live":"assertive",className:"jkl-tooltip__content"},O({id:a,ref:j.setFloating,style:{position:x,top:N?h:"",left:N?b:""}})),l.createElement("span",{style:{whiteSpace:"normal"}},t),l.createElement("span",{"aria-hidden":!0,className:"jkl-tooltip__arrow",ref:v,style:{left:N?_+"px":"",top:N?P+"px":""}})))))};const g=e=>{let{choiceValues:t,displayValues:n}=e;const r=function(e){switch(e){case"Right":return"right";case"Left":return"left";case"Top end":return"top-end";case"Top start":return"top-start";default:return"top"}}(null==t?void 0:t.Plassering),o="compact"===(null==n?void 0:n.density)?"small":"body";return l.createElement("p",{className:"jkl-"+o.toLowerCase().replace(/ /g,"-")},"Du betaler"," ",l.createElement("span",{style:{whiteSpace:"nowrap"}},"348 kr/mnd"," ",l.createElement(k,Object.assign({content:l.createElement("span",null,"Månedsprisen vil variere på fakturaen din gjennom året. Årsprisen er"," ",l.createElement("strong",null,(0,a._)(4176,{suffix:"kr"})),".")},r&&{initialPlacement:r}))))},E={choiceProps:[{name:"Plassering",values:["Top","Top start","Top end","Left","Right"],defaultValue:0}]},v=e=>{let{choiceValues:t,displayValues:n}=e,r="top";t&&t.initialPlacement&&(r=t.initialPlacement);return"<p className={jkl-"+("compact"===(null==n?void 0:n.density)?"small":(null==t?void 0:t["Typografinivå"])||"body").toLowerCase().replace(/ /g,"-")+'}>\n    Du betaler{" "}\n    <span style={{ whiteSpace: "nowrap" }}>\n        348 kr/mnd{" "}\n        <Tooltip\n            content={\n                <span>\n                    Månedsprisen vil variere på fakturaen din gjennom året. Årsprisen er{" "}\n                    <strong>{formatValuta(4176, { suffix: "kr" })}</strong>.\n                </span>\n            }\n            placement={'+r+"}\n        />\n    </span>\n</p>>"};function b(e){const t=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",a:"a",em:"em"},(0,r.ah)(),e.components),{Ingress:n,ComponentExample:a,PortalImage:o}=t;return a||j("ComponentExample",!0),n||j("Ingress",!0),o||j("PortalImage",!0),l.createElement(l.Fragment,null,l.createElement(n,null,l.createElement(t.p,null,"En tooltip lar oss skjule informasjon på en måte som samtidig gjør den tilgjenglig i kontekst for de brukerne som\nser etter den.")),"\n",l.createElement(t.p,null,"Som hovedregel skal vi ikke skjule informasjon som kan være til hjelp for brukeren. Hvis det trengs en forklaring\nbør den ofte være synlig. Likevel trenger vi noen ganger å vike fra det prinsippet. Der kommer Tooltip inn."),"\n",l.createElement(a,{title:"Tooltip",component:g,codeExample:v,knobs:E}),"\n",l.createElement(t.h2,null,"Når bruker vi tooltip?"),"\n",l.createElement(t.p,null,"En tooltip kan være nødvendig hvis:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Vi bruker et begrep fra forsikringsdomenet som kan være nytt for kunder."),"\n",l.createElement(t.li,null,"Vi vil forklare mer om noe som et fåtall av kundene kanskje lurer på."),"\n",l.createElement(t.li,null,"Vi bruker en forkortelese i et internsystem som kan være ukjent for nye ansatte."),"\n"),"\n",l.createElement(t.p,null,"Et tooltip bør begrenses til maksimalt to setninger. Om du har behov for mer tekst enn det kan det være riktigere å bruke for eksempel:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"/preview/feat/context-menu-toggle/komponenter/expandbutton"},"ExpandButton")),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"/preview/feat/context-menu-toggle/komponenter/accordion"},"Accordion")),"\n"),"\n",l.createElement(t.p,null,"En tooltip skal ikke ha lenker eller andre interaktive elementer i seg."),"\n",l.createElement(t.p,null,"En tooltip skal ikke ligge på en egen linje, men være tilknyttet tekst eller et interaktivt element. Bruk ",l.createElement(t.em,null,"non-breaking space")," eller andre metoder for å holde Tooltip på samme linje."),"\n",l.createElement(t.h2,null,"Eksempler på bruk"),"\n",l.createElement(o,{src:"/assets/documentation/tooltip/tooltip-mndpris.png",caption:"Forklare for kunden hvorfor fakturaprisen kan være ulik den som blir vist her."}))}var h=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(b,e)):b(e)};function j(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var y=n(72285),x=n(22756),w=n(95573),N=n(1634);const _=e=>{let{pageContext:t}=e;return l.createElement(x.p,{title:t.title})},P=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:o}=n.page,{types:i}=r;return l.createElement(N.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(w.M1,Object.assign({},o,{versions:r.versions})),l.createElement(w.w5,o),a,i&&l.createElement(y.l,{types:i}))};function F(e){return l.createElement(P,e,l.createElement(h,e))}},20439:function(e,t,n){n.d(t,{u:function(){return a}});var r=n(44820);const l={locale:"no-NB"};function a(e,t){const n=(0,r.p)(e);if(!n)return e.toString();const{locale:a,...o}={...l,...t};return new Intl.NumberFormat(a,o).format(n)}},44820:function(e,t,n){n.d(t,{p:function(){return l}});n(31369);const r=(e,t)=>{const n=Array.isArray(e)?e:e.split(""),r=n.lastIndexOf(t);return n.filter(((e,n)=>e!==t||n===r)).join("")};function l(e){if("number"==typeof e)return e;const t=e.replaceAll(/\s/g,"").split(""),n=t.reduce(((e,t)=>","===t||"."===t?t:e),null);return Number("."===n?r(t,".").replace(",",""):","===n?r(t,",").replace(".","").replace(",","."):t.join(""))}},42913:function(e,t,n){n.d(t,{_:function(){return i}});var r=n(10793),l=n(20439),a=n(44820);const o={locale:"no-NB",minimumFractionDigits:0,maximumFractionDigits:2,suffix:"kr"};function i(e,t){const n=(0,a.p)(e);if(isNaN(n))return e.toString();const i=Number.isInteger(n)?{}:{minimumFractionDigits:2,maximumFractionDigits:2},s=void 0!==(null==t?void 0:t.suffix)?t.suffix:o.suffix,{prefix:c,...p}={...o,...i,...t},m=null!=c&&c.length?""+c+r.vk:"",u=null!=s&&s.length?""+r.vk+s:"";return""+m+(0,l.u)(n,p)+u}}}]);