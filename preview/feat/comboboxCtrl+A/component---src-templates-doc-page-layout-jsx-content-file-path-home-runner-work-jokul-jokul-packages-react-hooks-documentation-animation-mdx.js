"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[5505],{67622:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return I},Head:function(){return A},default:function(){return L}});var a=n(47160),r=n(70079),s=n(56496),i=n(83523),o=n(8832);n(89185);const l=e=>{console.log("transition started ("+(e?"opening":"closing")+")")},c=e=>{console.log("transition ended ("+(e?"open":"closed")+")")};var m=()=>{const{0:e,1:t}=(0,r.useState)(!1),[n]=function(e,t){const n=(0,o.z)(e),a=(null==t?void 0:t.easing)||"standard",l=(null==t?void 0:t.timing)||"productive",c=(null==t?void 0:t.display)||"block",m=s.F[l]+" height "+s.Z[a],{prefersReducedMotion:u}=(0,i.c)(),d=(0,r.useRef)(),p=(0,r.useRef)(),y=(0,r.useRef)(null);function h(n){const a=y.current;var r;a&&n.target===a&&(e?a.removeAttribute("style"):(a.removeAttribute("style"),a.style.display="none"),null==t||null===(r=t.onTransitionEnd)||void 0===r||r.call(t,e,y))}const v=(0,r.useCallback)((()=>{var a;const r=y.current;if(r&&void 0!==n){if(e){if(e&&n)return}else if(r.style.display="none",!n)return;var s,i;if(null==t||null===(a=t.onTransitionStart)||void 0===a||a.call(t,e,y),u)r.removeAttribute("style"),e&&(null==t||null===(i=t.onFirstVisible)||void 0===i||i.call(t,e,y)),null==t||null===(s=t.onTransitionEnd)||void 0===s||s.call(t,e,y);else if(r.style.transition=m,r.style.display=c,r.style.overflow="hidden",e){var o;null==t||null===(o=t.onFirstVisible)||void 0===o||o.call(t,e,y),r.style.height="0",r.style.height=r.scrollHeight+"px"}else{if(0===r.scrollHeight)return void r.removeAttribute("style");r.style.height=r.scrollHeight+"px",d.current=requestAnimationFrame((()=>{p.current=requestAnimationFrame((()=>{r.style.height="0px"}))}))}}}),[e,t,n,m,u,c]);return(0,r.useEffect)((()=>{v()}),[e,v]),(0,r.useEffect)((()=>{const e=y.current;return e&&e.addEventListener("transitionend",h),()=>{e&&e.removeEventListener("transitionend",h)}}),[e]),(0,r.useEffect)((()=>{const e=d.current,t=p.current;return()=>{e&&cancelAnimationFrame(e),t&&cancelAnimationFrame(t)}}),[d,p]),[y,v]}(e,{onTransitionStart:l,onTransitionEnd:c});return r.createElement("section",null,r.createElement("button",{className:"jkl-button jkl-button--secondary",onClick:()=>t((e=>!e))},"Animer ",e?"ut":"inn"),r.createElement("div",{ref:n},r.createElement("div",{className:"lorem-text"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet, aperiam asperiores aut beatae consequuntur cumque delectus dolore doloremque ea fugit inventore ipsam libero magnam officiis optio soluta veniam voluptatibus!")))};const u='\nconst [isOpen, setIsOpen] = useState(false);\nconst [animationRef] = useAnimatedHeight<HTMLDivElement>(isOpen);\n\nreturn (\n    <section>\n        <button className="jkl-button jkl-button--secondary" onClick={() => setIsOpen((isOpen) => !isOpen)}>\n            Animate {isOpen ? "Out" : "In"}\n        </button>\n        <div ref={animationRef}>\n            <div className="lorem-text">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet, aperiam asperiores aut\n                beatae consequuntur cumque delectus dolore doloremque ea fugit inventore ipsam libero magnam\n                officiis optio soluta veniam voluptatibus!\n            </div>\n        </div>\n    </section>\n);\n';function d(e,t){const n=(0,o.z)(e),a=(null==t?void 0:t.easing)||"standard",l=(null==t?void 0:t.timing)||"productive",c=s.F[l]+" height "+s.Z[a],{prefersReducedMotion:m}=(0,i.c)(),u=(0,r.useRef)(),d=(0,r.useRef)(),p=(0,r.useRef)(null),y=(0,r.useCallback)((n=>{const a=p.current;var r;a&&n.target===a&&(a.removeAttribute("style"),null==t||null===(r=t.onTransitionEnd)||void 0===r||r.call(t,e,p))}),[t,e]),h=(0,r.useCallback)((()=>{var a;const r=p.current;if(r&&(void 0===n&&(r.dataset.expanded=e?"true":"false"),!(!e&&!n||e&&n))){var s;if(null==t||null===(a=t.onTransitionStart)||void 0===a||a.call(t,e,p),m)return r.removeAttribute("style"),r.dataset.expanded=e?"true":"false",void(null==t||null===(s=t.onTransitionEnd)||void 0===s||s.call(t,e,p));e?function(e,t,n,a){const r=e.current;if(!r)return;r.removeAttribute("style");const s=r.scrollHeight;n.current=requestAnimationFrame((()=>{r.style.removeProperty("transition"),r.dataset.expanded="false";const e=r.getBoundingClientRect().height;r.style.setProperty("height",e+"px"),r.style.setProperty("overflow-y","hidden"),a.current=requestAnimationFrame((()=>{r.style.setProperty("transition",t),r.style.setProperty("height",s+"px"),r.dataset.expanded="true"}))}))}(p,c,u,d):function(e,t,n,a){const r=e.current;if(!r)return;r.removeAttribute("style");const s=r.scrollHeight;n.current=requestAnimationFrame((()=>{r.style.removeProperty("transition"),r.dataset.expanded="false";const e=r.getBoundingClientRect().height;r.dataset.expanded="true",r.style.setProperty("height",s+"px"),r.style.setProperty("overflow-y","hidden"),a.current=requestAnimationFrame((()=>{r.style.setProperty("transition",t),r.style.setProperty("height",e+"px"),r.dataset.expanded="false"}))}))}(p,c,u,d)}}),[n,e,t,m,c]);return(0,r.useEffect)((()=>{h()}),[e,h]),(0,r.useEffect)((()=>{const e=p.current;return e&&e.addEventListener("transitionend",y),()=>{e&&e.removeEventListener("transitionend",y)}}),[e]),(0,r.useEffect)((()=>{const e=u.current,t=d.current;return()=>{e&&cancelAnimationFrame(e),t&&cancelAnimationFrame(t)}}),[u,d]),[p,h]}var p=()=>{const{0:e,1:t}=(0,r.useState)(!1),[n]=d(e,{timing:"expressive"});return r.createElement("section",{ref:n,className:"animation-between-example"},r.createElement("p",{className:"jkl-heading-2"},"Lorem Ipsum"),r.createElement("p",{className:"jkl-body"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."),r.createElement("p",{className:"jkl-body"},"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."),r.createElement("p",{className:"jkl-body"},"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),r.createElement("button",{className:"jkl-button jkl-button--secondary","data-density":"compact",onClick:()=>t((e=>!e))},"Vis "+(e?"mindre":"mer")))};const y='\nconst [isExpanded, setIsExpanded] = useState(false);\nconst [animationRef] = useAnimatedHeightBetween(isExpanded, { timing: "expressive" });\n\nreturn (\n    <section ref={animationRef} className="animation-between-example">\n        <p className="jkl-heading-2">Lorem Ipsum</p>\n        <p className="jkl-body">\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n            industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\n            scrambled it to make a type specimen book.\n        </p>\n        <p className="jkl-body">\n            It has survived not only five centuries, but also the leap into electronic typesetting, remaining\n            essentially unchanged.\n        </p>\n        <p className="jkl-body">\n            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and\n            more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n        </p>\n        <button\n            className="jkl-button jkl-button--secondary"\n            data-density="compact"\n            onClick={() => setIsExpanded((prev) => !prev)}\n        >{`Vis ${isExpanded ? "mindre" : "mer"}`}</button>\n    </section>\n);\n';const h=[r.createElement(r.Fragment,null,r.createElement("p",{className:"jkl-body"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")),r.createElement(r.Fragment,null,r.createElement("p",{className:"jkl-body"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."),r.createElement("p",{className:"jkl-body"},"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.")),r.createElement(r.Fragment,null,r.createElement("p",{className:"jkl-body"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."),r.createElement("p",{className:"jkl-body"},"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."),r.createElement("p",{className:"jkl-body"},"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")),r.createElement(r.Fragment,null,r.createElement("p",{className:"jkl-body"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."),r.createElement("p",{className:"jkl-body"},"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."),r.createElement("p",{className:"jkl-body"},"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),r.createElement("p",{className:"jkl-body"},"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."))];function v(e){let t=h[Math.floor(Math.random()*h.length)];return t===e&&(t=v(e)),t}var g=()=>{const{0:e,1:t}=(0,r.useState)(v()),n=function(e,t){const n=(0,o.z)(e),{0:a,1:l}=(0,r.useState)(0),c=(null==t?void 0:t.easing)||"standard",m=(null==t?void 0:t.timing)||"expressive",u=s.F[m]+" height "+s.Z[c],{prefersReducedMotion:d}=(0,i.c)(),p=(0,r.useRef)(),y=(0,r.useRef)(),h=(0,r.useRef)(null),v=(0,r.useCallback)((e=>{const n=h.current;var a;n&&e.target===n&&(n.removeAttribute("style"),null==t||null===(a=t.onTransitionEnd)||void 0===a||a.call(t,h))}),[t]),g=(0,r.useCallback)((()=>{const e=h.current;if(!e)return;e.removeAttribute("style");const t=e.scrollHeight;p.current=requestAnimationFrame((()=>{e.style.removeProperty("transition"),e.style.setProperty("height",a+"px"),e.style.setProperty("overflow-y","hidden"),y.current=requestAnimationFrame((()=>{e.style.setProperty("transition",u),e.style.setProperty("height",t+"px")}))})),l(t)}),[u,a]),f=(0,r.useCallback)((()=>{var a;const r=h.current;var s;r&&(void 0!==n?e!==n&&(null==t||null===(a=t.onTransitionStart)||void 0===a||a.call(t,h),d?null==t||null===(s=t.onTransitionEnd)||void 0===s||s.call(t,h):g()):l(r.scrollHeight))}),[g,e,n,t,d]);return(0,r.useEffect)((()=>{f()}),[e,f]),(0,r.useEffect)((()=>{const e=h.current;return e&&e.addEventListener("transitionend",v),()=>{e&&e.removeEventListener("transitionend",v)}}),[v]),(0,r.useEffect)((()=>{const e=p.current,t=y.current;return()=>{e&&cancelAnimationFrame(e),t&&cancelAnimationFrame(t)}}),[p,y]),h}(e);return r.createElement("section",{ref:n,className:"auto-animation-example"},r.createElement("p",{className:"jkl-heading-2"},"Lorem Ipsum"),e,r.createElement("button",{className:"jkl-button jkl-button--secondary","data-density":"compact",onClick:()=>{t(v(e))}},"Endre innhold"))};const f='\nconst [content, setContent] = useState(randomContentBlock());\nconst animationRef = useAutoAnimatedHeight(content);\n\nconst changeContent = () => {\n    setContent(randomContentBlock(content));\n};\n\nreturn (\n    <section ref={animationRef} className="auto-animation-example">\n        <p className="jkl-heading-2">Lorem Ipsum</p>\n        {content}\n        <button className="jkl-button jkl-button--secondary" data-density="compact" onClick={changeContent}>\n            Endre innhold\n        </button>\n    </section>\n);\n';function k(e){const t=Object.assign({p:"p",h2:"h2",code:"code",a:"a"},(0,a.ah)(),e.components),{Ingress:n,ComponentExample:s}=t;return s||E("ComponentExample",!0),n||E("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n,null,r.createElement(t.p,null,"Animering av ting inn og ut av DOMet i React er ikke lett, men med useAnimatedHeight blir jobben en god del lettere.")),"\n",r.createElement(s,{title:"useAnimatedHeight",component:m,codeExample:u}),"\n",r.createElement(t.p,null,"Hooken tar seg av all CSS for animasjonen selv. Du kan overstyre animasjonen om du trenger en annen timing eller easing-funksjon."),"\n",r.createElement(t.h2,null,"Animering mellom to høyder"),"\n",r.createElement(t.p,null,"Dersom du ikke vil skjule elementet helt, men heller animere mellom to høyder, kan du bruke ",r.createElement(t.code,null,"useAnimatedHeightBetween"),". Her styrer du selv\nhøyden på elementet, og hooken tar seg av animasjonen. Hooken setter ",r.createElement(t.code,null,"data-expanded")," til ",r.createElement(t.code,null,"true")," når elementet er åpent, og ",r.createElement(t.code,null,"false")," når det er lukket,\nog animerer høyden på elementet mellom de to tilstandene. Se et ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/blob/main/packages/react-hooks/documentation/animation-example.scss"},"eksempel på stilark")," på GitHub-repoet vårt."),"\n",r.createElement(s,{title:"useAnimatedHeightBetween",component:p,codeExample:y}),"\n",r.createElement(t.h2,null,"Animering basert på innhold"),"\n",r.createElement(t.p,null,"Hvis du vil at elementet skal animeres når det får endret innhold kan du bruke ",r.createElement(t.code,null,"useAutoAnimatedHeight"),". Her kan du sende inn innholdet, eller\nen annen verdi, som hooken lytter på endring i. Ved endring animeres elementet til sin nye høyde dersom den er endret."),"\n",r.createElement(s,{title:"useAutoAnimatedHeight",component:g,codeExample:f}))}var b=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(k,e)):k(e)};function E(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var j=n(72285),w=n(22756),x=n(95573),N=n(1634);const A=e=>{let{pageContext:t}=e;return r.createElement(w.p,{title:t.title})},I=e=>{let{location:t,data:n,pageContext:a,children:s}=e;const{frontmatter:i}=n.page,{types:o}=a;return r.createElement(N.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(x.M1,Object.assign({},i,{versions:a.versions})),r.createElement(x.w5,i),s,o&&r.createElement(j.l,{types:o}))};function L(e){return r.createElement(I,e,r.createElement(b,e))}},72285:function(e,t,n){n.d(t,{l:function(){return y}});var a=n(78217),r=n(41994),s=n(87505),i=n(70079),o=n(54656);const l=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},u=(e,t)=>{const{scrollLeft:n,scrollWidth:a}=e,{clientWidth:r}=t,s=n>0,i=a-n>r;t.classList.toggle("left-shadow",s),t.classList.toggle("right-shadow",i)},d=e=>{const t=e.target,n=t.parentElement;u(t,n)},p=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&u(t,e)}}))})),a=n.current.parentElement.parentElement;t.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(s.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=t,a.map((e=>{var t,n;return[e.name?l(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?l(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?l(e.type.name):""]})))})));var a},y=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(a.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const a=n.props?Object.values(n.props).filter(m):[],s=n.props?Object.values(n.props).filter(c):[],l=(e=>{var t,n,a,r,s,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(a=e.description)||void 0===a?void 0:a.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(s=r.param)||void 0===s?void 0:s.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},l&&i.createElement(o.dn,{className:"jkl-portal-code-block"},l),a.length>0&&i.createElement(p,{props:a}),s.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(p,{props:s})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return l}});var a=n(26372),r=n.n(a),s=n(49597),i=n(70079),o=n(34044);const l=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:a}=(0,i.useContext)(o.R),l="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(s.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||l?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return i}});var a=n(26372),r=n.n(a),s=n(70079);const i=e=>{let{className:t,density:n,...a}=e;return s.createElement("div",{"data-testid":"jkl-accordion",className:r()("jkl-accordion",t),"data-density":n,...a})}},41994:function(e,t,n){n.d(t,{Q:function(){return c}});var a=n(53484),r=n(3438),s=n(84490),i=n(26372),o=n.n(i),l=n(70079);const c=e=>{let{children:t,title:n,className:i,startExpanded:c=!1,onClick:m,...u}=e;const d=(0,r.M)("title"),p=(0,r.M)("content"),{0:y,1:h}=(0,l.useState)(c),[v]=(0,s.v)(y,{easing:"exit",timing:"expressive"});return l.createElement("div",{"data-testid":"jkl-accordion-item",...u,className:o()("jkl-accordion-item",i,{"jkl-accordion-item--expanded":y})},l.createElement("button",{id:d,className:"jkl-accordion-item__title",type:"button","aria-expanded":y,"aria-controls":p,onClick:e=>{const t=!y;h(t),m&&m(e,t)}},n,l.createElement(a.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!y,bold:y})),l.createElement("div",{id:p,ref:v,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":d,hidden:!y},l.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return u}});var a=n(70079),r=n(41699),s=n(65174),i=n(6914),o=n(82546),l=n(39126),c=n(66169),m=n(94509);const u=(0,a.forwardRef)(((e,t)=>{let{caption:n,columns:u,emptyTableText:d,rows:p,verticalAlign:y,...h}=e;return a.createElement(r.i,{fullWidth:!0,...h,ref:t},n&&a.createElement(i.R,{srOnly:!0},n),a.createElement(l.s,null,a.createElement(m.S,null,u.map(((e,t)=>a.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),a.createElement(s.R,null,0===p.length&&d&&a.createElement(m.S,null,a.createElement(o.p,{colSpan:u.length},d)),p.map(((e,t)=>a.createElement(m.S,{key:t},e.map(((e,t)=>a.createElement(o.p,{key:t,"data-th":u[t],verticalAlign:y},e))))))))}));u.displayName="DataTable"},89185:function(){}}]);