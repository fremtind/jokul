import{j as e,r as p}from"./iframe-DsTuScF2.js";import{c as L}from"./clsx-B-dksMZM.js";import{m as O}from"./mergeRefs-_7lZvp9j.js";import{C as R,g as I}from"./types-IsTkoTmK.js";import{I as M}from"./InputGroup-COAsuiUc.js";const u=l=>{const{className:i,type:n="button",label:r="Søk",...a}=l;return e.jsx("button",{className:"jkl-button jkl-button--ghost jkl-search-submit",type:n,...a,children:r})};u.__docgenInfo={description:"",methods:[],displayName:"SearchButton",props:{label:{required:!1,tsType:{name:"string"},description:`Lar deg endre teksten i knappen.
@default "Søk"`}}};const m=p.forwardRef(function(i,n){const{label:r="Søk",className:a,errorLabel:f,helpLabel:b,labelProps:g={srOnly:!0},supportLabelProps:v,tooltip:h,description:j,name:y="q",placeholder:x="Søk",spellCheck:S=!1,icon:E="search",children:N,value:P,disabled:o,readOnly:d,trackingProps:k,...c}=i,T={label:r,errorLabel:f,helpLabel:b,labelProps:g,supportLabelProps:v,tooltip:h,description:j},t=p.useRef(null),_=O(t,n),q=()=>{if(t.current){Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value")?.set?.call(t.current,"");const w=new Event("change",{bubbles:!0});t.current.dispatchEvent(w),t.current.focus()}};return e.jsx("div",{className:L("jkl-search",a),children:e.jsx(M,{...T,label:r,"data-testid":"jkl-search",render:s=>e.jsxs("div",{className:"jkl-search__wrapper","data-icon":E,"data-invalid":s["aria-invalid"],children:[e.jsx("input",{ref:_,type:"search",name:y,placeholder:x,spellCheck:S,...s,...c,disabled:o,readOnly:d,"data-track-component-name":R.Search,"data-track-id":k?.id??r,"data-track-label":r,...I(k?.extra,c)}),e.jsx("button",{className:"jkl-search__clear-button",type:"button",onClick:q,disabled:o||d,children:e.jsx("span",{className:"jkl-sr-only",children:"Tilbakestill søkefeltet"})}),N]})})})});m.Button=u;m.__docgenInfo={description:"",methods:[],displayName:"Search",props:{disabled:{required:!1,tsType:{name:"boolean"},description:`Deaktiverer kontrollen.

Bruk den bare i interne verktøy, aldri i kundeflyter. En deaktivert kontroll
forklarer ikke hvorfor den er låst eller hva som må til for å låse den opp,
og den dempede kontrasten gjør den vanskelig å lese. Skal et valg ikke være
tilgjengelig for kunden, la det heller være ute av skjemaet, eller forklar
kravet med \`description\` eller \`errorLabel\`.`},readOnly:{required:!1,tsType:{name:"boolean"},description:`Gjør kontrollen uredigerbar. Verdien beholder full tekstkontrast, og feltet
kan fortsatt fokuseres og kopieres fra.

Bruk den bare i interne verktøy, aldri i kundeflyter. Kunden får ikke vite
hvorfor feltet er låst eller hva som må til for å endre det. Skal en verdi
bare vises i en kundeflyt, vis den som tekst framfor som et låst skjemafelt.`},label:{required:!1,tsType:{name:"string"},description:"Label til søket. Bruk {@link LabelProps} for å vise den."},icon:{required:!1,tsType:{name:"union",raw:'"search" | "filter_alt" | "filter_list"',elements:[{name:"literal",value:'"search"'},{name:"literal",value:'"filter_alt"'},{name:"literal",value:'"filter_list"'}]},description:`Lar deg velge hvilket ikon som vises på venstresiden i feltet.
@default "search"`},children:{required:!1,tsType:{name:"ReactNode"},description:""},trackingProps:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1},description:"En unik identifikator for komponenten som skal spores. Mappes til `data-track-id`."},{key:"extra",value:{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}],raw:"Record<string, string | number | boolean>",required:!1},description:"Ekstra sporingsfelt utover de faste feltene over, for team som trenger å\nspore egne, prosjektspesifikke detaljer. Hver nøkkel rendres som et eget\n`data-track-<kebab-case-nøkkel>`-attributt i DOM-en, se `getExtraTrackingAttributes`."}]}},description:""}}};export{m as S,u as a};
