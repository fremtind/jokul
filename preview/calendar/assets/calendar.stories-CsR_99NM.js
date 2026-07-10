import{r as h,j as e}from"./iframe-HSZlmcjQ.js";import{D as O,m as B}from"./Datepicker.stories-f5VP5QID.js";import V from"./TextInput.stories-B0lIL3dz.js";import{c as Y}from"./clsx-B-dksMZM.js";import{F as d}from"./Flex-DZLRLwnJ.js";import{B as w}from"./Button-CMGOE9FH.js";import{A as q,a as G}from"./ArrowRightIcon-DVP7KOay.js";import{A as P}from"./ArrowDownIcon-ssXmko0B.js";import{T as k}from"./Text-DoOUwgQT.js";import{T}from"./Title-B0UfB5Xw.js";import{F as N}from"./FieldGroup-CBzvA9dn.js";import{T as $}from"./TextInput-DNLavzbA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bo0XFbky.js";import"./index-Ca3Zy3oh.js";import"./formatDate-hwqa_80k.js";import"./IconButton-Ajaq5RqP.js";import"./CalendarIcon-DUG_S-EG.js";import"./Icon-DFDocwAP.js";import"./InputGroup-Ccy-1O0y.js";import"./useId-C42Ay4rR.js";import"./Label-Cild8Iih.js";import"./SupportLabel-Bb9vuiph.js";import"./SuccessIcon-BCMXaDEY.js";import"./WarningIcon-BmDRcLt7.js";import"./Popover-BshLGTai.js";import"./floating-ui.react-BS9TkQkc.js";import"./getThemeAndSize-CZAj3IXt.js";import"./BaseTextInput-D5GrIULT.js";import"./ChevronDownIcon-D-b7iojR.js";/* empty css               */import"./unicode-DWvs0Pen.js";import"./formatOrganisasjonsnummer-DW0DyDi9.js";import"./formatNumber-Davy0grG.js";import"./SlotComponent-BbL6_PCT.js";import"./mergeRefs-BoRUoAcc.js";import"./usePreviousValue-BOkjGPeC.js";import"./Loader-CE8d43RE.js";import"./useDelayedRender-DNujRAxT.js";const M=1,A=navigator?.language?navigator.language:"nb-NO",K=R();function R(o=navigator.language){const a=new Intl.DateTimeFormat(o,{month:"long"});return Array.from({length:12},(i,m)=>a.format(new Date(2e3,m,1)))}function z(o,a){const i=new Date,m=Number.isFinite(o)?o:i.getFullYear(),c=Number.isFinite(a)?a:i.getMonth(),b=new Date(m,c+1,0).getDate(),I=(new Date(m,c,1).getDay()-M+7)%7,p=[...Array(I).fill(null),...Array.from({length:b},(n,s)=>s+1)];for(;p.length%7!==0;)p.push(null);const f=[];for(let n=0;n<p.length;n+=7)f.push(p.slice(n,n+7));const u=new Intl.DateTimeFormat(A,{weekday:"long"});return{headers:Array.from({length:7},(n,s)=>{const g=new Date(2024,0,7+(M+s)%7);return u.format(g)}),weeks:f}}const v=o=>{const{value:a,defaultValue:i,className:m,onChange:c,name:b,noAccessory:F,disableBeforeDate:I,disableAfterDate:p,...f}=o,u=a??i,x=typeof u=="number"?new Date(u):u?new Date(u.toString()):new Date,[n,s]=h.useState({month:x.getMonth(),year:x.getFullYear()}),[g,S]=h.useState(x);h.useEffect(()=>{if(typeof a>"u")return;const t=typeof a=="number"?new Date(a):a?new Date(a.toString()):new Date;S(t),s({month:t.getMonth(),year:t.getFullYear()})},[a]);const{headers:L,weeks:E}=h.useMemo(()=>z(Number(n.year),Number(n.month)),[n]);return e.jsxs("fieldset",{className:Y("jkl-calendar-picker",m),"data-no-accessory":F,...f,children:[e.jsx("legend",{className:"jkl-sr-only",children:"Datovelger (kalender)"}),e.jsxs(d,{gap:"s",justifyContent:"space-between",className:"navigation",children:[e.jsx(w,{type:"button",icon:e.jsx(q,{}),variant:"ghost","aria-label":"Forrige måned",onClick:()=>s(({month:t,year:l})=>{const r=new Date(l,t-1,1);return{month:r.getMonth(),year:r.getFullYear()}})}),e.jsxs(d,{gap:"none",className:"dropdowns",children:[e.jsx("select",{"aria-label":"Velg måned",name:"month",value:n.month,onChange:t=>s({...n,month:Number(t.target.value)}),children:K.map((t,l)=>e.jsx("option",{value:l,children:t},t))}),e.jsxs("select",{"aria-label":"Velg år",name:"year",value:n.year,onChange:t=>s({...n,year:Number(t.target.value)}),children:[Array.from([2026,2025,2024]).map(t=>e.jsx("option",{value:t,children:t},t)),e.jsx(P,{})]})]}),e.jsx(w,{type:"button",icon:e.jsx(G,{}),variant:"ghost","aria-label":"Neste måned",onClick:()=>s(({month:t,year:l})=>{const r=new Date(l,t+1,1);return{month:r.getMonth(),year:r.getFullYear()}})})]}),e.jsxs("table",{className:"month",children:[e.jsx("caption",{className:"jkl-sr-only",children:"Kalender"}),e.jsx("thead",{className:"weekdays",children:e.jsx("tr",{children:L.map((t,l)=>e.jsx("th",{scope:"col",className:"weekday","aria-label":t,children:e.jsx(k,{bold:!0,children:t.charAt(0).toUpperCase()})},l))})}),e.jsx("tbody",{children:E.map((t,l)=>e.jsx("tr",{className:"week",children:t.map((r,H)=>e.jsx("td",{children:r?e.jsxs("label",{className:"day",children:[e.jsx("input",{type:"radio",name:b,disabled:!r,"aria-label":new Date(n.year,n.month,Number(r)).toLocaleDateString(A),value:new Date(n.year,n.month,Number(r)).toString(),checked:g.getDate()===Number(r)&&g.getMonth()===n.month&&g.getFullYear()===n.year,onChange:_=>{const C=new Date(n.year,n.month,Number(r));S(C),c?.(_,C)}}),e.jsx(k,{as:"span",short:!0,"aria-hidden":!0,children:r})]}):""},H))},`${t}-${l}`))})]})]})};v.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{noAccessory:{required:!1,tsType:{name:"boolean"},description:`Fjerner ramme-stilene så komponenten enklere kan brukes i andre elementer

@default false`},value:{required:!1,tsType:{name:"union",raw:'InputHTMLAttributes<HTMLInputElement>["value"] | Date',elements:[{name:'InputHTMLAttributes["value"]',raw:'InputHTMLAttributes<HTMLInputElement>["value"]'},{name:"Date"}]},description:`Dato, streng eller tall med gyldig dato.

@example new Date(2026, 7, 20)
@example "2026-7-20"
@example 20409545455

@default new Date()`},disableAfterDate:{required:!1,tsType:{name:"union",raw:'InputHTMLAttributes<HTMLInputElement>["value"] | Date',elements:[{name:'InputHTMLAttributes["value"]',raw:'InputHTMLAttributes<HTMLInputElement>["value"]'},{name:"Date"}]},description:`Siste valgbare dato

@default undefined`},disableBeforeDate:{required:!1,tsType:{name:"union",raw:'InputHTMLAttributes<HTMLInputElement>["value"] | Date',elements:[{name:'InputHTMLAttributes["value"]',raw:'InputHTMLAttributes<HTMLInputElement>["value"]'},{name:"Date"}]},description:`Første valgbare dato

@default undefined`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>, date: Date) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"},{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""}}};const{fn:U}=__STORYBOOK_MODULE_TEST__,Ee={title:"Komponenter/Calendar",component:v,args:{value:new Date(2025,2,22),onChange:U(),noAccessory:!1},argTypes:{value:{control:"date"}}},D={},y={render:o=>{const[a,i]=h.useState(new Date);return e.jsxs(d,{direction:"column",children:[e.jsx(N,{legend:"Velg dato for henting",description:"Du kan velge å få den utlevert mellom da og da",form:"test",children:e.jsx(v,{...o,value:a,onChange:(m,c)=>i(c)})}),e.jsxs("p",{children:["Du har valgt"," ",a.toLocaleDateString("no",{day:"2-digit",month:"long",year:"numeric"})]})]})}},j={render:o=>e.jsxs(d,{direction:"column",gap:"l",children:[e.jsxs("header",{children:[e.jsx(T,{size:"xl",children:"Skjematest"}),e.jsx(k,{children:"Dette er tenkt til å vise mulighetene med Calendar først og fremst."})]}),e.jsxs(d,{as:"form",direction:"column",gap:"l",children:[e.jsxs(d,{direction:"column",gap:"m",children:[e.jsx(T,{as:"h3",children:"Om mobilen"}),e.jsx(N,{legend:"Velg dato for henting",description:"Du kan velge å få den utlevert mellom da og da",form:"test",children:e.jsx(v,{...o})})]}),e.jsxs(d,{direction:"column",gap:"m",children:[e.jsx(T,{as:"h3",children:"Personalia"}),e.jsx($,{...V.args,form:"test"}),e.jsx(O,{...B.args,label:"Når er du født?",description:""})]}),e.jsx("footer",{children:e.jsx(w,{variant:"primary",children:"Send"})})]})]})};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:"{}",...D.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [dato, setDato] = useState(new Date());
    return <Flex direction="column">
                <FieldGroup legend="Velg dato for henting" description="Du kan velge å få den utlevert mellom da og da" form="test">
                    <Calendar {...args} value={dato} onChange={(_, date) => setDato(date)} />
                </FieldGroup>
                <p>
                    Du har valgt{" "}
                    {dato.toLocaleDateString("no", {
          day: "2-digit",
          month: "long",
          year: "numeric"
        })}
                </p>
            </Flex>;
  }
}`,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Flex direction="column" gap="l">
                <header>
                    <Title size="xl">Skjematest</Title>
                    <Text>
                        Dette er tenkt til å vise mulighetene med Calendar først
                        og fremst.
                    </Text>
                </header>
                <Flex as="form" direction="column" gap="l">
                    <Flex direction="column" gap="m">
                        <Title as="h3">Om mobilen</Title>
                        <FieldGroup legend="Velg dato for henting" description="Du kan velge å få den utlevert mellom da og da" form="test">
                            <Calendar {...args} />
                        </FieldGroup>
                    </Flex>
                    <Flex direction="column" gap="m">
                        <Title as="h3">Personalia</Title>
                        <TextInput {...TextInputStories.args} form="test" />
                        <DatePicker {...DatepickerStories.args} label="Når er du født?" description="" />
                    </Flex>
                    <footer>
                        <Button variant="primary">Send</Button>
                    </footer>
                </Flex>
            </Flex>;
  }
}`,...j.parameters?.docs?.source}}};const He=["CalendarStory","CalendarSomSkjemafelt","CalendarIFullverdigSkjema"];export{j as CalendarIFullverdigSkjema,y as CalendarSomSkjemafelt,D as CalendarStory,He as __namedExportsOrder,Ee as default};
