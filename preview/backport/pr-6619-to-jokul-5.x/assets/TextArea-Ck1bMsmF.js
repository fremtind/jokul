import{r as n,j as l}from"./iframe-B1nf5YyH.js";import{c as R}from"./clsx-B-dksMZM.js";import{I as G}from"./InputGroup-utRyEvrg.js";import{m as $}from"./mergeRefs-_7lZvp9j.js";const D=new TextEncoder;function K(t,o="characters"){if(typeof t>"u")return 0;const r=typeof t=="string"?t:Array.isArray(t)?t.join(""):String(t);return o==="bytes"?D.encode(r).length:r.length}const q=n.forwardRef((t,o)=>{const{autoExpand:r,counter:a,defaultValue:m,onBlur:c,onFocus:f,rows:v=7,placeholder:y=" ",startOpen:A,style:k,value:i,"aria-invalid":b,onChange:p,...x}=t,j=a?.strategy??"characters",s=typeof i<"u",[P,L]=n.useState(m??""),[E,B]=n.useState(!1),g=n.useRef(null),_=n.useMemo(()=>$(g,o),[o]),T=s?i:P,F=s?{value:i}:{defaultValue:m},d=K(T,j),h=a?.maxLength||0,U=h-d,S=!!(a&&d>h),O=!!(b||S);n.useEffect(()=>{if(!s&&g.current){const e=g.current.value;L(u=>u===e?u:e)}},[s]),n.useEffect(()=>{const e=g.current;if(e){if(!r){e.style.height="";return}E||T?(e.style.height="auto",e.style.height=`${e.scrollHeight}px`):e.style.height=""}},[r,T,E,d]);function I(e){B(!0),f&&f(e)}function N(e){B(!1),c&&c(e)}function V(e){s||L(e.target.value),p&&p(e)}function C(e,u){return e<=0||u===0?0:e*100/u}const M={overflowX:r?"hidden":void 0};return l.jsxs("div",{className:"jkl-text-area-wrapper","data-invalid":O,"data-has-content":d>0,children:[l.jsx("textarea",{"aria-invalid":O,className:`jkl-text-area__text-area jkl-text-area__text-area--${v}-rows`,onBlur:N,onFocus:I,onChange:V,ref:_,style:{...k,...M},placeholder:y,...F,...x}),a&&l.jsxs("div",{className:"jkl-text-area__counter","aria-hidden":"true",children:[l.jsxs("div",{className:"jkl-text-area__counter-count",children:[d," / ",h]}),!a.hideProgress&&l.jsx("div",{className:"jkl-text-area__counter-progress",style:{"--progress-width":`${C(U,h)}%`}})]})]})});q.displayName="BaseTextArea";q.__docgenInfo={description:"",methods:[],displayName:"BaseTextArea",props:{disabled:{required:!1,tsType:{name:"boolean"},description:`Deaktiverer kontrollen.

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

@default false`}]}},description:"Viser en teller i tekstfeltet når det har fokus."},rows:{required:!1,tsType:{name:"number"},description:"Sett antall rader skjemafeltet ekspanderes til ved focus. Innholdet scroller om feltet fylles med mer innhold enn det er plass til."},inline:{required:!1,tsType:{name:"boolean"},description:""},startOpen:{required:!1,tsType:{name:"boolean"},description:""},autoExpand:{required:!1,tsType:{name:"boolean"},description:"Gjør så skjemafeltet ekspanderer seg til å vise alt innhold i stedet for å scrolle"}},composes:["Omit"]};const w=n.forwardRef((t,o)=>{const{autoExpand:r,className:a,counter:m,errorLabel:c,helpLabel:f,inline:v,label:y,labelProps:A,startOpen:k,supportLabelProps:i,tooltip:b,description:p,...x}=t,j={label:y,errorLabel:c,helpLabel:f,labelProps:A,inline:v,supportLabelProps:i,tooltip:b,description:p},s={autoExpand:r,counter:m,startOpen:k};return l.jsx(G,{className:R("jkl-text-area",a,{"jkl-text-area--start-open":k,"jkl-text-area--auto-expand":r}),"data-testid":"jkl-text-area",...j,children:l.jsx(q,{ref:o,...x,...s})})});w.displayName="TextArea";w.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{disabled:{required:!1,tsType:{name:"boolean"},description:`Deaktiverer kontrollen.

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

@default false`}]}},description:"Viser en teller i tekstfeltet når det har fokus."},rows:{required:!1,tsType:{name:"number"},description:"Sett antall rader skjemafeltet ekspanderes til ved focus. Innholdet scroller om feltet fylles med mer innhold enn det er plass til."},inline:{required:!1,tsType:{name:"boolean"},description:""},startOpen:{required:!1,tsType:{name:"boolean"},description:""},autoExpand:{required:!1,tsType:{name:"boolean"},description:"Gjør så skjemafeltet ekspanderer seg til å vise alt innhold i stedet for å scrolle"}},composes:["Omit"]};export{w as T};
