import{r,j as s}from"./iframe-DHZS9f39.js";import{c as D}from"./clsx-B-dksMZM.js";import{I as G}from"./InputGroup-Cv3rm5UM.js";import{m as $}from"./mergeRefs-_7lZvp9j.js";import{C as z,g as X}from"./types-IsTkoTmK.js";const J=new TextEncoder;function K(t,l="characters"){if(typeof t>"u")return 0;const n=typeof t=="string"?t:Array.isArray(t)?t.join(""):String(t);return l==="bytes"?J.encode(n).length:n.length}const q=r.forwardRef((t,l)=>{const{autoExpand:n,counter:a,defaultValue:m,onBlur:p,onFocus:g,rows:k=7,placeholder:f=" ",startOpen:w,style:b,value:i,"aria-invalid":T,onChange:h,trackingProps:y,label:o,...v}=t,E=a?.strategy??"characters",d=typeof i<"u",[R,O]=r.useState(m??""),[P,M]=r.useState(!1),x=r.useRef(null),_=r.useMemo(()=>$(x,l),[l]),A=d?i:R,B=d?{value:i}:{defaultValue:m},u=K(A,E),j=a?.maxLength||0,F=j-u,U=!!(a&&u>j),L=!!(T||U);r.useEffect(()=>{if(!d&&x.current){const e=x.current.value;O(c=>c===e?c:e)}},[d]),r.useEffect(()=>{const e=x.current;if(e){if(!n){e.style.height="";return}P||A?(e.style.height="auto",e.style.height=`${e.scrollHeight}px`):e.style.height=""}},[n,A,P,u]);function C(e){M(!0),g&&g(e)}function I(e){M(!1),p&&p(e)}function S(e){d||O(e.target.value),h&&h(e)}function V(e,c){return e<=0||c===0?0:e*100/c}const H={overflowX:n?"hidden":void 0};return s.jsxs("div",{className:"jkl-text-area-wrapper","data-invalid":L,"data-has-content":u>0,children:[s.jsx("textarea",{"aria-invalid":L,className:`jkl-text-area__text-area jkl-text-area__text-area--${k}-rows`,onBlur:I,onFocus:C,onChange:S,ref:_,style:{...b,...H},placeholder:f,...B,...v,"data-track-component-name":z.TextArea,"data-track-id":y?.id??(o?String(o):void 0),"data-track-label":o?String(o):void 0,"data-track-rows":k,"data-track-auto-expand":n,...X(y?.extra,v)}),a&&s.jsxs("div",{className:"jkl-text-area__counter","aria-hidden":"true",children:[s.jsxs("div",{className:"jkl-text-area__counter-count",children:[u," / ",j]}),!a.hideProgress&&s.jsx("div",{className:"jkl-text-area__counter-progress",style:{"--progress-width":`${V(F,j)}%`}})]})]})});q.displayName="BaseTextArea";q.__docgenInfo={description:"",methods:[],displayName:"BaseTextArea",props:{counter:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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

@default false`}]}},description:"Viser en teller i tekstfeltet når det har fokus."},rows:{required:!1,tsType:{name:"number"},description:"Sett antall rader skjemafeltet ekspanderes til ved focus. Innholdet scroller om feltet fylles med mer innhold enn det er plass til."},inline:{required:!1,tsType:{name:"boolean"},description:""},startOpen:{required:!1,tsType:{name:"boolean"},description:""},autoExpand:{required:!1,tsType:{name:"boolean"},description:"Gjør så skjemafeltet ekspanderer seg til å vise alt innhold i stedet for å scrolle"},trackingProps:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1},description:"En unik identifikator for komponenten som skal spores. Mappes til `data-track-id`."},{key:"extra",value:{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}],raw:"Record<string, string | number | boolean>",required:!1},description:"Ekstra sporingsfelt utover de faste feltene over, for team som trenger å\nspore egne, prosjektspesifikke detaljer. Hver nøkkel rendres som et eget\n`data-track-<kebab-case-nøkkel>`-attributt i DOM-en, se `getExtraTrackingAttributes`."}]}},description:""},label:{required:!0,tsType:{name:"ReactNode"},description:"Brukes kun internt til å utlede data-track-label"}},composes:["Omit"]};const N=r.forwardRef((t,l)=>{const{autoExpand:n,className:a,counter:m,errorLabel:p,helpLabel:g,inline:k,label:f,labelProps:w,startOpen:b,supportLabelProps:i,tooltip:T,description:h,trackingProps:y,...o}=t,v={label:f,errorLabel:p,helpLabel:g,labelProps:w,inline:k,supportLabelProps:i,tooltip:T,description:h},E={autoExpand:n,counter:m,startOpen:b,trackingProps:y,label:f};return s.jsx(G,{className:D("jkl-text-area",a,{"jkl-text-area--start-open":b,"jkl-text-area--auto-expand":n}),"data-testid":"jkl-text-area",...v,children:s.jsx(q,{ref:l,...o,...E})})});N.displayName="TextArea";N.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{counter:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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

@default false`}]}},description:"Viser en teller i tekstfeltet når det har fokus."},rows:{required:!1,tsType:{name:"number"},description:"Sett antall rader skjemafeltet ekspanderes til ved focus. Innholdet scroller om feltet fylles med mer innhold enn det er plass til."},inline:{required:!1,tsType:{name:"boolean"},description:""},startOpen:{required:!1,tsType:{name:"boolean"},description:""},autoExpand:{required:!1,tsType:{name:"boolean"},description:"Gjør så skjemafeltet ekspanderer seg til å vise alt innhold i stedet for å scrolle"},trackingProps:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1},description:"En unik identifikator for komponenten som skal spores. Mappes til `data-track-id`."},{key:"extra",value:{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}],raw:"Record<string, string | number | boolean>",required:!1},description:"Ekstra sporingsfelt utover de faste feltene over, for team som trenger å\nspore egne, prosjektspesifikke detaljer. Hver nøkkel rendres som et eget\n`data-track-<kebab-case-nøkkel>`-attributt i DOM-en, se `getExtraTrackingAttributes`."}]}},description:""},label:{required:!0,tsType:{name:"ReactNode"},description:"Brukes kun internt til å utlede data-track-label"}},composes:["Omit"]};export{N as T};
