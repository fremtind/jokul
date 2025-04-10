"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[3468],{48091:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return f},Head:function(){return p},default:function(){return k}});var a=t(47160),l=t(70079),r=t(68588);function o(e){const n=Object.assign({p:"p",code:"code",a:"a",em:"em",h2:"h2",ul:"ul",li:"li"},(0,a.ah)(),e.components),{Ingress:t,ComponentExample:o}=n;return o||s("ComponentExample",!0),t||s("Ingress",!0),l.createElement(l.Fragment,null,l.createElement(t,null,"En modal brukes der vi trenger å avbryte den nåværende flyten for å gjøre en handling."),"\n",l.createElement(o,{component:r.ZP,codeExample:r.d0,knobs:r.L2,noDensity:!0}),"\n",l.createElement(n.p,null,"Modalen dimmer innholdet på siden, og legger seg sentrert i skjermen."),"\n",l.createElement(n.p,null,"Modalen har to mulige oppførsler. Standard er at den kan avfeies ved å klikke på utsiden av dialogen, eller ved å trykke ",l.createElement(n.code,null,"Esc"),"."),"\n",l.createElement(n.p,null,"Dersom modalen settes til typen ",l.createElement(n.code,null,"alertdialog")," vil den ikke kunne avfeies på denne måten (se ",l.createElement(n.a,{href:"/preview/playwright-tests/komponenter/cookieconsent"},"CookieConsent"),"). Denne typen modal er ment for å brukes der brukeren ",l.createElement(n.em,null,"må")," gjøre et valg før de kan gå videre."),"\n",l.createElement(n.p,null,"Foretrekk å bruke standard oppførsel, og anse avfeielse som en Avbryt-handling."),"\n",l.createElement(n.p,null,"Modalen kan ha én eller to knapper, venstrejustert i bunnen av modalen. Den venstre knappen skal alltid være en bekreftende handling, stilet som primærknapp. Den andre knappen skal alltid være en tertiærknapp, og vil som oftest være en avbryt-handling."),"\n",l.createElement(n.h2,null,"Tilgjengelighet"),"\n",l.createElement(n.p,null,"Du må gi modalen en tittel for skjermlesere. Denne tittelen ",l.createElement(n.em,null,"kan")," være ulik den visuelle tittelen, dersom du ønsker det."),"\n",l.createElement(n.p,null,"Komponenten fanger tastaturfokus frem til den lukkes. Fokuset flyttes så til knappen som åpnet modalen. Du trenger ikke gjøre noe spesielt for å få denne oppførselen."),"\n",l.createElement(n.h2,null,"Når bruker vi Modal?"),"\n",l.createElement(n.p,null,"En modal er disruptiv, og bør brukes med omhu. For mange modaler kan være frustrerende."),"\n",l.createElement(n.p,null,"Tenk igjennom om det er mulig å løse oppgaven på en annen måte før du bruker en modal:"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Kan handlingen gjøres som en del av hovedflyten?"),"\n",l.createElement(n.li,null,"Kan innholdet i en modal heller vises på en egen side?"),"\n",l.createElement(n.li,null,"Kan vi bruke en ",l.createElement(n.a,{href:"/preview/playwright-tests/komponenter/contextualmenu"},"kontekstuell meny")," i stedet for en modal?"),"\n"),"\n",l.createElement(n.p,null,"Om du skal bruke en modal må den være fokusert på én oppgave."),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Ha en kort og konsis overskrift."),"\n",l.createElement(n.li,null,"Unngå mange avsnitt med tekst."),"\n",l.createElement(n.li,null,"Maksimum to knapper – én som bekrefter en handling, og én som avbryter."),"\n"))}var i=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?l.createElement(n,e,l.createElement(o,e)):o(e)};function s(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var c=t(72285),d=t(22756),m=t(95573),u=t(1634);const p=e=>{let{pageContext:n}=e;return l.createElement(d.p,{title:n.title})},f=e=>{let{location:n,data:t,pageContext:a,children:r}=e;const{frontmatter:o}=t.page,{types:i}=a;return l.createElement(u.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(m.M1,Object.assign({},o,{versions:a.versions})),l.createElement(m.w5,o),r,i&&l.createElement(c.l,{types:i}))};function k(e){return l.createElement(f,e,l.createElement(i,e))}},56180:function(e,n,t){t.d(n,{C9:function(){return m},KM:function(){return c},kq:function(){return d},zx:function(){return s}});var a=t(41886),l=t(80532),r=t(26372),o=t.n(r),i=t(70079);const s=i.forwardRef((function(e,n){const{as:t="button",children:r,className:s,density:c,onTouchStart:d,loader:m,iconLeft:u,iconRight:p,variant:f="secondary",...k}=e,v=t,g=(0,i.useCallback)((e=>{d&&d(e);const n=e.target;if(n&&e.targetTouches.length){const t=e.targetTouches[0].clientX-n.getBoundingClientRect().x,a=e.targetTouches[0].clientY-n.getBoundingClientRect().y;n.style.setProperty("--jkl-touch-xcoord",t.toPrecision(4)+"px"),n.style.setProperty("--jkl-touch-ycoord",a.toPrecision(4)+"px"),n.classList.add("jkl-button--pressed"),setTimeout((()=>{n.classList.remove("jkl-button--pressed"),n.style.removeProperty("--jkl-touch-xcoord"),n.style.removeProperty("--jkl-touch-ycoord")}),400)}}),[d]),E=(0,l.c)(null==m?void 0:m.showLoader);return i.createElement(v,Object.assign({},E,{"data-density":c,className:o()("jkl-button","jkl-button--"+f,s,{"jkl-button--icon-left":u,"jkl-button--icon-right":p}),disabled:"button"===t?null==m?void 0:m.showLoader:void 0,onTouchStart:g},k,{ref:n}),i.createElement("div",{className:"jkl-button__content"},i.createElement("div",{className:o()("jkl-button__slider",{"jkl-button__slider--show-loader":!(null==m||!m.showLoader)})},u&&i.createElement("span",{className:"jkl-button__icon"},u),i.createElement("span",{className:"jkl-button__children"},r),p&&i.createElement("span",{className:"jkl-button__icon"},p),m&&i.createElement("div",{className:"jkl-button__loader"},i.createElement(a.a,{textDescription:m.textDescription,"aria-hidden":!m.showLoader})))))}));function c(e){const n={...e,variant:"primary"};return i.createElement(s,n)}function d(e){const n={...e,variant:"secondary"};return i.createElement(s,n)}function m(e){const n={...e,variant:"tertiary"};return i.createElement(s,n)}},68588:function(e,n,t){t.d(n,{ZP:function(){return N},d0:function(){return C},L2:function(){return b}});var a=t(70079),l=t(99581),r=t(64900),o=t(56180),i=t(3438),s=t(511);var c=t(10188),d=t(79661),m=t(26372),u=t.n(m);const p=(0,a.forwardRef)(((e,n)=>{let{className:t,...l}=e;return a.createElement("div",Object.assign({className:u()("jkl-modal-container",t)},l,{ref:n}))}));p.displayName="ModalContainer";const f=(0,a.forwardRef)(((e,n)=>{let{className:t,transparent:l,...r}=e;return a.createElement("div",Object.assign({className:u()("jkl-modal-overlay",t,{"jkl-modal-overlay--transparent":l})},r,{ref:n}))}));f.displayName="ModalOverlay";const k=(0,a.forwardRef)(((e,n)=>{let{className:t,component:l,padding:r,style:o,...i}=e;const s=l||"div";return a.createElement(s,Object.assign({className:u()("jkl jkl-modal",t),style:{"--jkl-modal-padding":r?"var(--jkl-spacing-"+r+")":void 0,...o}},i,{ref:n}))}));k.displayName="Modal";const v=(0,a.forwardRef)(((e,n)=>{let{className:t,...l}=e;return a.createElement("div",Object.assign({className:u()("jkl-modal-header",t)},l,{ref:n}))}));v.displayName="ModalHeader";const g=(0,a.forwardRef)(((e,n)=>{let{className:t,...l}=e;return a.createElement("p",Object.assign({className:u()("jkl-modal-title",t)},l,{ref:n}))}));g.displayName="ModalTitle";const E=(0,a.forwardRef)(((e,n)=>{let{className:t,...l}=e;return a.createElement(c.h,Object.assign({className:u()("jkl-modal-close",t),"data-testautoid":"jkl-modal-close"},l,{ref:n}),a.createElement(d.T,{variant:"medium"}))}));E.displayName="ModalCloseButton";const y=(0,a.forwardRef)(((e,n)=>{let{className:t,...l}=e;return a.createElement("div",Object.assign({className:u()("jkl-modal-body",t)},l,{ref:n}))}));y.displayName="ModalBody";const h=(0,a.forwardRef)(((e,n)=>{let{className:t,...l}=e;return a.createElement("div",Object.assign({className:u()("jkl-modal-actions",t)},l,{ref:n}))}));h.displayName="ModalActions";const b={};function j(e){let{boolValues:n,dialogRef:t,onConfirm:c,onCancel:d}=e;const m="Bekreft sletting",[u,{title:b,overlay:j,container:N,modal:C,closeButton:w}]=function(e){const{id:n,role:t="dialog",closeButtonLabel:a="Lukk",...l}=e,r=(0,i.M)(n||"jkl-modal",{generateSuffix:!n}),[o,c]=(0,s.nk)({id:r,role:t,...l}),{dialog:d,...m}=c;return[o,{modal:c.dialog,...m,closeButton:{...c.closeButton,"aria-label":a}}]}({title:m,role:"dialog"});(0,a.useEffect)((()=>(t(u),()=>{u&&(u.destroy(),t(null))})),[t,u]);const{theme:M,density:_}=(0,r.nA)();return l.createPortal(a.createElement(p,Object.assign({},N,{"data-theme":M,"data-layout-density":_}),a.createElement(f,Object.assign({},j,{onClick:()=>{d()}})),a.createElement(k,C,a.createElement(v,null,a.createElement(g,b,m),a.createElement(E,Object.assign({},w,{onClick:()=>{d()}}))),a.createElement(y,null,"Er du sikker på at du vil slette Foo Bar Baz?"),a.createElement(h,null,a.createElement(o.KM,{"data-testid":"confirm-modal",onClick:()=>{c()}},"Slett"),a.createElement(o.C9,{onClick:()=>{d()}},"Avbryt")))),document.body)}var N=e=>{let{boolValues:n}=e;const t=a.useRef();return a.createElement("div",null,a.createElement(o.KM,{"data-testid":"open-modal",onClick:()=>{var e;null===(e=t.current)||void 0===e||e.show()}},"Åpne modal"),a.createElement(j,{boolValues:n,dialogRef:e=>{t.current=e},onConfirm:()=>{var e;console.log("✅ Confirm"),null===(e=t.current)||void 0===e||e.hide()},onCancel:()=>{var e;console.log("❌ Cancel"),null===(e=t.current)||void 0===e||e.hide()}}))};const C=()=>'\ntype ModalComponentProps = {\n    dialogRef: React.RefCallback<ModalInstance>;\n    onConfirm: () => void;\n    onCancel: () => void;\n};\n\nfunction ModalComponent({ dialogRef, onConfirm, onCancel }: ModalComponentProps) {\n    const heading = "Bekreft sletting";\n\n    const [instance, { title, overlay, container, modal, closeButton }] = useModal({\n        title: heading,\n        role: "dialog", // "dialog" er default.\n        // Kan også være "alertdialog" for å skru av click outside og Esc.\n    });\n\n    useEffect(() => {\n        dialogRef(instance);\n        return () => {\n            if (!instance) {\n                return;\n            }\n            instance.destroy();\n            dialogRef(null);\n        };\n    }, [dialogRef, instance]);\n\n    return ReactDOM.createPortal(\n        <ModalContainer {...container}>\n            <ModalOverlay\n                {...overlay}\n                onClick={() => {\n                    onCancel();\n                }}\n            />\n            <Modal {...modal}>\n                <ModalHeader>\n                    <ModalTitle {...title}>{heading}</ModalTitle>\n                    <ModalCloseButton\n                        {...closeButton}\n                        onClick={() => {\n                            onCancel();\n                        }}\n                    />\n                </ModalHeader>\n                <ModalBody>Er du sikker på at du vil slette Foo Bar Baz?</ModalBody>\n                <ModalActions>\n                    <PrimaryButton\n                        onClick={() => {\n                            onConfirm();\n                        }}\n                    >\n                        Bekreft\n                    </PrimaryButton>\n                    <TertiaryButton\n                        onClick={() => {\n                            onCancel();\n                        }}\n                    >\n                        Avbryt\n                    </TertiaryButton>\n                </ModalActions>\n            </Modal>\n        </ModalContainer>,\n        document.body,\n    );\n}\n\nexport const ModalExample: FC<ExampleComponentProps> = () => {\n    const dialogRef = React.useRef<ModalInstance | null>();\n    return (\n        <>\n            <PrimaryButton\n                onClick={() => {\n                    dialogRef.current?.show();\n                }}\n            >\n                Åpne modal\n            </PrimaryButton>\n            <ModalComponent\n                dialogRef={(instance) => {\n                    dialogRef.current = instance;\n                }}\n                onConfirm={() => {\n                    console.log("✅ Confirm");\n                    dialogRef.current?.hide();\n                }}\n                onCancel={() => {\n                    console.log("❌ Cancel");\n                    dialogRef.current?.hide();\n                }}\n            />\n        </>\n    );\n};\n'},72285:function(e,n,t){t.d(n,{l:function(){return f}});var a=t(58820),l=t(63571),r=t(87505),o=t(70079),i=t(54656);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((e=>e.fileName.includes("node_modules")))},d=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((n=>"children"===e.name||!n.fileName.includes("node_modules")))},m=(e,n)=>{const{scrollLeft:t,scrollWidth:a}=e,{clientWidth:l}=n,r=t>0,o=a-t>l;n.classList.toggle("left-shadow",r),n.classList.toggle("right-shadow",o)},u=e=>{const n=e.target,t=n.parentElement;m(n,t)},p=e=>{let{props:n}=e;const t=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=t.current;if(e&&window.MutationObserver){const n=new window.MutationObserver((n=>{n.forEach((n=>{if("attributes"===n.type&&"hidden"===n.attributeName){const n=e.querySelector(".jkl-portal-api-docs-table__table");n&&m(n,e)}}))})),a=t.current.parentElement.parentElement;n.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:t,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(r.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=n,a.map((e=>{var n,t;return[e.name?s(e.name):"",e.description,null!==(n=e.defaultValue)&&void 0!==n&&n.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(t=e.type)&&void 0!==t&&t.name?s(e.type.name):""]})))})));var a},f=e=>{let{types:n}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(a.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(n).map((e=>{let[n,t]=e;const a=t.props?Object.values(t.props).filter(d):[],r=t.props?Object.values(t.props).filter(c):[],s=(e=>{var n,t,a,l,r,o;return e.description||null!==(n=e.tags)&&void 0!==n&&n.param||null!==(t=e.tags)&&void 0!==t&&t.returns?["/**",null===(a=e.description)||void 0===a?void 0:a.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(r=l.param)||void 0===r?void 0:r.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(t);return o.createElement(l.Q,{title:n,key:n,className:"jkl-portal-api-docs__item"},s&&o.createElement(i.dn,{className:"jkl-portal-code-block"},s),a.length>0&&o.createElement(p,{props:a}),r.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:r})))}))))}},1634:function(e,n,t){t.d(n,{M:function(){return s}});var a=t(26372),l=t.n(a),r=t(49597),o=t(70079),i=t(34044);const s=e=>{let{className:n,children:t}=e;const{prefersReducedMotion:a}=(0,o.useContext)(i.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(r.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||s?0:.35},className:l()("jkl-portal__main",n),id:"innhold"},t)}},58820:function(e,n,t){t.d(n,{U:function(){return o}});var a=t(35250),l=t(26372),r=t.n(l);const o=e=>{let{className:n,density:t,id:l,...o}=e;return(0,a.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:r()("jkl-accordion",n),"data-density":t,id:l,...o})}},63571:function(e,n,t){t.d(n,{Q:function(){return c}});var a=t(35250),l=t(68998),r=t(1386),o=t(26372),i=t.n(o),s=t(70079);const c=e=>{let{children:n,title:t,className:o,startExpanded:c=!1,onClick:d,id:m,...u}=e;const[p,f]=(0,s.useState)(c),[k]=(0,s.useState)((()=>c)),{detailsRef:v,summaryRef:g,contentRef:E,onSummaryClick:y}=(0,r.E)({onOpenChange:(e,n)=>{f(e),d&&d(n,e)},isExpanded:k});return(0,a.jsxs)("details",{"data-testid":"jkl-accordion-item",...u,className:i()("jkl-accordion-item",o),ref:v,id:m,children:[(0,a.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:y,ref:g,children:[t,(0,a.jsx)(l.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!p,bold:p})]}),(0,a.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:E,children:(0,a.jsx)("div",{className:"jkl-accordion-item__content",children:n})})]})}},87505:function(e,n,t){t.d(n,{w:function(){return m}});var a=t(70079),l=t(41699),r=t(65174),o=t(6914),i=t(82546),s=t(39126),c=t(66169),d=t(94509);const m=(0,a.forwardRef)(((e,n)=>{let{caption:t,columns:m,emptyTableText:u,rows:p,verticalAlign:f,...k}=e;return a.createElement(l.i,{fullWidth:!0,...k,ref:n},t&&a.createElement(o.R,{srOnly:!0},t),a.createElement(s.s,null,a.createElement(d.S,null,m.map(((e,n)=>a.createElement(c.x,{key:n,density:"compact",bold:!0},e))))),a.createElement(r.R,null,0===p.length&&u&&a.createElement(d.S,null,a.createElement(i.p,{colSpan:m.length},u)),p.map(((e,n)=>a.createElement(d.S,{key:n},e.map(((e,n)=>a.createElement(i.p,{key:n,"data-th":m[n],verticalAlign:f},e))))))))}));m.displayName="DataTable"}}]);