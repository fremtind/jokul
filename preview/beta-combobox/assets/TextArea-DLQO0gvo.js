import{c as I}from"./clsx-B-dksMZM.js";import{r as l,R as r}from"./index-siqcju79.js";import{I as R}from"./InputGroup-BJwbXp8L.js";const b=l.forwardRef((c,f)=>{const{autoExpand:a,counter:s,onBlur:i,onFocus:d,rows:g=7,placeholder:k=" ",startOpen:j,style:v,value:t,"aria-invalid":u,onChange:m,...h}=c,[n,x]=l.useState(()=>typeof t>"u"?0:typeof t=="number"?String(t).length:t.length),[p,T]=l.useState(!1),_=l.useRef(null),y=f||_;l.useEffect(()=>{const e=y.current;if(e){if(!a){e.style.height="";return}p||t?(e.style.height="auto",e.style.height=`${e.scrollHeight}px`):e.style.height=""}},[a,y,t,p,n]);function O(e){T(!0),d&&d(e)}function w(e){T(!1),i&&i(e)}function N(e){x(e.target.value.length),m&&m(e)}const o=s?.maxLength||0,P=o-n;function L(e,q){return e<=0||q===0?0:e*100/q}const B=s&&n>o?`Du har skrevet ${n-o} tegn for mye`:void 0,A=!!(u||B),C={overflowX:a?"hidden":void 0};return r.createElement("div",{className:"jkl-text-area-wrapper","data-invalid":A,"data-has-content":n>0},r.createElement("textarea",{"aria-invalid":A,className:`jkl-text-area__text-area jkl-text-area__text-area--${g}-rows`,onBlur:w,onFocus:O,onChange:N,ref:y,style:{...v,...C},placeholder:k,value:t,...h}),s&&r.createElement("div",{className:"jkl-text-area__counter","aria-hidden":"true"},r.createElement("div",{className:"jkl-text-area__counter-count"},n," / ",o),!s.hideProgress&&r.createElement("div",{className:"jkl-text-area__counter-progress",style:{"--progress-width":`${L(P,o)}%`}})))});b.displayName="BaseTextArea";b.__docgenInfo={description:"",methods:[],displayName:"BaseTextArea",props:{counter:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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

@default false`}]}},description:"Viser en teller i tekstfeltet når det har fokus."},rows:{required:!1,tsType:{name:"number"},description:"Sett antall rader skjemafeltet ekspanderes til ved focus. Innholdet scroller om feltet fylles med mer innhold enn det er plass til."},inline:{required:!1,tsType:{name:"boolean"},description:""},startOpen:{required:!1,tsType:{name:"boolean"},description:""},autoExpand:{required:!1,tsType:{name:"boolean"},description:"Gjør så skjemafeltet ekspanderer seg til å vise alt innhold i stedet for å scrolle"}},composes:["Omit"]};const E=l.forwardRef((c,f)=>{const{autoExpand:a,className:s,counter:i,density:d,errorLabel:g,helpLabel:k,inline:j,label:v,labelProps:t,startOpen:u,supportLabelProps:m,tooltip:h,...n}=c,x={label:v,density:d,errorLabel:g,helpLabel:k,labelProps:t,inline:j,supportLabelProps:m,tooltip:h},p={autoExpand:a,counter:i,startOpen:u};return r.createElement(R,{className:I("jkl-text-area",s,{"jkl-text-area--start-open":u,"jkl-text-area--auto-expand":a}),"data-testid":"jkl-text-area",...x},r.createElement(b,{ref:f,...n,...p}))});E.displayName="TextArea";E.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{counter:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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

@default false`}]}},description:"Viser en teller i tekstfeltet når det har fokus."},rows:{required:!1,tsType:{name:"number"},description:"Sett antall rader skjemafeltet ekspanderes til ved focus. Innholdet scroller om feltet fylles med mer innhold enn det er plass til."},inline:{required:!1,tsType:{name:"boolean"},description:""},startOpen:{required:!1,tsType:{name:"boolean"},description:""},autoExpand:{required:!1,tsType:{name:"boolean"},description:"Gjør så skjemafeltet ekspanderer seg til å vise alt innhold i stedet for å scrolle"}},composes:["Omit"]};export{E as T};
