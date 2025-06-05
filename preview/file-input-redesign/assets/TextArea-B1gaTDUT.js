import{j as s}from"./jsx-runtime-BbjHj44Y.js";import{c as I}from"./clsx-B-dksMZM.js";import{r as l}from"./index-C6mWTJJr.js";import{I as R}from"./InputGroup-Bw9wqPcK.js";const b=l.forwardRef((f,c)=>{const{autoExpand:a,counter:n,onBlur:o,onFocus:d,rows:g=7,placeholder:k=" ",startOpen:j,style:v,value:t,"aria-invalid":u,onChange:p,...h}=f,[r,x]=l.useState(()=>typeof t>"u"?0:typeof t=="number"?String(t).length:t.length),[m,T]=l.useState(!1),O=l.useRef(null),y=c||O;l.useEffect(()=>{const e=y.current;if(e){if(!a){e.style.height="";return}m||t?(e.style.height="auto",e.style.height=`${e.scrollHeight}px`):e.style.height=""}},[a,y,t,m]);function w(e){T(!0),d&&d(e)}function N(e){T(!1),o&&o(e)}function P(e){x(e.target.value.length),p&&p(e)}const i=(n==null?void 0:n.maxLength)||0,L=i-r;function E(e,q){return e<=0||q===0?0:e*100/q}const B=n&&r>i?`Du har skrevet ${r-i} tegn for mye`:void 0,A=!!(u||B),C={overflowX:a?"hidden":void 0};return s.jsxs("div",{className:"jkl-text-area-wrapper","data-invalid":A,"data-has-content":r>0,children:[s.jsx("textarea",{"aria-invalid":A,className:`jkl-text-area__text-area jkl-text-area__text-area--${g}-rows`,onBlur:N,onFocus:w,onChange:P,ref:y,style:{...v,...C},placeholder:k,value:t,...h}),n&&s.jsxs("div",{className:"jkl-text-area__counter","aria-hidden":"true",children:[s.jsxs("div",{className:"jkl-text-area__counter-count",children:[r," / ",i]}),!n.hideProgress&&s.jsx("div",{className:"jkl-text-area__counter-progress",style:{"--progress-width":`${E(L,i)}%`}})]})]})});b.displayName="BaseTextArea";b.__docgenInfo={description:"",methods:[],displayName:"BaseTextArea",props:{counter:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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

@default false`}]}},description:"Viser en teller i tekstfeltet når det har fokus."},rows:{required:!1,tsType:{name:"number"},description:"Sett antall rader skjemafeltet ekspanderes til ved focus. Innholdet scroller om feltet fylles med mer innhold enn det er plass til."},inline:{required:!1,tsType:{name:"boolean"},description:""},startOpen:{required:!1,tsType:{name:"boolean"},description:""},autoExpand:{required:!1,tsType:{name:"boolean"},description:"Gjør så skjemafeltet ekspanderer seg til å vise alt innhold i stedet for å scrolle"}},composes:["Omit"]};const _=l.forwardRef((f,c)=>{const{autoExpand:a,className:n,counter:o,density:d,errorLabel:g,helpLabel:k,inline:j,label:v,labelProps:t,startOpen:u,supportLabelProps:p,tooltip:h,...r}=f,x={label:v,density:d,errorLabel:g,helpLabel:k,labelProps:t,inline:j,supportLabelProps:p,tooltip:h},m={autoExpand:a,counter:o,startOpen:u};return s.jsx(R,{className:I("jkl-text-area",n,{"jkl-text-area--start-open":u,"jkl-text-area--auto-expand":a}),"data-testid":"jkl-text-area",...x,children:s.jsx(b,{ref:c,...r,...m})})});_.displayName="TextArea";_.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{counter:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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

@default false`}]}},description:"Viser en teller i tekstfeltet når det har fokus."},rows:{required:!1,tsType:{name:"number"},description:"Sett antall rader skjemafeltet ekspanderes til ved focus. Innholdet scroller om feltet fylles med mer innhold enn det er plass til."},inline:{required:!1,tsType:{name:"boolean"},description:""},startOpen:{required:!1,tsType:{name:"boolean"},description:""},autoExpand:{required:!1,tsType:{name:"boolean"},description:"Gjør så skjemafeltet ekspanderer seg til å vise alt innhold i stedet for å scrolle"}},composes:["Omit"]};export{_ as T};
