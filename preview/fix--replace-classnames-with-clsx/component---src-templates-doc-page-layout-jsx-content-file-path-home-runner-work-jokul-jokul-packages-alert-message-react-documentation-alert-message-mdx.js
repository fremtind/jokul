"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[2632],{31248:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return V},Head:function(){return O},default:function(){return C}});var l=n(47160),a=n(70079),r=n(41992),s=n(3438),i=n(53048),o=n(95176);const c=(0,a.forwardRef)(((e,t)=>{let{label:n="Lukk",...l}=e;return a.createElement("button",Object.assign({ref:t,type:"button",title:n},l),a.createElement(o.T,{variant:"small",bold:!0}),a.createElement("span",{className:"jkl-sr-only"},n))}));c.displayName="DismissButton";var m=n(3133),d=n(36090),u=n(91720),p=n(65838);const k=e=>{let{messageType:t}=e;switch(t){case"error":return a.createElement(m.P,{className:"jkl-alert-message__icon"});case"info":return a.createElement(d.s,{className:"jkl-alert-message__icon"});case"success":return a.createElement(u.t,{className:"jkl-alert-message__icon"});case"warning":return a.createElement(p.a,{className:"jkl-alert-message__icon"});default:return null}};function g(e){return t=>{let{id:n,className:l,density:r,maxContentWidth:o,paddingLeft:m,role:d="status",dismissed:u,dismissAction:p,children:g,...f}=t;const v=(0,s.M)(n||"jkl-alert-message",{generateSuffix:!n});return a.createElement("div",Object.assign({role:d},f,{id:v,className:(0,i.Z)("jkl-alert-message","jkl-alert-message--"+e,l,{"jkl-alert-message--dismissed":u}),"data-density":r}),a.createElement("div",{className:"jkl-alert-message__content","data-testid":"alert-message-content","data-theme":"light",style:{maxWidth:o,paddingLeft:m}},a.createElement(k,{messageType:e}),a.createElement("span",{className:"jkl-alert-message__message"},g),(null==p?void 0:p.handleDismiss)&&a.createElement(c,{"aria-controls":v,className:"jkl-alert-message__dismiss-button",label:p.buttonTitle||"Lukk",onClick:p.handleDismiss})))}}const f=g("info");f.displayName="InfoAlertMessage";const v=g("error");v.displayName="ErrorAlertMessage";const E=g("warning");E.displayName="WarningAlertMessage";const b=g("success");b.displayName="SuccessAlertMessage";const h={boolProps:["Dismissable"],choiceProps:[{name:"Variant",values:["Info","Success","Warning","Error"],defaultValue:0}]},j=e=>{switch(e){case"Info":default:return f;case"Success":return b;case"Warning":return E;case"Error":return v}},y=e=>{let{boolValues:t,choiceValues:n}=e;const l=j(n?n.Variant:""),{0:s,1:i}=(0,a.useState)(!1),o=null!=t&&t.Dismissable?{handleDismiss:()=>{i(!0),setTimeout((()=>i(!1)),2600)},buttonTitle:"Merk som lest"}:void 0;return a.createElement(l,{dismissed:s,dismissAction:o,role:"none presentation"},"Hei, jeg er en varslingsmelding av typen ",n?n.Variant:"ᕙ(⇀‸↼‶)ᕗ"," med"," ",a.createElement(r.O,{href:"/komponenter/alertmessage"},"en navlink"))},N=e=>{let{boolValues:t,choiceValues:n}=e;return"\n<"+j(n?n.Variant:"").displayName+" dismissed={false} dismissAction={"+(null!=t&&t.Dismissable?'{\n    handleDismiss: () => setDismissed(true),\n    buttonTitle: "Merk som lest",\n}':void 0)+"}  />\n"};function _(e){const t=Object.assign({p:"p",h2:"h2",a:"a",ul:"ul",li:"li"},(0,l.ah)(),e.components),{Ingress:n,ComponentExample:r}=t;return r||x("ComponentExample",!0),n||x("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(n,null,a.createElement(t.p,null,"En varselmelding er en beskjed til brukeren som vises i en global sammenheng. Det kan være et varsel om at noe er\nfeil, global informasjon eller lignende.")),"\n",a.createElement(r,{title:"AlertMessage",component:y,knobs:h,codeExample:N}),"\n",a.createElement(t.p,null,"Innholdet i en varselmelding bør ikke bryte over flere linjer på desktop. På mobil kan det vises over flere linjer så lenge varselet ikke skjuler viktig innhold under."),"\n",a.createElement(t.p,null,"Dersom meldingen ikke er koblet til en tilstand på siden (for eksempel en feil i et skjema) kan man la brukeren lukke den. For global informasjon som driftsmeldinger bør man huske valget om å lukke meldingen, så brukeren slipper å se den på nytt."),"\n",a.createElement(t.h2,null,"Varianter"),"\n",a.createElement(t.p,null,"Vi har fire ulike varsler, med fargene blå, rød, gul og grønn. Fargene i varselmeldinger har en betydning på samme måte som ",a.createElement(t.a,{href:"/preview/fix--replace-classnames-with-clsx/komponenter/messagebox"},"MessageBox"),":"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Blått er for generell informasjon til brukeren."),"\n",a.createElement(t.li,null,"Gult gir brukeren en advarsel, for eksempel at en funksjonalitet er i beta og derfor er ustabil."),"\n",a.createElement(t.li,null,"Rødt gir brukeren en feilmelding, for eksempel om det oppstår en systemfeil eller brukeren avbryter en handling."),"\n",a.createElement(t.li,null,"Grønt betyr at en handling var vellykket."),"\n"),"\n",a.createElement(t.h2,null,"Tilgjengelighet"),"\n",a.createElement(t.p,null,"Når vi bruker meldinger med farge, må vi alltid huske å ha en god og beskrivende tekst, siden farge ikke er et godt nok kjennetegn for alle brukere. Skriv en presis meldingstekst, der du sier det viktigste først."),"\n",a.createElement(t.h2,null,"Når bruker vi en AlertMessage?"),"\n",a.createElement(t.p,null,"Før bruker en AlertMessage er det greit å ha tatt stilling til noen spørsmål:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Er innholdet i beskjeden tydelig nok til å stå på egenhånd, uten tilknytning til noe annet på siden?"),"\n",a.createElement(t.li,null,"Får innholdet plass på én linje på desktop?"),"\n"),"\n",a.createElement(t.p,null,"Varsler skal vises plassert øverst på siden og ta opp hele sidebredden. Bruk ",a.createElement(t.a,{href:"/preview/fix--replace-classnames-with-clsx/komponenter/messagebox"},"MessageBox")," om du skal vise en beskjed i en annen kontekst."))}var w=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(_,e)):_(e)};function x(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var M=n(72285),S=n(22756),A=n(95573),D=n(1634);const O=e=>{let{pageContext:t}=e;return a.createElement(S.p,{title:t.title})},V=e=>{let{location:t,data:n,pageContext:l,children:r}=e;const{frontmatter:s}=n.page,{types:i}=l;return a.createElement(D.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(A.M1,Object.assign({},s,{versions:l.versions})),a.createElement(A.w5,s),r,i&&a.createElement(M.l,{types:i}))};function C(e){return a.createElement(V,e,a.createElement(w,e))}},72285:function(e,t,n){n.d(t,{l:function(){return k}});var l=n(78217),a=n(41994),r=n(87505),s=n(70079),i=n(54656);const o=e=>s.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:a}=t,r=n>0,s=l-n>a;t.classList.toggle("left-shadow",r),t.classList.toggle("right-shadow",s)},u=e=>{const t=e.target,n=t.parentElement;d(t,n)},p=e=>{let{props:t}=e;const n=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),s.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},s.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},s.createElement(r.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?o(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?o(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?o(e.type.name):""]})))})));var l},k=e=>{let{types:t}=e;return s.createElement("section",{className:"mb-104 jkl-portal-paragraph"},s.createElement("h2",{className:"heading-1 mt-104"},"React API"),s.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),s.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(m):[],r=n.props?Object.values(n.props).filter(c):[],o=(e=>{var t,n,l,a,r,s;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(a=e.tags)||void 0===a||null===(r=a.param)||void 0===r?void 0:r.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(s=e.tags)&&void 0!==s&&s.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return s.createElement(a.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},o&&s.createElement(i.dn,{className:"jkl-portal-code-block"},o),l.length>0&&s.createElement(p,{props:l}),r.length>0&&s.createElement(s.Fragment,null,s.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),s.createElement(p,{props:r})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return o}});var l=n(26372),a=n.n(l),r=n(49597),s=n(70079),i=n(34044);const o=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,s.useContext)(i.R),o="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return s.createElement(r.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||o?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return r}});var l=n(53048),a=n(70079);const r=e=>{let{className:t,density:n,id:r,...s}=e;return a.createElement("section",{role:"group","data-testid":"jkl-accordion",className:(0,l.Z)("jkl-accordion",t),"data-density":n,id:r,...s})}},41994:function(e,t,n){n.d(t,{Q:function(){return i}});var l=n(53484),a=n(1386),r=n(53048),s=n(70079);const i=e=>{let{children:t,title:n,className:i,startExpanded:o=!1,onClick:c,id:m,...d}=e;const{0:u,1:p}=(0,s.useState)(o),{0:k}=(0,s.useState)((()=>o)),{detailsRef:g,summaryRef:f,contentRef:v,onSummaryClick:E}=(0,a.E)({onOpenChange:(e,t)=>{p(e),c&&c(t,e)},isExpanded:k});return s.createElement("details",{"data-testid":"jkl-accordion-item",...d,className:(0,r.Z)("jkl-accordion-item",i),ref:g,id:m},s.createElement("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:E,ref:f},n,s.createElement(l.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!u,bold:u})),s.createElement("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:v},s.createElement("div",{className:"jkl-accordion-item__content"},t)))}},41992:function(e,t,n){n.d(t,{O:function(){return r}});var l=n(53048),a=n(70079);const r=e=>{let{active:t=!1,back:n=!1,className:r,children:s,...i}=e;return a.createElement("a",{className:(0,l.Z)("jkl-nav-link",{"jkl-nav-link--active":t,"jkl-nav-link--back":n},r),...i},s)}},87505:function(e,t,n){n.d(t,{w:function(){return d}});var l=n(70079),a=n(41699),r=n(65174),s=n(6914),i=n(82546),o=n(39126),c=n(66169),m=n(94509);const d=(0,l.forwardRef)(((e,t)=>{let{caption:n,columns:d,emptyTableText:u,rows:p,verticalAlign:k,...g}=e;return l.createElement(a.i,{fullWidth:!0,...g,ref:t},n&&l.createElement(s.R,{srOnly:!0},n),l.createElement(o.s,null,l.createElement(m.S,null,d.map(((e,t)=>l.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(r.R,null,0===p.length&&u&&l.createElement(m.S,null,l.createElement(i.p,{colSpan:d.length},u)),p.map(((e,t)=>l.createElement(m.S,{key:t},e.map(((e,t)=>l.createElement(i.p,{key:t,"data-th":d[t],verticalAlign:k},e))))))))}));d.displayName="DataTable"}}]);