import{r as x,j as e}from"./iframe-Nbyvhc3l.js";import{D as A,m as L}from"./Datepicker.stories-DyLQ-0Qm.js";import V from"./TextInput.stories-C7KXOM37.js";import{c as Y}from"./clsx-B-dksMZM.js";import{F as m}from"./Flex-BsMTSZUb.js";import{B as F}from"./Button-CPTzXY_-.js";import{A as B,a as G}from"./ArrowRightIcon-CHNqpeAM.js";import{T as k}from"./Text-CCxV_zNi.js";import{T as S}from"./Title-D1wfyoP0.js";import{F as M}from"./FieldGroup-CxDVoz-c.js";import{T as P}from"./TextInput-BhYMjR8m.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BCUYpAlk.js";import"./index-L9PIaMNp.js";import"./formatDate-hwqa_80k.js";import"./IconButton-Cr2NWfM3.js";import"./CalendarIcon-CyijtGY-.js";import"./Icon-QhbqWo3M.js";import"./InputGroup-DRtbVDl_.js";import"./useId-CnwsCTHN.js";import"./Label-DcO4daEm.js";import"./SupportLabel-CxN7zWFO.js";import"./SuccessIcon-Cp-3Orh2.js";import"./WarningIcon-4n_dwfv2.js";import"./Popover-D1TJfSTh.js";import"./floating-ui.react-DMZs-Td8.js";import"./getThemeAndSize-CZAj3IXt.js";import"./BaseTextInput-DB0o9LN3.js";import"./ChevronDownIcon-CiNsoooU.js";/* empty css               */import"./unicode-DWvs0Pen.js";import"./formatOrganisasjonsnummer-DW0DyDi9.js";import"./formatNumber-Davy0grG.js";import"./SlotComponent-CE_RbTfZ.js";import"./mergeRefs-CM-XL6lL.js";import"./usePreviousValue-2mt8iZo_.js";import"./Loader-BkO9M8dE.js";import"./useDelayedRender-B_YjZH0H.js";const T=1,_="nb-NO",I=["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"];function $(l,a){const c=new Date,g=Number.isFinite(l)?l:c.getFullYear(),p=Number.isFinite(a)?a:c.getMonth(),w=new Date(g,p+1,0).getDate(),u=(new Date(g,p,1).getDay()-T+7)%7,i=[...Array(u).fill(null),...Array.from({length:w},(o,h)=>h+1)];for(;i.length%7!==0;)i.push(null);const n=[];for(let o=0;o<i.length;o+=7)n.push(i.slice(o,o+7));const d=new Intl.DateTimeFormat(_,{weekday:"narrow"});return{headers:Array.from({length:7},(o,h)=>{const b=new Date(2024,0,7+(T+h)%7);return d.format(b)}),weeks:n}}const v=l=>{const{value:a,defaultValue:c,className:g,onChange:p,id:w,...C}=l,u=a??c,i=typeof u=="number"?new Date(u):u?new Date(u.toString()):new Date,[n,d]=x.useState({month:i.getMonth(),year:i.getFullYear()}),[f,o]=x.useState(i);x.useEffect(()=>{if(typeof a>"u")return;const t=typeof a=="number"?new Date(a):a?new Date(a.toString()):new Date;o(t),d({month:t.getMonth(),year:t.getFullYear()})},[a]);const{headers:h,weeks:b}=x.useMemo(()=>$(Number(n.year),Number(n.month)),[n]);return e.jsxs("fieldset",{className:Y("jkl-calendar",g),id:w,...C,children:[e.jsx("legend",{className:"jkl-sr-only",children:"Velg dato"}),e.jsxs(m,{gap:"s",justifyContent:"space-between",className:"navigation",children:[e.jsxs(m,{gap:"none",className:"dropdowns",children:[e.jsx("select",{"aria-label":"Velg måned",name:"month",value:n.month,onChange:t=>d({...n,month:Number(t.target.value)}),children:I.map((t,s)=>e.jsx("option",{value:s,children:t},t))}),e.jsx("select",{"aria-label":"Velg år",name:"year",value:n.year,onChange:t=>d({...n,year:Number(t.target.value)}),children:Array.from([2026,2025,2024]).map(t=>e.jsx("option",{value:t,children:t},t))})]}),e.jsxs(m,{gap:"none",className:"buttons",children:[e.jsx(F,{type:"button",icon:e.jsx(B,{}),variant:"ghost","aria-label":"Forrige måned",onClick:()=>d(({month:t,year:s})=>{const r=new Date(s,t-1,1);return{month:r.getMonth(),year:r.getFullYear()}})}),e.jsx(F,{type:"button",icon:e.jsx(G,{}),variant:"ghost","aria-label":"Neste måned",onClick:()=>d(({month:t,year:s})=>{const r=new Date(s,t+1,1);return{month:r.getMonth(),year:r.getFullYear()}})})]})]}),e.jsxs("table",{className:"month",children:[e.jsxs("caption",{className:"jkl-sr-only",children:[I[n.month],", ",n.year]}),e.jsx("thead",{className:"weekdays",children:e.jsx("tr",{children:h.map((t,s)=>e.jsx("th",{scope:"col",className:"weekday",children:e.jsx(k,{bold:!0,children:t})},s))})}),e.jsx("tbody",{children:b.map((t,s)=>e.jsx("tr",{className:"week",children:t.map((r,E)=>e.jsx("td",{children:r?e.jsxs("label",{className:"day",children:[e.jsx("input",{name:"dato",type:"radio",disabled:!r,"aria-label":new Date(n.year,n.month,Number(r)).toLocaleDateString(_),value:new Date(n.year,n.month,Number(r)).toString(),checked:f.getDate()===Number(r)&&f.getMonth()===n.month&&f.getFullYear()===n.year,onChange:O=>{const N=new Date(n.year,n.month,Number(r));o(N),p?.(O,N)}}),e.jsx(k,{as:"span",children:r})]}):""},E))},`${t}-${s}`))})]})]})};v.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{value:{required:!1,tsType:{name:"union",raw:"Date | string",elements:[{name:"Date"},{name:"string"}]},description:`Dato eller ISO-string med dato.

@example new Date(2026, 7, 20)
@example "2026-07-20"
@default new Date()`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>, date: Date) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"},{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""}}};const{fn:H}=__STORYBOOK_MODULE_TEST__,Ne={title:"Komponenter/Calendar",component:v,args:{value:new Date(2025,2,22),onChange:H()},argTypes:{value:{control:"date"}}},j={},D={render:l=>{const[a,c]=x.useState(new Date);return e.jsxs(m,{direction:"column",children:[e.jsx(M,{legend:"Velg dato for henting",description:"Du kan velge å få den utlevert mellom da og da",children:e.jsx(v,{...l,value:a,onChange:(g,p)=>c(p)})}),e.jsxs("p",{children:["Du har valgt"," ",a.toLocaleDateString("no",{day:"2-digit",month:"long",year:"numeric"})]})]})}},y={render:l=>e.jsxs(m,{direction:"column",gap:"l",children:[e.jsxs("header",{children:[e.jsx(S,{size:"xl",children:"Skjematest"}),e.jsx(k,{children:"Dette er tenkt til å vise mulighetene med Calendar først og fremst."})]}),e.jsxs(m,{as:"form",direction:"column",gap:"l",children:[e.jsxs(m,{direction:"column",gap:"m",children:[e.jsx(S,{as:"h3",children:"Om mobilen"}),e.jsx(M,{legend:"Velg dato for henting",description:"Du kan velge å få den utlevert mellom da og da",children:e.jsx(v,{...l,form:"test"})})]}),e.jsxs(m,{direction:"column",gap:"m",children:[e.jsx(S,{as:"h3",children:"Personalia"}),e.jsx(P,{...V.args,form:"test"}),e.jsx(A,{...L.args,label:"Når er du født?",description:""})]}),e.jsx("footer",{children:e.jsx(F,{variant:"primary",children:"Send"})})]})]})};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"{}",...j.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [dato, setDato] = useState(new Date());
    return <Flex direction="column">
                <FieldGroup legend="Velg dato for henting" description="Du kan velge å få den utlevert mellom da og da">
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
}`,...D.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
                        <FieldGroup legend="Velg dato for henting" description="Du kan velge å få den utlevert mellom da og da">
                            <Calendar {...args} form="test" />
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
}`,...y.parameters?.docs?.source}}};const Te=["CalendarStory","CalendarSomSkjemafelt","CalendarIFullverdigSkjema"];export{y as CalendarIFullverdigSkjema,D as CalendarSomSkjemafelt,j as CalendarStory,Te as __namedExportsOrder,Ne as default};
