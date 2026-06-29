import{r,j as l}from"./iframe-M3ErUHr-.js";import{c as R}from"./clsx-B-dksMZM.js";import{I as G}from"./InputGroup-CcmyTX2S.js";import{m as $}from"./mergeRefs-BHLYdl4H.js";const z=new TextEncoder;function H(t,o="characters"){if(typeof t>"u")return 0;const n=typeof t=="string"?t:Array.isArray(t)?t.join(""):String(t);return o==="bytes"?z.encode(n).length:n.length}const A=r.forwardRef((t,o)=>{const{autoExpand:n,counter:a,defaultValue:u,onBlur:m,onFocus:p,rows:v=7,placeholder:b=" ",startOpen:L,style:f,value:i,"aria-invalid":k,onChange:g,...x}=t,j=a?.strategy??"characters",s=typeof i<"u",[_,q]=r.useState(u??""),[w,E]=r.useState(!1),h=r.useRef(null),F=r.useMemo(()=>$(h,o),[o]),T=s?i:_,U=s?{value:i}:{defaultValue:u},d=H(T,j),y=a?.maxLength||0,B=y-d,I=!!(a&&d>y),P=!!(k||I);r.useEffect(()=>{if(!s&&h.current){const e=h.current.value;q(c=>c===e?c:e)}},[s]),r.useEffect(()=>{const e=h.current;if(e){if(!n){e.style.height="";return}w||T?(e.style.height="auto",e.style.height=`${e.scrollHeight}px`):e.style.height=""}},[n,T,w,d]);function N(e){E(!0),p&&p(e)}function C(e){E(!1),m&&m(e)}function M(e){s||q(e.target.value),g&&g(e)}function S(e,c){return e<=0||c===0?0:e*100/c}const V={overflowX:n?"hidden":void 0};return l.jsxs("div",{className:"jkl-text-area-wrapper","data-invalid":P,"data-has-content":d>0,children:[l.jsx("textarea",{"aria-invalid":P,className:`jkl-text-area__text-area jkl-text-area__text-area--${v}-rows`,onBlur:C,onFocus:N,onChange:M,ref:F,style:{...f,...V},placeholder:b,...U,...x}),a&&l.jsxs("div",{className:"jkl-text-area__counter","aria-hidden":"true",children:[l.jsxs("div",{className:"jkl-text-area__counter-count",children:[d," / ",y]}),!a.hideProgress&&l.jsx("div",{className:"jkl-text-area__counter-progress",style:{"--progress-width":`${S(B,y)}%`}})]})]})});A.displayName="BaseTextArea";A.__docgenInfo={description:"",methods:[],displayName:"BaseTextArea",props:{counter:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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

@default false`}]}},description:"Viser en teller i tekstfeltet når det har fokus."},rows:{required:!1,tsType:{name:"number"},description:"Sett antall rader skjemafeltet ekspanderes til ved focus. Innholdet scroller om feltet fylles med mer innhold enn det er plass til."},inline:{required:!1,tsType:{name:"boolean"},description:""},startOpen:{required:!1,tsType:{name:"boolean"},description:""},autoExpand:{required:!1,tsType:{name:"boolean"},description:"Gjør så skjemafeltet ekspanderer seg til å vise alt innhold i stedet for å scrolle"}},composes:["Omit"]};const O=r.forwardRef((t,o)=>{const{autoExpand:n,className:a,counter:u,errorLabel:m,helpLabel:p,inline:v,label:b,labelProps:L,startOpen:f,supportLabelProps:i,tooltip:k,description:g,...x}=t,j={label:b,errorLabel:m,helpLabel:p,labelProps:L,inline:v,supportLabelProps:i,tooltip:k,description:g},s={autoExpand:n,counter:u,startOpen:f};return l.jsx(G,{className:R("jkl-text-area",a,{"jkl-text-area--start-open":f,"jkl-text-area--auto-expand":n}),"data-testid":"jkl-text-area",...j,children:l.jsx(A,{ref:o,...x,...s})})});O.displayName="TextArea";O.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{counter:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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

@default false`}]}},description:"Viser en teller i tekstfeltet når det har fokus."},rows:{required:!1,tsType:{name:"number"},description:"Sett antall rader skjemafeltet ekspanderes til ved focus. Innholdet scroller om feltet fylles med mer innhold enn det er plass til."},inline:{required:!1,tsType:{name:"boolean"},description:""},startOpen:{required:!1,tsType:{name:"boolean"},description:""},autoExpand:{required:!1,tsType:{name:"boolean"},description:"Gjør så skjemafeltet ekspanderer seg til å vise alt innhold i stedet for å scrolle"}},composes:["Omit"]};export{O as T};
