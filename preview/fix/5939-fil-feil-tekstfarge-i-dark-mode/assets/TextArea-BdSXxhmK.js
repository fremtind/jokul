import{r as s,j as a}from"./iframe-XmsoY-G2.js";import{c as R}from"./clsx-B-dksMZM.js";import{I as G}from"./InputGroup-DNXqf_cD.js";const $=new TextEncoder;function z(t,l="characters"){if(typeof t>"u")return 0;const n=typeof t=="string"?t:Array.isArray(t)?t.join(""):String(t);return l==="bytes"?$.encode(n).length:n.length}const T=s.forwardRef((t,l)=>{const{autoExpand:n,counter:r,defaultValue:c,onBlur:u,onFocus:m,rows:g=7,placeholder:y=" ",startOpen:A,style:p,value:o,"aria-invalid":v,onChange:f,...b}=t,k=r?.strategy??"characters",i=typeof o<"u",[O,_]=s.useState(c),[L,q]=s.useState(!1),F=s.useRef(null),x=l||F,j=i?o:O,U=i?{value:o}:{defaultValue:c},d=z(j,k),h=r?.maxLength||0,B=h-d,I=!!(r&&d>h),w=!!(v||I);s.useEffect(()=>{const e=x.current;if(e){if(!n){e.style.height="";return}L||j?(e.style.height="auto",e.style.height=`${e.scrollHeight}px`):e.style.height=""}},[n,x,j,L,d]);function N(e){q(!0),m&&m(e)}function C(e){q(!1),u&&u(e)}function V(e){i||_(e.target.value),f&&f(e)}function M(e,P){return e<=0||P===0?0:e*100/P}const S={overflowX:n?"hidden":void 0};return a.jsxs("div",{className:"jkl-text-area-wrapper","data-invalid":w,"data-has-content":d>0,children:[a.jsx("textarea",{"aria-invalid":w,className:`jkl-text-area__text-area jkl-text-area__text-area--${g}-rows`,onBlur:C,onFocus:N,onChange:V,ref:x,style:{...p,...S},placeholder:y,...U,...b}),r&&a.jsxs("div",{className:"jkl-text-area__counter","aria-hidden":"true",children:[a.jsxs("div",{className:"jkl-text-area__counter-count",children:[d," / ",h]}),!r.hideProgress&&a.jsx("div",{className:"jkl-text-area__counter-progress",style:{"--progress-width":`${M(B,h)}%`}})]})]})});T.displayName="BaseTextArea";T.__docgenInfo={description:"",methods:[],displayName:"BaseTextArea",props:{counter:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    /**
     * Maksverdi for telleren.
     *
     * Enheten avhenger av \`strategy\`:
     * - \`"characters"\`: antall tegn
     * - \`"bytes"\`: antall UTF-8-bytes
     */
    maxLength: number;
    /**
     * Bestemmer hva telleren måler.
     *
     * - "characters" teller tekst på samme måte som i dag og er standard
     * - "bytes" teller antall UTF-8-bytes, for usecaser der backend eller API
     *   håndhever en bytegrense
     *
     * Unngå å kombinere \`strategy="bytes"\` med native \`maxLength\` på
     * \`<textarea>\`, siden nettleseren fortsatt håndhever \`maxLength\` som tegn.
     *
     * @default "characters"
     */
    strategy?: CounterStrategy;
    /**
     * Med teller vises en progress-bar i bunnen av tekstfeltet som krymper
     * ned fra 100% (null tegn skrevet) til 0% (maks antall tegn skrevet).
     * Om du vil skjule den, sett denne propen til true.
     *
     * @default false
     */
    hideProgress?: boolean;
}`,signature:{properties:[{key:"maxLength",value:{name:"number",required:!0},description:'Maksverdi for telleren.\n\nEnheten avhenger av `strategy`:\n- `"characters"`: antall tegn\n- `"bytes"`: antall UTF-8-bytes'},{key:"strategy",value:{name:"union",raw:'"characters" | "bytes"',elements:[{name:"literal",value:'"characters"'},{name:"literal",value:'"bytes"'}],required:!1},description:`Bestemmer hva telleren måler.

- "characters" teller tekst på samme måte som i dag og er standard
- "bytes" teller antall UTF-8-bytes, for usecaser der backend eller API
  håndhever en bytegrense

Unngå å kombinere \`strategy="bytes"\` med native \`maxLength\` på
\`<textarea>\`, siden nettleseren fortsatt håndhever \`maxLength\` som tegn.

@default "characters"`},{key:"hideProgress",value:{name:"boolean",required:!1},description:`Med teller vises en progress-bar i bunnen av tekstfeltet som krymper
ned fra 100% (null tegn skrevet) til 0% (maks antall tegn skrevet).
Om du vil skjule den, sett denne propen til true.

@default false`}]}},description:"Viser en teller i tekstfeltet når det har fokus."},rows:{required:!1,tsType:{name:"number"},description:"Sett antall rader skjemafeltet ekspanderes til ved focus. Innholdet scroller om feltet fylles med mer innhold enn det er plass til."},inline:{required:!1,tsType:{name:"boolean"},description:""},startOpen:{required:!1,tsType:{name:"boolean"},description:""},autoExpand:{required:!1,tsType:{name:"boolean"},description:"Gjør så skjemafeltet ekspanderer seg til å vise alt innhold i stedet for å scrolle"}},composes:["Omit"]};const E=s.forwardRef((t,l)=>{const{autoExpand:n,className:r,counter:c,errorLabel:u,helpLabel:m,inline:g,label:y,labelProps:A,startOpen:p,supportLabelProps:o,tooltip:v,description:f,...b}=t,k={label:y,errorLabel:u,helpLabel:m,labelProps:A,inline:g,supportLabelProps:o,tooltip:v,description:f},i={autoExpand:n,counter:c,startOpen:p};return a.jsx(G,{className:R("jkl-text-area",r,{"jkl-text-area--start-open":p,"jkl-text-area--auto-expand":n}),"data-testid":"jkl-text-area",...k,children:a.jsx(T,{ref:l,...b,...i})})});E.displayName="TextArea";E.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{counter:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    /**
     * Maksverdi for telleren.
     *
     * Enheten avhenger av \`strategy\`:
     * - \`"characters"\`: antall tegn
     * - \`"bytes"\`: antall UTF-8-bytes
     */
    maxLength: number;
    /**
     * Bestemmer hva telleren måler.
     *
     * - "characters" teller tekst på samme måte som i dag og er standard
     * - "bytes" teller antall UTF-8-bytes, for usecaser der backend eller API
     *   håndhever en bytegrense
     *
     * Unngå å kombinere \`strategy="bytes"\` med native \`maxLength\` på
     * \`<textarea>\`, siden nettleseren fortsatt håndhever \`maxLength\` som tegn.
     *
     * @default "characters"
     */
    strategy?: CounterStrategy;
    /**
     * Med teller vises en progress-bar i bunnen av tekstfeltet som krymper
     * ned fra 100% (null tegn skrevet) til 0% (maks antall tegn skrevet).
     * Om du vil skjule den, sett denne propen til true.
     *
     * @default false
     */
    hideProgress?: boolean;
}`,signature:{properties:[{key:"maxLength",value:{name:"number",required:!0},description:'Maksverdi for telleren.\n\nEnheten avhenger av `strategy`:\n- `"characters"`: antall tegn\n- `"bytes"`: antall UTF-8-bytes'},{key:"strategy",value:{name:"union",raw:'"characters" | "bytes"',elements:[{name:"literal",value:'"characters"'},{name:"literal",value:'"bytes"'}],required:!1},description:`Bestemmer hva telleren måler.

