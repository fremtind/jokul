import{r as k,j as a,R as g}from"./iframe-BtDSgjSo.js";import{c as l}from"./clsx-B-dksMZM.js";import{I as v}from"./IconButton-DUgUK_r4.js";function h(t,n){if(t)return{width:t};if(n)return{width:`calc(${`${Math.min(n,15)}em`} + 24px)`}}const y=k.forwardRef((t,n)=>{const{action:e,align:i="left","aria-invalid":s,className:d="",maxLength:u,style:p,type:m="text",unit:o,width:f,actionButton:r,...c}=t;return a.jsxs("div",{className:"jkl-text-input-wrapper","data-invalid":s,style:{...p,...h(f,u)},children:[a.jsx("input",{"aria-invalid":s,ref:n,className:l("jkl-text-input__input",d,{"jkl-text-input__input--align-right":i==="right"}),maxLength:u,type:m,...c}),o&&a.jsx("span",{className:"jkl-text-input__unit",children:o}),!e&&r&&g.cloneElement(r,{className:l("jkl-text-input-action-button",r.props.className)}),e&&!r&&a.jsx(v,{className:l("jkl-text-input-action-button",e.className),title:e.label,onClick:e.onClick,onFocus:e.onFocus,onBlur:e.onBlur,ref:e.buttonRef,type:e.type||"button",children:e.icon})]})});y.displayName="BaseInputField";try{BaseInputField.displayName="BaseInputField",BaseInputField.__docgenInfo={description:"",displayName:"BaseInputField",props:{align:{defaultValue:{value:'"left"'},description:"Brukes til inputfelter hvor det brukes maskering, for formatering av store tall. Brukes typisk bare til valuta.",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},action:{defaultValue:null,description:"@deprecated Bruk heller actionButton",name:"action",required:!1,type:{name:"Action"}},unit:{defaultValue:null,description:`Benevnelse for feltet. Unngå å bruke både benevnelse og handling samtidig
@example "kr"`,name:"unit",required:!1,type:{name:"ReactNode"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},actionButton:{defaultValue:null,description:"Element som vises til høyre for inputfeltet. Brukes typisk til å trigge en handling som f.eks. å vise/skjule passord.",name:"actionButton",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},maxLength:{defaultValue:null,description:`Setter maxlength attributtet og justerer bredden på feltet til å passe det tallet som settes

Merk: I noen Android-browsere vil dette ikke fungere som forventet. Det er gjort sånn
pga begrensninger med hvordan software-tastaturet fungerer og er ikke en bug. Dersom
man er veldig avhengig av at maxLength håndteres på alle plattformer anbefales det
å bruke input-feltet som en controlled input og selv begrense lengden på verdien.`,name:"maxLength",required:!1,type:{name:"number"}},disabled:{defaultValue:null,description:`Deaktiverer kontrollen.

Bruk den bare i interne verktøy, aldri i kundeflyter. En deaktivert kontroll
forklarer ikke hvorfor den er låst eller hva som må til for å låse den opp,
og den dempede kontrasten gjør den vanskelig å lese. Skal et valg ikke være
tilgjengelig for kunden, la det heller være ute av skjemaet, eller forklar
kravet med \`description\` eller \`errorLabel\`.`,name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:`Gjør kontrollen uredigerbar. Verdien beholder full tekstkontrast, og feltet
kan fortsatt fokuseres og kopieres fra.

Bruk den bare i interne verktøy, aldri i kundeflyter. Kunden får ikke vite
hvorfor feltet er låst eller hva som må til for å endre det. Skal en verdi
bare vises i en kundeflyt, vis den som tekst framfor som et låst skjemafelt.`,name:"readOnly",required:!1,type:{name:"boolean"}}}}}catch{}export{y as B};
