"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[8252],{40798:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return _},Head:function(){return N},default:function(){return I}});var r=t(47160),l=t(70079),o=t(86733),a=t(10188),i=t(17417),c=t(45901),s=t(54800),u=t(54235),m=t(15971),p=t(35038),d=t(31401),g=t(58675),k=t(26372),f=t.n(k);const h=(0,l.forwardRef)(((e,n)=>{const{"aria-checked":t,className:r,children:o,icon:a,onChange:i,onClick:c,onPointerCancel:s,onPointerDown:u,onPointerMove:m,onPointerUp:p,onKeyDown:k,...h}=e,{gestureHandlers:v}=(0,g.J)({onClick:e=>{e.preventDefault(),null==i||i(e,!t),null==c||c(e)},onChange:(e,n)=>{n!==t&&(null==i||i(e,n))},onPointerCancel:s,onPointerDown:u,onPointerMove:m,onPointerUp:p});return l.createElement("div",Object.assign({ref:n,tabIndex:-1},h,{role:"menuitemcheckbox","aria-checked":t,className:f()("jkl-contextual-menu-item","jkl-contextual-menu-item--checkbox",r)},v,{onKeyDown:e=>{"Enter"===e.key?null==i||i(e,!t):" "===e.key&&(e.preventDefault(),null==i||i(e,!t)),null==k||k(e)}}),a&&l.createElement("span",{className:"jkl-contextual-menu-item__icon"},a),l.createElement("div",{className:"jkl-contextual-menu-item__content"},o),l.createElement("div",{className:"jkl-toggle-switch"},l.createElement("div",{className:"jkl-toggle-switch-widget"},l.createElement("div",{className:"jkl-toggle-switch-widget__slider"},l.createElement("div",{className:"jkl-toggle-switch-widget__knob"}),l.createElement(d.n,{variant:"small",bold:!0,className:"jkl-toggle-switch-widget__indicator"})))))}));h.displayName="ContextualMenuItemCheckbox";const v={choiceProps:[{name:"isOpen",values:["true","false","tom"],defaultValue:2}]};var E=e=>{let{choiceValues:n}=e;const t="tom"!==(null==n?void 0:n.isOpen)?"true"===(null==n?void 0:n.isOpen):void 0,r=(0,c.c)(),{0:o,1:d}=(0,l.useState)(r.prefersColorScheme),g=(0,l.useRef)(null),k=(0,l.useCallback)((e=>{g.current&&(d(e),document.startViewTransition?document.startViewTransition((()=>{g.current&&(g.current.dataset.theme=e)})):g.current.dataset.theme=e)}),[d]);return l.createElement("div",{ref:g,className:"jkl","data-theme":o,style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",padding:"1rem"}},l.createElement(s.u,null,l.createElement(p.r,{initialPlacement:"bottom-start",isOpen:t,triggerElement:l.createElement(u.a,null,l.createElement(a.h,{className:"jkl-portal-navigation__contextual-menu-trigger"},l.createElement(i.Y,{variant:"medium",bold:!0})))},l.createElement(h,{"aria-checked":"dark"===o,onChange:(e,n)=>{k(n?"dark":"light")}},"Mørkt tema")),l.createElement(m._,null,"Innstillinger")))};const b=()=>'\n// Vi bruker et Tooltip siden knappen ikke har tekst. For å sørge for\n// at knappen fortsatt fungerer som trigger for menyen må vi legge Tooltip\n// rundt hele menyen, og kun sende inn TooltipTrigger sammen med knappen\n// som trigger for menyen.\n<Tooltip>\n    <ContextualMenu\n        initialPlacement="bottom-start"\n        triggerElement={\n            <TooltipTrigger>\n                <IconButton className="jkl-portal-navigation__contextual-menu-trigger">\n                    <DotsIcon variant="medium" bold />\n                </IconButton>\n            </TooltipTrigger>\n        }\n    >\n        <ContextualMenuItemCheckbox\n            aria-checked={colorScheme === "dark"}\n            onChange={(_, pressed) => {\n                setColorScheme(pressed ? "dark" : "light");\n            }}\n        >\n            Mørkt tema\n        </ContextualMenuItemCheckbox>\n    </ContextualMenu>\n    <TooltipContent>Innstillinger</TooltipContent>\n</Tooltip>\n';function y(e){const n=Object.assign({p:"p",ul:"ul",li:"li",h2:"h2",strong:"strong",h3:"h3"},(0,r.ah)(),e.components),{Ingress:t,ComponentExample:a}=n;return a||x("ComponentExample",!0),t||x("Ingress",!0),l.createElement(l.Fragment,null,l.createElement(t,null,l.createElement(n.p,null,"En kontekstuell meny lar brukeren utføre handlinger relatert til deler av\ninnholdet på en side, men som ikke er sentrale for oppgaven brukeren holder\npå med.")),"\n",l.createElement(a,{component:o.ZP,codeExample:o.e_,knobs:o.KE}),"\n",l.createElement(n.p,null,"Menyen inneholder et lite sett med handlinger, relatert til enten et område i bruker­grensesnittet eller til konteksten brukeren befinner seg i. Grupper av tilhørende handlinger i menyen kan skilles fra hverandre med en skille­linje."),"\n",l.createElement(n.p,null,"Menyen vises når brukeren interagerer med en trigger på siden ved hjelp av mus, tastatur eller berøring. Triggeren må være en type knapp:"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"ikonknapp"),"\n",l.createElement(n.li,null,"tekstknapp"),"\n",l.createElement(n.li,null,"knapp med tekst og ikon"),"\n"),"\n",l.createElement(n.p,null,"Sørg for at triggeren gir en god indikasjon til brukeren om at den åpner en meny."),"\n",l.createElement(n.p,null,"Kontekstuelle menyer kan nøstes inni hverandre, men vi anbefaler å bruke maksimalt to nivåer. Bruk helst færre enn ti menypunkter i hver meny - som regel trengs langt færre enn det."),"\n",l.createElement(n.h2,null,"Når bruker vi ContextualMenu?"),"\n",l.createElement(n.p,null,"Bruk en kontekstuell meny når det finnes handlinger som er relevante for brukeren, men som ikke er en essensiell del av flyten brukeren beveger seg i. Menyen er et godt sted å plassere tilleggs­handlinger uten å legge til rot i grense­snittet. Se på en kontekstuell meny som en subtil digresjon i historien vi leder brukeren gjennom."),"\n",l.createElement(n.p,null,l.createElement(n.strong,null,"Eksempler på når man kan bruke en kontekstuell meny kan være")),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Handlinger på hvert element i en liste med oppgave­kort (Slett, Dupliser, Merk som behandlet)"),"\n",l.createElement(n.li,null,"En meny med handlinger relatert til en innlogget bruker (Mine instillinger, Logg ut)"),"\n"),"\n",l.createElement(n.h2,null,"Mulig innhold i en meny"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Tekst"),"\n",l.createElement(n.li,null,"Ikon og tekst"),"\n",l.createElement(n.li,null,"Knapp > forskjellige interaktive elementer."),"\n",l.createElement(n.li,null,"ToggleSwitch"),"\n",l.createElement(n.li,null,"Lenke"),"\n"),"\n",l.createElement(n.h3,null,"Eksempel med ToggleSwitch"),"\n",l.createElement(n.p,null,"Menyelementer som skrur av og på en innstilling har en egen komponent, for å få en semantisk riktig struktur og forventet oppførsel. Dette mønsteret kan for eksempel brukes for å styre valgt tema, uten å måtte endre innstillinger i operativsystemet."),"\n",l.createElement(a,{component:E,codeExample:b,knobs:v}))}var C=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?l.createElement(n,e,l.createElement(y,e)):y(e)};function x(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var w=t(72285),j=t(22756),P=t(95573),M=t(1634);const N=e=>{let{pageContext:n}=e;return l.createElement(j.p,{title:n.title})},_=e=>{let{location:n,data:t,pageContext:r,children:o}=e;const{frontmatter:a}=t.page,{types:i}=r;return l.createElement(M.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(P.M1,Object.assign({},a,{versions:r.versions})),l.createElement(P.w5,a),o,i&&l.createElement(w.l,{types:i}))};function I(e){return l.createElement(_,e,l.createElement(C,e))}},17050:function(e,n,t){t.d(n,{H:function(){return r}});const r=e=>{if(!e)return{};const n=getComputedStyle(e);return{theme:parseInt(n.getPropertyValue("--jkl-background-color").replace("#",""),16)<8388607.5?"dark":"light",density:'"compact"'===n.getPropertyValue("--jkl-density")?"compact":"comfortable"}}},31401:function(e,n,t){t.d(n,{n:function(){return o}});var r=t(70079),l=t(31787);const o=e=>r.createElement(l.J,{...e},"");o.displayName="CheckIcon"},33378:function(e,n,t){t.d(n,{v:function(){return o}});var r=t(70079),l=t(31787);const o=e=>r.createElement(l.J,{...e},"");o.displayName="ChevronDownIcon"},17417:function(e,n,t){t.d(n,{Y:function(){return o}});var r=t(70079),l=t(31787);const o=e=>r.createElement(l.J,{...e},"");o.displayName="DotsIcon"},58675:function(e,n,t){t.d(n,{J:function(){return o}});var r=t(70079);function l(e){return{x:e.clientX,y:e.clientY}}function o(e){const n=(0,r.useRef)(!1),t=(0,r.useRef)(),{onClick:o,onChange:a,onPointerCancel:i,onPointerDown:c,onPointerMove:s,onPointerUp:u}=e,m=(0,r.useCallback)((e=>{n.current||null==o||o(e),n.current=!1}),[o]),p=(0,r.useCallback)((e=>{var r,o;e.preventDefault(),null==(o=(r=e.target).setPointerCapture)||o.call(r,e.pointerId),t.current=l(e),n.current=!1,null==c||c(e)}),[c]),d=(0,r.useCallback)((e=>{if(e.preventDefault(),!t.current)return;const{x:r}=l(e),{x:o}=t.current;r-o>10&&a&&"on"!==n.current?(a(e,!0),n.current="on",t.current=l(e)):o-r>10&&a&&"off"!==n.current&&(a(e,!1),n.current="off",t.current=l(e)),null==s||s(e)}),[s,a]),g=(0,r.useCallback)((e=>{var n,r;e.preventDefault(),null==(r=(n=e.target).releasePointerCapture)||r.call(n,e.pointerId),t.current=void 0,"pointerup"===e.type?null==u||u(e):null==i||i(e)}),[u,i]);return{swipeHandled:n,gestureHandlers:{onClick:m,onPointerDown:p,onPointerMove:d,onPointerUp:g,onPointerCancel:g}}}},54800:function(e,n,t){t.d(n,{nr:function(){return u},u:function(){return m}});var r=t(57579),l=t(88905),o=t(84256),a=t(26893),i=t(70079);const c=(0,i.createContext)(null),s=c.Provider,u=()=>{const e=(0,i.useContext)(c);if(null===e)throw new Error("Tooltip-komponentene kan kun brukes inne i <Tooltip />");return e},m=e=>{let{children:n,...t}=e;const c=(e=>{let{initialOpen:n=!1,placement:t="top",delay:c=250,triggerOn:s="hover",onOpenChange:u}=e;const{0:m,1:p}=(0,i.useState)(n),d=(0,i.useRef)(null),g=(0,i.useRef)(null),k=(0,r.YF)({open:m,onOpenChange:e=>{null==u||u(e),p(e)},placement:t,whileElementsMounted:l.Me,middleware:[(0,o.cv)(16),(0,o.RR)(),(0,o.uY)({padding:16}),(0,a.x7)({element:d,padding:8})]}),f=(0,r.qs)(k.context,{role:"tooltip"}),h=(0,r.bQ)(k.context),v=(0,r.eS)(k.context,{enabled:"click"===s}),E=(0,r.XI)(k.context,{enabled:"hover"===s,delay:m?0:c}),b=(0,r.KK)(k.context,{enabled:"click"!==s||m}),y=(0,r.NI)([h,b,f,v,E]);return{triggerOn:s,isOpen:m,setOpen:p,arrowElement:d,...k,refs:{...k.refs,description:g,setDescription:e=>g.current=e},...y}})(t);return i.createElement(s,{value:c},n)}},15971:function(e,n,t){t.d(n,{_:function(){return p}});var r=t(57579),l=t(17050),o=t(3438),a=t(45901),i=t(26372),c=t.n(i),s=t(70079),u=t(54800);function m(e,n){switch(void 0===n&&(n=0),e){case"top":default:return"0 ".concat(n,"px");case"left":return"".concat(n,"px 0");case"bottom":return"0 ".concat(-n,"px");case"right":return"".concat(-n,"px 0")}}const p=(0,s.forwardRef)((function(e,n){let{className:t,children:i,"data-ispopup":p,...d}=e;const{context:g,triggerOn:k,arrowElement:f,getFloatingProps:h,placement:v,floatingStyles:E,refs:b}=(0,u.nr)(),y=(0,r.qq)([n,b.setFloating]),C=(0,o.M)("jkl-tooltip-content"),{prefersReducedMotion:x}=(0,a.c)(),{isMounted:w,styles:j}=(0,r.Y_)(g,{duration:{open:x?0:250,close:x?0:150},initial:e=>{let{side:n}=e;return{opacity:0,translate:m(n,5)}},open:e=>{let{side:n}=e;return{opacity:1,translate:m(n,0)}},close:e=>{let{side:n}=e;return{opacity:0,translate:m(n,-5)}}}),{density:P,theme:M}=(0,l.H)(b.reference.current);return s.createElement(r.ll,null,"hover"===k&&s.createElement("span",{ref:b.setDescription,hidden:!0,key:"".concat(C,"-trigger")},i),w&&s.createElement("span",{className:"jkl",key:"".concat(C,"-wrapper")},s.createElement("span",{key:C,ref:y,"data-placement":v,"aria-hidden":p,"data-testid":"tooltip-content","data-theme":M,"data-layout-density":P,className:c()("jkl-tooltip-content",t),...h({...d,id:C}),style:{...E,...j}},i,s.createElement(r.Y$,{context:g,ref:f,width:24,height:12,fill:"var(--background-color)"}))))}))},54235:function(e,n,t){t.d(n,{a:function(){return c}});t(31369);var r=t(57579),l=t(26372),o=t.n(l),a=t(70079),i=t(54800);const c=(0,a.forwardRef)((function(e,n){let{children:t,className:l,...c}=e;var s,u;const{isOpen:m,getReferenceProps:p,refs:d,triggerOn:g}=(0,i.nr)(),k=t.ref,f=(0,r.qq)([k,d.setReference,n]),h=[null==(s=d.reference.current)?void 0:s.textContent,null==(u=d.description.current)?void 0:u.textContent].map((e=>null==e?void 0:e.replaceAll(/[\ue003-\uf8aa]/g,""))).filter(Boolean).join(". ");return a.isValidElement(t)?a.cloneElement(t,p({ref:f,"aria-label":h,...t.props,...c,className:o()(t.props.className,l),"data-tooltip-shown":m,style:{...t.props.style},tabIndex:"click"===g?0:void 0})):a.createElement("button",{"data-tooltip-shown":m,...p({className:o()(l,"jkl-tooltip-trigger"),type:"button",ref:f,"aria-label":h,...c})},t)}))}}]);