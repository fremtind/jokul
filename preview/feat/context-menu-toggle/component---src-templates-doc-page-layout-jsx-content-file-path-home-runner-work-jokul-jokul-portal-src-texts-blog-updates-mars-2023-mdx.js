/*! For license information please see component---src-templates-doc-page-layout-jsx-content-file-path-home-runner-work-jokul-jokul-portal-src-texts-blog-updates-mars-2023-mdx.js.LICENSE.txt */
"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[5771],{703:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return g},Head:function(){return f},default:function(){return v}});var l=n(47160),r=n(70079),a=n(69169),o=n(96466);function i(e){const t=Object.assign({p:"p",ul:"ul",li:"li",a:"a",em:"em",h2:"h2",h3:"h3"},(0,l.ah)(),e.components),{Ingress:n,ComponentExample:i}=t;return i||u("ComponentExample",!0),n||u("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n,null,r.createElement(t.p,null,"Om du jobber eller tar fri, holder deg i byen eller stikker til fjells – god påske, fra oss i Jøkul-teamet.")),"\n",r.createElement(t.p,null,"Her er mars, kort oppsummert:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Datovelgeren har fått et nytt design, som kombinerer det beste fra begge varianter vi hadde før."),"\n",r.createElement(t.li,null,"Kontekstuell meny er klar til bruk."),"\n",r.createElement(t.li,null,"En hel smørbrødliste med feilrettinger og forbedringer."),"\n"),"\n",r.createElement(t.p,null,"Vi har også rigget om på ",r.createElement(t.a,{href:"https://github.com/orgs/fremtind/projects/22/views/19"},"prosjekttavla vår"),". Blant annet har vi tatt i bruk ",r.createElement(t.em,null,"iterasjon"),"-feltet i Projects, sånn at det\nlettere går an å se hva vi jobber med akkurat nå, og hva vi planlegger å jobbe med framover."),"\n",r.createElement(t.h2,null,"Nytt design på datovelger"),"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"/preview/feat/context-menu-toggle/komponenter/datepicker"},"Datovelgeren")," ble redesignet under Jøkuluka, og nå er det klart for bruk. For kode er det ingen ",r.createElement(t.em,null,"breaking change"),"."),"\n",r.createElement(t.p,null,"Under ser du et eksempel på hvordan det kan se ut. Her har vi satt begrensninger på hvor langt frem og tilbake i tid man har lov til å velge, men dette er valgfritt og kan konfigureres."),"\n",r.createElement(i,{title:"DatePicker",component:a.xM}),"\n",r.createElement(t.p,null,"Det nye designet slår sammen den tidligere ",r.createElement(t.em,null,"utvidede")," datovelgeren og standard datovelger. De to variantene hadde hver sine svakheter."),"\n",r.createElement(t.p,null,"Med standard datovelger var det vanskelig å hoppe langt frem eller tilbake i tid, siden vi bare hadde knapper for å bla én måned frem eller tilbake."),"\n",r.createElement(t.p,null,"Med den utvidede velgeren var det vanskelig å skulle hoppe fra, for eksempel, januar 2023 til desember 2022. Først måtte man skrive 2022 inn i tekstfeltet, og så kunne man velge januar fra nedtrekkslisten."),"\n",r.createElement(t.p,null,"Som alltid er det mulig å skrive inn datoer manuelt, rett i tekstfeltet. Minner om at det i januar ble lagt til støtte for å ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3381"},"lime inn datoer i flere formater"),"."),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3391"},"#3391")),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3415"},"#3415")),"\n"),"\n",r.createElement(t.h2,null,"Kontekstuell meny"),"\n",r.createElement(t.p,null,"Nok en komponent fra Jøkuluka som er klar for bruk. Med en kontekstuell meny kan du vise et lite sett med handlinger som er relevante for brukeren, men som ikke er en essensiell del av flyten brukeren beveger seg i."),"\n",r.createElement(i,{component:o.gL}),"\n",r.createElement(t.p,null,"Du kan lese mer om ",r.createElement(t.a,{href:"/preview/feat/context-menu-toggle/komponenter/contextualmenu"},"anbefalinger rundt bruk av kontekstuell meny")," i dokumentasjonen til komponenten."),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3416"},"#3416")),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3464"},"#3464")),"\n"),"\n",r.createElement(t.h2,null,"Diverse bugfikser og forbedringer"),"\n",r.createElement(t.h3,null,"Figma"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Ga MessageBox en større clicktarget (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3071"},"#3071"),")"),"\n",r.createElement(t.li,null,"Justerte avstand mellom pil og tekst i ExpandButton (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3167"},"#3167"),")"),"\n",r.createElement(t.li,null,"Justerte utseendet til MessageBox så innhold får mer plass på mobil (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3387"},"#3387"),")"),"\n",r.createElement(t.li,null,"Laget komponenter for å kunne lage DescriptionList på en enklere måte (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3212"},"#3212"),")"),"\n",r.createElement(t.li,null,"Footer og header fra Jøkuluka merget inn (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3399"},"#3399"),")"),"\n",r.createElement(t.li,null,"Fjernet animasjon av pil i NavCard for å unngå bevegelse i to retninger (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3429"},"#3429"),")"),"\n",r.createElement(t.li,null,"La til manglende alilgn i TableHeader (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3448"},"#3448"),")"),"\n",r.createElement(t.li,null,"Accordion åpnes nok til at text component vises i prototype (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3449"},"#3449"),")"),"\n"),"\n",r.createElement(t.h3,null,"GitHub"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Åpne for en SupportLabel for RadioButton (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3410"},"#3410"),")"),"\n",r.createElement(t.li,null,"Utvid kodeeksempler for ikonene (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3428"},"#3428"),")"),"\n",r.createElement(t.li,null,"Nytt design på error-ikon (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3441"},"#3441"),")"),"\n",r.createElement(t.li,null,"Align ikonet i MessageBox med tittel, og med teksten hvis uten tittel (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3446"},"#3446"),")"),"\n",r.createElement(t.li,null,"Select, unngå onChange når value endres fra utsiden (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3443"},"#3443"),")"),"\n",r.createElement(t.li,null,"Rett feil i kodeeksempel for image-propen i kortkomponenter (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3456"},"#3456"),")"),"\n",r.createElement(t.li,null,"Unngå at inline-elementer blir gjort til block i kortkomponenter (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3451"},"#3451"),")"),"\n",r.createElement(t.li,null,"Sett UTF-8 som charset i stilark for å unngå encoding-bugs rundt piler (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3468"},"#3468"),")"),"\n",r.createElement(t.li,null,"Kjør bare de Cypress-testene som trengs under pull requests (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3466"},"#3466"),")"),"\n",r.createElement(t.li,null,"Gjør sorteringsikon bold i TableHeader (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3442"},"#3442"),")"),"\n",r.createElement(t.li,null,"Oppdater deler av Profil-seksjonen i portalen, etter Jøkuluka (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3469"},"#3469"),")"),"\n"),"\n",r.createElement(t.h2,null,"Takk"),"\n",r.createElement(t.p,null,"Takk til alle som har vært med å bygge videre på Jøkul, både på GitHub og i Figma!"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"BjorneOma"),"\n",r.createElement(t.li,null,"Chrihenn"),"\n",r.createElement(t.li,null,"henrikhermansen"),"\n",r.createElement(t.li,null,"ivnai"),"\n",r.createElement(t.li,null,"joms"),"\n",r.createElement(t.li,null,"kjetilbendik"),"\n",r.createElement(t.li,null,"leon-ho"),"\n",r.createElement(t.li,null,"maciejost"),"\n"),"\n",r.createElement(t.p,null,"En stor takk også til alle som er med på designsystemforum!"))}var m=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(i,e)):i(e)};function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var s=n(72285),c=n(22756),d=n(95573),p=n(1634);const f=e=>{let{pageContext:t}=e;return r.createElement(c.p,{title:t.title})},g=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:o}=n.page,{types:i}=l;return r.createElement(p.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(d.M1,Object.assign({},o,{versions:l.versions})),r.createElement(d.w5,o),a,i&&r.createElement(s.l,{types:i}))};function v(e){return r.createElement(g,e,r.createElement(m,e))}},96466:function(e,t,n){n.d(t,{gL:function(){return y},e_:function(){return j},KE:function(){return x},ZP:function(){return M}});var l=n(10188),r=n(33368),a=n(36090),o=n(98509),i=n(70079),m=n(57579),u=n(84256),s=n(88905),c=n(3438),d=n(26372),p=n.n(d),f=n(48365),g=n(89300),v=n(72037);const h=(0,i.forwardRef)(((e,t)=>{const{children:n,className:l,initialPlacement:r,openOnHover:a=!1,triggerElement:o,...d}=e,h=(0,c.M)("jkl-contextual-menu"),E=(0,m.ay)(),k=(0,m.jV)(),b=(0,m.Zm)(),w=null!=b,x=(0,i.useRef)([]),{0:y,1:M}=(0,i.useState)(null),{allowHover:j,isOpen:C,setIsOpen:I}=((e,t,n)=>{const{0:l,1:r}=(0,i.useState)(!1),{0:a,1:o}=(0,i.useState)(!1);return(0,i.useEffect)((()=>{if(e)return e.events.on("click",l),e.events.on("menuopen",r),()=>{e.events.off("click",l),e.events.off("menuopen",r)};function l(){o(!1)}function r(e){e.nodeId!==t&&e.parentId===n&&o(!1)}}),[e,t,n,o]),(0,i.useEffect)((()=>{a&&e&&e.events.emit("menuopen",{parentId:n,nodeId:t})}),[e,a,t,n]),(0,i.useEffect)((()=>{function e(e){let{pointerType:t}=e;"touch"!==t&&r(!0)}function t(){r(!1)}return window.addEventListener("pointermove",e,{once:!0,capture:!0}),window.addEventListener("keydown",t,!0),()=>{window.removeEventListener("pointermove",e,{capture:!0}),window.removeEventListener("keydown",t,!0)}}),[l]),{allowHover:l,isOpen:a,setIsOpen:o}})(E,k,b),{x:H,y:z,refs:R,placement:S,strategy:N,context:B}=(0,m.YF)({nodeId:k,open:C,onOpenChange:I,placement:r||(w?"right-start":"bottom-start"),middleware:[(0,u.cv)(2),(0,u.RR)({fallbackAxisSideDirection:"end",crossAxis:!1}),(0,u.uY)({padding:8})],whileElementsMounted:s.Me}),{getReferenceProps:O,getFloatingProps:V,getItemProps:L}=(0,m.NI)([(0,m.XI)(B,{enabled:a&&j,delay:{open:75},handleClose:(0,m.xp)({requireIntent:!0,blockPointerEvents:!0})}),(0,m.eS)(B,{event:"mousedown"}),(0,m.bQ)(B),(0,m.qs)(B,{role:"menu"}),(0,m.c0)(B,{listRef:x,activeIndex:y,nested:w,onNavigate:M})]),_=(0,m.qq)([R.setReference,t]);return i.createElement(m.mN,{id:k},i.isValidElement(o)&&("button"===o.type||v.isForwardRef(o))?i.cloneElement(o,{...O({...d,ref:_,role:w?"menuitem":void 0,"aria-controls":h,onClick(e){e.stopPropagation()}})}):o,i.createElement(f.M,null,C&&i.createElement(m.wD,{context:B,modal:!1,initialFocus:w?-1:0,returnFocus:!w},i.createElement(g.E.div,Object.assign({className:p()("jkl-contextual-menu",l),role:"menu",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{ease:"easeIn",duration:.1},"data-placement":S,"aria-live":"assertive","aria-hidden":!C,ref:R.setFloating},V({id:h,style:{position:N,top:null!=z?z:"",left:null!=H?H:""}})),i.Children.map(n,((e,t)=>i.isValidElement(e)&&("button"===e.type||v.isForwardRef(e))?i.cloneElement(e,L({...e.props,tabIndex:y===t?0:-1,role:"menuitem",ref(e){x.current[t]=e},onClick(t){var n,l;null===(n=(l=e.props).onClick)||void 0===n||n.call(l,t),null==E||E.events.emit("click")},onMouseEnter(){j&&C&&M(t)}})):e))))))}));h.displayName="ContextualMenuComponent";const E=(0,i.forwardRef)(((e,t)=>null===(0,m.Zm)()?i.createElement(m.RB,null,i.createElement(h,Object.assign({ref:t},e))):i.createElement(h,Object.assign({ref:t},e))));E.displayName="ContextualMenu";const k=e=>{const{className:t,...n}=e;return i.createElement("hr",Object.assign({className:p()("jkl-contextual-menu-divider",t)},n))};var b=n(68134);const w=(0,i.forwardRef)(((e,t)=>{const{className:n,children:l,icon:r,expandable:a=!1,...o}=e;return i.createElement("button",Object.assign({ref:t,type:"button",role:"menuitem",className:p()("jkl-contextual-menu-item",n)},o),r&&i.createElement("span",{className:"jkl-contextual-menu-item__icon"},r),i.createElement("div",{className:"jkl-contextual-menu-item__content"},l),a&&i.createElement(b.X,{className:"jkl-contextual-menu-item__arrow",bold:!0}))}));w.displayName="ContextualMenuItem";const x={},y=()=>i.createElement("div",{style:{width:"500px"}},i.createElement(E,{initialPlacement:"bottom-start",triggerElement:i.createElement(l.h,{"data-testid":"trigger-contextual-menu",title:"En kontekstuell meny med eksempelvalg for å demonstrere mulighetene i komponenten"},i.createElement(r.Y,{bold:!0}))},i.createElement(w,{icon:i.createElement(a.s,null)},"Menyvalg 1"),i.createElement(w,{onClick:()=>console.log("Hei fra Menyvalg 2")},"Menyvalg 2"),i.createElement(k,null),i.createElement(E,{openOnHover:!0,triggerElement:i.createElement(w,{expandable:!0},"Ekspanderende menyvalg med veldig lang tekst")},i.createElement(w,{icon:i.createElement(a.s,null)},"Ekspandert menyvalg"),i.createElement(w,null,"Ekspandert menyvalg med mer tekst")),i.createElement(E,{openOnHover:!0,triggerElement:i.createElement(w,{expandable:!0},"Ekspanderende menyvalg")},i.createElement(w,{icon:i.createElement(o.T,null)},"Ekspandert menyvalg"),i.createElement(w,null,"Ekspandert menyvalg med mer tekst"))));var M=y;const j=()=>'\n<ContextualMenu\n    initialPlacement="bottom-start"\n    triggerElement={\n        <IconButton title="En kontekstuell meny med eksempelvalg for å demonstrere mulighetene i komponenten">\n            <DotsIcon bold />\n        </IconButton>\n    }\n>\n    <ContextualMenuItem icon={<InfoIcon />}>Menyvalg 1</ContextualMenuItem>\n    <ContextualMenuItem onClick={() => console.log("Hei fra Menyvalg 2")}>Menyvalg 2</ContextualMenuItem>\n    <ContextualMenuDivider />\n    <ContextualMenu\n        openOnHover\n        triggerElement={\n            <ContextualMenuItem expandable>Ekspanderende menyvalg med veldig lang tekst</ContextualMenuItem>\n        }\n    >\n        <ContextualMenuItem icon={<InfoIcon />}>Ekspandert menyvalg</ContextualMenuItem>\n        <ContextualMenuItem>Ekspandert menyvalg med mer tekst</ContextualMenuItem>\n    </ContextualMenu>\n    <ContextualMenu\n        openOnHover\n        triggerElement={<ContextualMenuItem expandable>Ekspanderende menyvalg</ContextualMenuItem>}\n    >\n        <ContextualMenuItem icon={<CopyIcon />}>Ekspandert menyvalg</ContextualMenuItem>\n        <ContextualMenuItem>Ekspandert menyvalg med mer tekst</ContextualMenuItem>\n    </ContextualMenu>\n</ContextualMenu>\n'},68134:function(e,t,n){n.d(t,{X:function(){return i}});var l=n(3938),r=n(70079);const a=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M9.201 6l-.701.723 5.598 5.777L8.5 18.277l.701.723 6.299-6.5L9.201 6z",fill:"currentColor"})),o=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M9.393 5.75L8 7.173l5.214 5.327L8 17.827l1.393 1.423L16 12.5 9.393 5.75z",fill:"currentColor"})),i=(0,l.d)({bold:{small:e=>r.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M7.796 4.75L6.75 5.805l4.408 4.445-4.408 4.445 1.046 1.055 5.454-5.5-5.454-5.5z",fill:"currentColor"})),medium:o,inherit:o},regular:{small:e=>r.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M7.7 5l-.7.726 4.6 4.774L7 15.274l.7.726 5.3-5.5L7.7 5z",fill:"currentColor"})),medium:a,inherit:a}});i.displayName="ChevronRightIcon"},98509:function(e,t,n){n.d(t,{T:function(){return i}});var l=n(3938),r=n(70079);const a=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 2h10v16h-3v3H6V5h3V2zm1 1h8v14h-8V3zM9 6H7v14h8v-2H9V6z",fill:"currentColor"})),o=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 2h11v16h-4v4H4V6h4V2zm2 2h7v12h-7V4zM8 8H6v12h7v-2H8V8z",fill:"currentColor"})),i=(0,l.d)({bold:{small:e=>r.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M11.5 16.5h-6v-10H7V5H4v13h9v-3h-1.5v1.5z",fill:"currentColor"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 5v13h9v-3h3V2H7v3H4zm1.5 1.5v10h6V15H7V6.5H5.5zm3 7h6v-10h-6v10z",fill:"currentColor"})),medium:o,inherit:o},regular:{small:e=>r.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15 3H8v11h7V3zM7 2v13h9V2H7z",fill:"currentColor"}),r.createElement("path",{d:"M13 18v-3h-1v2H5V6h2V5H4v13h9z",fill:"currentColor"})),medium:a,inherit:a}});i.displayName="CopyIcon"},33368:function(e,t,n){n.d(t,{Y:function(){return i}});var l=n(3938),r=n(70079);const a=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M6 12a1 1 0 11-2 0 1 1 0 012 0zM13 12a1 1 0 11-2 0 1 1 0 012 0zM20 12a1 1 0 11-2 0 1 1 0 012 0z",fill:"currentColor"})),o=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M7 12a2 2 0 11-4 0 2 2 0 014 0zM14 12a2 2 0 11-4 0 2 2 0 014 0zM21 12a2 2 0 11-4 0 2 2 0 014 0z",fill:"currentColor"})),i=(0,l.d)({bold:{small:e=>r.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM18 10a2 2 0 11-4 0 2 2 0 014 0z",fill:"currentColor"})),medium:o,inherit:o},regular:{small:e=>r.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M6 10a1 1 0 11-2 0 1 1 0 012 0zM11 10a1 1 0 11-2 0 1 1 0 012 0zM16 10a1 1 0 11-2 0 1 1 0 012 0z",fill:"currentColor"})),medium:a,inherit:a}});i.displayName="DotsIcon"},92810:function(e,t){var n,l=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),u=Symbol.for("react.context"),s=Symbol.for("react.server_context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.offscreen");function h(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case l:switch(e=e.type){case a:case i:case o:case d:case p:return e;default:switch(e=e&&e.$$typeof){case s:case u:case c:case g:case f:case m:return e;default:return t}}case r:return t}}}n=Symbol.for("react.module.reference"),t.isForwardRef=function(e){return h(e)===c}},72037:function(e,t,n){e.exports=n(92810)}}]);