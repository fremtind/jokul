import{r as l,j as r}from"./iframe-CVrkxF9U.js";import{c as I}from"./clsx-B-dksMZM.js";import{I as R}from"./InputGroup-CyuPMwDf.js";const b=l.forwardRef((m,f)=>{const{autoExpand:s,counter:a,onBlur:i,onFocus:d,rows:c=7,placeholder:g=" ",startOpen:j,style:k,value:t,"aria-invalid":v,onChange:u,...h}=m,[n,x]=l.useState(()=>typeof t>"u"?0:typeof t=="number"?String(t).length:t.length),[p,T]=l.useState(!1),O=l.useRef(null),y=f||O;l.useEffect(()=>{const e=y.current;if(e){if(!s){e.style.height="";return}p||t?(e.style.height="auto",e.style.height=`${e.scrollHeight}px`):e.style.height=""}},[s,y,t,p,n]);function w(e){T(!0),d&&d(e)}function N(e){T(!1),i&&i(e)}function P(e){x(e.target.value.length),u&&u(e)}const o=a?.maxLength||0,L=o-n;function E(e,q){return e<=0||q===0?0:e*100/q}const B=a&&n>o?`Du har skrevet ${n-o} tegn for mye`:void 0,A=!!(v||B),C={overflowX:s?"hidden":void 0};return r.jsxs("div",{className:"jkl-text-area-wrapper","data-invalid":A,"data-has-content":n>0,children:[r.jsx("textarea",{"aria-invalid":A,className:`jkl-text-area__text-area jkl-text-area__text-area--${c}-rows`,onBlur:N,onFocus:w,onChange:P,ref:y,style:{...k,...C},placeholder:g,value:t,...h}),a&&r.jsxs("div",{className:"jkl-text-area__counter","aria-hidden":"true",children:[r.jsxs("div",{className:"jkl-text-area__counter-count",children:[n," / ",o]}),!a.hideProgress&&r.jsx("div",{className:"jkl-text-area__counter-progress",style:{"--progress-width":`${E(L,o)}%`}})]})]})});b.displayName="BaseTextArea";b.__docgenInfo={description:"",methods:[],displayName:"BaseTextArea",props:{counter:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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

@default false`}]}},description:"Viser en teller i tekstfeltet når det har fokus."},rows:{required:!1,tsType:{name:"number"},description:"Sett antall rader skjemafeltet ekspanderes til ved focus. Innholdet scroller om feltet fylles med mer innhold enn det er plass til."},inline:{required:!1,tsType:{name:"boolean"},description:""},startOpen:{required:!1,tsType:{name:"boolean"},description:""},autoExpand:{required:!1,tsType:{name:"boolean"},description:"Gjør så skjemafeltet ekspanderer seg til å vise alt innhold i stedet for å scrolle"}},composes:["Omit"]};const _=l.forwardRef((m,f)=>{const{autoExpand:s,className:a,counter:i,errorLabel:d,helpLabel:c,inline:g,label:j,labelProps:k,startOpen:t,supportLabelProps:v,tooltip:u,description:h,...n}=m,x={label:j,errorLabel:d,helpLabel:c,labelProps:k,inline:g,supportLabelProps:v,tooltip:u,description:h},p={autoExpand:s,counter:i,startOpen:t};return r.jsx(R,{className:I("jkl-text-area",a,{"jkl-text-area--start-open":t,"jkl-text-area--auto-expand":s}),"data-testid":"jkl-text-area",...x,children:r.jsx(b,{ref:f,...n,...p})})});_.displayName="TextArea";_.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{counter:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
