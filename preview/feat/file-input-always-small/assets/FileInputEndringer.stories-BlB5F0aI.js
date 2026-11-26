import{j as e,r as k}from"./iframe-5zgp32xy.js";import{c as Q}from"./cow-CdXr5BwN.js";import{F as L}from"./File-DEEMj1lm.js";import{F as Y,g as ee,c as $,v as ne}from"./_index-BdnJilNr.js";import{F as O}from"./Flex-B_xXK38T.js";import{T as Z}from"./Title--FZ0-fDI.js";import{T as g}from"./Text-3EBBho2z.js";import{U as E,b as d}from"./ListItem-B-gvw-H2.js";import{T as te,a as re}from"./TableCaption-B1h4bc_C.js";import{T as ie,a as F}from"./TableHeader-DwXKiSCb.js";import{b as J,a as T}from"./TableRow-DX-cMZxP.js";import{T as se}from"./TableBody-BuoIwonV.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Link-CC6wrBYn.js";import"./formatNumber-Davy0grG.js";import"./unicode-DWvs0Pen.js";import"./Button-Xx5RZTTQ.js";import"./usePreviousValue-CxdHZD8H.js";import"./Loader-DiE3LyNl.js";import"./useDelayedRender--CbPFqg8.js";import"./TrashCanIcon-BNbobogv.js";import"./Icon-B5sT_CSn.js";import"./SupportLabel-CQFH7Kun.js";import"./SuccessIcon-CXbLeWU9.js";import"./WarningIcon-WLHrh0Kb.js";import"./FieldGroup-BeOoUraj.js";import"./useId-CTi1mkrH.js";import"./Label-CHW3Ku3Z.js";import"./SlotComponent-D5ZqbIGZ.js";import"./mergeRefs-_7lZvp9j.js";import"./tableContext-1aG2tQbQ.js";import"./ChevronDownIcon-BWlrIwBF.js";import"./ChevronUpIcon-CUozbZ4_.js";async function le(n,t,i,l,s){s?.throwIfAborted();const a=new XMLHttpRequest;return new Promise((y,u)=>{a.upload.addEventListener("progress",m=>{m.lengthComputable&&i(m.loaded/m.total*100)}),a.addEventListener("load",()=>{if(a.status>=400){u(new Error(`Opplastingen feilet med status ${a.status} ${a.statusText}`.trim()));return}y(a.response)}),a.addEventListener("error",()=>{u(new Error("Opplastingen feilet"))}),a.addEventListener("abort",()=>{u(s?.reason??new DOMException("Opplastingen ble avbrutt","AbortError"))}),s?.addEventListener("abort",()=>a.abort(),{once:!0}),a.open("POST",n),a.responseType="json";for(const[m,b]of Object.entries({}))a.setRequestHeader(m,b);a.send(t)})}const c=({tittel:n,children:t,test:i})=>e.jsxs(O,{direction:"column",gap:"16",style:{maxWidth:"44rem",marginBlockEnd:"var(--jkl-unit-40)"},children:[e.jsx(Z,{as:"h2",size:"m",children:n}),e.jsx("div",{children:t}),i&&e.jsxs("div",{children:[e.jsx(g,{bold:!0,children:"Slik tester du"}),e.jsx(E,{children:i.map((l,s)=>e.jsx(d,{children:l},s))})]})]}),h=({tittel:n,children:t})=>e.jsxs("div",{style:{marginBlockStart:"var(--jkl-unit-30)",padding:"var(--jkl-unit-20)",border:"1px solid var(--jkl-color-border-subdued)",borderRadius:"var(--jkl-border-radius-s)",maxWidth:"44rem"},children:[e.jsx(g,{size:"s",bold:!0,children:n}),e.jsx("div",{children:t})]}),x=({initialFiles:n=[],onFilesAdded:t,multiple:i,legend:l="Vedlegg",...s})=>{const[a,y]=k.useState(n);return e.jsx(Y,{...s,legend:l,multiple:i,value:a,onChange:(u,m)=>{t?.(u,m),y(b=>i===!1?m:[...b,...m])},children:a.map(({file:u,state:m,validation:b},p)=>e.jsx(L,{fileName:u.name,fileType:u.type,fileSize:u.size,...ee(u),state:b?"error":m,errorLabel:b?.message,onRemove:()=>y(o=>o.filter((j,f)=>f!==p))},`${u.name}-${p}`))})},S=n=>{if(!n)return"";const t=n.cloneNode(!0);for(const i of t.querySelectorAll("[aria-hidden='true']"))i.remove();return t.textContent?.trim()??""},z=()=>{const[n,t]=k.useState("");return k.useEffect(()=>{const i=()=>{const s=document.activeElement;if(!s||s===document.body)return"Ingenting (fokus er på <body>)";const a=s.getAttribute("aria-label")??(s.id&&S(document.querySelector(`label[for="${s.id}"]`))||S(s));return`<${s.tagName.toLowerCase()}> «${a}»`},l=window.setInterval(()=>t(i()),100);return()=>window.clearInterval(l)},[]),n},G=n=>{const[t,i]=k.useState([]);return k.useEffect(()=>{const l=n.current?.querySelector("[aria-live]");if(!l)return;i([l.textContent??""]);const s=new MutationObserver(()=>i(a=>[...a,l.textContent??""]));return s.observe(l,{childList:!0,characterData:!0,subtree:!0}),()=>s.disconnect()},[n]),t},M=(n,t)=>{const[i,l]=k.useState([]);return k.useEffect(()=>{const s=n.current?.querySelector(t);l(s?[...s.attributes].filter(a=>a.name.startsWith("data-track")).map(a=>`${a.name}="${a.value}"`):[])},[n,t]),i},X=()=>k.useRef(null);function K(n,t=""){return t.split(",").map(s=>s.toLowerCase().replaceAll("*","").trim()).some(s=>n.type.toLowerCase().includes(s)||n.name.toLowerCase().endsWith(s))?void 0:{message:`Filtypen ${n.name?.split(".")[1]||""} støttes ikke`}}class ae extends EventTarget{upload=new EventTarget;status=0;statusText="";response=null;responseType="";timer;open(){}setRequestHeader(){}send(t){const l=t.get("fil").name.includes("feil");let s=0;this.timer=window.setInterval(()=>{s=Math.min(100,s+4+Math.random()*8),this.upload.dispatchEvent(new ProgressEvent("progress",{lengthComputable:!0,loaded:s,total:100})),l&&s>60?this.finish(500,"Internal Server Error",null):s>=100&&this.finish(200,"OK",{id:crypto.randomUUID()})},200)}abort(){window.clearInterval(this.timer),this.dispatchEvent(new Event("abort"))}finish(t,i,l){window.clearInterval(this.timer),this.status=t,this.statusText=i,this.response=l,this.dispatchEvent(new Event("load"))}}function W(n){const t=window.XMLHttpRequest;window.XMLHttpRequest=ae;try{return n()}finally{window.XMLHttpRequest=t}}try{K.displayName="gammelValidering",K.__docgenInfo={description:"Den gamle valideringen fra `main`, så vi kan sammenligne oppførselen",displayName:"gammelValidering",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/file-input/stories/endringer/endringerStoryUtils.tsx",methods:[],props:{},tags:{}}}catch{}try{W.displayName="medSimulertServer",W.__docgenInfo={description:"",displayName:"medSimulertServer",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/file-input/stories/endringer/endringerStoryUtils.tsx",methods:[],props:{},tags:{}}}catch{}try{c.displayName="Forklaring",c.__docgenInfo={description:"",displayName:"Forklaring",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/file-input/stories/endringer/endringerStoryUtils.tsx",methods:[],props:{tittel:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/stories/endringer/endringerStoryUtils.tsx",name:"TypeLiteral"}],description:"",name:"tittel",required:!0,tags:{},type:{name:"string"}},test:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/stories/endringer/endringerStoryUtils.tsx",name:"TypeLiteral"}],description:"",name:"test",required:!1,tags:{},type:{name:"ReactNode[]"}}},tags:{}}}catch{}try{h.displayName="Panel",h.__docgenInfo={description:"",displayName:"Panel",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/file-input/stories/endringer/endringerStoryUtils.tsx",methods:[],props:{tittel:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/stories/endringer/endringerStoryUtils.tsx",name:"TypeLiteral"}],description:"",name:"tittel",required:!0,tags:{},type:{name:"string"}}},tags:{}}}catch{}try{x.displayName="DemoFileInput",x.__docgenInfo={description:"FileInput med state, som viser valideringsfeil på filene",displayName:"DemoFileInput",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/file-input/stories/endringer/endringerStoryUtils.tsx",methods:[],props:{className:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"className",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"string"}},trackingProps:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:"Ekstra informasjon som legges på filvelgeren som `data-track-*`-attributter",name:"trackingProps",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!1,tags:{},type:{name:"Tracking"}},id:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:'Id-en settes på filvelgeren (`<input type="file">`), ikke på fieldset',name:"id",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!1,tags:{},type:{name:"string"}},disabled:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"WithDisabled"}],description:`Deaktiverer kontrollen.

Bruk den bare i interne verktøy, aldri i kundeflyter. En deaktivert kontroll
forklarer ikke hvorfor den er låst eller hva som må til for å låse den opp,
og den dempede kontrasten gjør den vanskelig å lese. Skal et valg ikke være
tilgjengelig for kunden, la det heller være ute av skjemaet, eller forklar
kravet med \`description\` eller \`errorLabel\`.`,name:"disabled",parent:{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"WithDisabled"},required:!1,tags:{},type:{name:"boolean"}},accept:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:`En string som begrenser hvilke filtyper som kan velges.

Flere filtyper kan defineres som en kommaseparert liste.`,name:"accept",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!1,tags:{see:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept"},type:{name:"string"}},multiple:{defaultValue:{value:"true"},declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:"La brukeren velge flere filer. Når den er `false`, beholdes bare den første filen.",name:"multiple",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!1,tags:{default:"true"},type:{name:"boolean"}},labelProps:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"labelProps",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:'Omit<LabelProps, "children">'}},supportLabelProps:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"supportLabelProps",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:'Omit<SupportLabelProps, "id" | "helpLabel" | "errorLabel">'}},tooltip:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"tooltip",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"ReactNode"}},helpLabel:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"helpLabel",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{deprecated:"Bruk heller `description`."},type:{name:"string"}},errorLabel:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"errorLabel",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"string"}},description:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"description",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"string"}},"data-testautoid":{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"DataTestAutoId"}],description:"",name:"data-testautoid",parent:{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"DataTestAutoId"},required:!1,tags:{},type:{name:"string"}},maxSizeBytes:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:'Største tillatte filstørrelse i bytes. Vises i beskrivelsen av feltet, og filer som er\nstørre får `validation.type` `"TOO_LARGE"`.',name:"maxSizeBytes",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!1,tags:{},type:{name:"number"}},fileVariant:{defaultValue:{value:'"list"'},declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:"Velg hvordan de opplastede filene skal vises. `card` viser filene som et\nrutenett, side om side. Kan overstyres per fil ved å sette `variant` på\nhver enkelt `File`.",name:"fileVariant",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!1,tags:{default:'"list"'},type:{name:"enum",raw:'"list" | "card"',value:[{value:'"list"'},{value:'"card"'}]}},legend:{defaultValue:{value:"Vedlegg"},declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/stories/endringer/endringerStoryUtils.tsx",name:"TypeLiteral"}],description:"",name:"legend",required:!1,tags:{},type:{name:"string"}},initialFiles:{defaultValue:{value:"[]"},declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/stories/endringer/endringerStoryUtils.tsx",name:"TypeLiteral"}],description:"",name:"initialFiles",required:!1,tags:{},type:{name:"UploadedFile[]"}},onFilesAdded:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/stories/endringer/endringerStoryUtils.tsx",name:"TypeLiteral"}],description:"",name:"onFilesAdded",required:!1,tags:{},type:{name:"((e: ChangeEvent<HTMLInputElement>, files: UploadedFile[]) => void)"}}},tags:{}}}catch{}try{S.displayName="synligTekst",S.__docgenInfo={description:"Tekst slik skjermleseren får den, uten aria-hidden-innhold som ikoner",displayName:"synligTekst",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/file-input/stories/endringer/endringerStoryUtils.tsx",methods:[],props:{},tags:{}}}catch{}try{z.displayName="useActiveElementDescription",z.__docgenInfo={description:"Viser hvilket element som har fokus akkurat nå",displayName:"useActiveElementDescription",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/file-input/stories/endringer/endringerStoryUtils.tsx",methods:[],props:{},tags:{}}}catch{}try{G.displayName="useLiveRegionLog",G.__docgenInfo={description:"Følger med på alt som skrives til live-regionen inne i `container`",displayName:"useLiveRegionLog",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/file-input/stories/endringer/endringerStoryUtils.tsx",methods:[],props:{},tags:{}}}catch{}try{M.displayName="useTrackingAttributes",M.__docgenInfo={description:"Leser ut data-track-attributter på et element",displayName:"useTrackingAttributes",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/file-input/stories/endringer/endringerStoryUtils.tsx",methods:[],props:{},tags:{}}}catch{}const Oe={title:"Komponenter/File Input/Endringer",parameters:{layout:"padded",docs:{description:{component:`Stories som viser endringene i FileInput-PR-ene, så de kan testes og diskuteres
i review. Hver story forklarer hva som er endret og hvordan du tester det.`}}}},r=n=>e.jsx("code",{children:n}),N=({children:n})=>e.jsx(Z,{as:"h3",size:"s",style:{marginBlock:"var(--jkl-unit-30) 0"},children:n}),_={name:"Oversikt",render:()=>e.jsxs(c,{tittel:"Endringer i FileInput",children:[e.jsx(g,{children:"Hver story i denne mappen viser én endring. Under er en oversikt gruppert etter type."}),e.jsx(N,{children:"Breaking (neste major)"}),e.jsxs(E,{children:[e.jsxs(d,{children:["Propen ",r("variant")," er fjernet. FileInput bruker alltid den kompakte visningen. → ",e.jsx("em",{children:"Alltid kompakt visning"})]}),e.jsxs(d,{children:[r("onChange")," får alltid en ",r("ChangeEvent")," fra filvelgeren, aldri en ",r("DragEvent"),". →"," ",e.jsx("em",{children:"Hele dropsonen tar imot klikk og slipp"})]}),e.jsxs(d,{children:["Klassen ",r("jkl-file-input--has-files")," er fjernet."]}),e.jsxs(d,{children:[r("data-track-*")," settes bare på filvelgeren, ikke på dropsonen. → ",e.jsx("em",{children:"Tracking kun på filvelgeren"})]})]}),e.jsx(N,{children:"Nytt"}),e.jsx(E,{children:e.jsxs(d,{children:[r("File")," viser ",r("uploadProgress")," som en tynn linje i underkanten av filen, og ",r("upload()")," kan avbrytes med en ",r("AbortSignal"),". →"," ",e.jsx("em",{children:"Opplasting med fremdrift og avbryt"})]})}),e.jsx(N,{children:"Fikser"}),e.jsxs(E,{children:[e.jsxs(d,{children:["Slipp når feltet er deaktivert gjør ingenting, og nettleseren åpner ikke filen. → ",e.jsx("em",{children:"Deaktivert"})]}),e.jsxs(d,{children:["Med ",r("multiple={false}")," beholdes bare én fil. →"," ",e.jsx("em",{children:"Én fil"})]}),e.jsxs(d,{children:["Dra-markeringen blinker ikke lenger når du drar over teksten i dropsonen. →"," ",e.jsx("em",{children:"Hele dropsonen tar imot klikk og slipp"})]}),e.jsxs(d,{children:[r("accept")," valideres etter samme regler som nettleseren. → ",e.jsx("em",{children:"Validering av filtyper"})]}),e.jsx(d,{children:"Forhåndsvisninger av bilder frigjøres og lekker ikke minne."}),e.jsxs(d,{children:["Spinneren er byttet ut med en ",r("ProgressBar")," uten verdi når fremdriften er ukjent. →"," ",e.jsx("em",{children:"Lastetilstand i liste og kort"})]})]}),e.jsx(N,{children:"Tilgjengelighet"}),e.jsxs(E,{children:[e.jsxs(d,{children:["Antall valgte filer leses opp, og fillisten har et navn. →"," ",e.jsx("em",{children:"Skjermleseropplesning"})]}),e.jsxs(d,{children:["Fokus flyttes til filvelgeren når en fil fjernes. →"," ",e.jsx("em",{children:"Fokus etter fjerning"})]}),e.jsxs(d,{children:["Feilmeldingen på en fil er koblet til fjern-knappen og lenken. → ",e.jsx("em",{children:"Feilmelding koblet til fjern-knappen"})]}),e.jsx(d,{children:"«eller slipp filer her» skjules på touch-enheter, der dra-og-slipp ikke finnes."})]})]})},P={name:"Alltid kompakt visning",render:()=>e.jsxs(e.Fragment,{children:[e.jsx(c,{tittel:"Alltid kompakt visning",test:["Sammenlign med «File Input» i main – den store varianten finnes ikke lenger.","Sjekk at maks filstørrelse står i beskrivelsen."],children:e.jsxs(g,{children:["Den tidligere ",r('variant="small"')," er nå den eneste visningen, og ",r("variant"),"-propen er fjernet. Stilene bruker de samme tokenene som andre inputfelt (border radius, kantfarger og bevegelse)."]})}),e.jsx(x,{description:"Last opp kvitteringer og bilder av skaden.",accept:"image/*,.pdf",maxSizeBytes:8e6,initialFiles:$(["skade.png","kvittering.pdf"])})]})},w={name:"Hele dropsonen tar imot klikk og slipp",render:()=>{const[n,t]=k.useState([]);return e.jsxs(e.Fragment,{children:[e.jsx(c,{tittel:"Hele dropsonen tar imot klikk og slipp",test:["Klikk på teksten «eller slipp filer her» – filvelgeren åpnes.","Dra filer over dropsonen og beveg pekeren over knappen og teksten – markeringen skal ikke blinke.","Slipp filene – loggen viser at onChange fikk en change-event fra <input>.","Hold musen over dropsonen – både kanten og knappen får hover-stil.","Tab til filvelgeren – knappen får fokusring."],children:e.jsxs(g,{children:["Filvelgeren (",r('<input type="file">'),") er usynlig og dekker hele dropsonen. Nettleseren tar seg av klikk, slipp, ",r("multiple")," og ",r("disabled"),", så den egne ",r("Dropzone"),"-komponenten er fjernet. Vi lytter bare på ",r("dragenter"),"/",r("dragleave")," ","for å style dropsonen."]})}),e.jsx(x,{onFilesAdded:(i,l)=>t(s=>[`${i.type} fra <${i.target.tagName.toLowerCase()} type="${i.target.type}">: ${l.map(a=>a.file.name).join(", ")}`,...s])}),e.jsx(h,{tittel:"onChange-logg",children:n.length===0?"Ingen filer lagt til ennå":n.map((i,l)=>e.jsx("div",{children:i},l))})]})}},V={name:"Én fil (multiple={false})",render:()=>e.jsxs(e.Fragment,{children:[e.jsx(c,{tittel:"Én fil",test:["Dra og slipp flere filer samtidig – bare én havner i listen.","Velg en ny fil – den erstatter den forrige."],children:e.jsxs(g,{children:["Tidligere kunne man slippe flere filer selv om"," ",r("multiple={false}"),". Nå sender FileInput aldri mer enn én fil til ",r("onChange"),"."]})}),e.jsx(x,{multiple:!1})]})},B={name:"Deaktivert",render:()=>e.jsxs(e.Fragment,{children:[e.jsx(c,{tittel:"Deaktivert",test:["Dra en fil over dropsonen – den markeres ikke, og pekeren viser at slipp ikke er lov.","Slipp filen – ingenting skjer, og nettleseren åpner ikke filen i en ny fane.","Hold musen over – dropsonen får ikke hover-stil."],children:e.jsx(g,{children:"Før kunne man slippe filer i en deaktivert FileInput. Nå stopper nettleseren slippet, og vi hindrer at filen åpnes i stedet."})}),e.jsx(x,{disabled:!0,initialFiles:$(["skade.png"])})]})},oe=[{navn:"notat.txt",type:"text/plain",accept:"image/*,",kommentar:"Komma på slutten godtok alle filtyper"},{navn:"søknad.pdf",type:"application/pdf",accept:"df",kommentar:"Endelser ble sammenlignet uten punktum"},{navn:"søknad.pdf",type:"application/pdf",accept:"application/pd",kommentar:"MIME-typer ble sammenlignet med includes"},{navn:"min.fil.pdf",type:"application/pdf",accept:"image/*",kommentar:"Feilmeldingen brukte teksten etter første punktum"},{navn:"README",type:"",accept:".pdf",kommentar:"Filer uten endelse fikk en tom filtype i meldingen"},{navn:"SØKNAD.PDF",type:"application/pdf",accept:".pdf",kommentar:"Uendret: store og små bokstaver"},{navn:"TEST.TxT",type:"text/plain",accept:"txt,exe",kommentar:"Uendret: endelser uten punktum godtas fortsatt"}],A={name:"Validering av filtyper",args:{accept:"image/*,.pdf"},argTypes:{accept:{control:"text"}},render:({accept:n})=>e.jsxs(e.Fragment,{children:[e.jsx(c,{tittel:"Validering av filtyper",test:["Se tabellen for forskjellen mellom før og nå.","Endre accept i Controls og last opp filer for å prøve selv. Filer som ikke godtas vises med feilmelding."],children:e.jsxs(g,{children:[r("accept")," valideres nå etter reglene i HTML-spesifikasjonen: ",r(".pdf")," sjekker endelsen,"," ",r("image/*")," sjekker starten på MIME-typen, og"," ",r("application/pdf")," må være lik MIME-typen. Endelser uten punktum godtas fortsatt for bakoverkompatibilitet."]})}),e.jsxs(te,{fullWidth:!0,caption:e.jsx(re,{children:"Validering av accept før og etter endringen"}),children:[e.jsx(ie,{children:e.jsxs(J,{children:[e.jsx(F,{children:"Fil"}),e.jsx(F,{children:"accept"}),e.jsx(F,{children:"Før"}),e.jsx(F,{children:"Nå"}),e.jsx(F,{children:"Kommentar"})]})}),e.jsx(se,{children:oe.map(t=>{const i=new window.File(["a"],t.navn,{type:t.type});return e.jsxs(J,{children:[e.jsxs(T,{children:[r(t.navn)," (",t.type||"ingen type",")"]}),e.jsx(T,{children:r(t.accept)}),e.jsx(T,{children:K(i,t.accept)?.message??"Godkjent"}),e.jsx(T,{children:ne(i,t.accept)?.message??"Godkjent"}),e.jsx(T,{children:t.kommentar})]},`${t.navn}-${t.accept}`)})})]}),e.jsx("div",{style:{marginBlockStart:"var(--jkl-unit-40)"},children:e.jsx(x,{accept:n},n)})]})},D={name:"Opplasting med fremdrift og avbryt",args:{fileVariant:"list"},argTypes:{fileVariant:{control:{type:"inline-radio"},options:["list","card"]}},render:({fileVariant:n})=>{const[t,i]=k.useState([]),[l,s]=k.useState([]),a=k.useRef(new Map),y=(p,o)=>i(j=>j.map(f=>f.id===p?{...f,...o}:f)),u=p=>i(o=>o.filter(j=>j.id!==p)),m=p=>s(o=>[p,...o]),b=p=>{const o=crypto.randomUUID(),j=p.file.name;if(p.validation){i(v=>[...v,{...p,id:o}]);return}i(v=>[...v,{...p,id:o,state:"loading"}]);const f=new AbortController;a.current.set(o,f);const I=new FormData;I.append("fil",p.file),W(()=>le("/api/vedlegg",I,v=>y(o,{uploadProgress:v}),void 0,f.signal)).then(()=>{y(o,{state:void 0}),m(`${j}: lastet opp`)}).catch(v=>{if(v.name==="AbortError"){m(`${j}: avbrutt`);return}y(o,{state:"error",feil:v.message}),m(`${j}: ${v.message}`)}).finally(()=>a.current.delete(o))};return e.jsxs(e.Fragment,{children:[e.jsx(c,{tittel:"Opplasting med fremdrift og avbryt",test:["Last opp noen filer – fremdriften vises som en linje i underkanten av hver fil.","Trykk på søppelbøtta mens en fil lastes opp – opplastingen avbrytes.","Last opp en fil med «feil» i navnet – serveren svarer 500, og feilmeldingen vises på filen.","Bytt fileVariant i Controls for å se fremdriften i kortvisning."],children:e.jsxs(g,{children:[r("File")," har fått propen ",r("uploadProgress"),", som vises som en tynn ",r("ProgressBar")," i underkanten av filen når ",r('state="loading"'),". Uten fremdrift glir linjen frem og tilbake."," ",r("upload()")," tar nå imot en ",r("AbortSignal")," ","og gir en ",r("Error")," med HTTP-status når serveren svarer med feil. Serveren her er simulert."]})}),e.jsx(Y,{legend:"Vedlegg",fileVariant:n,value:t,onChange:(p,o)=>o.forEach(b),children:t.map(({id:p,file:o,state:j,validation:f,uploadProgress:I,feil:v})=>e.jsx(L,{fileName:o.name,fileType:o.type,fileSize:o.size,file:o,state:f?"error":j,uploadProgress:I,errorLabel:f?.message??v,onRemove:()=>{a.current.get(p)?.abort(),u(p)}},p))}),e.jsx(h,{tittel:"Hendelser",children:l.length===0?"Ingen opplastinger ennå":l.map((p,o)=>e.jsx("div",{children:p},o))})]})}},C={name:"Lastetilstand i liste og kort",render:()=>e.jsxs(e.Fragment,{children:[e.jsx(c,{tittel:"Lastetilstand i liste og kort",test:["Sjekk at linjen glir i underkanten av filene i begge visningene.","Slå på redusert bevegelse i operativsystemet – linjen blir stiplet og står stille.","Tab gjennom siden – linjen er ikke et tabstopp."],children:e.jsxs(g,{children:["Spinneren er fjernet. Når fremdriften er ukjent, viser"," ",r("File")," en ",r("ProgressBar")," uten verdi som glir frem og tilbake i underkanten, samme sted som linjen med kjent fremdrift. Bildet og filtypen vises hele tiden."]})}),e.jsx(O,{gap:"24",wrap:"wrap",alignItems:"start",children:["list","card"].map(n=>e.jsxs(O,{direction:"column",gap:"8",style:{width:"18rem"},children:[e.jsx(L,{variant:n,fileName:"skade.png",fileType:"image/png",fileSize:349e4,path:Q,state:"loading"}),e.jsx(L,{variant:n,fileName:"kvittering.pdf",fileType:"application/pdf",fileSize:12e4,state:"loading"})]},n))})]})},H={name:"Feilmelding koblet til fjern-knappen",render:()=>{const n=X(),[t,i]=k.useState("");return e.jsxs(e.Fragment,{children:[e.jsx(c,{tittel:"Feilmelding koblet til fjern-knappen",test:["Tab til fjern-knappen med skjermleser på – feilmeldingen leses opp som beskrivelse.","Trykk «Les beskrivelse» for å se hva skjermleseren får."],children:e.jsxs(g,{children:["Feilmeldingen hadde en id, men ingenting pekte på den. Nå har både fjern-knappen og lenken"," ",r("aria-describedby")," til feilmeldingen. Knappen har også fått ",r("aria-label")," i tillegg til"," ",r("title"),"."]})}),e.jsx("div",{ref:n,style:{maxWidth:"24rem"},children:e.jsx(L,{fileName:"skade.png",fileType:"image/png",fileSize:12e6,path:Q,state:"error",errorLabel:"Filen er 12 MB, men kan maksimalt være 8 MB",onRemove:()=>{}})}),e.jsxs(h,{tittel:"Tilgjengelig navn og beskrivelse for fjern-knappen",children:[e.jsx("button",{type:"button",className:"jkl-button jkl-button--tertiary",onClick:()=>{const l=n.current?.querySelector("button"),s=l?.getAttribute("aria-describedby");i(`Navn: «${l?.getAttribute("aria-label")}». Beskrivelse: «${s&&S(document.getElementById(s))||"ingen"}»`)},children:"Les beskrivelse"}),e.jsx("div",{children:t})]})]})}},U={name:"Fokus etter fjerning",render:()=>{const n=z();return e.jsxs(e.Fragment,{children:[e.jsx(c,{tittel:"Fokus etter fjerning",test:["Tab til en av søppelbøttene og trykk Enter.","Panelet under viser at fokus havner på filvelgeren, ikke på <body>.","Trykk Tab igjen – du fortsetter fra filvelgeren i stedet for toppen av siden."],children:e.jsxs(g,{children:["Når en fil fjernes, forsvinner knappen som hadde fokus. Før havnet fokus da på ",r("<body>"),", og tastaturbrukere måtte starte fra toppen. Nå flytter FileInput fokus til filvelgeren."]})}),e.jsx(x,{initialFiles:$(["bilde-1.png","bilde-2.png","bilde-3.png"])}),e.jsx(h,{tittel:"Fokus akkurat nå",children:n})]})}},R={name:"Skjermleseropplesning",render:()=>{const n=X(),t=G(n);return e.jsxs(e.Fragment,{children:[e.jsx(c,{tittel:"Skjermleseropplesning",test:["Legg til og fjern filer – panelet viser hva skjermleseren leser opp.","Med VoiceOver/NVDA: navigér til fillisten – den heter «Valgte filer»."],children:e.jsxs(g,{children:["FileInput har en skjult ",r('aria-live="polite"'),"-region som sier hvor mange filer som er valgt, og fillisten har fått ",r('aria-label="Valgte filer"'),"."]})}),e.jsx("div",{ref:n,children:e.jsx(x,{initialFiles:$(["bilde-1.png"])})}),e.jsx(h,{tittel:"Skjermleseren leser opp",children:t.map((i,l)=>e.jsxs("div",{children:["«",i,"»"]},l))})]})}},q={name:"Tracking kun på filvelgeren",render:()=>{const n=X(),t=M(n,".jkl-file-input__input"),i=M(n,".jkl-file-input__dropzone");return e.jsxs(e.Fragment,{children:[e.jsx(c,{tittel:"Tracking kun på filvelgeren",children:e.jsxs(g,{children:["Før sto de samme ",r("data-track-*"),"-attributtene på både dropsonen og filvelgeren, så samme samhandling kunne bli registrert på to elementer. Nå står de bare på filvelgeren, som er elementet brukeren faktisk samhandler med."]})}),e.jsx("div",{ref:n,children:e.jsx(x,{accept:"image/*",trackingProps:{id:"skademelding-vedlegg"}})}),e.jsx(h,{tittel:"data-track-* på filvelgeren",children:t.map(l=>e.jsx("div",{children:r(l)},l))}),e.jsx(h,{tittel:"data-track-* på dropsonen",children:i.length===0?"Ingen":i.map(l=>e.jsx("div",{children:r(l)},l))})]})}},ze=["Oversikt","AlltidKompakt","HeleDropsonen","EnFil","Deaktivert","Validering","Opplasting","Lastetilstand","FeilKobletTilKnapp","FokusEtterFjerning","Skjermleseropplesning","Tracking"];_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Oversikt",
  render: () => <Forklaring tittel="Endringer i FileInput">
            <Text>
                Hver story i denne mappen viser én endring. Under er en oversikt
                gruppert etter type.
            </Text>
            <Gruppe>Breaking (neste major)</Gruppe>
            <UnorderedList>
                <ListItem>
                    Propen {code("variant")} er fjernet. FileInput bruker alltid
                    den kompakte visningen. → <em>Alltid kompakt visning</em>
                </ListItem>
                <ListItem>
                    {code("onChange")} får alltid en {code("ChangeEvent")} fra
                    filvelgeren, aldri en {code("DragEvent")}. →{" "}
                    <em>Hele dropsonen tar imot klikk og slipp</em>
                </ListItem>
                <ListItem>
                    Klassen {code("jkl-file-input--has-files")} er fjernet.
                </ListItem>
                <ListItem>
                    {code("data-track-*")} settes bare på filvelgeren, ikke på
                    dropsonen. → <em>Tracking kun på filvelgeren</em>
                </ListItem>
            </UnorderedList>
            <Gruppe>Nytt</Gruppe>
            <UnorderedList>
                <ListItem>
                    {code("File")} viser {code("uploadProgress")} som en tynn
                    linje i underkanten av filen, og {code("upload()")} kan
                    avbrytes med en {code("AbortSignal")}. →{" "}
                    <em>Opplasting med fremdrift og avbryt</em>
                </ListItem>
            </UnorderedList>
            <Gruppe>Fikser</Gruppe>
            <UnorderedList>
                <ListItem>
                    Slipp når feltet er deaktivert gjør ingenting, og
                    nettleseren åpner ikke filen. → <em>Deaktivert</em>
                </ListItem>
                <ListItem>
                    Med {code("multiple={false}")} beholdes bare én fil. →{" "}
                    <em>Én fil</em>
                </ListItem>
                <ListItem>
                    Dra-markeringen blinker ikke lenger når du drar over teksten
                    i dropsonen. →{" "}
                    <em>Hele dropsonen tar imot klikk og slipp</em>
                </ListItem>
                <ListItem>
                    {code("accept")} valideres etter samme regler som
                    nettleseren. → <em>Validering av filtyper</em>
                </ListItem>
                <ListItem>
                    Forhåndsvisninger av bilder frigjøres og lekker ikke minne.
                </ListItem>
                <ListItem>
                    Spinneren er byttet ut med en {code("ProgressBar")} uten
                    verdi når fremdriften er ukjent. →{" "}
                    <em>Lastetilstand i liste og kort</em>
                </ListItem>
            </UnorderedList>
            <Gruppe>Tilgjengelighet</Gruppe>
            <UnorderedList>
                <ListItem>
                    Antall valgte filer leses opp, og fillisten har et navn. →{" "}
                    <em>Skjermleseropplesning</em>
                </ListItem>
                <ListItem>
                    Fokus flyttes til filvelgeren når en fil fjernes. →{" "}
                    <em>Fokus etter fjerning</em>
                </ListItem>
                <ListItem>
                    Feilmeldingen på en fil er koblet til fjern-knappen og
                    lenken. → <em>Feilmelding koblet til fjern-knappen</em>
                </ListItem>
                <ListItem>
                    «eller slipp filer her» skjules på touch-enheter, der
                    dra-og-slipp ikke finnes.
                </ListItem>
            </UnorderedList>
        </Forklaring>
}`,..._.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "Alltid kompakt visning",
  render: () => <>
            <Forklaring tittel="Alltid kompakt visning" test={["Sammenlign med «File Input» i main – den store varianten finnes ikke lenger.", "Sjekk at maks filstørrelse står i beskrivelsen."]}>
                <Text>
                    Den tidligere {code('variant="small"')} er nå den eneste
                    visningen, og {code("variant")}-propen er fjernet. Stilene
                    bruker de samme tokenene som andre inputfelt (border radius,
                    kantfarger og bevegelse).
                </Text>
            </Forklaring>
            <DemoFileInput description="Last opp kvitteringer og bilder av skaden." accept="image/*,.pdf" maxSizeBytes={8_000_000} initialFiles={createUploadedFiles(["skade.png", "kvittering.pdf"])} />
        </>
}`,...P.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Hele dropsonen tar imot klikk og slipp",
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    return <>
                <Forklaring tittel="Hele dropsonen tar imot klikk og slipp" test={["Klikk på teksten «eller slipp filer her» – filvelgeren åpnes.", "Dra filer over dropsonen og beveg pekeren over knappen og teksten – markeringen skal ikke blinke.", "Slipp filene – loggen viser at onChange fikk en change-event fra <input>.", "Hold musen over dropsonen – både kanten og knappen får hover-stil.", "Tab til filvelgeren – knappen får fokusring."]}>
                    <Text>
                        Filvelgeren ({code('<input type="file">')}) er usynlig
                        og dekker hele dropsonen. Nettleseren tar seg av klikk,
                        slipp, {code("multiple")} og {code("disabled")}, så den
                        egne {code("Dropzone")}-komponenten er fjernet. Vi
                        lytter bare på {code("dragenter")}/{code("dragleave")}{" "}
                        for å style dropsonen.
                    </Text>
                </Forklaring>
                <DemoFileInput onFilesAdded={(e, files) => setLog(current => [\`\${e.type} fra <\${e.target.tagName.toLowerCase()} type="\${e.target.type}">: \${files.map(f => f.file.name).join(", ")}\`, ...current])} />
                <Panel tittel="onChange-logg">
                    {log.length === 0 ? "Ingen filer lagt til ennå" : log.map((line, i) =>
        // biome-ignore lint/suspicious/noArrayIndexKey: logg
        <div key={i}>{line}</div>)}
                </Panel>
            </>;
  }
}`,...w.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Én fil (multiple={false})",
  render: () => <>
            <Forklaring tittel="Én fil" test={["Dra og slipp flere filer samtidig – bare én havner i listen.", "Velg en ny fil – den erstatter den forrige."]}>
                <Text>
                    Tidligere kunne man slippe flere filer selv om{" "}
                    {code("multiple={false}")}. Nå sender FileInput aldri mer
                    enn én fil til {code("onChange")}.
                </Text>
            </Forklaring>
            <DemoFileInput multiple={false} />
        </>
}`,...V.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Deaktivert",
  render: () => <>
            <Forklaring tittel="Deaktivert" test={["Dra en fil over dropsonen – den markeres ikke, og pekeren viser at slipp ikke er lov.", "Slipp filen – ingenting skjer, og nettleseren åpner ikke filen i en ny fane.", "Hold musen over – dropsonen får ikke hover-stil."]}>
                <Text>
                    Før kunne man slippe filer i en deaktivert FileInput. Nå
                    stopper nettleseren slippet, og vi hindrer at filen åpnes i
                    stedet.
                </Text>
            </Forklaring>
            <DemoFileInput disabled initialFiles={createUploadedFiles(["skade.png"])} />
        </>
}`,...B.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Validering av filtyper",
  args: {
    accept: "image/*,.pdf"
  },
  argTypes: {
    accept: {
      control: "text"
    }
  },
  render: ({
    accept
  }) => <>
            <Forklaring tittel="Validering av filtyper" test={["Se tabellen for forskjellen mellom før og nå.", "Endre accept i Controls og last opp filer for å prøve selv. Filer som ikke godtas vises med feilmelding."]}>
                <Text>
                    {code("accept")} valideres nå etter reglene i
                    HTML-spesifikasjonen: {code(".pdf")} sjekker endelsen,{" "}
                    {code("image/*")} sjekker starten på MIME-typen, og{" "}
                    {code("application/pdf")} må være lik MIME-typen. Endelser
                    uten punktum godtas fortsatt for bakoverkompatibilitet.
                </Text>
            </Forklaring>
            <Table fullWidth caption={<TableCaption>
                        Validering av accept før og etter endringen
                    </TableCaption>}>
                <TableHead>
                    <TableRow>
                        <TableHeader>Fil</TableHeader>
                        <TableHeader>accept</TableHeader>
                        <TableHeader>Før</TableHeader>
                        <TableHeader>Nå</TableHeader>
                        <TableHeader>Kommentar</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {valideringseksempler.map(eksempel => {
          const fil = new window.File(["a"], eksempel.navn, {
            type: eksempel.type
          });
          return <TableRow key={\`\${eksempel.navn}-\${eksempel.accept}\`}>
                                <TableCell>
                                    {code(eksempel.navn)} (
                                    {eksempel.type || "ingen type"})
                                </TableCell>
                                <TableCell>{code(eksempel.accept)}</TableCell>
                                <TableCell>
                                    {gammelValidering(fil, eksempel.accept)?.message ?? "Godkjent"}
                                </TableCell>
                                <TableCell>
                                    {validateFileInputFiles(fil, eksempel.accept)?.message ?? "Godkjent"}
                                </TableCell>
                                <TableCell>{eksempel.kommentar}</TableCell>
                            </TableRow>;
        })}
                </TableBody>
            </Table>
            <div style={{
      marginBlockStart: "var(--jkl-unit-40)"
    }}>
                <DemoFileInput key={accept} accept={accept} />
            </div>
        </>
}`,...A.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Opplasting med fremdrift og avbryt",
  args: {
    fileVariant: "list"
  },
  argTypes: {
    fileVariant: {
      control: {
        type: "inline-radio"
      },
      options: ["list", "card"]
    }
  },
  render: ({
    fileVariant
  }) => {
    const [files, setFiles] = useState<Opplasting[]>([]);
    const [log, setLog] = useState<string[]>([]);
    const controllers = useRef(new Map<string, AbortController>());
    const update = (id: string, patch: Partial<Opplasting>) => setFiles(current => current.map(f => f.id === id ? {
      ...f,
      ...patch
    } : f));
    const remove = (id: string) => setFiles(current => current.filter(f => f.id !== id));
    const logg = (line: string) => setLog(current => [line, ...current]);
    const start = (uploaded: UploadedFile) => {
      const id = crypto.randomUUID();
      const name = uploaded.file.name;
      if (uploaded.validation) {
        setFiles(current => [...current, {
          ...uploaded,
          id
        }]);
        return;
      }
      setFiles(current => [...current, {
        ...uploaded,
        id,
        state: "loading"
      }]);
      const controller = new AbortController();
      controllers.current.set(id, controller);
      const data = new FormData();
      data.append("fil", uploaded.file);
      medSimulertServer(() => upload("/api/vedlegg", data, progress => update(id, {
        uploadProgress: progress
      }), undefined, controller.signal)).then(() => {
        update(id, {
          state: undefined
        });
        logg(\`\${name}: lastet opp\`);
      }).catch((error: Error) => {
        if (error.name === "AbortError") {
          logg(\`\${name}: avbrutt\`);
          return;
        }
        update(id, {
          state: "error",
          feil: error.message
        });
        logg(\`\${name}: \${error.message}\`);
      }).finally(() => controllers.current.delete(id));
    };
    return <>
                <Forklaring tittel="Opplasting med fremdrift og avbryt" test={["Last opp noen filer – fremdriften vises som en linje i underkanten av hver fil.", "Trykk på søppelbøtta mens en fil lastes opp – opplastingen avbrytes.", "Last opp en fil med «feil» i navnet – serveren svarer 500, og feilmeldingen vises på filen.", "Bytt fileVariant i Controls for å se fremdriften i kortvisning."]}>
                    <Text>
                        {code("File")} har fått propen {code("uploadProgress")},
                        som vises som en tynn {code("ProgressBar")} i
                        underkanten av filen når {code('state="loading"')}. Uten
                        fremdrift glir linjen frem og tilbake.{" "}
                        {code("upload()")} tar nå imot en {code("AbortSignal")}{" "}
                        og gir en {code("Error")} med HTTP-status når serveren
                        svarer med feil. Serveren her er simulert.
                    </Text>
                </Forklaring>
                <FileInput legend="Vedlegg" fileVariant={fileVariant} value={files} onChange={(_e, newFiles) => newFiles.forEach(start)}>
                    {files.map(({
          id,
          file,
          state,
          validation,
          uploadProgress,
          feil
        }) => <File key={id} fileName={file.name} fileType={file.type} fileSize={file.size} file={file} state={validation ? "error" : state} uploadProgress={uploadProgress} errorLabel={validation?.message ?? feil} onRemove={() => {
          controllers.current.get(id)?.abort();
          remove(id);
        }} />)}
                </FileInput>
                <Panel tittel="Hendelser">
                    {log.length === 0 ? "Ingen opplastinger ennå" : log.map((line, i) =>
        // biome-ignore lint/suspicious/noArrayIndexKey: logg
        <div key={i}>{line}</div>)}
                </Panel>
            </>;
  }
}`,...D.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Lastetilstand i liste og kort",
  render: () => <>
            <Forklaring tittel="Lastetilstand i liste og kort" test={["Sjekk at linjen glir i underkanten av filene i begge visningene.", "Slå på redusert bevegelse i operativsystemet – linjen blir stiplet og står stille.", "Tab gjennom siden – linjen er ikke et tabstopp."]}>
                <Text>
                    Spinneren er fjernet. Når fremdriften er ukjent, viser{" "}
                    {code("File")} en {code("ProgressBar")} uten verdi som glir
                    frem og tilbake i underkanten, samme sted som linjen med
                    kjent fremdrift. Bildet og filtypen vises hele tiden.
                </Text>
            </Forklaring>
            <Flex gap="24" wrap="wrap" alignItems="start">
                {(["list", "card"] as const).map(variant => <Flex key={variant} direction="column" gap="8" style={{
        width: "18rem"
      }}>
                        <File variant={variant} fileName="skade.png" fileType="image/png" fileSize={3_490_000} path={cow.default} state="loading" />
                        <File variant={variant} fileName="kvittering.pdf" fileType="application/pdf" fileSize={120_000} state="loading" />
                    </Flex>)}
            </Flex>
        </>
}`,...C.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Feilmelding koblet til fjern-knappen",
  render: () => {
    const container = useContainerRef();
    const [description, setDescription] = useState("");
    return <>
                <Forklaring tittel="Feilmelding koblet til fjern-knappen" test={["Tab til fjern-knappen med skjermleser på – feilmeldingen leses opp som beskrivelse.", "Trykk «Les beskrivelse» for å se hva skjermleseren får."]}>
                    <Text>
                        Feilmeldingen hadde en id, men ingenting pekte på den.
                        Nå har både fjern-knappen og lenken{" "}
                        {code("aria-describedby")} til feilmeldingen. Knappen
                        har også fått {code("aria-label")} i tillegg til{" "}
                        {code("title")}.
                    </Text>
                </Forklaring>
                <div ref={container} style={{
        maxWidth: "24rem"
      }}>
                    <File fileName="skade.png" fileType="image/png" fileSize={12_000_000} path={cow.default} state="error" errorLabel="Filen er 12 MB, men kan maksimalt være 8 MB" onRemove={() => {}} />
                </div>
                <Panel tittel="Tilgjengelig navn og beskrivelse for fjern-knappen">
                    <button type="button" className="jkl-button jkl-button--tertiary" onClick={() => {
          const button = container.current?.querySelector("button");
          const describedBy = button?.getAttribute("aria-describedby");
          setDescription(\`Navn: «\${button?.getAttribute("aria-label")}». Beskrivelse: «\${describedBy && synligTekst(document.getElementById(describedBy)) || "ingen"}»\`);
        }}>
                        Les beskrivelse
                    </button>
                    <div>{description}</div>
                </Panel>
            </>;
  }
}`,...H.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Fokus etter fjerning",
  render: () => {
    const focused = useActiveElementDescription();
    return <>
                <Forklaring tittel="Fokus etter fjerning" test={["Tab til en av søppelbøttene og trykk Enter.", "Panelet under viser at fokus havner på filvelgeren, ikke på <body>.", "Trykk Tab igjen – du fortsetter fra filvelgeren i stedet for toppen av siden."]}>
                    <Text>
                        Når en fil fjernes, forsvinner knappen som hadde fokus.
                        Før havnet fokus da på {code("<body>")}, og
                        tastaturbrukere måtte starte fra toppen. Nå flytter
                        FileInput fokus til filvelgeren.
                    </Text>
                </Forklaring>
                <DemoFileInput initialFiles={createUploadedFiles(["bilde-1.png", "bilde-2.png", "bilde-3.png"])} />
                <Panel tittel="Fokus akkurat nå">{focused}</Panel>
            </>;
  }
}`,...U.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "Skjermleseropplesning",
  render: () => {
    const container = useContainerRef();
    const log = useLiveRegionLog(container);
    return <>
                <Forklaring tittel="Skjermleseropplesning" test={["Legg til og fjern filer – panelet viser hva skjermleseren leser opp.", "Med VoiceOver/NVDA: navigér til fillisten – den heter «Valgte filer»."]}>
                    <Text>
                        FileInput har en skjult {code('aria-live="polite"')}
                        -region som sier hvor mange filer som er valgt, og
                        fillisten har fått {code('aria-label="Valgte filer"')}.
                    </Text>
                </Forklaring>
                <div ref={container}>
                    <DemoFileInput initialFiles={createUploadedFiles(["bilde-1.png"])} />
                </div>
                <Panel tittel="Skjermleseren leser opp">
                    {log.map((line, i) =>
        // biome-ignore lint/suspicious/noArrayIndexKey: logg
        <div key={i}>«{line}»</div>)}
                </Panel>
            </>;
  }
}`,...R.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Tracking kun på filvelgeren",
  render: () => {
    const container = useContainerRef();
    const input = useTrackingAttributes(container, ".jkl-file-input__input");
    const dropzone = useTrackingAttributes(container, ".jkl-file-input__dropzone");
    return <>
                <Forklaring tittel="Tracking kun på filvelgeren">
                    <Text>
                        Før sto de samme {code("data-track-*")}-attributtene på
                        både dropsonen og filvelgeren, så samme samhandling
                        kunne bli registrert på to elementer. Nå står de bare på
                        filvelgeren, som er elementet brukeren faktisk
                        samhandler med.
                    </Text>
                </Forklaring>
                <div ref={container}>
                    <DemoFileInput accept="image/*" trackingProps={{
          id: "skademelding-vedlegg"
        }} />
                </div>
                <Panel tittel="data-track-* på filvelgeren">
                    {input.map(attr => <div key={attr}>{code(attr)}</div>)}
                </Panel>
                <Panel tittel="data-track-* på dropsonen">
                    {dropzone.length === 0 ? "Ingen" : dropzone.map(attr => <div key={attr}>{code(attr)}</div>)}
                </Panel>
            </>;
  }
}`,...q.parameters?.docs?.source}}};export{P as AlltidKompakt,B as Deaktivert,V as EnFil,H as FeilKobletTilKnapp,U as FokusEtterFjerning,w as HeleDropsonen,C as Lastetilstand,D as Opplasting,_ as Oversikt,R as Skjermleseropplesning,q as Tracking,A as Validering,ze as __namedExportsOrder,Oe as default};
