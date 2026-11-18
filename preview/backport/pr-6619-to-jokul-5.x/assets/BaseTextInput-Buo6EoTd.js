import{r as g,j as a,R as v}from"./iframe-7_fnrMRC.js";import{c as i}from"./clsx-B-dksMZM.js";import{I as b}from"./IconButton-C6jozOVS.js";function h(t,n){if(t)return{width:t};if(n)return{width:`calc(${`${Math.min(n,15)}em`} + 24px)`}}const u=g.forwardRef((t,n)=>{const{action:e,align:l="left","aria-invalid":s,className:m="",maxLength:o,style:p,type:f="text",unit:d,width:k,actionButton:r,...c}=t;return a.jsxs("div",{className:"jkl-text-input-wrapper","data-invalid":s,style:{...p,...h(k,o)},children:[a.jsx("input",{"aria-invalid":s,ref:n,className:i("jkl-text-input__input",m,{"jkl-text-input__input--align-right":l==="right"}),maxLength:o,type:f,...c}),d&&a.jsx("span",{className:"jkl-text-input__unit",children:d}),!e&&r&&v.cloneElement(r,{className:i("jkl-text-input-action-button",r.props.className)}),e&&!r&&a.jsx(b,{className:i("jkl-text-input-action-button",e.className),title:e.label,onClick:e.onClick,onFocus:e.onFocus,onBlur:e.onBlur,ref:e.buttonRef,type:e.type||"button",children:e.icon})]})});u.displayName="BaseInputField";u.__docgenInfo={description:"",methods:[],displayName:"BaseInputField",props:{disabled:{required:!1,tsType:{name:"boolean"},description:`Deaktiverer kontrollen.

Bruk den bare i interne verktøy, aldri i kundeflyter. En deaktivert kontroll
forklarer ikke hvorfor den er låst eller hva som må til for å låse den opp,
og den dempede kontrasten gjør den vanskelig å lese. Skal et valg ikke være
tilgjengelig for kunden, la det heller være ute av skjemaet, eller forklar
kravet med \`description\` eller \`errorLabel\`.`},readOnly:{required:!1,tsType:{name:"boolean"},description:`Gjør kontrollen uredigerbar. Verdien beholder full tekstkontrast, og feltet
kan fortsatt fokuseres og kopieres fra.

Bruk den bare i interne verktøy, aldri i kundeflyter. Kunden får ikke vite
hvorfor feltet er låst eller hva som må til for å endre det. Skal en verdi
bare vises i en kundeflyt, vis den som tekst framfor som et låst skjemafelt.`},align:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:`Brukes til inputfelter hvor det brukes maskering, for formatering av store tall. Brukes typisk bare til valuta.
@default "left"`},action:{required:!1,tsType:{name:"union",raw:"ActionButton | ActionSubmit",elements:[{name:"ActionButton"},{name:"ActionSubmit"}]},description:"@deprecated Bruk heller actionButton"},unit:{required:!1,tsType:{name:"ReactNode"},description:`Benevnelse for feltet. Unngå å bruke både benevnelse og handling samtidig
@example "kr"`},width:{required:!1,tsType:{name:"string"},description:""},actionButton:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:"Element som vises til høyre for inputfeltet. Brukes typisk til å trigge en handling som f.eks. å vise/skjule passord."},maxLength:{required:!1,tsType:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]},description:`Setter maxlength attributtet og justerer bredden på feltet til å passe det tallet som settes

Merk: I noen Android-browsere vil dette ikke fungere som forventet. Det er gjort sånn
pga begrensninger med hvordan software-tastaturet fungerer og er ikke en bug. Dersom
man er veldig avhengig av at maxLength håndteres på alle plattformer anbefales det
å bruke input-feltet som en controlled input og selv begrense lengden på verdien.`}},composes:["Omit"]};export{u as B};
