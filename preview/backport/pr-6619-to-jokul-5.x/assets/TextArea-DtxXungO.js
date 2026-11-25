import{r as n,j as s}from"./iframe-DsTuScF2.js";import{c as G}from"./clsx-B-dksMZM.js";import{I as H}from"./InputGroup-COAsuiUc.js";import{m as $}from"./mergeRefs-_7lZvp9j.js";import{C as K,g as z}from"./types-IsTkoTmK.js";const X=new TextEncoder;function J(t,l="characters"){if(typeof t>"u")return 0;const r=typeof t=="string"?t:Array.isArray(t)?t.join(""):String(t);return l==="bytes"?X.encode(r).length:r.length}const A=n.forwardRef((t,l)=>{const{autoExpand:r,counter:a,defaultValue:m,onBlur:c,onFocus:p,rows:f=7,placeholder:g=" ",startOpen:w,style:v,value:i,"aria-invalid":T,onChange:b,trackingProps:h,label:o,...y}=t,E=a?.strategy??"characters",d=typeof i<"u",[N,O]=n.useState(m??""),[P,L]=n.useState(!1),x=n.useRef(null),R=n.useMemo(()=>$(x,l),[l]),q=d?i:N,S=d?{value:i}:{defaultValue:m},u=J(q,E),j=a?.maxLength||0,_=j-u,F=!!(a&&u>j),M=!!(T||F);n.useEffect(()=>{if(!d&&x.current){const e=x.current.value;O(k=>k===e?k:e)}},[d]),n.useEffect(()=>{const e=x.current;if(e){if(!r){e.style.height="";return}P||q?(e.style.height="auto",e.style.height=`${e.scrollHeight}px`):e.style.height=""}},[r,q,P,u]);function U(e){L(!0),p&&p(e)}function C(e){L(!1),c&&c(e)}function I(e){d||O(e.target.value),b&&b(e)}function V(e,k){return e<=0||k===0?0:e*100/k}const D={overflowX:r?"hidden":void 0};return s.jsxs("div",{className:"jkl-text-area-wrapper","data-invalid":M,"data-has-content":u>0,children:[s.jsx("textarea",{"aria-invalid":M,className:`jkl-text-area__text-area jkl-text-area__text-area--${f}-rows`,onBlur:C,onFocus:U,onChange:I,ref:R,style:{...v,...D},placeholder:g,...S,...y,"data-track-component-name":K.TextArea,"data-track-id":h?.id??(o?String(o):void 0),"data-track-label":o?String(o):void 0,"data-track-rows":f,"data-track-auto-expand":r,...z(h?.extra,y)}),a&&s.jsxs("div",{className:"jkl-text-area__counter","aria-hidden":"true",children:[s.jsxs("div",{className:"jkl-text-area__counter-count",children:[u," / ",j]}),!a.hideProgress&&s.jsx("div",{className:"jkl-text-area__counter-progress",style:{"--progress-width":`${V(_,j)}%`}})]})]})});A.displayName="BaseTextArea";A.__docgenInfo={description:"",methods:[],displayName:"BaseTextArea",props:{disabled:{required:!1,tsType:{name:"boolean"},description:`Deaktiverer kontrollen.

Bruk den bare i interne verktøy, aldri i kundeflyter. En deaktivert kontroll
forklarer ikke hvorfor den er låst eller hva som må til for å låse den opp,
og den dempede kontrasten gjør den vanskelig å lese. Skal et valg ikke være
tilgjengelig for kunden, la det heller være ute av skjemaet, eller forklar
kravet med \`description\` eller \`errorLabel\`.`},readOnly:{required:!1,tsType:{name:"boolean"},description:`Gjør kontrollen uredigerbar. Verdien beholder full tekstkontrast, og feltet
kan fortsatt fokuseres og kopieres fra.

Bruk den bare i interne verktøy, aldri i kundeflyter. Kunden får ikke vite
hvorfor feltet er låst eller hva som må til for å endre det. Skal en verdi
bare vises i en kundeflyt, vis den som tekst framfor som et låst skjemafelt.`},counter:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1},description:"En unik identifikator for komponenten som skal spores. Mappes til `data-track-id`."},{key:"extra",value:{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}],raw:"Record<string, string | number | boolean>",required:!1},description:"Ekstra sporingsfelt utover de faste feltene over, for team som trenger å\nspore egne, prosjektspesifikke detaljer. Hver nøkkel rendres som et eget\n`data-track-<kebab-case-nøkkel>`-attributt i DOM-en, se `getExtraTrackingAttributes`."}]}},description:""},label:{required:!0,tsType:{name:"ReactNode"},description:"Brukes kun internt til å utlede data-track-label"}},composes:["Omit"]};const B=n.forwardRef((t,l)=>{const{autoExpand:r,className:a,counter:m,errorLabel:c,helpLabel:p,inline:f,label:g,labelProps:w,startOpen:v,supportLabelProps:i,tooltip:T,description:b,trackingProps:h,...o}=t,y={label:g,errorLabel:c,helpLabel:p,labelProps:w,inline:f,supportLabelProps:i,tooltip:T,description:b},E={autoExpand:r,counter:m,startOpen:v,trackingProps:h,label:g};return s.jsx(H,{className:G("jkl-text-area",a,{"jkl-text-area--start-open":v,"jkl-text-area--auto-expand":r}),"data-testid":"jkl-text-area",...y,children:s.jsx(A,{ref:l,...o,...E})})});B.displayName="TextArea";B.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{disabled:{required:!1,tsType:{name:"boolean"},description:`Deaktiverer kontrollen.

Bruk den bare i interne verktøy, aldri i kundeflyter. En deaktivert kontroll
forklarer ikke hvorfor den er låst eller hva som må til for å låse den opp,
og den dempede kontrasten gjør den vanskelig å lese. Skal et valg ikke være
tilgjengelig for kunden, la det heller være ute av skjemaet, eller forklar
kravet med \`description\` eller \`errorLabel\`.`},readOnly:{required:!1,tsType:{name:"boolean"},description:`Gjør kontrollen uredigerbar. Verdien beholder full tekstkontrast, og feltet
kan fortsatt fokuseres og kopieres fra.

Bruk den bare i interne verktøy, aldri i kundeflyter. Kunden får ikke vite
hvorfor feltet er låst eller hva som må til for å endre det. Skal en verdi
bare vises i en kundeflyt, vis den som tekst framfor som et låst skjemafelt.`},counter:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1},description:"En unik identifikator for komponenten som skal spores. Mappes til `data-track-id`."},{key:"extra",value:{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}],raw:"Record<string, string | number | boolean>",required:!1},description:"Ekstra sporingsfelt utover de faste feltene over, for team som trenger å\nspore egne, prosjektspesifikke detaljer. Hver nøkkel rendres som et eget\n`data-track-<kebab-case-nøkkel>`-attributt i DOM-en, se `getExtraTrackingAttributes`."}]}},description:""},label:{required:!0,tsType:{name:"ReactNode"},description:"Brukes kun internt til å utlede data-track-label"}},composes:["Omit"]};export{B as T};
