"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[2903],{67386:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return p},Head:function(){return d},default:function(){return u}});var l=n(47160),r=n(70079);function a(e){const t=Object.assign({p:"p",a:"a",h2:"h2",ul:"ul",li:"li"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,"Den forrige måneden var kanskje ikke den mest spennende for Jøkul sin del.\nDet har stort sett være finpuss og bugfixer som har blitt publisert. Sånn sett ser oktober ut til å bli en mer spennede måned.\nOktober er også ",r.createElement(t.a,{href:"https://hacktoberfest.digitalocean.com/"},"hacktober"),", og siden Jøkul er open source kvalifiserer alle PRer i oktober.\nDet ligger saker og ting i issuelisten om du har lyst å bidra, du kan feks starte ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues?q=is%3Aissue+is%3Aopen+label%3A%22%F0%9F%A7%B8+good+first+issue%22"},"her"),"u\nEllers så står Dependabot på som en helt og holder dependenciene våre oppdatert."),"\n",r.createElement(t.h2,null,"🌱 Releaser"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"💥 Button har hatt en breaking change med ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1370"},"forwardRef"),".\nI praksis skal ikke det bety så mye i de aller fleste tilfeller. ",r.createElement(t.a,{href:"https://reactjs.org/docs/forwarding-refs.html"},"Les mer")),"\n"),"\n",r.createElement(t.h2,null,"📰 Oppdateringer"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Vi kan ønske @Mikaila94 velkommen som ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1335"},"bidragsyter"),"!"),"\n",r.createElement(t.li,null,"Vi har endelig fått på plass en fullverdi ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1295"},"font stack")),"\n",r.createElement(t.li,null,"@piofinn forklarer hvordan ",r.createElement(t.a,{href:"/preview/feat/context-menu-toggle/blog/darkmode/"},"dark mode funker")),"\n",r.createElement(t.li,null,"@Steinop gikk i dybden på ",r.createElement(t.a,{href:"/preview/feat/context-menu-toggle/blog/ikoner_sept2020/"},"ikoner")),"\n"),"\n",r.createElement(t.h2,null,"🔮 Kommende"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Komponent for å laste bilder i ulik størrelse for ulike dingser, med blur up for hurtigere oppleved ytelse"),"\n",r.createElement(t.li,null,"Hovedmenyen til portalen er på vei inn som komponent"),"\n"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)},i=n(72285),s=n(22756),c=n(95573),m=n(1634);const d=e=>{let{pageContext:t}=e;return r.createElement(s.p,{title:t.title})},p=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:o}=n.page,{types:s}=l;return r.createElement(m.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(c.M1,Object.assign({},o,{versions:l.versions})),r.createElement(c.w5,o),a,s&&r.createElement(i.l,{types:s}))};function u(e){return r.createElement(p,e,r.createElement(o,e))}},72285:function(e,t,n){n.d(t,{l:function(){return u}});var l=n(78217),r=n(41994),a=n(87505),o=n(70079);const i=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),s=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:r}=t,a=n>0,o=l-n>r;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",o)},d=e=>{const t=e.target,n=t.parentElement;m(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?i(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?i(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?i(e.type.name):""]})))})));var l},u=e=>{let{types:t}=e;return o.createElement("section",{className:"jkl-spacing-104--bottom jkl-portal-paragraph"},o.createElement("h2",{className:"jkl-heading-1 jkl-spacing-104--top"},"React API"),o.createElement("p",{className:"jkl-body jkl-spacing-16--top"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(l.U,{className:"jkl-spacing-40--top jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(c):[],a=n.props?Object.values(n.props).filter(s):[];return o.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},l.length>0&&o.createElement(p,{props:l}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var l=n(26372),r=n.n(l),a=n(49597),o=n(70079),i=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,o.useContext)(i.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||s?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return o}});var l=n(26372),r=n.n(l),a=n(70079);const o=e=>{let{className:t,density:n,...l}=e;return a.createElement("div",{"data-testid":"jkl-accordion",className:r()("jkl-accordion",t),"data-density":n,...l})}},41994:function(e,t,n){n.d(t,{Q:function(){return c}});var l=n(53484),r=n(3438),a=n(84490),o=n(26372),i=n.n(o),s=n(70079);const c=e=>{let{children:t,title:n,className:o,startExpanded:c=!1,onClick:m,...d}=e;const p=(0,r.M)("title"),u=(0,r.M)("content"),{0:k,1:f}=(0,s.useState)(c),[h]=(0,a.v)(k,{easing:"exit",timing:"expressive"});return s.createElement("div",{"data-testid":"jkl-accordion-item",...d,className:i()("jkl-accordion-item",o,{"jkl-accordion-item--expanded":k})},s.createElement("button",{id:p,className:"jkl-accordion-item__title",type:"button","aria-expanded":k,"aria-controls":u,onClick:e=>{const t=!k;f(t),m&&m(e,t)}},n,s.createElement(l.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!k,bold:k})),s.createElement("div",{id:u,ref:h,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":p,hidden:!k},s.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return d}});var l=n(70079),r=n(41699),a=n(65174),o=n(6914),i=n(82546),s=n(39126),c=n(66169),m=n(94509);const d=(0,l.forwardRef)(((e,t)=>{let{caption:n,columns:d,emptyTableText:p,rows:u,verticalAlign:k,...f}=e;return l.createElement(r.i,{fullWidth:!0,...f,ref:t},n&&l.createElement(o.R,{srOnly:!0},n),l.createElement(s.s,null,l.createElement(m.S,null,d.map(((e,t)=>l.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===u.length&&p&&l.createElement(m.S,null,l.createElement(i.p,{colSpan:d.length},p)),u.map(((e,t)=>l.createElement(m.S,{key:t},e.map(((e,t)=>l.createElement(i.p,{key:t,"data-th":d[t],verticalAlign:k},e))))))))}));d.displayName="DataTable"}}]);