import{r as l,j as r}from"./iframe-B_A73W-G.js";import{c as I}from"./clsx-B-dksMZM.js";import{I as R}from"./InputGroup-DYiBIODx.js";const j=l.forwardRef((c,g)=>{const{autoExpand:s,counter:a,onBlur:o,onFocus:d,rows:k=7,placeholder:v=" ",startOpen:T,style:h,value:t,"aria-invalid":u,onChange:p,...x}=c,[n,y]=l.useState(()=>typeof t>"u"?0:typeof t=="number"?String(t).length:t.length),[m,f]=l.useState(!1),O=l.useRef(null),b=g||O;l.useEffect(()=>{const e=b.current;if(e){if(!s){e.style.height="";return}m||t?(e.style.height="auto",e.style.height=`${e.scrollHeight}px`):e.style.height=""}},[s,b,t,m,n]);function w(e){f(!0),d&&d(e)}function N(e){f(!1),o&&o(e)}function P(e){y(e.target.value.length),p&&p(e)}const i=a?.maxLength||0,L=i-n;function E(e,q){return e<=0||q===0?0:e*100/q}const B=a&&n>i?`Du har skrevet ${n-i} tegn for mye`:void 0,A=!!(u||B),C={overflowX:s?"hidden":void 0};return r.jsxs("div",{className:"jkl-text-area-wrapper","data-invalid":A,"data-has-content":n>0,children:[r.jsx("textarea",{"aria-invalid":A,className:`jkl-text-area__text-area jkl-text-area__text-area--${k}-rows`,onBlur:N,onFocus:w,onChange:P,ref:b,style:{...h,...C},placeholder:v,value:t,...x}),a&&r.jsxs("div",{className:"jkl-text-area__counter","aria-hidden":"true",children:[r.jsxs("div",{className:"jkl-text-area__counter-count",children:[n," / ",i]}),!a.hideProgress&&r.jsx("div",{className:"jkl-text-area__counter-progress",style:{"--progress-width":`${E(L,i)}%`}})]})]})});j.displayName="BaseTextArea";j.__docgenInfo={description:"",methods:[],displayName:"BaseTextArea",props:{counter:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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

@default false`}]}},description:"Viser en teller i tekstfeltet når det har fokus."},rows:{required:!1,tsType:{name:"number"},description:"Sett antall rader skjemafeltet ekspanderes til ved focus. Innholdet scroller om feltet fylles med mer innhold enn det er plass til."},inline:{required:!1,tsType:{name:"boolean"},description:""},startOpen:{required:!1,tsType:{name:"boolean"},description:""},autoExpand:{required:!1,tsType:{name:"boolean"},description:"Gjør så skjemafeltet ekspanderer seg til å vise alt innhold i stedet for å scrolle"}},composes:["Omit"]};const _=l.forwardRef((c,g)=>{const{autoExpand:s,className:a,counter:o,density:d,errorLabel:k,helpLabel:v,inline:T,label:h,labelProps:t,startOpen:u,supportLabelProps:p,tooltip:x,description:n,...y}=c,m={label:h,density:d,errorLabel:k,helpLabel:v,labelProps:t,inline:T,supportLabelProps:p,tooltip:x,description:n},f={autoExpand:s,counter:o,startOpen:u};return r.jsx(R,{className:I("jkl-text-area",a,{"jkl-text-area--start-open":u,"jkl-text-area--auto-expand":s}),"data-testid":"jkl-text-area",...m,children:r.jsx(j,{ref:g,...y,...f})})});_.displayName="TextArea";_.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{counter:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
