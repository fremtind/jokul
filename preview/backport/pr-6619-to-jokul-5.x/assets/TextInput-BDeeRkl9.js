import{r as v,j as a}from"./iframe-DsTuScF2.js";import{c as y}from"./clsx-B-dksMZM.js";import{I as x}from"./InputGroup-COAsuiUc.js";import{C as h,g as T}from"./types-IsTkoTmK.js";import{B as j}from"./BaseTextInput-CJRBxqP_.js";const s=v.forwardRef((i,o)=>{const{"data-size":l,label:e,className:d,errorLabel:p,helpLabel:m,inline:r,inputClassName:k,labelProps:u,supportLabelProps:f,tooltip:g,description:c,trackingProps:n,...t}=i,b={label:e,errorLabel:p,helpLabel:m,labelProps:u,inline:r,supportLabelProps:f,tooltip:g,description:c};return a.jsx(x,{...b,className:y(d,"jkl-text-input",{"jkl-text-input--inline":r}),"data-size":l,"data-testid":"jkl-text-input",children:a.jsx(j,{ref:o,...t,className:k,"data-track-component-name":h.TextInput,"data-track-id":n?.id??(e?String(e):void 0),"data-track-label":e?String(e):void 0,"data-track-type":t.type,"data-track-max-length":t.maxLength,...T(n?.extra,t)})})});s.displayName="TextInput";s.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{disabled:{required:!1,tsType:{name:"boolean"},description:`Deaktiverer kontrollen.

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
å bruke input-feltet som en controlled input og selv begrense lengden på verdien.`},trackingProps:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    /**
     * En unik identifikator for komponenten som skal spores. Mappes til \`data-track-id\`.
     */
    id?: string;
    /**
     * Ekstra sporingsfelt utover de faste feltene over, for team som trenger å
     * spore egne, prosjektspesifikke detaljer. Hver nøkkel rendres som et eget
     * \`data-track-<kebab-case-nøkkel>\`-attributt i DOM-en, se \`getExtraTrackingAttributes\`.
     */
    extra?: Record<string, string | number | boolean>;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1},description:"En unik identifikator for komponenten som skal spores. Mappes til `data-track-id`."},{key:"extra",value:{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}],raw:"Record<string, string | number | boolean>",required:!1},description:"Ekstra sporingsfelt utover de faste feltene over, for team som trenger å\nspore egne, prosjektspesifikke detaljer. Hver nøkkel rendres som et eget\n`data-track-<kebab-case-nøkkel>`-attributt i DOM-en, se `getExtraTrackingAttributes`."}]}},description:""},"data-testautoid":{required:!1,tsType:{name:"string"},description:""},inline:{required:!1,tsType:{name:"boolean"},description:""},inputClassName:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};export{s as T};
