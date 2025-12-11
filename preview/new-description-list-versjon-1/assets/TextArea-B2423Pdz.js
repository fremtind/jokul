import{c as I}from"./clsx-B-dksMZM.js";import{r as l,R as r}from"./index-siqcju79.js";import{I as R}from"./InputGroup-jkm-2-wj.js";const j=l.forwardRef((f,g)=>{const{autoExpand:a,counter:s,onBlur:i,onFocus:d,rows:k=7,placeholder:v=" ",startOpen:T,style:h,value:t,"aria-invalid":u,onChange:p,...x}=f,[n,y]=l.useState(()=>typeof t>"u"?0:typeof t=="number"?String(t).length:t.length),[m,c]=l.useState(!1),_=l.useRef(null),b=g||_;l.useEffect(()=>{const e=b.current;if(e){if(!a){e.style.height="";return}m||t?(e.style.height="auto",e.style.height=`${e.scrollHeight}px`):e.style.height=""}},[a,b,t,m,n]);function O(e){c(!0),d&&d(e)}function w(e){c(!1),i&&i(e)}function N(e){y(e.target.value.length),p&&p(e)}const o=s?.maxLength||0,P=o-n;function L(e,q){return e<=0||q===0?0:e*100/q}const B=s&&n>o?`Du har skrevet ${n-o} tegn for mye`:void 0,A=!!(u||B),C={overflowX:a?"hidden":void 0};return r.createElement("div",{className:"jkl-text-area-wrapper","data-invalid":A,"data-has-content":n>0},r.createElement("textarea",{"aria-invalid":A,className:`jkl-text-area__text-area jkl-text-area__text-area--${k}-rows`,onBlur:w,onFocus:O,onChange:N,ref:b,style:{...h,...C},placeholder:v,value:t,...x}),s&&r.createElement("div",{className:"jkl-text-area__counter","aria-hidden":"true"},r.createElement("div",{className:"jkl-text-area__counter-count"},n," / ",o),!s.hideProgress&&r.createElement("div",{className:"jkl-text-area__counter-progress",style:{"--progress-width":`${L(P,o)}%`}})))});j.displayName="BaseTextArea";j.__docgenInfo={description:"",methods:[],displayName:"BaseTextArea",props:{counter:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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

@default false`}]}},description:"Viser en teller i tekstfeltet når det har fokus."},rows:{required:!1,tsType:{name:"number"},description:"Sett antall rader skjemafeltet ekspanderes til ved focus. Innholdet scroller om feltet fylles med mer innhold enn det er plass til."},inline:{required:!1,tsType:{name:"boolean"},description:""},startOpen:{required:!1,tsType:{name:"boolean"},description:""},autoExpand:{required:!1,tsType:{name:"boolean"},description:"Gjør så skjemafeltet ekspanderer seg til å vise alt innhold i stedet for å scrolle"}},composes:["Omit"]};const E=l.forwardRef((f,g)=>{const{autoExpand:a,className:s,counter:i,density:d,errorLabel:k,helpLabel:v,inline:T,label:h,labelProps:t,startOpen:u,supportLabelProps:p,tooltip:x,description:n,...y}=f,m={label:h,density:d,errorLabel:k,helpLabel:v,labelProps:t,inline:T,supportLabelProps:p,tooltip:x,description:n},c={autoExpand:a,counter:i,startOpen:u};return r.createElement(R,{className:I("jkl-text-area",s,{"jkl-text-area--start-open":u,"jkl-text-area--auto-expand":a}),"data-testid":"jkl-text-area",...m},r.createElement(j,{ref:g,...y,...c}))});E.displayName="TextArea";E.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{counter:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
