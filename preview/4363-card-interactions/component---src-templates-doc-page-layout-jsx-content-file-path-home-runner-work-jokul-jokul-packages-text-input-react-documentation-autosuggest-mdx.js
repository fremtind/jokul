"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[164],{12001:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return M},Head:function(){return N},default:function(){return P}});var l=n(47160),a=n(70079),r=n(55208),o=n(81159),s=n(3438),i=n(26372),u=n.n(i),c=n(57444),d=n(10188),m=n(79661),p=n(28845);var g=e=>{let{hasSelectedItem:t,clearSelection:n,onClick:l,...r}=e;return a.createElement(d.h,Object.assign({},r,{className:"jkl-text-input-action-button","aria-label":t?"Fjern valg":"Vis valg",title:t?"Fjern valg":"Vis valg",onClick:t?n:l}),t?a.createElement(m.T,null):a.createElement(p.W,null))};var f=function(e){let{downshiftProps:{getMenuProps:t,getItemProps:n},highlightedIndex:l,items:r,itemToString:o,noHitsMessage:s,maxNumberOfHits:i=1/0,noHits:c}=e;const d=r.length>i?r.slice(0,i):r;if(0===d.length&&!s&&!c)return null;const m=0===d.length&&c?c.items:d;return a.createElement("div",{"data-testid":"autosuggest__menu",className:"jkl-autosuggest__menu"},(s||c)&&0===d.length&&a.createElement("div",{className:"jkl-autosuggest__no-hits-message","aria-live":"polite"},s||(null==c?void 0:c.text)),m.length>0&&a.createElement("ul",t({className:"jkl-autosuggest__item-list"}),m.map(((e,t)=>a.createElement("li",Object.assign({},n({item:e,className:u()("jkl-autosuggest__item",{"jkl-autosuggest__item--active":t===l})}),{"data-testid":"autosuggest__item",key:o(e)}),o(e))))))};var h=function(e){let{className:t="",label:n,labelProps:l,tooltip:r,supportLabelProps:i,inputId:d,labelId:m,leadText:p,errorLabel:h,helpLabel:k,density:v,variant:b="small",noHitsMessage:E,maxNumberOfHits:j,placeholder:x,itemToString:y,items:w,downshiftProps:I,showDropdownControllerButton:C=!1,onConfirm:V=()=>{},noHits:O}=e;const N=(0,s.M)(d||"jkl-text-input",{generateSuffix:!d}),M=(0,s.M)(m||"jkl-label",{generateSuffix:!m}),P={inputId:N,labelId:M};return a.createElement(c.ZP,Object.assign({},I,P,{itemToString:y}),(e=>{let{getInputProps:s,getToggleButtonProps:c,getItemProps:d,getLabelProps:m,getMenuProps:I,getRootProps:N,selectedItem:P,isOpen:_,highlightedIndex:S,clearSelection:H}=e;return a.createElement(o.B,Object.assign({},N(),{label:n,className:u()("jkl-autosuggest",t),density:v,labelProps:{variant:b,...l,...m({id:M})},supportLabelProps:i,tooltip:r,errorLabel:h,helpLabel:k,render:e=>a.createElement(a.Fragment,null,p&&a.createElement("p",{className:u()("jkl-spacing-l--bottom",{"jkl-body":"compact"!==v,"jkl-small":"compact"===v})},p),a.createElement("div",{className:"jkl-text-input-wrapper","data-invalid":!!h},a.createElement("input",Object.assign({},e,s({id:e.id,placeholder:x,className:"jkl-text-input__input",onKeyDown:e=>{13!==e.keyCode||_||V()}}),{"data-testid":"autosuggest__input"})),C&&a.createElement(g,Object.assign({},c(),{hasSelectedItem:!!P,clearSelection:H})),_&&a.createElement(f,{downshiftProps:{getMenuProps:I,getItemProps:d},highlightedIndex:S,items:w,itemToString:y,noHitsMessage:E,maxNumberOfHits:j,noHits:O})))}))}))},k=n(23802);const v=e=>{let{allItems:t,onChange:n=()=>{},onConfirm:l=()=>{},onInputValueChange:r,onStateChange:o,value:s,isOpen:i,...u}=e;const{0:c,1:d}=(0,a.useState)(t);(0,a.useEffect)((()=>d(t)),[t]);return a.createElement(h,Object.assign({},u,{items:c,itemToString:e=>e||"",onConfirm:l,downshiftProps:{selectedItem:s,onInputValueChange:r,onStateChange:e=>{o&&o(e),void 0!==e.selectedItem?n(e.selectedItem||""):e.inputValue&&d(function(e,t,n){const l=n?{keys:n}:{};return t?(0,k.Lu)(e,t,l):e}(t,e.inputValue))},isOpen:i}}))},b={boolProps:["Med hjelpetekst","Med feil","Med tooltip","Med placeholder","Max antall treff","Vis ikoner","Ingen treff","Ingen treff med valg"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:1}]};var E=e=>{let{boolValues:t,choiceValues:n}=e;const{0:l,1:o}=(0,a.useState)(""),s=["Afghanistan","Aland Islands","Algeria","Australia","Austria","Bahrain","Bangladesh","Benin","Bermuda","Bhutan"].filter((e=>e.toLowerCase().includes(l.toLowerCase())));return a.createElement("div",{style:{maxWidth:"400px",width:"100%"}},a.createElement(v,{className:"jkl-spacing-l--top",label:"Velg land",onInputValueChange:o,onChange:o,value:l,onConfirm:()=>console.log("onConfirm"),allItems:s,helpLabel:null!=t&&t["Med hjelpetekst"]?"Velg et land fra listen eller skriv inn landet selv":void 0,tooltip:null!=t&&t["Med tooltip"]?a.createElement(r.d,{content:"Velg et land fra listen eller skriv inn landet selv."}):void 0,errorLabel:null!=t&&t["Med feil"]?"Du må velge et land":void 0,placeholder:null!=t&&t["Med placeholder"]?"Velg et land":void 0,showDropdownControllerButton:null==t?void 0:t["Vis ikoner"],noHitsMessage:null!=t&&t["Ingen treff"]?"Fant ingen land, men du kan skrive ferdig":void 0,maxNumberOfHits:null!=t&&t["Max antall treff"]?3:void 0,variant:(null==n?void 0:n.Variant)||"medium",noHits:null!=t&&t["Ingen treff med valg"]?{text:a.createElement("p",null,"Fant ingen land. Vil du velge et av disse:"),items:["Norge","Sverige","Danmark"]}:void 0}),a.createElement("p",{className:"jkl-body jkl-spacing-m--top"},"Du har valgt: ",l))};const j=e=>{let{boolValues:t,choiceValues:n}=e;return'\nconst allItems = ["Afghanistan", "Aland Islands", /* etc... */];\nconst [value, setValue] = useState("");\nreturn (\n    <div style={{ maxWidth: "400px", width: "100%" }}>\n        <Autosuggest\n            className="jkl-spacing-l--top"\n            label="Velg land med fritekst"\n            onInputValueChange={setValue}\n            onChange={setValue}\n            value={value}\n            allItems={allItems.filter((item) => item.toLowerCase().includes(value.toLowerCase()))}'+(null!=t&&t["Med hjelpetekst"]?'\n            helpLabel="Velg et land fra listen eller skriv inn landet selv"':"")+(null!=t&&t["Med feil"]?'\n            errorLabel="Du må velge et land"':"")+(null!=t&&t["Med tooltip"]?'\n            tooltip={\n                <PopupTip content="Velg et land fra listen eller skriv inn landet selv." />\n            }':"")+(null!=t&&t["Med placeholder"]?'\n            placeholder="Velg et land"':"")+"\n            showDropdownControllerButton={"+(null==t?void 0:t["Vis ikoner"])+"}"+(null!=t&&t["Ingen treff"]?'\n            noHitsMessage="Fant ingen land, men du kan skrive ferdig"':"")+(null!=t&&t["Max antall treff"]?"\n            maxNumberOfHits={3}":"")+(null!=t&&t["Ingen treff med valg"]?'\n            noHits={{\n                text: <p className="jkl-body">Fant ingen land. Vil du velge et av disse:</p>,\n                items: ["Norge", "Sverige", "Danmark"],\n            }}':"")+'\n            variant="'+(null==n?void 0:n.Variant)+'"\n        />\n    </div>\n);\n'};function x(e){const t=Object.assign({p:"p",a:"a",h2:"h2"},(0,l.ah)(),e.components),{Ingress:n,Experimental:r,ComponentExample:o}=t;return o||w("ComponentExample",!0),r||w("Experimental",!0),n||w("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(n,null,a.createElement(t.p,null,"Autosuggest kan brukes til å gi brukerene forhåndsdefinerte forslag basert\npå det de skriver, men også godta brukerens tekst som gyldig input uavhengig\nav treff.")),"\n",a.createElement(r,null,a.createElement(t.p,null,"Denne bruker ",a.createElement(t.a,{href:"https://github.com/downshift-js/downshift"},"downshift.js")," . Du\nmå gjerne bruke denne, men forvent at Autosuggest kommer til å bli skrevet\nom. Det kommer til å være breaking changes.")),"\n",a.createElement(o,{title:"Autosuggest",component:E,knobs:b,codeExample:j}),"\n",a.createElement(t.h2,null,"Bruk"),"\n",a.createElement(t.p,null,"Autosuggest har noen likhetstrekk med en ",a.createElement(t.a,{href:"/preview/4363-card-interactions/komponenter/select"},"Select")," med søk. En nyanseforskjell er at en nedtrekksliste ikke lar brukeren velge noe annet enn de forhåndsbestemte alternativene. Autosuggest lar deg derimot godta brukerens input uansett om det er treff eller ei – fritekst. Om brukeren alltid skal velge ett av de gitte alternativene er det sannsynligvis Select som er riktig komponent å bruke."),"\n",a.createElement(t.p,null,"For å skille Autosuggest visuelt fra ",a.createElement(t.a,{href:"/preview/4363-card-interactions/komponenter/textinput"},"TextInput")," kan du bruke ikonene som er innebygget."))}var y=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(x,e)):x(e)};function w(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var I=n(72285),C=n(22756),V=n(95573),O=n(1634);const N=e=>{let{pageContext:t}=e;return a.createElement(C.p,{title:t.title})},M=e=>{let{location:t,data:n,pageContext:l,children:r}=e;const{frontmatter:o}=n.page,{types:s}=l;return a.createElement(O.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(V.M1,Object.assign({},o,{versions:l.versions})),a.createElement(V.w5,o),r,s&&a.createElement(I.l,{types:s}))};function P(e){return a.createElement(M,e,a.createElement(y,e))}},55208:function(e,t,n){n.d(t,{d:function(){return c}});var l=n(19794),a=n(26372),r=n.n(a),o=n(70079),s=n(79117),i=n(56189),u=n(5847);const c=e=>{let{content:t,triggerProps:n,...a}=e;const{0:c,1:d}=(0,o.useState)(!1);return o.createElement(s.u,Object.assign({onOpenChange:d,triggerOn:"click"},a),o.createElement(u.a,null,o.createElement("button",Object.assign({},n,{type:"button",className:r()("jkl-tooltip-question-button",null==n?void 0:n.className),"data-testid":"jkl-tooltip-question-button"}),o.createElement(l.U,{variant:"inherit",bold:c}),o.createElement("span",{className:"jkl-sr-only"},"Vis hjelpetekst"))),o.createElement(i._,null,t))}},79117:function(e,t,n){n.d(t,{nr:function(){return c},u:function(){return d}});var l=n(57579),a=n(88905),r=n(84256),o=n(26893),s=n(70079);const i=(0,s.createContext)(null),u=i.Provider,c=()=>{const e=(0,s.useContext)(i);if(null===e)throw new Error("Tooltip-komponentene kan kun brukes inne i <Tooltip />");return e},d=e=>{let{children:t,...n}=e;const i=(e=>{let{initialOpen:t=!1,placement:n="top",delay:i=250,triggerOn:u="hover",onOpenChange:c}=e;const{0:d,1:m}=(0,s.useState)(t),p=(0,s.useRef)(null),g=(0,s.useRef)(null),f=(0,l.YF)({open:d,onOpenChange:e=>{null==c||c(e),m(e)},placement:n,whileElementsMounted:a.Me,middleware:[(0,r.cv)(16),(0,r.RR)(),(0,r.uY)({padding:16}),(0,o.x7)({element:p,padding:8})]}),h=(0,l.qs)(f.context,{role:"tooltip"}),k=(0,l.bQ)(f.context),v=(0,l.eS)(f.context,{enabled:"click"===u}),b=(0,l.XI)(f.context,{enabled:"hover"===u,delay:d?0:i}),E=(0,l.KK)(f.context,{enabled:"click"!==u||d}),j=(0,l.NI)([k,E,h,v,b]);return{triggerOn:u,isOpen:d,setOpen:m,arrowElement:p,...f,refs:{...f.refs,description:g,setDescription:e=>g.current=e},...j}})(n);return s.createElement(u,{value:i},t)}},56189:function(e,t,n){n.d(t,{_:function(){return m}});var l=n(57579),a=n(17050),r=n(3438),o=n(45901),s=n(26372),i=n.n(s),u=n(70079),c=n(79117);function d(e,t){switch(void 0===t&&(t=0),e){case"top":default:return"0 "+t+"px";case"left":return t+"px 0";case"bottom":return"0 "+-t+"px";case"right":return-t+"px 0"}}const m=(0,u.forwardRef)((function(e,t){let{className:n,children:s,...m}=e;const{context:p,triggerOn:g,arrowElement:f,getFloatingProps:h,placement:k,floatingStyles:v,refs:b}=(0,c.nr)(),E=(0,l.qq)([t,b.setFloating]),j=(0,r.M)("jkl-tooltip-content"),{prefersReducedMotion:x}=(0,o.c)(),{isMounted:y,styles:w}=(0,l.Y_)(p,{duration:{open:x?0:250,close:x?0:150},initial:e=>{let{side:t}=e;return{opacity:0,translate:d(t,5)}},open:e=>{let{side:t}=e;return{opacity:1,translate:d(t,0)}},close:e=>{let{side:t}=e;return{opacity:0,translate:d(t,-5)}}}),{density:I,theme:C}=(0,a.H)(b.reference.current);return u.createElement(l.ll,null,"hover"===g&&u.createElement("span",{ref:b.setDescription,hidden:!0,key:j+"-trigger"},s),y&&u.createElement("span",{className:"jkl",key:j+"-wrapper"},u.createElement("span",Object.assign({key:j,ref:E,"data-placement":k,"aria-live":"click"===g?"assertive":void 0,"data-theme":C,"data-layout-density":I,className:i()("jkl-tooltip-content",n)},h({...m,id:j}),{style:{...v,...w}}),s,u.createElement(l.Y$,{context:p,ref:f,width:24,height:12,fill:"var(--background-color)"}))))}))},5847:function(e,t,n){n.d(t,{a:function(){return i}});n(31369);var l=n(57579),a=n(26372),r=n.n(a),o=n(70079),s=n(79117);const i=(0,o.forwardRef)((function(e,t){var n,a;let{children:i,className:u,...c}=e;const{isOpen:d,getReferenceProps:m,refs:p,triggerOn:g}=(0,s.nr)(),f=i.ref,h=(0,l.qq)([f,p.setReference,t]),k=[null===(n=p.reference.current)||void 0===n?void 0:n.textContent,null===(a=p.description.current)||void 0===a?void 0:a.textContent].map((e=>null==e?void 0:e.replaceAll(/[\ue003-\uf8aa]/g,""))).filter(Boolean).join(". ");return o.isValidElement(i)?o.cloneElement(i,m({ref:h,"aria-label":k,...i.props,...c,className:r()(i.props.className,u),"data-tooltip-shown":d,style:{...i.props.style},tabIndex:"click"===g?0:void 0})):o.createElement("button",Object.assign({"data-tooltip-shown":d},m({className:r()(u,"jkl-tooltip-trigger"),type:"button",ref:h,"aria-label":k,...c})),i)}))},17050:function(e,t,n){n.d(t,{H:function(){return l}});const l=e=>{if(!e)return{};const t=getComputedStyle(e);return{theme:parseInt(t.getPropertyValue("--jkl-background-color").replace("#",""),16)<8388607.5?"dark":"light",density:'"compact"'===t.getPropertyValue("--jkl-density")?"compact":"comfortable"}}}}]);