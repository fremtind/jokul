"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[3669],{68598:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return v},Head:function(){return p},default:function(){return k}});var l=n(64717),a=n(92379),r=n(41491);function o(e){const t=Object.assign({p:"p",h2:"h2",a:"a",code:"code",ul:"ul",li:"li"},(0,l.ah)(),e.components),{Ingress:n,ComponentExample:o}=t;return o||i("ComponentExample",!0),n||i("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(n,null,a.createElement(t.p,null,"Combobox-komponenten lar brukeren velge flere alternativ fra en\nnedtrekksliste.")),"\n",a.createElement(o,{component:r.ZP,codeExample:r.Xl,knobs:r.Um,title:"Combobox"}),"\n",a.createElement(t.p,null,"Komponenten er en kombinasjon av nedtrekksliste og søkefelt hvor brukeren enten kan skrive direkte inn i inputfeltet eller velge alternativ fra listen."),"\n",a.createElement(t.h2,null,"Tekst og validering"),"\n",a.createElement(t.p,null,"Unngå forkortelser og hold heller teksten kort og konsis.\nHvis det trengs, kan du legge en hjelpetekst under listen for å forklare mer."),"\n",a.createElement(t.p,null,"Hvis nedtrekkslisten ikke validerer, viser systemet en feilmelding som forklarer hva som er galt. Feilmeldingen erstatter en eventuell hjelpetekst, så den må eventuelt gjenta informasjonen fra hjelpeteksten."),"\n",a.createElement(t.p,null,"Valgte alternativer vises i inputfeltet som ",a.createElement(t.a,{href:"/preview/feedback-story/komponenter/chip"},"Chips"),". Hvis teksten til alternativet består av mer enn 10 karakterer, bør du vurdere å bruke ",a.createElement(t.code,null,"tagLabel")," for å angi en kortere tekst som brukes i chip-en. Den fulle teksten til alternativet vil vises som et ",a.createElement(t.a,{href:"/preview/feedback-story/komponenter/tooltip"},"Tooltip")," ved hover."),"\n",a.createElement(t.h2,null,"Når bruker vi Combobox?"),"\n",a.createElement(t.p,null,"Vi bruker combobox når brukeren har mer enn tre alternativ å velge mellom. Hvis brukeren kun har tre valgalternativer eller mindre, bruk heller ",a.createElement(t.a,{href:"/preview/feedback-story/komponenter/checkbox"},"Checkbox"),"."),"\n",a.createElement(t.p,null,"Noen eksempler på bruk er:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Til å velge diagnoser"),"\n",a.createElement(t.li,null,"Til å velge skadeomfang"),"\n"))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(o,e)):o(e)};function i(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var u=n(75482),c=n(96036),m=n(59001),b=n(65458),d=n(79379);const p=e=>{let{pageContext:t}=e;return a.createElement(c.p,{title:t.title})},v=e=>{let{location:t,data:n,pageContext:l,children:r}=e;const{frontmatter:o}=n.page,{types:s}=l;return a.createElement(d.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(b.M1,Object.assign({},o,{versions:l.versions})),t.pathname.includes("komponenter")&&a.createElement(m.c,{variant:"komponent",component:o.title}),a.createElement(b.w5,o),r,s&&a.createElement(u.l,{types:s}))};function k(e){return a.createElement(v,e,a.createElement(s,e))}},41491:function(e,t,n){n.d(t,{Xl:function(){return L},Um:function(){return w},ZP:function(){return C}});var l=n(92379),a=n(9222),r=n(57193),o=n(46835),s=n(80324),i=n.n(s),u=Object.defineProperty,c=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const p=(0,l.forwardRef)((function(e,t){var n=e,{className:a,variant:s,onClick:u,children:p,selected:v,size:k="small"}=n,f=((e,t)=>{var n={};for(var l in e)m.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&c)for(var l of c(e))t.indexOf(l)<0&&b.call(e,l)&&(n[l]=e[l]);return n})(n,["className","variant","onClick","children","selected","size"]);return l.createElement("button",((e,t)=>{for(var n in t||(t={}))m.call(t,n)&&d(e,n,t[n]);if(c)for(var n of c(t))b.call(t,n)&&d(e,n,t[n]);return e})({ref:t,className:i()("jkl-chip","jkl-chip--".concat(k),"jkl-chip--".concat(s),a),onClick:u,"aria-pressed":v},f),p,"filter"===s&&v&&l.createElement(r.n,{className:"jkl-chip__icon",variant:"small","data-testid":"jkl-check-icon"}),"input"===s&&l.createElement(o.T,{className:"jkl-chip__icon",variant:"small","data-testid":"jkl-close-icon"}))}));var v=n(55086),k=n(42054),f=n(29311),g=n(38475),h=n(27685),E=n(53675),j=n(47484),y=n(54708),_=n(74753);function A(e){return"string"==typeof e?{value:e,label:e}:e}const x=e=>{var t,n;let{id:o,placeholder:s,items:u,onChange:c,onFocus:m,onBlur:b,value:d,label:x,noMatchingOption:w,labelProps:C,helpLabel:L,errorLabel:M,width:O,density:N,name:P,className:V,invalid:S,hasTagHover:D}=e;const H=(0,g.M)(o||"jkl-combobox",{generateSuffix:!o}),T=H+"_label",B=H+"_button",F=H+"_search-input",{0:I,1:K}=(0,l.useState)(d||[]),{0:R,1:U}=(0,l.useState)(!1),{0:Z,1:q}=(0,l.useState)(""),{0:z,1:G}=(0,l.useState)(!1),{0:X,1:J}=(0,l.useState)(!1),Q=(0,l.useRef)(null),W=(0,l.useRef)(null),Y=(0,l.useRef)(!1);(0,l.useEffect)((()=>{q(""),R&&Q.current&&Q.current.focus()}),[R]),(0,l.useEffect)((()=>{K((e=>d||e))}),[d]);const $=e=>!!I&&I.some((t=>t.value===e.value)),ee=(0,l.useCallback)((e=>I.filter((t=>t.value!==e))),[I]),te=(0,l.useCallback)(((e,t)=>{let n=ee(t);K(n),c({type:"change",target:{name:P,value:t,selectedOptions:n}}),e.stopPropagation(),0===n.length&&J(!1)}),[ee,K,c,P,J]),ne=(0,l.useCallback)((e=>{var t;let n;if(I.some((t=>t.value===e)))n=ee(e);else{const t=u.find((t=>t.value===e));n=[].concat((0,a.Z)(I),[t])}null===(t=Q.current)||void 0===t||t.focus(),K(n),c({type:"change",target:{name:P,value:e,selectedOptions:n}})}),[I,K,c,P,ee,u]),le=e=>{var t;null===(t=Q.current)||void 0===t||t.focus(),U(!0),q(e.target.value)},ae=(0,l.useMemo)((()=>{if(!Z)return u;const e=u.filter((e=>e.label.toLowerCase().indexOf(Z.toLowerCase())>=0));return G(0===e.length),e}),[Z,u]),{0:re,1:oe}=(0,l.useState)(null!==(t=ae[0])&&void 0!==t&&t.value?H+"-"+(null===(n=ae[0])||void 0===n?void 0:n.value):void 0),se=!R;(0,l.useEffect)((()=>{const e=e=>{"Escape"===e.key&&R&&U(!1)};return"undefined"!=typeof window&&window.addEventListener("keydown",e),()=>{"undefined"!=typeof window&&R&&window.removeEventListener("keydown",e)}}),[U,R]);const ie=(0,l.useCallback)((e=>{e?Q.current&&Q.current.focus():Y.current&&W.current&&W.current.focus()}),[]),ue=(0,l.useCallback)((()=>{Y.current||(m&&m({type:"change",target:{name:P,value:(null==I?void 0:I[0].value)||"",selectedOptions:I}}),Y.current=!0,U(!0))}),[m,I,P]),[ce]=(0,h.v)(R,{onFirstVisible:ie,onTransitionEnd:ie});(0,E.c)({ref:ce});const me=(0,l.useRef)(null),be=(0,l.useCallback)((e=>{const t=me.current;if(!(t&&t.contains(e.relatedTarget))){var n,l;if(q(""),b)b({type:"blur",target:{name:P,value:(null==I||null===(n=I[0])||void 0===n?void 0:n.value)||"",selectedOptions:I}}),null===(l=W.current)||void 0===l||l.dispatchEvent(new Event("focusout",{bubbles:!0}));Y.current=!1,U(!1)}}),[b,P,I]),de=(0,l.useCallback)((e=>{e.target.focus({preventScroll:!0})}),[]),pe=(0,l.useCallback)((e=>{if("ArrowDown"===e.key){e.preventDefault(),e.stopPropagation();const n=ce.current;var t;if(n)null===(t=n.querySelector('[role="option"]'))||void 0===t||t.focus()}else"Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),U(!1));if(e.metaKey&&"a"===e.key||e.ctrlKey&&"a"===e.key){e.preventDefault(),e.stopPropagation();const t=I.map((e=>Object.assign({},e,{isMarked:!0})));J(!0),K(t)}else if("Backspace"===e.key){e.stopPropagation(),J(!1);if(I.some((e=>e.isMarked))){const e=I.filter((e=>!e.isMarked));K(e),q("")}else I.length>0&&""===Z&&te(e,I[I.length-1].value)}}),[I,Z,ce,te]),ve=(0,l.useCallback)((e=>{if("Tab"===e.key)Q.current&&(e.preventDefault(),e.stopPropagation(),e.shiftKey||U(!1),Q.current.focus());else if("ArrowUp"===e.key&&ce.current&&Q.current){const t=ce.current.querySelector('[role="option"]:not([hidden])');e.currentTarget.id===(null==t?void 0:t.id)&&Q.current&&Q.current.focus()}}),[U,ce]),ke=I.length>=1,fe=(0,l.useCallback)((e=>l.createElement(p,{key:e.value,"data-testid":"jkl-chip","aria-label":"Fjern "+e.tagLabel,className:"jkl-combobox__selected-option "+(X&&"jkl-combobox__selected-option--marked"),variant:"input",onClick:t=>{Q.current&&Q.current.focus(),te(t,e.value)},onBlur:be},e.tagLabel?e.tagLabel:e.label)),[be,te,X]);return l.createElement(f.B,{label:x,id:F,ref:me,"data-testid":"jkl-combobox",className:i()("jkl-combobox",V,{"jkl-combobox--invalid":!!M||S,"jkl-combobox--menu-open":R,"jkl-combobox--menu-closed":!R&&ke}),labelProps:Object.assign({id:T},C),helpLabel:L,errorLabel:M,density:N,render:e=>l.createElement("div",{className:i()("jkl-combobox__wrapper",{"jkl-combobox__wrapper--active-value":ke}),style:{width:O},tabIndex:-1,onFocus:ue,onBlur:be},l.createElement("div",{className:"jkl-combobox__chips","data-testid":"jkl-combobox__chips"},I.map(A).map((e=>D?l.createElement(j.u,{key:e.value},l.createElement(y.a,null,fe(e)),l.createElement(_._,null,e.label)):fe(e))),l.createElement("input",Object.assign({},e,{className:"jkl-combobox__search-input",onChange:le,"data-testid":"jkl-combobox__search-input",onFocus:ue,onBlur:be,onKeyDown:pe,value:Z,ref:Q,"aria-controls":H,role:"combobox","aria-autocomplete":"list","aria-expanded":R,placeholder:I.length>0?"":s,autoComplete:"off"}))),l.createElement("div",{className:"jkl-combobox__menu",role:"listbox",ref:ce,id:H,"aria-labelledby":T,"aria-multiselectable":"true","aria-activedescendant":re,onFocus:ue,onBlur:be,tabIndex:-1},ae.map(((e,t)=>l.createElement("button",{key:H+"-"+e.value,type:"button",id:H+"__"+e.value,"aria-selected":$(e),role:"option",value:e.value,onBlur:be,className:"jkl-combobox__option "+($(e)&&"jkl-combobox__option--selected"),"data-testid":"jkl-combobox__option","data-testautoid":"jkl-combobox__option-"+t,onFocus:ue,onKeyDown:ve,onClick:t=>{oe(H+"__"+e.value),t.stopPropagation(),ne(e.value),q("")},onMouseOver:de},e.description?l.createElement("span",null,e.label,l.createElement("span",{className:"jkl-combobox__option-description"},e.description)):e.label,$(e)?l.createElement("span",null,l.createElement(r.n,null)," "):null))),z&&l.createElement("div",{className:"jkl-combobox__no-option"},w)),l.createElement("div",{className:"jkl-combobox__actions"},l.createElement(v.h,{id:B,onFocus:ue,onBlur:be,className:"jkl-combobox__button","data-testid":"jkl-combobox__button","aria-label":(I.map((e=>e.label))||"Velg")+","+x,"aria-expanded":R,"aria-controls":H,role:"button",onClick:()=>U((e=>!e)),onMouseDown:e=>{var t;e.preventDefault(),null===(t=W.current)||void 0===t||t.focus()}},l.createElement(k.K,{pointingDown:se}))))})};x.displayName="Combobox";const w={boolProps:["Med hjelpetekst","Med feil","Med empty state","Med tagHover"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:0}]};var C=e=>{let{choiceValues:t,boolValues:n}=e;const a=t&&t.Variant,{0:r,1:o}=(0,l.useState)([]),s=n&&n["Med feil"]?"Du må velge sykdommer, for eksempel A090 og A150.":void 0,i=n&&n["Med hjelpetekst"]?"Med sykdommer mener vi for eksempel A090 og A150.":void 0,u=n&&n["Med empty state"]?"Ingen valg matcher søket":void 0,c=!(!n||!n["Med tagHover"])||void 0;return l.createElement(x,{id:"produsent",name:"produsent",placeholder:"Søk",width:"220px",labelProps:{variant:a},helpLabel:i,errorLabel:s,label:"Velg sykdommer",noMatchingOption:u,hasTagHover:c,items:[{value:"a080",label:"A080 - Rotavirusenteritt",tagLabel:"A080"},{value:"a081",label:"A081 - Akutt gastroenteritt som skyldes norovirus",tagLabel:"A081"},{value:"a082",label:"A082 - Adenovirusenteritt",tagLabel:"A082"},{value:"a083",label:"A083 - Annen virusenteritt",tagLabel:"A083"},{value:"a084",label:"A084 - Uspesifisert virusinfeksjon i mage-tarmkanalen",tagLabel:"A084"},{value:"a085",label:"A085 - Annen spesifisert mage-tarminfeksjon",tagLabel:"A085"},{value:"a090",label:"A090 - Annen eller uspesifisert gastroenteritt eller kolitt av infeksiøs årsak",tagLabel:"A090"},{value:"a099",label:"A099 - Gastroenteritt eller kolitt av uspesifisert årsak",tagLabel:"A099"},{value:"a150",label:"A150 - Lungetuberkulose bekreftet ved mikroskopi av sputum med eller uten kultur",tagLabel:"A150"}],value:r,onChange:e=>{o(e.target.selectedOptions),console.log("Change: ",e)}})};const L=e=>{let{choiceValues:t,boolValues:n}=e;return'\n    <Combobox\n    id="produsent"\n    name="prdusent"\n    placeholder="Søk"\n    variant="'+(null==t?void 0:t.Variant)+'"\n    helpLabel='+(null!=n&&n["Med hjelpetekst"]?'"Hjelpsom beskjed"':"{undefined}")+"\n    errorLabel="+(null!=n&&n["Med feil"]?'"Beskrivende feilmelding"':"{undefined}")+'\n    label="Velg sykdommer"\n    noMatchingOption='+(null!=n&&n["Med empty state"]?'"Ingen valg matcher søket"':"{undefined}")+"\n    hasTagHover="+(null!=n&&n["Med tagHover"]?"{true}":"{undefined}")+'\n    items={[\n        { value: "a080", label: "A080 - Rotavirusenteritt", tagLabel: "A080" },\n        { value: "a081", label: "A081 - Akutt gastroenteritt som skyldes norovirus", tagLabel: "A081" },\n        { value: "a082", label: "A082 - Adenovirusenteritt", tagLabel: "A082" },\n        { value: "a083", label: "A083 - Annen virusenteritt", tagLabel: "A083" },\n        { value: "a084", label: "A084 - Uspesifisert virusinfeksjon i mage-tarmkanalen", tagLabel: "A084" },\n        { value: "a085", label: "A085 - Annen spesifisert mage-tarminfeksjon", tagLabel: "A085" },\n        {\n            value: "a090",\n            label: "A090 - Annen eller uspesifisert gastroenteritt eller kolitt av infeksiøs årsak",\n            tagLabel: "A090",\n        },\n        { value: "a099", label: "A099 - Gastroenteritt eller kolitt av uspesifisert årsak", tagLabel: "A099" },\n        {\n            value: "a150",\n            label: "A150 - Lungetuberkulose bekreftet ved mikroskopi av sputum med eller uten kultur",\n            tagLabel: "A150",\n        },\n    ]}\n    value={selectedValues}\n    onChange={setSelectedValues}\n    />\n'}}}]);