- "characters" teller tekst på samme måte som i dag og er standard
- "bytes" teller antall UTF-8-bytes, for usecaser der backend eller API
  håndhever en bytegrense

Unngå å kombinere \`strategy="bytes"\` med native \`maxLength\` på
\`<textarea>\`, siden nettleseren fortsatt håndhever \`maxLength\` som tegn.

@default "characters"`},{key:"hideProgress",value:{name:"boolean",required:!1},description:`Med teller vises en progress-bar i bunnen av tekstfeltet som krymper
ned fra 100% (null tegn skrevet) til 0% (maks antall tegn skrevet).
Om du vil skjule den, sett denne propen til true.

@default false`}]}},description:"Viser en teller i tekstfeltet når det har fokus."},rows:{required:!1,tsType:{name:"number"},description:"Sett antall rader skjemafeltet ekspanderes til ved focus. Innholdet scroller om feltet fylles med mer innhold enn det er plass til."},inline:{required:!1,tsType:{name:"boolean"},description:""},startOpen:{required:!1,tsType:{name:"boolean"},description:""},autoExpand:{required:!1,tsType:{name:"boolean"},description:"Gjør så skjemafeltet ekspanderer seg til å vise alt innhold i stedet for å scrolle"}},composes:["Omit"]};export{E as T};
