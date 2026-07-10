import{r as x,j as e}from"./iframe-n3WU9YTo.js";import{D as L,m as A}from"./Datepicker.stories-CNJEgW30.js";import O from"./TextInput.stories--83qZhoE.js";import{c as H}from"./clsx-B-dksMZM.js";import{F as m}from"./Flex-Br0X1vD8.js";import{B as F}from"./Button-Dt9-Q05T.js";import{A as V,a as Y}from"./ArrowRightIcon-CpKYHr8-.js";import{T as S}from"./Text-pF0Jv-15.js";import{T}from"./Title-hgP9LAUG.js";import{F as I}from"./FieldGroup-BWpoB2qY.js";import{T as B}from"./TextInput-DsH6jtHI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cv5JQkNk.js";import"./index-WKJJveB_.js";import"./formatDate-hwqa_80k.js";import"./IconButton-CnGzzcbL.js";import"./CalendarIcon-ZnKzWCAY.js";import"./Icon-DWsfwSZE.js";import"./InputGroup-BjRyqZQO.js";import"./useId-FCti06Xf.js";import"./Label-g48--br5.js";import"./SupportLabel-Bj2MnU_U.js";import"./SuccessIcon-DhXgjBcY.js";import"./WarningIcon-D1xzeNKK.js";import"./Popover-Cgs9VYWX.js";import"./floating-ui.react-CICE3VHg.js";import"./getThemeAndSize-CZAj3IXt.js";import"./BaseTextInput-DqvRSpfT.js";import"./ChevronDownIcon-CKK27DD0.js";/* empty css               */import"./unicode-DWvs0Pen.js";import"./formatOrganisasjonsnummer-DW0DyDi9.js";import"./formatNumber-Davy0grG.js";import"./SlotComponent-CBDJ9Nng.js";import"./mergeRefs-C6-a-08k.js";import"./usePreviousValue-DNbAkWMi.js";import"./Loader-C8esYlIr.js";import"./useDelayedRender-D1SM454M.js";const N=1,M=navigator?.language?navigator.language:"nb-NO",G=P();function P(o=navigator.language){const a=new Intl.DateTimeFormat(o,{month:"long"});return Array.from({length:12},(d,c)=>a.format(new Date(2e3,c,1)))}function $(o,a){const d=new Date,c=Number.isFinite(o)?o:d.getFullYear(),p=Number.isFinite(a)?a:d.getMonth(),w=new Date(c,p+1,0).getDate(),g=(new Date(c,p,1).getDay()-N+7)%7,i=[...Array(g).fill(null),...Array.from({length:w},(s,h)=>h+1)];for(;i.length%7!==0;)i.push(null);const n=[];for(let s=0;s<i.length;s+=7)n.push(i.slice(s,s+7));const u=new Intl.DateTimeFormat(M,{weekday:"long"});return{headers:Array.from({length:7},(s,h)=>{const b=new Date(2024,0,7+(N+h)%7);return u.format(b)}),weeks:n}}const v=o=>{const{value:a,defaultValue:d,className:c,onChange:p,name:w,...C}=o,g=a??d,i=typeof g=="number"?new Date(g):g?new Date(g.toString()):new Date,[n,u]=x.useState({month:i.getMonth(),year:i.getFullYear()}),[f,s]=x.useState(i);x.useEffect(()=>{if(typeof a>"u")return;const t=typeof a=="number"?new Date(a):a?new Date(a.toString()):new Date;s(t),u({month:t.getMonth(),year:t.getFullYear()})},[a]);const{headers:h,weeks:b}=x.useMemo(()=>$(Number(n.year),Number(n.month)),[n]);return e.jsxs("fieldset",{className:H("jkl-calendar",c),...C,children:[e.jsx("legend",{className:"jkl-sr-only",children:"Datovelger (kalender)"}),e.jsxs(m,{gap:"s",justifyContent:"space-between",className:"navigation",children:[e.jsxs(m,{gap:"none",className:"dropdowns",children:[e.jsx("select",{"aria-label":"Velg måned",name:"month",value:n.month,onChange:t=>u({...n,month:Number(t.target.value)}),children:G.map((t,l)=>e.jsx("option",{value:l,children:t},t))}),e.jsx("select",{"aria-label":"Velg år",name:"year",value:n.year,onChange:t=>u({...n,year:Number(t.target.value)}),children:Array.from([2026,2025,2024]).map(t=>e.jsx("option",{value:t,children:t},t))})]}),e.jsxs(m,{gap:"none",className:"buttons",children:[e.jsx(F,{type:"button",icon:e.jsx(V,{}),variant:"ghost","aria-label":"Forrige måned",onClick:()=>u(({month:t,year:l})=>{const r=new Date(l,t-1,1);return{month:r.getMonth(),year:r.getFullYear()}})}),e.jsx(F,{type:"button",icon:e.jsx(Y,{}),variant:"ghost","aria-label":"Neste måned",onClick:()=>u(({month:t,year:l})=>{const r=new Date(l,t+1,1);return{month:r.getMonth(),year:r.getFullYear()}})})]})]}),e.jsxs("table",{className:"month",children:[e.jsx("caption",{className:"jkl-sr-only",children:"Kalender"}),e.jsx("thead",{className:"weekdays",children:e.jsx("tr",{children:h.map((t,l)=>e.jsx("th",{scope:"col",className:"weekday","aria-label":t,children:e.jsx(S,{bold:!0,children:t.charAt(0).toUpperCase()})},l))})}),e.jsx("tbody",{children:b.map((t,l)=>e.jsx("tr",{className:"week",children:t.map((r,_)=>e.jsx("td",{children:r?e.jsxs("label",{className:"day",children:[e.jsx("input",{type:"radio",name:w,disabled:!r,"aria-label":new Date(n.year,n.month,Number(r)).toLocaleDateString(M),value:new Date(n.year,n.month,Number(r)).toString(),checked:f.getDate()===Number(r)&&f.getMonth()===n.month&&f.getFullYear()===n.year,onChange:E=>{const k=new Date(n.year,n.month,Number(r));s(k),p?.(E,k)}}),e.jsx(S,{as:"span","aria-hidden":!0,children:r})]}):""},_))},`${t}-${l}`))})]})]})};v.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{value:{required:!1,tsType:{name:"union",raw:'InputHTMLAttributes<HTMLInputElement>["value"] | Date',elements:[{name:'InputHTMLAttributes["value"]',raw:'InputHTMLAttributes<HTMLInputElement>["value"]'},{name:"Date"}]},description:`Dato, streng eller tall med gyldig dato.

@example new Date(2026, 7, 20)
@example "2026-7-20"
@example 20409545455

@default new Date()`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>, date: Date) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"},{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""}}};const{fn:K}=__STORYBOOK_MODULE_TEST__,Ne={title:"Komponenter/Calendar",component:v,args:{value:new Date(2025,2,22),onChange:K()},argTypes:{value:{control:"date"}}},D={},j={render:o=>{const[a,d]=x.useState(new Date);return e.jsxs(m,{direction:"column",children:[e.jsx(I,{legend:"Velg dato for henting",description:"Du kan velge å få den utlevert mellom da og da",form:"test",children:e.jsx(v,{...o,value:a,onChange:(c,p)=>d(p)})}),e.jsxs("p",{children:["Du har valgt"," ",a.toLocaleDateString("no",{day:"2-digit",month:"long",year:"numeric"})]})]})}},y={render:o=>e.jsxs(m,{direction:"column",gap:"l",children:[e.jsxs("header",{children:[e.jsx(T,{size:"xl",children:"Skjematest"}),e.jsx(S,{children:"Dette er tenkt til å vise mulighetene med Calendar først og fremst."})]}),e.jsxs(m,{as:"form",direction:"column",gap:"l",children:[e.jsxs(m,{direction:"column",gap:"m",children:[e.jsx(T,{as:"h3",children:"Om mobilen"}),e.jsx(I,{legend:"Velg dato for henting",description:"Du kan velge å få den utlevert mellom da og da",form:"test",children:e.jsx(v,{...o})})]}),e.jsxs(m,{direction:"column",gap:"m",children:[e.jsx(T,{as:"h3",children:"Personalia"}),e.jsx(B,{...O.args,form:"test"}),e.jsx(L,{...A.args,label:"Når er du født?",description:""})]}),e.jsx("footer",{children:e.jsx(F,{variant:"primary",children:"Send"})})]})]})};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:"{}",...D.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const Ie=["CalendarStory","CalendarSomSkjemafelt","CalendarIFullverdigSkjema"];export{y as CalendarIFullverdigSkjema,j as CalendarSomSkjemafelt,D as CalendarStory,Ie as __namedExportsOrder,Ne as default};
