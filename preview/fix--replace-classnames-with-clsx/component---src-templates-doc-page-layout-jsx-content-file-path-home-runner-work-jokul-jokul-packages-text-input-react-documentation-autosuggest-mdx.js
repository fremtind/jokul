"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[164],{12001:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return C},Head:function(){return V},default:function(){return P}});var l=n(47160),a=n(70079),r=n(81159),s=n(3438),o=n(53048),i=n(57444),u=n(10188),c=n(95176),m=n(85330);var d=e=>{let{hasSelectedItem:t,clearSelection:n,onClick:l,...r}=e;return a.createElement(u.h,Object.assign({},r,{className:"jkl-text-input-action-button","aria-label":t?"Fjern valg":"Vis valg",title:t?"Fjern valg":"Vis valg",onClick:t?n:l}),t?a.createElement(c.T,null):a.createElement(m.W,null))};var p=function(e){let{downshiftProps:{getMenuProps:t,getItemProps:n},highlightedIndex:l,items:r,itemToString:s,noHitsMessage:i,maxNumberOfHits:u=1/0,noHits:c}=e;const m=r.length>u?r.slice(0,u):r;if(0===m.length&&!i&&!c)return null;const d=0===m.length&&c?c.items:m;return a.createElement("div",{"data-testid":"autosuggest__menu",className:"jkl-autosuggest__menu"},(i||c)&&0===m.length&&a.createElement("div",{className:"jkl-autosuggest__no-hits-message","aria-live":"polite"},i||(null==c?void 0:c.text)),d.length>0&&a.createElement("ul",t({className:"jkl-autosuggest__item-list"}),d.map(((e,t)=>a.createElement("li",Object.assign({},n({item:e,className:(0,o.Z)("jkl-autosuggest__item",{"jkl-autosuggest__item--active":t===l})}),{"data-testid":"autosuggest__item",key:s(e)}),s(e))))))};var g=function(e){let{className:t="",label:n,labelProps:l,tooltipProps:u,supportLabelProps:c,inputId:m,labelId:g,leadText:v,errorLabel:f,helpLabel:k,density:h,variant:b="small",noHitsMessage:E,maxNumberOfHits:j,placeholder:w,itemToString:x,items:I,downshiftProps:N,showDropdownControllerButton:_=!1,onConfirm:V=(()=>{}),noHits:C}=e;const P=(0,s.M)(m||"jkl-text-input",{generateSuffix:!m}),M=(0,s.M)(g||"jkl-label",{generateSuffix:!g}),y={inputId:P,labelId:M};return a.createElement(i.ZP,Object.assign({},N,y,{itemToString:x}),(e=>{let{getInputProps:s,getToggleButtonProps:i,getItemProps:m,getLabelProps:g,getMenuProps:N,getRootProps:P,selectedItem:y,isOpen:O,highlightedIndex:S,clearSelection:L}=e;return a.createElement(r.B,Object.assign({},P(),{label:n,className:(0,o.Z)("jkl-autosuggest",t),density:h,labelProps:{variant:b,...l,...g({id:M})},supportLabelProps:c,tooltipProps:u,errorLabel:f,helpLabel:k,render:e=>a.createElement(a.Fragment,null,v&&a.createElement("p",{className:(0,o.Z)("jkl-spacing-l--bottom",{"jkl-body":"compact"!==h,"jkl-small":"compact"===h})},v),a.createElement("div",{className:"jkl-text-input-wrapper","data-invalid":!!f},a.createElement("input",Object.assign({},e,s({id:e.id,placeholder:w,className:"jkl-text-input__input",onKeyDown:e=>{13!==e.keyCode||O||V()}}),{"data-testid":"autosuggest__input"})),_&&a.createElement(d,Object.assign({},i(),{hasSelectedItem:!!y,clearSelection:L})),O&&a.createElement(p,{downshiftProps:{getMenuProps:N,getItemProps:m},highlightedIndex:S,items:I,itemToString:x,noHitsMessage:E,maxNumberOfHits:j,noHits:C})))}))}))},v=n(23802);const f=e=>{let{allItems:t,onChange:n=(()=>{}),onConfirm:l=(()=>{}),onInputValueChange:r,onStateChange:s,value:o,isOpen:i,...u}=e;const{0:c,1:m}=(0,a.useState)(t);(0,a.useEffect)((()=>m(t)),[t]);return a.createElement(g,Object.assign({},u,{items:c,itemToString:e=>e||"",onConfirm:l,downshiftProps:{selectedItem:o,onInputValueChange:r,onStateChange:e=>{s&&s(e),void 0!==e.selectedItem?n(e.selectedItem||""):e.inputValue&&m(function(e,t,n){const l=n?{keys:n}:{};return t?(0,v.Lu)(e,t,l):e}(t,e.inputValue))},isOpen:i}}))},k={boolProps:["Med hjelpetekst","Med feil","Med tooltip","Med placeholder","Max antall treff","Vis ikoner","Ingen treff","Ingen treff med valg"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:1}]};var h=e=>{let{boolValues:t,choiceValues:n}=e;const{0:l,1:r}=(0,a.useState)(""),s=["Afghanistan","Aland Islands","Algeria","Australia","Austria","Bahrain","Bangladesh","Benin","Bermuda","Bhutan"].filter((e=>e.toLowerCase().includes(l.toLowerCase())));return a.createElement("div",{style:{maxWidth:"400px",width:"100%"}},a.createElement(f,{className:"jkl-spacing-l--top",label:"Velg land",onInputValueChange:r,onChange:r,value:l,onConfirm:()=>console.log("onConfirm"),allItems:s,helpLabel:null!=t&&t["Med hjelpetekst"]?"Velg et land fra listen eller skriv inn landet selv":void 0,tooltipProps:null!=t&&t["Med tooltip"]?{content:"Velg et land fra listen eller skriv inn landet selv."}:void 0,errorLabel:null!=t&&t["Med feil"]?"Du må velge et land":void 0,placeholder:null!=t&&t["Med placeholder"]?"Velg et land":void 0,showDropdownControllerButton:null==t?void 0:t["Vis ikoner"],noHitsMessage:null!=t&&t["Ingen treff"]?"Fant ingen land, men du kan skrive ferdig":void 0,maxNumberOfHits:null!=t&&t["Max antall treff"]?3:void 0,variant:(null==n?void 0:n.Variant)||"medium",noHits:null!=t&&t["Ingen treff med valg"]?{text:a.createElement("p",null,"Fant ingen land. Vil du velge et av disse:"),items:["Norge","Sverige","Danmark"]}:void 0}),a.createElement("p",{className:"jkl-body jkl-spacing-m--top"},"Du har valgt: ",l))};const b=e=>{let{boolValues:t,choiceValues:n}=e;return'\nconst allItems = ["Afghanistan", "Aland Islands", /* etc... */];\nconst [value, setValue] = useState("");\nreturn (\n    <div style={{ maxWidth: "400px", width: "100%" }}>\n        <Autosuggest\n            className="jkl-spacing-l--top"\n            label="Velg land med fritekst"\n            onInputValueChange={setValue}\n            onChange={setValue}\n            value={value}\n            allItems={allItems.filter((item) => item.toLowerCase().includes(value.toLowerCase()))}'+(null!=t&&t["Med hjelpetekst"]?'\n            helpLabel="Velg et land fra listen eller skriv inn landet selv"':"")+(null!=t&&t["Med feil"]?'\n            errorLabel="Du må velge et land"':"")+(null!=t&&t["Med tooltip"]?'\n            tooltipProps={{ content: "Velg et land fra listen eller skriv inn landet selv." }}':"")+(null!=t&&t["Med placeholder"]?'\n            placeholder="Velg et land"':"")+"\n            showDropdownControllerButton={"+(null==t?void 0:t["Vis ikoner"])+"}"+(null!=t&&t["Ingen treff"]?'\n            noHitsMessage="Fant ingen land, men du kan skrive ferdig"':"")+(null!=t&&t["Max antall treff"]?"\n            maxNumberOfHits={3}":"")+(null!=t&&t["Ingen treff med valg"]?'\n            noHits={{\n                text: <p className="jkl-body">Fant ingen land. Vil du velge et av disse:</p>,\n                items: ["Norge", "Sverige", "Danmark"],\n            }}':"")+'\n            variant="'+(null==n?void 0:n.Variant)+'"\n        />\n    </div>\n);\n'};function E(e){const t=Object.assign({p:"p",a:"a",h2:"h2"},(0,l.ah)(),e.components),{Ingress:n,Experimental:r,ComponentExample:s}=t;return s||w("ComponentExample",!0),r||w("Experimental",!0),n||w("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(n,null,a.createElement(t.p,null,"Autosuggest kan brukes til å gi brukerene forhåndsdefinerte forslag basert på det de skriver, men også godta\nbrukerens tekst som gyldig input uavhengig av treff.")),"\n",a.createElement(r,null,a.createElement(t.p,null,"Denne bruker ",a.createElement(t.a,{href:"https://github.com/downshift-js/downshift"},"downshift.js")," . Du må gjerne bruke denne, men forvent at\nAutosuggest kommer til å bli skrevet om. Det kommer til å være breaking changes.")),"\n",a.createElement(s,{title:"Autosuggest",component:h,knobs:k,codeExample:b}),"\n",a.createElement(t.h2,null,"Bruk"),"\n",a.createElement(t.p,null,"Autosuggest har noen likhetstrekk med en ",a.createElement(t.a,{href:"/preview/fix--replace-classnames-with-clsx/komponenter/select"},"Select")," med søk. En nyanseforskjell er at en nedtrekksliste ikke lar brukeren velge noe annet enn de forhåndsbestemte alternativene. Autosuggest lar deg derimot godta brukerens input uansett om det er treff eller ei – fritekst. Om brukeren alltid skal velge ett av de gitte alternativene er det sannsynligvis Select som er riktig komponent å bruke."),"\n",a.createElement(t.p,null,"For å skille Autosuggest visuelt fra ",a.createElement(t.a,{href:"/preview/fix--replace-classnames-with-clsx/komponenter/textinput"},"TextInput")," kan du bruke ikonene som er innebygget."))}var j=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(E,e)):E(e)};function w(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var x=n(72285),I=n(22756),N=n(95573),_=n(1634);const V=e=>{let{pageContext:t}=e;return a.createElement(I.p,{title:t.title})},C=e=>{let{location:t,data:n,pageContext:l,children:r}=e;const{frontmatter:s}=n.page,{types:o}=l;return a.createElement(_.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(N.M1,Object.assign({},s,{versions:l.versions})),a.createElement(N.w5,s),r,o&&a.createElement(x.l,{types:o}))};function P(e){return a.createElement(C,e,a.createElement(j,e))}},72285:function(e,t,n){n.d(t,{l:function(){return g}});var l=n(78217),a=n(41994),r=n(87505),s=n(70079),o=n(54656);const i=e=>s.createElement("code",{className:"jkl-portal-inline-code"},e),u=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:a}=t,r=n>0,s=l-n>a;t.classList.toggle("left-shadow",r),t.classList.toggle("right-shadow",s)},d=e=>{const t=e.target,n=t.parentElement;m(t,n)},p=e=>{let{props:t}=e;const n=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),s.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},s.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},s.createElement(r.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?i(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?i(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?i(e.type.name):""]})))})));var l},g=e=>{let{types:t}=e;return s.createElement("section",{className:"mb-104 jkl-portal-paragraph"},s.createElement("h2",{className:"heading-1 mt-104"},"React API"),s.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),s.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(c):[],r=n.props?Object.values(n.props).filter(u):[],i=(e=>{var t,n,l,a,r,s;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(a=e.tags)||void 0===a||null===(r=a.param)||void 0===r?void 0:r.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(s=e.tags)&&void 0!==s&&s.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return s.createElement(a.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},i&&s.createElement(o.dn,{className:"jkl-portal-code-block"},i),l.length>0&&s.createElement(p,{props:l}),r.length>0&&s.createElement(s.Fragment,null,s.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),s.createElement(p,{props:r})))}))))}}}]);