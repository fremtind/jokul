import{j as n}from"./jsx-runtime-DqZpzl9T.js";import{c as P}from"./clsx-B-dksMZM.js";import{r as a}from"./index-siqcju79.js";import{I as M}from"./InputGroup-BFZ5w6w_.js";const j=a.forwardRef((f,g)=>{const{autoExpand:l,counter:t,onBlur:o,onFocus:d,rows:u=2,placeholder:k,style:v,value:r,"aria-invalid":x,"aria-describedby":h,onChange:p,startOpen:T,...y}=f,[s,b]=a.useState(()=>typeof r>"u"?0:typeof r=="number"?String(r).length:r.length),[m,A]=a.useState(!1),w=a.useRef(null),c=g||w;a.useEffect(()=>{const e=c.current;e&&(m||r)&&(e.style.setProperty("--textarea-height","auto"),e.style.setProperty("--textarea-height",`${e.scrollHeight}px`))},[l,c,r,m,s,u]);function C(e){A(!0),d&&d(e)}function B(e){A(!1),o&&o(e)}function E(e){b(e.target.value.length),p&&p(e)}function I(){c.current?.focus()}const i=t?.maxLength||0,R=s;function F(e,N){return e<=0||N===0?0:e*100/N}const D=t&&s>i?`Du har skrevet ${s-i} tegn for mye`:void 0,q=!!(x||D),G={overflowX:l?"hidden":void 0},O=a.useId(),L=P(h,{[O??""]:t});return n.jsxs("div",{className:"jkl-text-area-wrapper","data-invalid":q,children:[t&&n.jsxs("p",{id:O,className:"jkl-sr-only",children:["Tekstområde med plass til ",i," tegn"]}),n.jsx("textarea",{"aria-invalid":q,className:"jkl-text-area__text-area",rows:u,onBlur:B,onFocus:C,onChange:E,ref:c,style:{...v,...G},placeholder:k,value:r,maxLength:t?.maxLength,...L?{"aria-describedby":L}:{},...y}),t&&n.jsxs("div",{className:"jkl-text-area__counter","aria-hidden":"true",onClick:I,style:{cursor:"pointer"},children:[n.jsxs("output",{className:"jkl-text-area__counter-count","aria-hidden":"true",children:[s," / ",i]}),!t.hideProgress&&n.jsx("div",{className:"jkl-text-area__counter-progress",style:{"--progress-width":`${F(R,i)}%`}})]})]})});j.displayName="BaseTextArea";j.__docgenInfo={description:"",methods:[],displayName:"BaseTextArea",props:{counter:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    /** Antall tegn før telleren når maksimum og vi viser en feilmelding */
    maxLength: number;
    /**
     * Med teller vises en progress-bar i bunnen av tekstfeltet som krymper
     * ned fra 100% (null tegn skrevet) til 0% (maks antall tegn skrevet).
     * Om du vil skjule den, sett denne propen til true.
     *
     * @default false
     */
    hideProgress?: boolean;
}`,signature:{properties:[{key:"maxLength",value:{name:"number",required:!0},description:"Antall tegn før telleren når maksimum og vi viser en feilmelding"},{key:"hideProgress",value:{name:"boolean",required:!1},description:`Med teller vises en progress-bar i bunnen av tekstfeltet som krymper
ned fra 100% (null tegn skrevet) til 0% (maks antall tegn skrevet).
Om du vil skjule den, sett denne propen til true.

@default false`}]}},description:"Viser en teller i tekstfeltet når det har fokus."},rows:{required:!1,tsType:{name:"number"},description:"Definerer antall synlige linjer som bestemmer tekstfeltets høyde"},inline:{required:!1,tsType:{name:"boolean"},description:""},startOpen:{required:!1,tsType:{name:"boolean"},description:"@deprecated Animasjonen for å åpne tekstfeltet ved fokus er fjernet og er derfor ikke lenger i bruk."},autoExpand:{required:!1,tsType:{name:"boolean"},description:"Gjør så skjemafeltet ekspanderer seg til å vise alt innhold i stedet for å scrolle"}},composes:["Omit"]};const _=a.forwardRef((f,g)=>{const{autoExpand:l,className:t,counter:o,density:d,errorLabel:u,helpLabel:k,inline:v,label:r,labelProps:x,startOpen:h,supportLabelProps:p,tooltip:T,description:y,...s}=f,b={label:r,density:d,errorLabel:u,helpLabel:k,labelProps:x,inline:v,supportLabelProps:p,tooltip:T,description:y},m={autoExpand:l,counter:o,startOpen:h};return n.jsx(M,{className:P("jkl-text-area",t,{"jkl-text-area--auto-expand":l}),"data-testid":"jkl-text-area",...b,children:n.jsx(j,{ref:g,...s,...m})})});_.displayName="TextArea";_.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{counter:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    /** Antall tegn før telleren når maksimum og vi viser en feilmelding */
    maxLength: number;
    /**
     * Med teller vises en progress-bar i bunnen av tekstfeltet som krymper
     * ned fra 100% (null tegn skrevet) til 0% (maks antall tegn skrevet).
     * Om du vil skjule den, sett denne propen til true.
     *
     * @default false
     */
    hideProgress?: boolean;
}`,signature:{properties:[{key:"maxLength",value:{name:"number",required:!0},description:"Antall tegn før telleren når maksimum og vi viser en feilmelding"},{key:"hideProgress",value:{name:"boolean",required:!1},description:`Med teller vises en progress-bar i bunnen av tekstfeltet som krymper
ned fra 100% (null tegn skrevet) til 0% (maks antall tegn skrevet).
Om du vil skjule den, sett denne propen til true.

@default false`}]}},description:"Viser en teller i tekstfeltet når det har fokus."},rows:{required:!1,tsType:{name:"number"},description:"Definerer antall synlige linjer som bestemmer tekstfeltets høyde"},inline:{required:!1,tsType:{name:"boolean"},description:""},startOpen:{required:!1,tsType:{name:"boolean"},description:"@deprecated Animasjonen for å åpne tekstfeltet ved fokus er fjernet og er derfor ikke lenger i bruk."},autoExpand:{required:!1,tsType:{name:"boolean"},description:"Gjør så skjemafeltet ekspanderer seg til å vise alt innhold i stedet for å scrolle"}},composes:["Omit"]};export{_ as T};
