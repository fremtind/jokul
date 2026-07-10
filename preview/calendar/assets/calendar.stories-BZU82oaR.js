import{r as f,j as e}from"./iframe-J5P2if7y.js";import{D as L,m as O}from"./Datepicker.stories-DB3xwEn2.js";import H from"./TextInput.stories-7VRNycBu.js";import{c as V}from"./clsx-B-dksMZM.js";import{F as m}from"./Flex-EkEDpIrg.js";import{B as F}from"./Button-Cx2T-0mQ.js";import{A as Y,a as B}from"./ArrowRightIcon-BVHSKHfI.js";import{T as S}from"./Text-BZAt7pzI.js";import{T}from"./Title-B0JP7kN8.js";import{F as I}from"./FieldGroup-D4DX6W8K.js";import{T as G}from"./TextInput-Bjjeb6v1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-WgLmO_wy.js";import"./index-B3_mEpDq.js";import"./formatDate-hwqa_80k.js";import"./IconButton-Lmlu6n4v.js";import"./CalendarIcon-Cs2k3sck.js";import"./Icon-mdsbUTB8.js";import"./InputGroup-D5TnmHDh.js";import"./useId-kJvRUQxG.js";import"./Label-CsKMFG-v.js";import"./SupportLabel-BxrzwFfC.js";import"./SuccessIcon-EFls_PPQ.js";import"./WarningIcon-x-lCg_7k.js";import"./Popover-Ck1yqzD2.js";import"./floating-ui.react-MhcpGJ0F.js";import"./getThemeAndSize-CZAj3IXt.js";import"./BaseTextInput-znX6pVtB.js";import"./ChevronDownIcon-CP5Z9feb.js";/* empty css               */import"./unicode-DWvs0Pen.js";import"./formatOrganisasjonsnummer-DW0DyDi9.js";import"./formatNumber-Davy0grG.js";import"./SlotComponent-DaqFw01Y.js";import"./mergeRefs-DMUnnB7e.js";import"./usePreviousValue-Cs2hfHh_.js";import"./Loader-EnGfOLAr.js";import"./useDelayedRender-BvoNaKAS.js";const N=1,M=navigator?.language?navigator.language:"nb-NO",P=$();function $(o=navigator.language){const a=new Intl.DateTimeFormat(o,{month:"long"});return Array.from({length:12},(d,c)=>a.format(new Date(2e3,c,1)))}function q(o,a){const d=new Date,c=Number.isFinite(o)?o:d.getFullYear(),u=Number.isFinite(a)?a:d.getMonth(),v=new Date(c,u+1,0).getDate(),w=(new Date(c,u,1).getDay()-N+7)%7,l=[...Array(w).fill(null),...Array.from({length:v},(s,h)=>h+1)];for(;l.length%7!==0;)l.push(null);const p=[];for(let s=0;s<l.length;s+=7)p.push(l.slice(s,s+7));const n=new Intl.DateTimeFormat(M,{weekday:"long"});return{headers:Array.from({length:7},(s,h)=>{const b=new Date(2024,0,7+(N+h)%7);return n.format(b)}),weeks:p}}const D=o=>{const{value:a,defaultValue:d,className:c,onChange:u,name:v,noAccessory:k,...w}=o,l=a??d,p=typeof l=="number"?new Date(l):l?new Date(l.toString()):new Date,[n,g]=f.useState({month:p.getMonth(),year:p.getFullYear()}),[s,h]=f.useState(p);f.useEffect(()=>{if(typeof a>"u")return;const t=typeof a=="number"?new Date(a):a?new Date(a.toString()):new Date;h(t),g({month:t.getMonth(),year:t.getFullYear()})},[a]);const{headers:b,weeks:A}=f.useMemo(()=>q(Number(n.year),Number(n.month)),[n]);return e.jsxs("fieldset",{className:V("jkl-calendar",c),"data-no-accessory":k,...w,children:[e.jsx("legend",{className:"jkl-sr-only",children:"Datovelger (kalender)"}),e.jsxs(m,{gap:"s",justifyContent:"space-between",className:"navigation",children:[e.jsxs(m,{gap:"none",className:"dropdowns",children:[e.jsx("select",{"aria-label":"Velg måned",name:"month",value:n.month,onChange:t=>g({...n,month:Number(t.target.value)}),children:P.map((t,i)=>e.jsx("option",{value:i,children:t},t))}),e.jsx("select",{"aria-label":"Velg år",name:"year",value:n.year,onChange:t=>g({...n,year:Number(t.target.value)}),children:Array.from([2026,2025,2024]).map(t=>e.jsx("option",{value:t,children:t},t))})]}),e.jsxs(m,{gap:"none",className:"buttons",children:[e.jsx(F,{type:"button",icon:e.jsx(Y,{}),variant:"ghost","aria-label":"Forrige måned",onClick:()=>g(({month:t,year:i})=>{const r=new Date(i,t-1,1);return{month:r.getMonth(),year:r.getFullYear()}})}),e.jsx(F,{type:"button",icon:e.jsx(B,{}),variant:"ghost","aria-label":"Neste måned",onClick:()=>g(({month:t,year:i})=>{const r=new Date(i,t+1,1);return{month:r.getMonth(),year:r.getFullYear()}})})]})]}),e.jsxs("table",{className:"month",children:[e.jsx("caption",{className:"jkl-sr-only",children:"Kalender"}),e.jsx("thead",{className:"weekdays",children:e.jsx("tr",{children:b.map((t,i)=>e.jsx("th",{scope:"col",className:"weekday","aria-label":t,children:e.jsx(S,{bold:!0,children:t.charAt(0).toUpperCase()})},i))})}),e.jsx("tbody",{children:A.map((t,i)=>e.jsx("tr",{className:"week",children:t.map((r,_)=>e.jsx("td",{children:r?e.jsxs("label",{className:"day",children:[e.jsx("input",{type:"radio",name:v,disabled:!r,"aria-label":new Date(n.year,n.month,Number(r)).toLocaleDateString(M),value:new Date(n.year,n.month,Number(r)).toString(),checked:s.getDate()===Number(r)&&s.getMonth()===n.month&&s.getFullYear()===n.year,onChange:E=>{const C=new Date(n.year,n.month,Number(r));h(C),u?.(E,C)}}),e.jsx(S,{as:"span","aria-hidden":!0,children:r})]}):""},_))},`${t}-${i}`))})]})]})};D.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{noAccessory:{required:!1,tsType:{name:"boolean"},description:`Fjerner bakgrunnsfarge og padding

@default false`},value:{required:!1,tsType:{name:"union",raw:'InputHTMLAttributes<HTMLInputElement>["value"] | Date',elements:[{name:'InputHTMLAttributes["value"]',raw:'InputHTMLAttributes<HTMLInputElement>["value"]'},{name:"Date"}]},description:`Dato, streng eller tall med gyldig dato.

@example new Date(2026, 7, 20)
@example "2026-7-20"
@example 20409545455

@default new Date()`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>, date: Date) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"},{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""}}};const{fn:K}=__STORYBOOK_MODULE_TEST__,Ie={title:"Komponenter/Calendar",component:D,args:{value:new Date(2025,2,22),onChange:K(),noAccessory:!1},argTypes:{value:{control:"date"}}},x={},j={render:o=>{const[a,d]=f.useState(new Date);return e.jsxs(m,{direction:"column",children:[e.jsx(I,{legend:"Velg dato for henting",description:"Du kan velge å få den utlevert mellom da og da",form:"test",children:e.jsx(D,{...o,value:a,onChange:(c,u)=>d(u)})}),e.jsxs("p",{children:["Du har valgt"," ",a.toLocaleDateString("no",{day:"2-digit",month:"long",year:"numeric"})]})]})}},y={render:o=>e.jsxs(m,{direction:"column",gap:"l",children:[e.jsxs("header",{children:[e.jsx(T,{size:"xl",children:"Skjematest"}),e.jsx(S,{children:"Dette er tenkt til å vise mulighetene med Calendar først og fremst."})]}),e.jsxs(m,{as:"form",direction:"column",gap:"l",children:[e.jsxs(m,{direction:"column",gap:"m",children:[e.jsx(T,{as:"h3",children:"Om mobilen"}),e.jsx(I,{legend:"Velg dato for henting",description:"Du kan velge å få den utlevert mellom da og da",form:"test",children:e.jsx(D,{...o})})]}),e.jsxs(m,{direction:"column",gap:"m",children:[e.jsx(T,{as:"h3",children:"Personalia"}),e.jsx(G,{...H.args,form:"test"}),e.jsx(L,{...O.args,label:"Når er du født?",description:""})]}),e.jsx("footer",{children:e.jsx(F,{variant:"primary",children:"Send"})})]})]})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"{}",...x.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const Me=["CalendarStory","CalendarSomSkjemafelt","CalendarIFullverdigSkjema"];export{y as CalendarIFullverdigSkjema,j as CalendarSomSkjemafelt,x as CalendarStory,Me as __namedExportsOrder,Ie as default};
