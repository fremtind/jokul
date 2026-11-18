import{r as v,j as t}from"./iframe-7_fnrMRC.js";import{c as b}from"./clsx-B-dksMZM.js";import{I as h}from"./InputGroup-BCW5sF57.js";import{B as y}from"./BaseTextInput-Buo6EoTd.js";const r=v.forwardRef((n,a)=>{const{"data-size":i,label:s,className:l,errorLabel:o,helpLabel:d,inline:e,inputClassName:p,labelProps:u,supportLabelProps:m,tooltip:f,description:k,...g}=n,c={label:s,errorLabel:o,helpLabel:d,labelProps:u,inline:e,supportLabelProps:m,tooltip:f,description:k};return t.jsx(h,{...c,className:b(l,"jkl-text-input",{"jkl-text-input--inline":e}),"data-size":i,"data-testid":"jkl-text-input",children:t.jsx(y,{ref:a,...g,className:p})})});r.displayName="TextInput";r.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{disabled:{required:!1,tsType:{name:"boolean"},description:`Deaktiverer kontrollen.

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
å bruke input-feltet som en controlled input og selv begrense lengden på verdien.`},"data-testautoid":{required:!1,tsType:{name:"string"},description:""},inline:{required:!1,tsType:{name:"boolean"},description:""},inputClassName:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};export{r as T};
